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
  <div class="prose flex flex-col items-center justify-center">
    <h1>Vielen Dank!</h1>
    <p>Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden...</p>
    <div class="spacer"></div>
    <div class="flex gap-6">
      <button
        class="btn btn-primary"
        onclick={() => {
          goto(localizeHref('/'));
        }}>Zurück zu Startseite</button
      >
    </div>
  </div>
</Section>

<style lang="postcss">
  @reference '../../app.css';
</style>
