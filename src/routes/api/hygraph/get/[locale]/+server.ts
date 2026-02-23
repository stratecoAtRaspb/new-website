/**
 * GET /api/hygraph/get/[locale]
 *
 * Fetches all content snippets for a given locale from Hygraph (PUBLISHED stage).
 * Optional query param: ?category=navigation|quotes|contentBlock|misc
 *
 * Examples:
 *   GET /api/hygraph/get/en
 *   GET /api/hygraph/get/de?category=contentBlock
 *
 * Response:
 * {
 *   contents: [
 *     { id, translationKey, snippet, contentSnippetCategory, locale }
 *   ]
 * }
 */

import { contentClient } from '$lib/server/graphql-client.server';
import { apiErrorResponse } from '$lib/server/api-error.server';
import { toHygraphLocale } from '$lib/server/translation-sync.server';
import type { RequestHandler } from '@sveltejs/kit';
import { gql } from 'graphql-request';

const VALID_LOCALES = new Set(['en', 'de']);
const VALID_CATEGORIES = new Set(['navigation', 'quotes', 'contentBlock', 'misc']);

export const GET: RequestHandler = async ({ params, url }) => {
	const locale = params.locale;
	const category = url.searchParams.get('category');

	if (!locale || !VALID_LOCALES.has(locale)) {
		return new Response(JSON.stringify({ error: `Invalid locale. Use: ${[...VALID_LOCALES].join(', ')}` }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	if (category && !VALID_CATEGORIES.has(category)) {
		return new Response(
			JSON.stringify({ error: `Invalid category. Use: ${[...VALID_CATEGORIES].join(', ')}` }),
			{ status: 400, headers: { 'Content-Type': 'application/json' } }
		);
	}

	try {
		const query = gql`
			query getContents($locales: [Locale!]!, $where: ContentWhereInput) {
				contents(locales: $locales, where: $where, stage: PUBLISHED, first: 2000) {
					id
					translationKey
					snippet
					contentSnippetCategory
					locale
				}
			}
		`;

		const where = category ? { contentSnippetCategory: category } : undefined;

		// Map paraglide locale ("de") → Hygraph Locale enum ("de_DE")
		const data = await contentClient.request(query, {
			locales: [toHygraphLocale(locale)],
			where
		});

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return apiErrorResponse(error);
	}
};
