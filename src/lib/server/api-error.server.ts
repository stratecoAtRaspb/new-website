/**
 * Centralised API error handler — server-only.
 *
 * Converts GraphQL / network errors into consistent JSON responses
 * without leaking internal details to the client.
 */

import { ClientError } from 'graphql-request';

interface ApiErrorBody {
	error: string;
	details?: unknown;
}

/**
 * Returns a JSON Response with an appropriate HTTP status code.
 *
 * - 400 for GraphQL validation / user errors
 * - 401/403 for auth problems
 * - 502 for upstream Hygraph errors
 * - 500 for everything else
 */
export function apiErrorResponse(error: unknown): Response {
	const body: ApiErrorBody = { error: 'Internal server error' };
	let status = 500;

	if (error instanceof ClientError) {
		const gqlErrors = error.response?.errors;
		const firstCode = gqlErrors?.[0]?.extensions?.code as string | undefined;

		if (firstCode === 'UNAUTHENTICATED' || firstCode === 'FORBIDDEN') {
			status = firstCode === 'UNAUTHENTICATED' ? 401 : 403;
			body.error = 'Hygraph authentication failed';
		} else if (gqlErrors?.length) {
			status = 400;
			body.error = 'GraphQL error';
			// Only expose error messages, not stack traces
			body.details = gqlErrors.map((e) => e.message);
		} else {
			// HTTP-level error from Hygraph
			status = 502;
			body.error = 'Hygraph upstream error';
		}
	} else if (error instanceof Error) {
		if (error.message.includes('Missing env vars')) {
			status = 503;
			body.error = 'Service misconfiguration';
		}
		// Log full error server-side only
		console.error('[api-error]', error.message);
	} else {
		console.error('[api-error] Unknown error', error);
	}

	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' }
	});
}
