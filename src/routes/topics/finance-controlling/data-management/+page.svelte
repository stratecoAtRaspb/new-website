<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.dataManagement']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.dataManagement']()}</h1>
<h3>Kompetenz</h3> <p>STRATECO Data Management Lösungen helfen dem Kunden sichere Entscheidungen aufgrund von zuverlässigen Informationen zu treffen, um sich im internationalen Markt wettbewerbsfähig und<br /> erfolgreich zu positionieren. STRATECO realisiert auf der Basis von Microsoft Technologie geeignete<br /> integrierte Finanz- und Data Management Lösungen, die dem Kunden schnell verlässliche und maß-geschneiderte Informationen zur Verfügung stellen.</p> <h3>Schwerpunkt</h3> <ul><li>Business-Intelligence</li> <li>Database Management</li></ul> <h3>Lösungen</h3> <ul><li>Data Warehousing</li> <li>Business-Intelligence</li> <li>OLAP</li> <li>Data Mining</li> <li>Reporting</li></ul> <h3>Branchen</h3> <ul><li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li> <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li> <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li> <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li> <li><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></li></ul>
  </div>

  <a href={localizeHref('/topics/finance-controlling')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
