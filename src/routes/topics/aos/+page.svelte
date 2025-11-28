<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.aos']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.aos']()}</h1>
<p>Just as good strategy is adapted to the environment, good organizational design aligns people, architecture, routines and culture to the strategy</p> <h3>Competency</h3> <ul><li>Identification of organizational strengths and weaknesses: extensive experience of consultants as senior bankers</li> <li>Strategy implementation: alignment of organizational design to strategy</li> <li>Change management: motivating, coordinating and guiding organizational transformation</li> <li>Design and implementation of decision-making processes, work processes and communication processes in commercial and investment banking, asset and wealth management, private banking, including processes for customer relationship management and credit risk management</li> <li>Deep insight into the working of cooperative and private universal banking sectors in Europe</li> <li>Cross-cultural bridge-building and knowledge transfer: Russia, Western and Eastern Europe, USA</li></ul> <h3>Main Focus</h3> <ul><li>Supporting change in elements of organizational design: people, architecture, routines and culture</li> <li>Optimizing and implementing strategy</li> <li>Ensuring compatibility of business processes and work flows between lines of business and functional areas</li></ul> <h3>Solutions</h3> <ul><li>PARC Compatibility as a value proposition:“Organizational adaptation to Strategy” - complementarity of People, Architecture, Routines (business processes) and Culture</li> <li>Post-Merger Integration (PMI): strategy implementation and business planning</li> <li>Technical platforms for collaboration and coordination of change in lines of business, functional areas, and geographies</li></ul> <blockquote><p>…it is the most fundamental responsibility of a general manager to craft a strategy and create an organization through which that strategy can be successfully implemented in the economic, political legal, regulatory, social and technological environment in which the firm operates… [This] involves an ongoing process of adjustment as the environment changes, as the strategy develops, and as the organization evolves.</p></blockquote> <p><strong>THE MODERN FIRM, John Roberts, Professor, Graduate School of Business at Stanford University</strong></p> <h3>Artikel zum Thema</h3> <blockquote><p>A Perfect Fit:<br /> Aligning Organization &amp; Strategy</p></blockquote> <p><a target="_blank" href="http://hbswk.hbs.edu/item/0071.html"><strong>Jetzt lesen...</strong></a></p> <h3>Branchen</h3> <ul><li><a title="Financial Institutions " href="/Kompetenzen/Financial-Institutions">Financial Institutions</a></li> <li><a title="Healthcare" href="/Kompetenzen/Pharma-Healthcare">Healthcare</a></li> <li><a title="Telecoms, Media, High Tech" href="/Kompetenzen/Telecoms-Media-High-Tech">Telecoms, Media, High Tech</a></li> <li><a title="Travel, Transport &amp; Logistics" href="/Kompetenzen/Travel-Transport-Logistics">Travel, Transport &amp; Logistics</a><br /></li> <li><a title="Sonstige" href="/Kompetenzen/Sonstige">Sonstige</a></li></ul>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
