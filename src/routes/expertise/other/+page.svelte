<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.other']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.expertise.other']()}</h1>

    <p>
      STRATECO verfügt über umfassende Branchenerfahrung in vielen weiteren Sektoren. Unsere Berater bringen vielseitige Expertise und Best Practices aus
      unterschiedlichsten Industrien mit.
    </p>
    <p>
      Ganz gleich aus welcher Branche Sie kommen – wir verstehen Ihre spezifischen Herausforderungen und entwickeln passende Lösungsansätze für Ihren
      nachhaltigen Erfolg.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
