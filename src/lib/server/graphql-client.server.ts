/**
 * Hygraph GraphQL Client — server-only
 *
 * The `.server.ts` suffix prevents SvelteKit from ever bundling this
 * into client code. Env vars (token, endpoints) are therefore never
 * exposed to the browser.
 *
 * Two clients are exported:
 *  - `contentClient`   → Content API  (queries + content mutations)
 *  - `managementClient`→ Management API (schema / project management)
 */

import { GraphQLClient } from 'graphql-request';
import {
	GRAPHQL_TOKEN,
	GRAPHQL_CONTENT_API,
	GRAPHQL_MANAGEMENT_API
} from '$env/static/private';

function buildClient(endpoint: string, token: string): GraphQLClient {
	if (!endpoint || !token) {
		throw new Error(
			`[hygraph] Missing env vars. endpoint="${endpoint ? 'set' : 'MISSING'}", token="${token ? 'set' : 'MISSING'}"`
		);
	}

	return new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		// Throw on any non-2xx or GraphQL errors
		errorPolicy: 'none'
	});
}

/** Use for all content queries and content mutations (update, publish). */
export const contentClient = buildClient(GRAPHQL_CONTENT_API, GRAPHQL_TOKEN);

/** Use for management / schema operations only. */
export const managementClient = buildClient(GRAPHQL_MANAGEMENT_API, GRAPHQL_TOKEN);
