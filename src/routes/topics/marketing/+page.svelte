<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.title']()}</title>
  <meta name="description" content={m['topics.marketing.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.marketing']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.marketing']()}</h2>
    <p>
      Das Marketing in Unternehmen befindet sich vollständig im Wandel.<br /> Die neue Marketingwelt ist digital. Konsumenten haben die Macht.<br /> Wir helfen Ihnen,
      damit richtig umzugehen.
    </p>
    <h3>Alles wird anders. Sind Sie bereit? <br /></h3>
    <p>
      In kaum einem Unternehmensbereich war der Wandel in den letzten Jahren so drastisch wie im Marketing. Klassische Medien werden zunehmend von digitalen
      verdrängt. Viele neue Technologien haben Einzug gehalten. Erfolg im Marketing wird direkt messbar. Dies hat die Rolle des Marketing Managers verändert und
      erfordert neue Skills.<br />
    </p>
    <p>
      Wir helfen Ihnen, diese neuen Herausforderungen zu meistern. Bei STRATECO finden Sie eine einzigartige Mischung aus Marketingerfahrung, Branchenexpertise
      und Technologiekompetenz. Wir wissen, welche Technologien für Sie den größten Nutzen stiften - und wie man diese richtig einsetzt. Wir entwickeln
      maßgeschneiderte Konzepte für unsere Kunden, um in der "neuen Marketingwelt" effizient und erfolgreich agieren zu können. <br />
    </p>
    <h3>Leistungsspektrum</h3>
    <p>
      Seit über 10 Jahren unterstützen wir unsere Kunden dabei, Marketing effizient und erfolgreich zu betreiben. Unser Leistungspektrum ist dabei sehr breit -
      hier finden Sie einige Beispiele:<br />
    </p>
    <ul>
      <li>Einführung einer "Marketing Automation" Lösung <br /></li>
      <li>Entwicklung und RollOut von Leadmanagement-Prozessen <br /></li>
      <li>Leadgenerierung durch mehrstufige Kampagnen <br /></li>
      <li>Erstellung von Marktstudien und Whitepapers ("Content Marketing") <br /></li>
      <li>Outsourcing der gesamten Marketing Operations an STRATECO</li>
      <li>Nutzung von Social Media Kanälen zur Marktforschung <br /></li>
    </ul>
    <h3>Themen</h3>
    <ul>
      <li><a title="Marketing as a Service" href="/de/topics/marketing/marketing-as-a-service">Marketing as a Service</a></li>
      <li><a title="Leadgenerierung" href="/de/topics/marketing/lead-generation">Leadgenerierung</a></li>
      <li><a title="Lead Management" href="/de/topics/marketing/lead-management">Lead Management</a></li>
      <li><a title="Marketing Automation" href="/de/topics/marketing/marketing-automation">Marketing Automation</a></li>
      <li><a title="Behavioural Marketing" href="/de/topics/marketing/behavioural-marketing">Behavioural Marketing</a></li>
      <li><a title="Customer Relationship Management" href="/de/topics/marketing/customer-relationship-management">Customer Relationship Management</a></li>
      <li><a title="Instant Magazine" href="/">Instant Magazine</a></li>
    </ul>
    <h3>Expertengespräch</h3>
    <p>Vereinbaren Sie hier ganz unkompliziert einen Termin zu Ihrem persönlichen Expertengespräch.</p>
    <h3>Infomaterial</h3>
    <p>Fordern Sie hier und direkt Ihr Informationsmaterial zum Thema "Marketing" an.</p>
    <h3>Facebook meets Newsletter</h3>
    <p>
      Für viele Unternehmen ist der Newsletter das wichtigste Medium in der Kundenkommunikation. Die wenigsten aber bieten Ihren Kunden an, auch aus sozialen
      Netzwerken wie z.B. Facebook heraus sich für einen Newsletter anzumelden. Diese kleine Prozessoptimierung mit grosser Wirkung haben wir für einige unserer
      Kunden erfolgreich realisiert.<br />
    </p>
    <h3>Kundenstimmen</h3>
    <blockquote>
      <p>
        STRATECO ist für uns wie ein erweitertes Marketing-Team. Dadurch können wir Programme und Kampagnen im Rahmen unser Geschäftsanforderungen jederzeit
        schnell und flexibel umsetzen. Am wichtigsten ist für uns dabei, dass STRATECO sich unserer Projekte so annimmt, als wären es ihre eigenen. Die
        intensive Auseinandersetzung mit unseren Produkten, Märkten und Kunden sichert jederzeit exzellente Ergebnisse. Ich kann STRATECO nur uneingeschränkt
        weiterempfehlen - für Marketing Projekte aller Art, sogar europaweit!<br />
      </p>
    </blockquote>
    <p><strong>Anita Marsh, Director Online Marketing EMEA, Concur Technologies <br /></strong></p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
