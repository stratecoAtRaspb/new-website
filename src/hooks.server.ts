import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { syncTranslations } from '$lib/server/translation-sync.server';

// Kick off the Hygraph sync immediately on cold start.
// Fire-and-forget: the first request is never delayed.
// In dev, Vite/paraglide HMR picks up the written JSON files automatically.
// In production, prefer running `yarn sync:hygraph` before `yarn build`.
syncTranslations().catch(() => {
	// Error already logged inside syncTranslations
});

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

export const handle: Handle = sequence(handleParaglide);
