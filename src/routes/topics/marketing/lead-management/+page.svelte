<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.leadManagement.title']()}</title>
  <meta name="description" content={m['topics.marketing.leadManagement.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.leadManagement']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.topics.leadManagement']()}</h1>
    <p>
      Leads generieren ist nicht kompliziert, den Prozess zum erfolgreichen Abschluss zu bringen hingegen schon. Effizientes Leadmanagement verringern die Zahl
      notwendiger Kontaktversuche und reduziert die Zahl verlorerer Leads!<br />
    </p>
    <h3>Leads erfassen alleine reicht nicht aus - auf den richtigen Umgang kommt es an!</h3>
    <p>
      Unserer Erfahrung nach setzen viele Unternehmen noch immer auf über Jahre gewachsene Lead Erfassungs- Prozesse. Das Ergebnis sind häufig hohe
      Abbruchraten, bzw. eine große Zahl abgelehnter Leads. Einer Studie von Sirius Decisions zufolge werden nur 20% der durch das Marketing erfassten Leads
      überhaupt vom Vertrieb angegangen. Und von diesen auch noch mehr als 70% abgelehnt - zumeist auf Grund zu geringer Erfolgsaussichten.
    </p>
    <p>
      Im Kern liegt das zumeist an langwierigen und fehleranfälligen Prozessen, in deren Verlauf nur unzureichend qualifizierte Leads in einem frühen Stadium an
      den Vertrieb übergeben werden. Verständlich, dass ein derart "geprägter" Vertrieb dazu neigt, sich die Rosinen aus den gelieferten Daten zu picken und
      einen Großteil der erfassten Leads gar nicht erst anzufassen.
    </p>
    <p>
      Erfolgreicher ist daher ein Lead Management, bei dem die einzelnen Elemente Lead Nurturing, Lead Scoring und Reporting in einem gemeinsamen Prozess
      zusammengefasst und ganzheitlich betrachtet werden. Das Ziel ist dabei, nur noch tatsächlich erfolgversprechende Leads an den Vertrieb zu übergeben und
      den gesamten Prozess transparent zu machen.
    </p>
    <p>
      Das Lead Nurturing stellt in sicher, das ein Kontakt nicht kalt übergeben, sondern erst mit weiteren, wertvollen Informationen angereichert wird. Kontakte
      werden also nicht ausschließlich auf Grund einzelner Aktivitäten weitergereicht, sondern im Rahmen des Nurturing Prozesses weiter qualifiziert.
    </p>
    <p>
      Die so gewonnenen Daten werden in Form eines Scorings bewertet, bevor die Daten übergeben werden. Dabei werden messbare Aktivitäten eines Kontaktes mit
      Kennzahlen versehen. Erst wenn ein definierter Schwellenwert erreicht wird erfolgt - vollständig automatisiert - die Übergabe. Anhand des Scores ist
      schnell und einfach nachvollziehbar, ob ein Lead aussichtsreich ist oder noch weitere qualifiziert werden muss. Das Scoring kann darüber hinaus auch
      genutzt werden, um automatisierte Kampagnen auszulösen.
    </p>
    <p>
      Das Reporting schließlich stellt sicher, das alle Beteiligten, ob Marketing, Vertrieb oder Management zu jeder Zeit Einblick in den Prozess nehmen kann.
      Damit wird z.B. ersichtlich, wie viele Leads in den einzelnen Prozess-Phasen offen sind, welche Marketing Aktivitäten besonders erfolgreich Leads
      generiert haben oder wie sich die Abschlussraten entwickeln.
    </p>
    <p>
      STRATECO unterstützt Sie dabei, Ihre bestehenden Leadprozesse zu analysieren und an Ihrem Bedarf ausgerichtete Lösungen zu entwickeln. Dabei können wir
      als neutraler Vermittler helfen, Prozesse zu vereinfachen, verbindliche Ziele zu definieren und damit ein effizientes Leadmanagement zu schaffen!
    </p>
    <h3>Themen</h3>
    <ul>
      <li><a title="Marketing as a Service" href="/Themen/Marketing/Marketing-as-a-Service">Marketing as a Service</a></li>
      <li><a title="Leadgenerierung" href="/Themen/Marketing/Leadgenerierung">Leadgenerierung</a></li>
      <li><a title="Lead Management" href="/Themen/Marketing/Lead-Management">Lead Management</a></li>
      <li><a title="Marketing Automation" href="/Themen/Marketing/Marketing-Automation">Marketing Automation</a></li>
      <li><a title="Behavioural Marketing" href="/Themen/Marketing/Behavioural-Marketing">Behavioural Marketing</a></li>
      <li><a title="Customer Relationship Management" href="/Themen/Marketing/Customer-Relationship-Management">Customer Relationship Management</a></li>
      <li><a title="Instant Magazine" href="/page(8fa6873a-6656-4444-b287-7416f4aaa68a)">Instant Magazine</a></li>
    </ul>
    <h3>Expertengespräch</h3>
    <p>Vereinbaren Sie hier ganz unkompliziert einen Termin zu Ihrem persönlichen Expertengespräch.</p>
    <h3>Demonstration</h3>
    <p>Machen Sie hier ganz einfach einen Termin mit unserem Experten für eine Online-Demonstration aus.</p>
    <h3>Lead Manager - powered by STRATECO <br /></h3>
    <p>
      Die Lead Manager App ermöglicht es Ihnen an jedem Ort, ob Messe, Verkaufsveranstaltung oder Seminar, Leads elektronisch und ohne Medienbrüche zu erfassen.
      Verkürzen Sie Ihre Leadprozesse in dem Sie Folgeaktionen regelbasiert und automatisiert starten.
    </p>
    <h3>Vorteile <br /></h3>
    <p>Mit einem optimierten Leadmanagement Prozess stehen neue Leads ein Echtzeit in allen relevanten Systemen zur Verfügung!<br /></p>
    <p>Ein effizientes Leadmanagement verkürzt<br /> die Zeit zwischen erstem Kontakt und Folgeaktionen.<br /></p>
    <p>In einem kooperativen Leadprozess verringert sich die Anzahl Kontaktversuche und nicht angefasster Leads erheblich.<br /></p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
