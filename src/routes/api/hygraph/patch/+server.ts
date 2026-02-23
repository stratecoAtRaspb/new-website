/**
 * PATCH /api/hygraph/patch
 *
 * Updates a content snippet in Hygraph (saves to DRAFT stage).
 * After patching, call POST /api/hygraph/publish to make it live.
 *
 * Request body (JSON):
 * {
 *   id: string       — Hygraph node ID
 *   snippet: string  — new text value
 * }
 *
 * Response: { updateContent: { id, translationKey, snippet, contentSnippetCategory, locale } }
 */

import { contentClient } from '$lib/server/graphql-client.server';
import { apiErrorResponse } from '$lib/server/api-error.server';
import type { RequestHandler } from '@sveltejs/kit';
import { gql } from 'graphql-request';

interface PatchBody {
	id: string;
	snippet: string;
}

export const PATCH: RequestHandler = async ({ request }) => {
	let body: PatchBody;

	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const { id, snippet } = body;

	if (!id || typeof snippet !== 'string') {
		return new Response(JSON.stringify({ error: 'Body must contain "id" (string) and "snippet" (string)' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const mutation = gql`
			mutation updateContent($id: ID!, $snippet: String!) {
				updateContent(where: { id: $id }, data: { snippet: $snippet }) {
					id
					translationKey
					snippet
					contentSnippetCategory
					locale
				}
			}
		`;

		const result = await contentClient.request(mutation, { id, snippet });

		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return apiErrorResponse(error);
	}
};
