/**
 * translation-sync.server.ts
 *
 * Fetches all published content snippets from Hygraph, merges them with
 * the local fallback JSON files (messages/en.json + messages/de.json),
 * and writes the merged result back to disk.
 *
 * Hygraph takes precedence where it has a value; local JSON fills the gaps.
 *
 * Locale mapping:
 *   paraglide "en"  → Hygraph "en"
 *   paraglide "de"  → Hygraph "de_DE"
 *
 * After the files are written the Vite/paraglide plugin picks up the change
 * automatically in development (HMR). For production, run this as a
 * pre-build step via `yarn sync:hygraph` before `yarn build`.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { contentClient } from '$lib/server/graphql-client.server';
import { gql } from 'graphql-request';

// Paraglide locale → Hygraph Locale enum value
const HYGRAPH_LOCALE: Record<string, string> = {
	en: 'en',
	de: 'de_DE'
};

// Paths to the source JSON files (relative to project root)
const JSON_PATHS: Record<string, string> = {
	en: resolve('messages/en.json'),
	de: resolve('messages/de.json')
};

// Reserved key in paraglide JSON files – never overwrite
const SCHEMA_KEY = '$schema';

/** True once a successful sync has run in this server process. */
let syncDone = false;

/**
 * Fetch all PUBLISHED snippets from Hygraph, merge with local JSON, and
 * write updated files back to disk.
 *
 * Safe to call multiple times – runs only once per server process unless
 * `force` is true.
 */
export async function syncTranslations(force = false): Promise<void> {
	if (syncDone && !force) return;

	try {
		// IMPORTANT: querying multiple locales in one request makes Hygraph return
		// items in the FIRST locale only. We must use separate requests per locale.
		// Hygraph enforces a per-request cap (often 100). We paginate with skip until
		// a page returns fewer items than PAGE_SIZE, indicating the last page.
		const PAGE_SIZE = 100;

		const query = gql`
			query syncTranslations($locales: [Locale!]!, $first: Int!, $skip: Int!) {
				contents(locales: $locales, stage: PUBLISHED, first: $first, skip: $skip) {
					translationKey
					snippet
					locale
				}
			}
		`;

		type ContentItem = { translationKey: string | null; snippet: string | null; locale: string };

		async function fetchAll(hygraphLocale: string): Promise<ContentItem[]> {
			const all: ContentItem[] = [];
			let skip = 0;
			while (true) {
				const data = await contentClient.request<{ contents: ContentItem[] }>(query, {
					locales: [hygraphLocale],
					first: PAGE_SIZE,
					skip
				});
				all.push(...data.contents);
				if (data.contents.length < PAGE_SIZE) break;
				skip += PAGE_SIZE;
			}
			return all;
		}

		console.log('[hygraph] Syncing translations from Hygraph...');

		const [enContents, deContents] = await Promise.all([fetchAll('en'), fetchAll('de_DE')]);
		const enData = { contents: enContents };
		const deData = { contents: deContents };

		// Build { translationKey → snippet } maps per paraglide locale.
		// Filter de_DE strictly by locale field to exclude EN fallbacks.
		const hygraphMap: Record<string, Record<string, string>> = { en: {}, de: {} };

		for (const item of enData.contents) {
			if (item.translationKey && item.snippet != null && item.locale === 'en') {
				hygraphMap.en[item.translationKey] = item.snippet;
			}
		}
		for (const item of deData.contents) {
			if (item.translationKey && item.snippet != null && item.locale === 'de_DE') {
				hygraphMap.de[item.translationKey] = item.snippet;
			}
		}

		for (const [locale, hygraph] of Object.entries(hygraphMap)) {
			if (Object.keys(hygraph).length === 0) continue;

			const filePath = JSON_PATHS[locale];
			const existing = JSON.parse(readFileSync(filePath, 'utf-8')) as Record<string, string>;

			// Hygraph values win; local JSON fills every key not yet in Hygraph
			const merged: Record<string, string> = { ...existing, ...hygraph };

			// Always keep the schema key at the top
			if (existing[SCHEMA_KEY]) {
				const { [SCHEMA_KEY]: schema, ...rest } = merged;
				const ordered = { [SCHEMA_KEY]: schema, ...rest };
				writeFileSync(filePath, JSON.stringify(ordered, null, 2) + '\n', 'utf-8');
			} else {
				writeFileSync(filePath, JSON.stringify(merged, null, 2) + '\n', 'utf-8');
			}

			const keyCount = Object.keys(hygraph).length;
			console.log(`[hygraph]   ✓ messages/${locale}.json  (${keyCount} keys from Hygraph)`);
		}

		syncDone = true;
		console.log('[hygraph] ✅  Sync complete.');
	} catch (error) {
		// Log but don't crash – fall back to local JSON silently
		console.error('[hygraph] Sync failed, using local fallback:', (error as Error).message);
	}
}

/** Expose the Hygraph locale identifier for a given paraglide locale string. */
export function toHygraphLocale(paraglideLocale: string): string {
	return HYGRAPH_LOCALE[paraglideLocale] ?? paraglideLocale;
}
