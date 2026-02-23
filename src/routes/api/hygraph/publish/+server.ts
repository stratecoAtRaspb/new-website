/**
 * POST /api/hygraph/publish
 *
 * Publishes a content entry in Hygraph (promotes DRAFT → PUBLISHED).
 * Typically called after a successful PATCH.
 *
 * Request body (JSON):
 * {
 *   id: string   — Hygraph content node ID to publish
 * }
 *
 * Response: { publishContent: { id, stage } }
 */

import { contentClient } from '$lib/server/graphql-client.server';
import { apiErrorResponse } from '$lib/server/api-error.server';
import type { RequestHandler } from '@sveltejs/kit';
import { gql } from 'graphql-request';

interface PublishBody {
	id: string;
}

export const POST: RequestHandler = async ({ request }) => {
	let body: PublishBody;

	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const { id } = body;

	if (!id) {
		return new Response(JSON.stringify({ error: 'Body must contain "id"' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const mutation = gql`
			mutation publishContent($id: ID!) {
				publishContent(where: { id: $id }, to: PUBLISHED) {
					id
					stage
				}
			}
		`;

		const result = await contentClient.request(mutation, { id });

		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return apiErrorResponse(error);
	}
};
