<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.ras.title']()}</title>
  <meta name="description" content={m['topics.ras.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.ras']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.ras']()}</h2>
    <h3>Competency</h3>
    <ul>
      <li>Planning and implementing Kamakura Risk Manager (KRM) integrated risk management software applications</li>
      <li>
        Proven track record of enhancement of KRM software with low cost, standard-technology for user-friendly, high-speed business intelligence, data
        management and data warehousing solutions
      </li>
      <li>
        Customization of design and implementation of online analytical processing (OLAP), web-based, collaborative platforms for integrated risk management
        reporting, analysis and planning compatible with inputs to and output from KRM’s algorithms
      </li>
    </ul>
    <h3>Main Focus</h3>
    <ul>
      <li>Business intelligence for integrated risk management: BI enhancement of KRM technical solutions</li>
      <li>
        Data management and data warehousing capability that enables intuitive, high-speed, low-cost exploration of data using Excel Pivot and via web service
      </li>
      <li>Historization and local storage of KRM output data to allow quick and easy comparisons of results over time</li>
      <li>Technology and systems design and implementation to enable high dimensional drilldown capability</li>
      <li>Design of system for flexible definition of access rights that easily integrates into existing IT environment</li>
      <li>Deployment of standard technology (MS Office, MS SQL Server, Oracle)</li>
    </ul>
    <h3>Solutions</h3>
    <ul>
      <li>Kamakura Risk Manager (KRM)</li>
      <li>State of the art business intelligence solution for KRM integrated risk management software</li>
      <li>High performance independent of the amount of underlying source data</li>
      <li>Easy, low-cost, timely, reliable access to aggregated and transactions-level data</li>
    </ul>
    <h3>Discover STRATECO’s <br /> KRM Risk Portal</h3>
    <p>
      We have scheduled a maintenance downtime on 2015-1-14 from 10:00 PM to 2015-1-15 01:00 AM (UTC+01:00). Please <a href="mailto:riskportal@strateco.com"
        >let us know</a
      > if you need us to postpone this maintenance!
    </p>
    <p>To receive your personal login credentials for <a href="http://riskportal.kamakuraco.com/">our demo environment</a> please contact:</p>
    <p>
      <a href="mailto:riskportal@strateco.com">Mr. Laurence Dickler</a><br /><span
        style="font-size: 11px; font-style: italic;"
        data-mce-style="font-size: 11px; font-style: italic;">Responsible Partner</span
      >
    </p>
    <h3>Client segments</h3>
    <ul>
      <li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li>
      <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li>
      <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li>
      <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li>
      <li><a title="Others" href="/Kompetenzen/Sonstige">Others</a></li>
    </ul>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
