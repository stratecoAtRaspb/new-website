<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.behaviouralMarketing.title']()}</title>
  <meta name="description" content={m['topics.marketing.behaviouralMarketing.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.behaviouralMarketing']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.behaviouralMarketing']()}</h2>
    <p>
      Traditionelle Kampagnen - auch wenn Sie segmentiert angesteuert werden - sind stets "push"-Aktivitäten. Erhöhen Sie die Relevanz Ihrer Kommunikation,
      indem Sie den Kunden über den besten Zeitpunkt bestimmen lassen!<br />
    </p>
    <h3>Lassen Sie doch Ihren Kunden entscheiden! <br /></h3>
    <p>
      Marketiers diskutieren unentwegt die beste "Engagement Strategie" - und werden dabei mit einer Vielzahl von Fragen konfrontiert: Wann ist der optimale
      Zeitpunkt E-Mails an Kunden zu versenden? Wie häufig sollte man mit dem Kunden interagieren? Und über welche Kanäle sollte kommuniziert werden? Diese
      Fragen sind zwar stets relevant, können aber in Teilen bereits durch den Kunden selbst beantwortet werden.
    </p>
    <p>
      Mit derart viel Bewegung am Markt und unzähligen Unternehmen, die versuchen, mit ihrer "Message" auf Gehör zu stoßen, fällt es Marketiers zunehmend
      schwerer, den Endkunden zu erreichen. Zusammen mit der Machtverschiebung vom Verkäufer zum Käufer, ist Marketing anspruchsvoller denn je.
    </p>
    <p>
      Verhaltensgesteuertes Marketing ermöglicht dem Kunden selbst zu entscheiden, wann und wie er Informationen bezieht, welche Informationen er erhält und
      wann er bereit ist, die nächste Stufe einer Kampagne zu beginnen. Dies stellt sicher, dass der Kunde die für ihn relevanten Informationen über den von ihm
      bevorzugten Kommunikationsweg erhält.
    </p>
    <p>
      Ein wichtiger Schlüssel für verhaltensgesteuertes Marketing ist die Automatisierung. Viele Unternehmen müssen mit einem beschränkten Budget und
      limitiertem Marketingpersonal auskommen. Diese Einschränkungen gekoppelt mit vielen Tausenden und Millionen Kontakten in der Datenbank macht es so gut wie
      unmöglich zu garantieren, dass jeder Kunde die für ihn relevanten Informationen rechtzeitig erhält. Mit Hilfe von "Trigger Messages" und
      verhaltensgesteuerten "Nurturing Campaigns" kann sichergestellt werden, dass Kunden die von ihnen gewünschten Nachrichten und keine Massenkommunikation
      oder verzögerte Rückantworten erhalten.
    </p>
    <p>
      STRATECO hilft Ihnen dabei, eine für Ihren Bedarf geeignete "Marketing Automation"-Lösung auszuwählen und Schritt für Schritt richtig einzuführen.
      Ausgehend von einzelnen Kampagnen bis hin zu einem kompletten Set an verhaltensbasierten Regeln und Programmen. Wenn gewünscht, übernehmen wir sogar den
      gesamten Betrieb der Lösung für Sie. Damit Sie sich wieder um Ihre eigentliche Aufgabe kümmern können: Ihre Kunden mit gutem Marketing begeistern!<br />
    </p>
    <h3>Einsatzmöglichkeiten</h3>
    <p>Hier einige Themen, bei denen ein grundlegendes, verhaltensgesteuertes Marketing einfach implementiert werden kann:<br /></p>
    <ul>
      <li>Willkommens-Programme bei Neukunden oder Newsletter-Abonnenten <br /></li>
      <li>Reaktion auf Surf-Verhalten - "Trigger Messages" basierend auf Artikeln oder Themen, die der Kunde zuvor angeschaut/geklickt hat</li>
      <li>Einkaufsabbrecher - Versendung von Angeboten, zusätzlichen Empfehlungen und weiteren Informationen um den Kunden zum Kaufen zu bewegen</li>
      <li>Customer Loyality nach Einkauf oder Download - Danke-E-Mails, "Cross Selling", "Up Selling", weitere Schritte</li>
      <li>Erfolgskontrolle und Reporting mit allen KPI's <br /></li>
      <li>Schlafende Kunden - Reaktivierung von Kunden durch passende Angebote oder Dialogaufforderung ("...sind Sie noch an uns interessiert?") <br /></li>
    </ul>
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
    <h3>Praxisbeispiel: <br /> Kaufabbrecher <br /></h3>
    <p>
      Die Praxis zeigt, dass Abbruchraten von mehr als 50% beim Online Shopping keine Seltenheit sind. Gezielte Programme können grosse Teile dieses verlorenen
      Umsatzes retten, indem z.B. gezielt incentiviert wird (5 € Gutschein) oder der Abbruchgrund ermittelt wird. Einmal eingerichtet, erzeilen derartige
      Programme einen hohen ROI. So konnte beim Online Kosmetikanbieter VIE at home durch den Einsatz eines Silverpop-basierten Programmes für Kaufabbrecher aus
      jedem investierten Euro mehr als 100 Euro Umsatz generiert werden.<br />
    </p>
    <h3>Von der Zielgruppe zum Individuum - <br /> Echtes Behavioural Marketing <br /></h3>
    <p>
      Ein System, das sich Ihr Verhalten und Ihre Gewohnheiten merkt und Ihnen so zukünftigen genau die Dinge anbieten kann, die Sie auch wirklich gut finden.
      Genau das ist echtes "Behavioral Marketing" - kein „Gießkannen-Marketing“ mehr, bei dem alle das gleiche Angebot bekommen.<br /><a
        target="_blank"
        href="https://blog.strateco.de/frau-meier-und-ihre-hamburger-oder-wie-segment-of-one-marketing-funktioniert/">Lesen Sie mehr dazu auf unserem Blog...</a
      ><br />
    </p>
    <h3>Vorteile <br /></h3>
    <p>
      Einmal aufgesetzt, können leicht neue Programme oder Regeln für die Kommunikation hinzugefügt werden. So entsteht mit der Zeit ein komplett
      automatisiertes und vernetztes System.<br />
    </p>
    <p>
      Der Kunde bestimmt durch sein Verhalten, wann ein Programm startet. So stellen Sie sicher, dass die richtige Information zur richtigen Zeit ausgeliefert
      wird.<br />
    </p>
    <p>
      Durch eine schrittweise Einführung und permanente Erfolgskontrolle kann sichergestellt werden, dass aus allen Programmen der maximale Erfolg generiert
      wird.<br />
    </p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
