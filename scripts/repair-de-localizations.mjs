/**
 * scripts/repair-de-localizations.mjs
 *
 * Finds all Hygraph Content entries that are missing a de_DE localization
 * and adds it from messages/de.json.
 *
 * Why this is needed:
 *   The initial import may have failed mid-way for some entries, leaving them
 *   with English content only. This script is idempotent: re-running it is safe.
 *
 * Usage:
 *   node scripts/repair-de-localizations.mjs
 *   node scripts/repair-de-localizations.mjs --dry-run    (preview only)
 *   node scripts/repair-de-localizations.mjs --publish    (add + publish)
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { GraphQLClient, gql } from 'graphql-request';

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

if (!TOKEN || !ENDPOINT) {
  console.error('❌  GRAPHQL_TOKEN or GRAPHQL_CONTENT_API not set.');
  process.exit(1);
}

const client = new GraphQLClient(ENDPOINT, {
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }
});

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function withRetry(label, fn, delays = [2000, 4000, 8000]) {
  let lastError;
  for (let i = 0; i <= delays.length; i++) {
    try { return await fn(); } catch (err) {
      lastError = err;
      if (i < delays.length) {
        console.warn(`    ↻ retry ${i+1}/${delays.length} for "${label}" in ${delays[i]/1000}s`);
        await sleep(delays[i]);
      }
    }
  }
  throw lastError;
}

// ---------------------------------------------------------------------------
// Step 1: Find entries with EN but no de_DE
// ---------------------------------------------------------------------------

async function findMissingDe() {
  // Request BOTH locales in a single query so each entry shows its actual locale.
  // When de_DE doesn't exist Hygraph falls back to "en" – so if locale === "en"
  // in a de_DE-requested result, the entry genuinely has no German content.
  // Two separate requests: one per locale, so we get the actual locale field back
  const enQuery = gql`
    { contents(first: 2000, stage: DRAFT, locales: [en])    { id translationKey locale } }
  `;
  const deQuery = gql`
    { contents(first: 2000, stage: DRAFT, locales: [de_DE]) { id translationKey locale } }
  `;

  const [enData, deData] = await Promise.all([
    client.request(enQuery),
    client.request(deQuery)
  ]);

  // Build a Set of translationKeys that have an ACTUAL de_DE localization.
  // When Hygraph falls back to EN, the item is returned with locale "en" →
  // filtering for locale === "de_DE" gives only items with real German content.
  const actualDeKeys = new Set(
    deData.contents
      .filter(c => c.translationKey && c.locale === 'de_DE')
      .map(c => c.translationKey)
  );

  // Return EN entries whose key has no real de_DE counterpart
  return enData.contents
    .filter(c => c.translationKey && !actualDeKeys.has(c.translationKey));
}

// ---------------------------------------------------------------------------
// Step 2: Add de_DE localization
//   Uses upsert: creates if not exists, updates if exists
// ---------------------------------------------------------------------------

const UPSERT_DE_MUTATION = gql`
  mutation AddDeLocalization($id: ID!, $snippet: String!) {
    updateContent(
      where: { id: $id }
      data: {
        localizations: {
          upsert: [{
            locale: de_DE
            update: { snippet: $snippet }
            create: { snippet: $snippet }
          }]
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

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\n🔧  Repair missing de_DE localizations – ${DRY_RUN ? 'DRY RUN' : 'LIVE'}${PUBLISH ? ' + auto-publish' : ''}\n`);

  const { $schema: _skip, ...deJson } = JSON.parse(
    readFileSync(resolve(ROOT, 'messages/de.json'), 'utf-8')
  );

  console.log('Fetching entries missing de_DE...');
  const missing = await findMissingDe();

  console.log(`\n⚠️  ${missing.length} entries have no de_DE localization\n`);

  if (missing.length === 0) {
    console.log('✅  All entries already have a de_DE localization.');
    return;
  }

  let fixed = 0, skipped = 0, failed = 0;

  for (const entry of missing) {
    const { id, translationKey } = entry;
    const deValue = deJson[translationKey];

    if (!deValue) {
      console.log(`  ⊘ skip  ${translationKey}  (no value in de.json)`);
      skipped++;
      continue;
    }

    if (DRY_RUN) {
      console.log(`  [dry] ${translationKey}  →  "${deValue.slice(0, 60)}${deValue.length > 60 ? '…' : ''}"`);
      fixed++;
      continue;
    }

    try {
      await withRetry(translationKey, () =>
        client.request(UPSERT_DE_MUTATION, { id, snippet: deValue })
      );
      process.stdout.write(`  ✓ fixed  ${translationKey}`);

      if (PUBLISH) {
        await withRetry(`publish:${translationKey}`, () =>
          client.request(PUBLISH_MUTATION, { id })
        );
        process.stdout.write('  📢');
      }
      console.log();
      fixed++;
    } catch (err) {
      const msg = err.response?.errors?.[0]?.message ?? err.message;
      console.error(`  ✗ FAILED ${translationKey}  →  ${msg}`);
      failed++;
    }

    await sleep(400);
  }

  console.log(`\n${'─'.repeat(45)}`);
  console.log(`  Fixed   : ${fixed}`);
  if (skipped) console.log(`  Skipped : ${skipped}  (no de.json value)`);
  if (failed)  console.log(`  Failed  : ${failed}  ← re-run to retry`);
  if (!PUBLISH && !DRY_RUN && fixed > 0) {
    console.log(`\n  ℹ️  Entries are in DRAFT stage.`);
    console.log(`  Run with --publish, or publish via Hygraph UI.`);
  }
  console.log(`${'─'.repeat(45)}\n`);
}

main().catch(err => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
