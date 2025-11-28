<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.processes']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.processes']()}</h1>
<h3>Kompetenz</h3> <p>STRATECO verbindet funktionale Expertise mit technischer und praktischer Erfahrung. Mit unseren<br /> spezialisierten Methoden und technischem Wissen helfen wir unseren Kunden wertvollen Einblick in seine Geschäftsprozesse zu erlangen. Unsere Business Performance Management Lösungen helfen dem Kunden Prozesseffektivität und Effizienz der internen und externen Geschäftsprozesse erzielen.</p> <h3>Schwerpunkt</h3> <ul><li>Optimierung und Realisierung der Controlling Konzepte</li> <li>Optimierung und Realisierung der wertorientierten Unternehmensführungskonzepte</li> <li>Optimierung und Realisierung der Asset und Risiko Management Konzepten</li> <li>Harmonisierung der internen und externen Rechnungswesen Systeme</li></ul> <h3>Lösungen</h3> <ul><li>Projekteffizienz durch Geschäftsprozess- Strategieworkshops</li> <li>Strategie Prüfung oder Snap Shot Analyse</li> <li>Definition der Meilensteine für jede Phase und jedes Arbeitspaket</li> <li>Benchmark durch unsere Projekt Erfahrung und Marktexpertise</li> <li>Skalierbare und modulare Lösungen</li></ul> <h3>Branchen</h3> <ul><li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li> <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li> <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li> <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li> <li><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></li></ul>
  </div>

  <a href={localizeHref('/topics/finance-controlling')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
