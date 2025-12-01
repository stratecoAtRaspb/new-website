<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.cea.socialMediaMonitoring.title']()}</title>
  <meta name="description" content={m['topics.cea.socialMediaMonitoring.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.socialMediaMonitoring']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.socialMediaMonitoring']()}</h2>
    <p>
      Das "Social Web" eröffnet zahlreiche neue Chancen für Unternehmen, bringt aber auch neue Risiken mit sich. Wir helfen Ihnen dabei, einen Wissensvorsprung
      zu erzielen und Fehler zu vermeiden!<br />
    </p>
    <h3>Folgen Sie der Konversation dort wo sie entsteht! <br /></h3>
    <p>
      Die Informationsgewinnung und Kontaktaufnahme von Kunden und Interessenten findet zunehmend in sozialen Medien statt, während die klassische Homepage in
      Ihrer Bedeutung abnimmt.
    </p>
    <p>
      Beschwerden über Facebook, Twitter, Foren oder Blogs, finden teilweise außerhalb des Kontrollbereichs statt und werden dort ohne Kenntnis der betroffenen
      Unternehmen diskutiert.
    </p>
    <p>WER redet über Ihr Unternehmen, Ihre Marke, Ihre Produkte und Leistungen, Ihre Services oder Mitarbeiter?<br /></p>
    <p>WO wird gesprochen und welche Reichweite haben die Meinungsäußerungen (Twitter Follower, Facebook-Fans, etc.)?<br /></p>
    <p>
      WIE ist die Tonalität der Beiträge, werden positive oder negative Meinungen geäußert und wie sind die Reaktionen darauf? Entstehen thematische Trends?
    </p>
    <h3>Einsatzmöglichkeiten</h3>
    <ul>
      <li>Erhalten Sie Transparenz über alle öffentlichen Diskussionen im World Wide Web</li>
      <li>Analysieren Sie Ihre Marke, Ihre Wettbewerber oder Ihre Branche nach relevanten Äußerungen</li>
      <li>Gewinnen Sie wichtige Informationen zur Verbesserung von Produkten und Serviceleistungen</li>
      <li>Treten Sie mit Menschen in einen digitalen Dialog - gesteuert durch ein professionelles Werkzeug</li>
      <li>Etablieren Sie ein digitales Frühwarnsystem</li>
    </ul>
    <h3>Themen</h3>
    <ul>
      <li><a title="Speech Analytics" href="/de/topics/cea/speech-analytics">Speech Analytics</a></li>
      <li><a title="Text Analytics" href="/de/topics/cea/text-analytics">Text Analytics</a></li>
      <li><a title="Social Media Monitoring" href="/de/topics/cea/social-media-monitoring">Social Media Monitoring</a></li>
      <li><a title="Customer Feedback" href="/de/topics/cea/customer-feedback">Customer Feedback</a></li>
      <li><a title="Customer Interaction" href="/de/topics/cea/customer-interaction">Customer Interaction</a><br /></li>
    </ul>
    <h3>Expertengespräch</h3>
    <p>Vereinbaren Sie hier ganz unkompliziert einen Termin zu Ihrem persönlichen Expertengespräch.</p>
    <h3>Domänenkompetenz</h3>
    <ul>
      <li>Automotive</li>
      <li>Energiewirtschaft</li>
      <li>Finanzdienstleistungen</li>
      <li>Telekommunikation</li>
      <li>Technologie und IT</li>
      <li>Tourismus</li>
      <li>Pharma/Healthcare</li>
    </ul>
    <h3>Kundenstimmen</h3>
    <blockquote>
      <p>
        Früher haben wir umfangreiche Marktforschung durchführen müssen, um zu erfahren was die Kudnen von unseren Produkten halten. Heute postet jeder
        freiwillig, welchen Brotaufstrich er zum Frühstück gegessen hat und wie er ihm geschmeckt hat. Alle Informationen sind da - amn muss Sie nur finden und
        richtig verwerten!<br />
      </p>
    </blockquote>
    <p><strong>Produktmanager eines Konsumgüterherstellers <br /></strong></p>
  </div>

  <a href={localizeHref('/topics/cea')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
