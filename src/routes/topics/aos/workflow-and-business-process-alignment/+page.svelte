<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['aos.title']()} description={m['aos.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['aos.managementCoaching.title']()}</h1>

    <p>
      Alignment of Organization to Strategy (AOS) ist ein fundamentaler Erfolgsfaktor für jedes Unternehmen. 
      STRATECO unterstützt Sie dabei, Ihre Organisation optimal auf Ihre strategischen Ziele auszurichten.
    </p>
    <p>
      Wir helfen Ihnen, Strukturen, Prozesse und Kultur so zu gestalten, dass sie Ihre Strategie effektiv unterstützen 
      und messbare Ergebnisse liefern. Von der Analyse über das Design bis zur Implementierung – wir begleiten Sie 
      auf dem gesamten Weg zur strategischen Organisationsausrichtung.
    </p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
</Section>
