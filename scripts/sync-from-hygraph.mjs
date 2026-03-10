/**
 * scripts/sync-from-hygraph.mjs
 *
 * Fetches all PUBLISHED content from Hygraph and merges it into the
 * local messages/en.json and messages/de.json files.
 *
 * Hygraph takes precedence; local JSON fills every key not yet in Hygraph.
 *
 * Usage:
 *   node scripts/sync-from-hygraph.mjs              – sync (fails on error)
 *   node scripts/sync-from-hygraph.mjs --no-fail    – sync, exit 0 even on error
 *
 * Typically called as a pre-build step:
 *   "prebuild": "node scripts/sync-from-hygraph.mjs"
 *   "dev":      "node scripts/sync-from-hygraph.mjs --no-fail && vite dev"
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { GraphQLClient, gql } from 'graphql-request';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, '..');

// Load .env.local (optional – on CI/Netlify variables are injected directly)
function loadEnv() {
  const envPath = resolve(ROOT, '.env.local');
  try {
    const lines = readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const [key, ...rest] = line.split('=');
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
    }
  } catch {
    // .env.local not present – rely on environment variables already being set
  }
}
loadEnv();

const TOKEN    = process.env.GRAPHQL_TOKEN;
const ENDPOINT = process.env.GRAPHQL_CONTENT_API;
const NO_FAIL  = process.argv.includes('--no-fail');

function exitWithError(msg) {
  console.error(msg);
  process.exit(NO_FAIL ? 0 : 1);
}

if (!TOKEN || !ENDPOINT) {
  exitWithError('❌  GRAPHQL_TOKEN or GRAPHQL_CONTENT_API not set.');
}

const client = new GraphQLClient(ENDPOINT, {
  headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }
});

async function main() {
  console.log('🔄  Syncing translations from Hygraph...');

  // IMPORTANT: combining multiple locales in one request makes Hygraph return
  // items in the first locale only — always use separate requests per locale.
  const query = gql`
    query SyncTranslations($locales: [Locale!]!) {
      contents(locales: $locales, stage: PUBLISHED, first: 2000) {
        translationKey
        snippet
        locale
      }
    }
  `;

  const [enData, deData] = await Promise.all([
    client.request(query, { locales: ['en'] }),
    client.request(query, { locales: ['de_DE'] })
  ]);

  // Build maps per locale. Filter strictly by locale field to exclude EN fallbacks.
  const maps = { en: {}, de: {} };
  for (const item of enData.contents) {
    if (item.translationKey && item.snippet != null && item.locale === 'en')
      maps.en[item.translationKey] = item.snippet;
  }
  for (const item of deData.contents) {
    if (item.translationKey && item.snippet != null && item.locale === 'de_DE')
      maps.de[item.translationKey] = item.snippet;
  }

  const files = {
    en: resolve(ROOT, 'messages/en.json'),
    de: resolve(ROOT, 'messages/de.json')
  };

  let changed = 0;
  for (const [locale, hygraph] of Object.entries(maps)) {
    if (Object.keys(hygraph).length === 0) continue;

    const existing = JSON.parse(readFileSync(files[locale], 'utf-8'));
    const merged   = { ...existing, ...hygraph };

    // Keep $schema at top
    if (existing.$schema) {
      const { $schema, ...rest } = merged;
      writeFileSync(files[locale], JSON.stringify({ $schema, ...rest }, null, 2) + '\n', 'utf-8');
    } else {
      writeFileSync(files[locale], JSON.stringify(merged, null, 2) + '\n', 'utf-8');
    }

    changed++;
    console.log(`  ✓ messages/${locale}.json  (${Object.keys(hygraph).length} keys from Hygraph)`);
  }

  if (changed === 0) {
    console.log('  ℹ️  No published content in Hygraph yet – local JSON unchanged.');
  }

  console.log('✅  Sync complete.\n');
}

main().catch(err => {
  console.error('❌  Sync failed:', err.message);
  console.error('   Continuing with local JSON fallback.\n');
  process.exit(NO_FAIL ? 0 : 1);
});
