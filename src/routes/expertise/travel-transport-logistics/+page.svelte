<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.travelTransportAndLogistics']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.expertise.travelTransportAndLogistics']()}</h1>

    <p>
      Die Branchen Travel, Transport und Logistics stehen vor großen Herausforderungen durch Digitalisierung und veränderte Kundenbedürfnisse. STRATECO
      begleitet Sie bei der Transformation.
    </p>
    <p>
      Von Optimierung der Supply Chain über Customer Journey Design bis hin zur Implementierung digitaler Plattformen – wir entwickeln Lösungen, die Ihre
      Wettbewerbsfähigkeit nachhaltig stärken.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
