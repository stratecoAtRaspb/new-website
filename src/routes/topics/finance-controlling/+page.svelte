<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.financeAndControlling']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.financeAndControlling']()}</h2>
    <h3>Competency</h3>
    <p>
      Strateco combines functional expertise with technical and practical experience. With our specialized methodologies and technical skills we help our
      customers to obtain valuable insights into their business processes. Our Business Performance Management Solutions help our customers to achieve Business
      Process Excellence, i.e. effectiveness and efficiency of internal and external business processes.
    </p>
    <h3>Main Focus</h3>
    <ul class="checklist">
      <li><span>Optimization and realization of <em>controlling</em> concepts</span></li>
      <li><span>Optimization and realization of <em>value-based management</em> concepts</span></li>
      <li><span>Optimization and realization of <em>asset</em> &amp; <em>risk management</em> concepts</span></li>
      <li><span>Harmonization of internal and external <em>accounting</em> systems</span></li>
    </ul>
    <h3>Solutions</h3>
    <ul class="checklist">
      <li><span>Project effectiveness through our Business Process Strategy workshops</span></li>
      <li><span>Strategy audit or snapshot analysis</span></li>
      <li><span>Benchmark through our project experience and market expertise</span></li>
      <li><span>Scalability and modular solutions</span></li>
    </ul>
    <h3>Branchen</h3>
    <ul class="checklist">
      <li><span><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></span></li>
      <li><span><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></span></li>
      <li><span><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></span></li>
      <li><span><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a></span></li>
      <li><span><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></span></li>
    </ul>
  </div>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
