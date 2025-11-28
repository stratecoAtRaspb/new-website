<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.strategy']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.strategy']()}</h1>
<h3>Kompetenz</h3> <p>STRATECO hilft dem Kunden, sich durch innovative Finanzprodukte im Markt erfolgreich zu positionieren und unterstützt Sie darüber hinaus auch bei der Umsetzung. STRATECO hat bestehende Prozesse für die Koordinierung, Kommunikation, Validierung und Bewertung von Produkten entwickelt und erfolgreich umgesetzt. Unser Spezialwissen, welches wir durch zahlreiche erfolgreiche Projekte aufgebaut haben, hilft dem Kunden profitable generische und neue Geschäftsgelegenheiten zu realisieren, um nachhaltig maximalen Wert für das Unternehmen zu schaffen.</p> <h3>Schwerpunkt</h3> <ul><li>Strukturierte Finanz Produktentwicklung und Evaluierung</li> <li>Portfolio Kredit Risiko Transfer Produkt Entwicklung und Evaluierung</li> <li>Kredit Derivative, Synthetische Verbriefung, Collateralized Debt Obligations</li></ul> <h3>Lösungen</h3> <ul><li>Sector Focus Fund: Corporate NPL CDO</li> <li>Sector Focus Fund: Real Estate NPL CDO</li> <li>Sector Focus Fund: Retail NPL CDO</li> <li>Sector Focus Fund: SME NPL CDO</li></ul> <h3>Branchen</h3> <ul><li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li> <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li> <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li> <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li> <li><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></li></ul>
  </div>

  <a href={localizeHref('/topics/finance-controlling')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
