<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['expertise.telecomsMediaAndHighTech.title']()}</title>
  <meta name="description" content={m['expertise.telecomsMediaAndHighTech.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.expertise.telecomsMediaAndHighTech']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.expertise.telecomsMediaAndHighTech']()}</h2>

    <p>
      In den schnelllebigen Branchen Telekommunikation, Medien und High-Tech unterstützt STRATECO Unternehmen dabei, mit dem rasanten Wandel Schritt zu halten
      und Wettbewerbsvorteile zu sichern.
    </p>
    <p>
      Von Digitalisierungsstrategien über Produktinnovation bis hin zur Kundenzentrierung – wir helfen Ihnen, in diesen dynamischen Märkten erfolgreich zu sein.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
