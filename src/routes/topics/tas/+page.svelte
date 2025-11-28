<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.tas.title']()}</title>
  <meta name="description" content={m['topics.tas.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.tas']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.topics.tas']()}</h1>
    <h3>Competency</h3>
    <ul>
      <li>
        Best practice data management and data warehousing required for both "Buy Side &amp; Sell Side Due Diligence" in the German distressed debt market
        (Non-, Sub- and Performing Loans)
      </li>
      <li>
        Proven track record of flawless implementation of technical platforms to enable collaboration needed to aggregate and integrate data from all available
        sources in order to create a reliable database for portfolio valuation
      </li>
      <li>Since 2003 over 100 transactions (NPL, SPL and PL) with size ranging from € 0.5 billion to € 1.5 billion</li>
      <li>Long-term partnership with Ernst &amp;Young EMEIA Transactions Advisory Service</li>
    </ul>
    <h3>Main Focus</h3>
    <ul>
      <li>Business-Intelligence</li>
      <li>Database Management (Data Management and Data Warehousing)</li>
    </ul>
    <h3>Solutions</h3>
    <ul>
      <li>Data warehouse and data mining for all relevant reporting, analysis and planning processes</li>
      <li>Business-Intelligence infrastructure for portfolio valuation</li>
      <li>Online analytical processing of loan portfolio data (OLAP)</li>
      <li>Platform using Microsoft SharePoint collaboration technology</li>
      <li>Customized reporting and decision support platform</li>
    </ul>
    <p>
      STRATECO ist eine branchenübergreifende Unternehmens- und IT- beratung.<br />Im Rahmen unserer integrierten Projektmethodik entwickeln wir durch die
      Kombination von fachlicher Kompetenz mit innovativen Technologien für unsere Mandanten stets individuelle Lösungen, die wir nicht nur „konzipieren“
      sondern auch „realisieren“.
    </p>
    <p>
      Aufbau von Data Management “Best Practice” für "Buy Side und Sell Side Due Diligence" im Non-Performing / Sub-Performing und Performing Loan sowie
      Verbriefungstransaktionen. Es wurden seit 2004 institutionelle Kunden bei ca. 100 Transaktionen erfolgreich beraten. Schwerpunkt im Servicing und
      Abwicklung von Kreditportfolien Langjährige Erfahrungen im deutschen Servicer Markt in der Konzeption, Realisierung und im Betrieb von Servicing-
      Plattform. Reibungslose Abwicklung von Non-Performing / Sub-Performing / Performing Loan und Verbriefungstransaktionen für institutionelle Kunden.
    </p>
    <h3>Branchen</h3>
    <ul>
      <li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li>
      <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li>
      <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li>
      <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li>
      <li><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></li>
    </ul>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
