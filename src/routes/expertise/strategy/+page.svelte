<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.strategy']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.expertise.strategy']()}</h1>

    <p>
      STRATECO unterstützt Sie bei der Entwicklung und Umsetzung erfolgreicher Strategien. Mit unserer langjährigen Erfahrung helfen wir Ihnen, die richtigen
      strategischen Entscheidungen zu treffen und Ihre Unternehmensziele zu erreichen.
    </p>
    <p>
      Unsere Strategieberatung umfasst die Analyse Ihrer aktuellen Position, die Definition klarer Ziele und die Entwicklung eines maßgeschneiderten
      Umsetzungsplans. Wir begleiten Sie auf dem gesamten Weg - von der Vision bis zur Realisierung.
    </p>
  </div>
  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>