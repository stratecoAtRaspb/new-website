<script>
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { localizeHref } from '$lib/paraglide/runtime';
  import Section from '$lib/components/section.svelte';
</script>

<svelte:head>
  <title>{page.status} - Ein Fehler ist aufgetreten</title>
</svelte:head>

<Section type={'master'}>
  <div class="prose flex flex-col justify-center items-center">
    <h1>{page.status}</h1>
    <p>Ein Fehler ist passiert...</p>
    <div class="spacer"></div>
    <div class="flex gap-6">
      <button
        class="btn btn-primary"
        onclick={() => {
          goto(localizeHref('/'));
        }}>HOME</button
      >
    </div>
  </div>
</Section>

<style lang="postcss">
  @reference '../app.css';
</style>
