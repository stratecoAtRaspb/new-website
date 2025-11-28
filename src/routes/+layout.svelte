<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import { navigating } from '$app/state';
  import { onMount } from 'svelte';
  import CookieConsentComponent from '$lib/components/cookieconsent.svelte';
  import Loader from '$lib/components/loader.svelte';
  import HEADER from '$lib/components/header.svelte';
  import FOOTER from '$lib/components/footer.svelte';
  import '../app.css';

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
  {#if navigating.to || showInitialLoader}
    <div class="global-loading">
      <Loader size={'large'}></Loader>
    </div>
  {:else}
    <HEADER />
    <main>
      {@render children?.()}
    </main>
    <FOOTER />
  {/if}
  <CookieConsentComponent></CookieConsentComponent>
</div>
