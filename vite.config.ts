import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      strategy: ['url', 'cookie', 'preferredLanguage', 'baseLocale'],
      urlPatterns: [
        {
          pattern: '/about-us',
          localized: [
            ['de', '/de/ueber-uns'],
            ['en', '/en/about-us']
          ]
        },
        {
          pattern: '/about-us/:id',
          localized: [
            ['de', '/de/ueber-uns/:id'],
            ['en', '/en/about-us/:id']
          ]
        },
        {
          pattern: '/contact',
          localized: [
            ['de', '/de/kontakt'],
            ['en', '/en/contact']
          ]
        },
        {
          pattern: '/contact/:id',
          localized: [
            ['de', '/de/kontakt/:id'],
            ['en', '/en/contact/:id']
          ]
        },
        {
          pattern: '/expertise',
          localized: [
            ['de', '/de/kompetenzen'],
            ['en', '/en/expertise']
          ]
        },
        {
          pattern: '/expertise/:id',
          localized: [
            ['de', '/de/kompetenzen/:id'],
            ['en', '/en/expertise/:id']
          ]
        },
        {
          pattern: '/legal',
          localized: [
            ['de', '/de/impressum'],
            ['en', '/en/legal-notice']
          ]
        },
        {
          pattern: '/legal/:id',
          localized: [
            ['de', '/de/impressum/:id'],
            ['en', '/en/legal-notice/:id']
          ]
        },
        {
          pattern: '/privacy',
          localized: [
            ['de', '/de/datenschutz'],
            ['en', '/en/privacy']
          ]
        },
        {
          pattern: '/privacy/:id',
          localized: [
            ['de', '/de/datenschutz/:id'],
            ['en', '/en/privacy/:id']
          ]
        },
        {
          pattern: '/topics',
          localized: [
            ['de', '/de/themen'],
            ['en', '/en/topics']
          ]
        },
        {
          pattern: '/topics/:id',
          localized: [
            ['de', '/de/themen/:id'],
            ['en', '/en/topics/:id']
          ]
        },
        {
          pattern: '/thank-you',
          localized: [
            ['de', '/de/danke'],
            ['en', '/en/thank-you']
          ]
        },
        {
          pattern: '/:path(.*)?',
          localized: [
            // Wichtig: spezifische Pfade (mit /de/) zuerst, generische zuletzt :contentReference[oaicite:1]{index=1}
            ['de', '/de/:path(.*)?'],
            ['en', '/en/:path(.*)?']
          ]
        }
      ]
    })
  ]
});
