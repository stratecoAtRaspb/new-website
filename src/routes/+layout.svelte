<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import { navigating } from '$app/state';
  import { onMount } from 'svelte';
  import CookieConsentComponent from '$lib/components/cookieconsent.svelte';
  import Loader from '$lib/components/loader.svelte';
  import HEADER from '$lib/components/header.svelte';
  import FOOTER from '$lib/components/footer.svelte';
  import '../app.css';
  import { locales, localizeHref } from '$lib/paraglide/runtime';

  let { children } = $props();
  let showInitialLoader = $state(true);

  onMount(() => {
    setTimeout(() => {
      showInitialLoader = false;
    }, 333);
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="wrapper">

    <HEADER />
    <main>
      {@render children?.()}
    </main>
    <FOOTER />

    <CookieConsentComponent></CookieConsentComponent>
</div>

<!-- unsichtbare Links für SSG -->
<div style="display: none">
  {#each locales as locale}
    <a href={localizeHref('/contact', { locale })} aria-label="dummy-link"></a>
    <a href={localizeHref('/thank-you', { locale })} aria-label="dummy-link"></a>
  {/each}
</div>