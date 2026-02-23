/**
 * scripts/import-to-hygraph.mjs
 *
 * Idempotent import: reads messages/en.json + messages/de.json and creates
 * Content entries in Hygraph for every translation key that does not yet
 * exist there. Existing keys are skipped (never overwritten).
 *
 * Safe to re-run: checks existing keys upfront → only missing ones are created.
 * Rate-limit safe: one request at a time, 400 ms between each, up to 3 retries
 * with exponential backoff (2 s → 4 s → 8 s).
 *
 * Usage:
 *   node scripts/import-to-hygraph.mjs              – create DRAFT entries
 *   node scripts/import-to-hygraph.mjs --dry-run    – preview, no writes
 *   node scripts/import-to-hygraph.mjs --publish    – create + publish
 *   node scripts/import-to-hygraph.mjs --update     – also update existing entries
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { GraphQLClient, gql } from 'graphql-request';

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  const lines = readFileSync(resolve(ROOT, '.env.local'), 'utf-8').split('\n');
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
}
loadEnv();

const TOKEN    = process.env.GRAPHQL_TOKEN;
const ENDPOINT = process.env.GRAPHQL_CONTENT_API;
const DRY_RUN  = process.argv.includes('--dry-run');
const PUBLISH  = process.argv.includes('--publish');
const UPDATE   = process.argv.includes('--update');

// Delay between individual requests (ms)
const REQUEST_DELAY_MS = 400;
// Retry delays on failure (ms) – exponential backoff
const RETRY_DELAYS = [2000, 4000, 8000];

if (!TOKEN || !ENDPOINT) {
  console.error('❌  GRAPHQL_TOKEN or GRAPHQL_CONTENT_API not set.');
  process.exit(1);
}

const client = new GraphQLClient(ENDPOINT, {
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function readJson(filePath) {
  const { $schema: _skip, ...rest } = JSON.parse(readFileSync(filePath, 'utf-8'));
  return rest;
}

function inferCategory(key) {
  if (key.startsWith('navigation_')) return 'navigation';
  if (key.includes('_quote_'))      return 'quotes';
  return 'contentBlock';
}

/** Retry an async fn up to RETRY_DELAYS.length times with exponential backoff. */
async function withRetry(label, fn) {
  let lastError;
  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt < RETRY_DELAYS.length) {
        const delay = RETRY_DELAYS[attempt];
        const msg = err.response?.errors?.[0]?.message ?? err.message;
        console.warn(`    ↻ retry ${attempt + 1}/${RETRY_DELAYS.length} for "${label}" in ${delay / 1000}s  (${msg})`);
        await sleep(delay);
      }
    }
  }
  throw lastError;
}

// ---------------------------------------------------------------------------
// GraphQL mutations
// ---------------------------------------------------------------------------

const CREATE_MUTATION = gql`
  mutation CreateContent($data: ContentCreateInput!) {
    createContent(data: $data) {
      id
      translationKey
    }
  }
`;

const UPDATE_MUTATION = gql`
  mutation UpdateContent($id: ID!, $enSnippet: String!, $deSnippet: String) {
    updateContent(
      where: { id: $id }
      data: {
        snippet: $enSnippet
        localizations: {
          upsert: [{ where: { locale: de_DE }, data: { snippet: $deSnippet } }]
        }
      }
    ) {
      id
      translationKey
    }
  }
`;

const PUBLISH_MUTATION = gql`
  mutation PublishContent($id: ID!) {
    publishContent(where: { id: $id }, to: PUBLISHED) {
      id
      stage
    }
  }
`;

async function createEntry(key, enVal, deVal, category) {
  const data = {
    name:                   key,
    translationKey:         key,
    snippet:                enVal,
    contentSnippetCategory: category,
    ...(deVal != null && {
      localizations: {
        create: [{ locale: 'de_DE', data: { snippet: deVal } }]
      }
    })
  };
  const result = await client.request(CREATE_MUTATION, { data });
  return result.createContent.id;
}

async function updateEntry(id, enVal, deVal) {
  const result = await client.request(UPDATE_MUTATION, {
    id,
    enSnippet: enVal,
    deSnippet: deVal ?? ''
  });
  return result.updateContent.id;
}

async function publishEntry(id) {
  await client.request(PUBLISH_MUTATION, { id });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\n🚀  Hygraph import\n    mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}  |  publish: ${PUBLISH}  |  update existing: ${UPDATE}\n`);

  const enJson  = readJson(resolve(ROOT, 'messages/en.json'));
  const deJson  = readJson(resolve(ROOT, 'messages/de.json'));
  const allKeys = Object.keys(enJson);

  console.log(`📂  ${allKeys.length} keys in en.json`);

  // Fetch existing entries: { translationKey → id }
  const existingQuery = gql`
    { contents(first: 2000, stage: DRAFT) { id translationKey } }
  `;
  const { contents } = await client.request(existingQuery);
  const existing = new Map(
    contents
      .filter(c => c.translationKey)
      .map(c => [c.translationKey, c.id])
  );
  console.log(`☁️   ${existing.size} keys already in Hygraph\n`);

  const toCreate = allKeys.filter(k => !existing.has(k));
  const toUpdate = UPDATE ? allKeys.filter(k => existing.has(k)) : [];

  console.log(`➕  ${toCreate.length} to create`);
  if (UPDATE) console.log(`✏️   ${toUpdate.length} to update`);
  console.log();

  let created = 0, updated = 0, published = 0, failed = 0;

  // --- CREATE missing entries ---
  for (const key of toCreate) {
    const enVal = enJson[key] ?? '';
    const deVal = deJson[key] ?? null;
    const cat   = inferCategory(key);

    if (DRY_RUN) {
      console.log(`  [dry-create] ${key}  (${cat})`);
      created++;
      continue;
    }

    try {
      const id = await withRetry(key, () => createEntry(key, enVal, deVal, cat));
      process.stdout.write(`  ✓ created  ${key}  → ${id}`);

      if (PUBLISH) {
        await withRetry(`publish:${key}`, () => publishEntry(id));
        process.stdout.write('  📢');
        published++;
      }
      console.log();
      created++;
    } catch (err) {
      const msg = err.response?.errors?.[0]?.message ?? err.message;
      console.error(`  ✗ FAILED   ${key}  →  ${msg}`);
      failed++;
    }

    await sleep(REQUEST_DELAY_MS);
  }

  // --- UPDATE existing entries (only with --update) ---
  for (const key of toUpdate) {
    const id    = existing.get(key);
    const enVal = enJson[key] ?? '';
    const deVal = deJson[key] ?? null;

    if (DRY_RUN) {
      console.log(`  [dry-update] ${key}  (id: ${id})`);
      updated++;
      continue;
    }

    try {
      await withRetry(key, () => updateEntry(id, enVal, deVal));
      process.stdout.write(`  ✓ updated  ${key}`);

      if (PUBLISH) {
        await withRetry(`publish:${key}`, () => publishEntry(id));
        process.stdout.write('  📢');
        published++;
      }
      console.log();
      updated++;
    } catch (err) {
      const msg = err.response?.errors?.[0]?.message ?? err.message;
      console.error(`  ✗ FAILED   ${key}  →  ${msg}`);
      failed++;
    }

    await sleep(REQUEST_DELAY_MS);
  }

  // --- Summary ---
  console.log(`\n${'─'.repeat(45)}`);
  if (created)   console.log(`  Created   : ${created}`);
  if (updated)   console.log(`  Updated   : ${updated}`);
  if (published) console.log(`  Published : ${published}`);
  if (failed)    console.log(`  Failed    : ${failed}  ← re-run to retry`);

  if (!PUBLISH && !DRY_RUN && (created + updated) > 0) {
    console.log(`\n  ℹ️  Entries are in DRAFT stage.`);
    console.log(`  Run with --publish to auto-publish, or use Hygraph UI.`);
  }
  console.log(`${'─'.repeat(45)}\n`);
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
