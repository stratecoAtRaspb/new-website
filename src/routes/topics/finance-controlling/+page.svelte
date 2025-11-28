<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.financeAndControlling']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.financeAndControlling']()}</h1>
<h3>Competency</h3> <p>Strateco combines functional expertise with technical and practical experience. With our specialized methodologies and technical skills we help our customers to obtain valuable insights into their business processes. Our Business Performance Management Solutions help our customers to achieve Business Process Excellence, i.e. effectiveness and efficiency of internal and external business processes.</p> <h3>Main Focus</h3> <ul><li>Optimization and realization of <em>controlling</em> concepts</li> <li>Optimization and realization of <em>value-based management</em> concepts</li> <li>Optimization and realization of <em>asset</em> &amp; <em>risk management</em> concepts</li> <li>Harmonization of internal and external <em>accounting</em> systems</li></ul> <h3>Solutions</h3> <ul><li>Project effectiveness through our Business Process Strategy workshops</li> <li>Strategy audit or snapshot analysis</li> <li>Benchmark through our project experience and market expertise</li> <li>Scalability and modular solutions</li></ul> <h3>Branchen</h3> <ul><li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li> <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li> <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li> <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li> <li><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></li></ul>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
