<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.cea.customerInteraction.title']()}</title>
  <meta name="description" content={m['topics.cea.customerInteraction.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.customerInteraction']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.topics.customerInteraction']()}</h1>
    <p>
      Feedback ist für uns alle wichtig. Ohne das Feedback Ihrer Kunden wissen Sie nicht, wo Sie stehen und wie Sie Produkte und Services verbessern können.
      Haben Sie bereits einen durchgängigen Customer Feedback-Prozess implementiert?
    </p>
    <h3>Sind Sie mit unseren Leistungen zufrieden?</h3>
    <p>
      Das Einholen der Kundenmeinung, sei es im Anschluss eines Beratungsgespräches oder direkt am Screen bei Besuch der Website eines Unternehmens, ist
      mittlerweile ein probates Mittel, um Informationen über Produkte, Prozesse, Mitarbeiterleistungen, Kundenloyalität und Kundenzufriedenheit zu gewinnen.
      Durch einheitliche und leicht anpassbare Fragebögen, die in der Regel meist wenige offene Fragen enthhalten, wird dabei sichergestellt das diese
      Informationen schnell und ohne großen Aufwand ausgewertet werden können.
    </p>
    <p>Was dabei nicht berücksichtig werden kann, ist die allegmeine Korrespondenz mit dem Kunden oder der Austausch der Kunden untereinander.<br /></p>
    <p>
      Das SC-CEA Customer Feedback Modell und der Einsatz der Technnologie Text Analytics erlaubt die Auswertung von offenen Fragen mit dem gleichen Komfort,
      aber einer höheren Qualität als bei geschlossenen Fragen. Da offene Fragen eine detaillierte Betrachtung erlauben. Das erlaubt es nicht nur abzulesen, in
      welchem Grad der Kunde mit dem Service unzufrieden ist, sondern auch was ihn genau daran stört. <br />
    </p>
    <p>
      Um repräsentative Ergebnisse zu erhalten, kann CEA diese Fragestellung auf E-Mails, Foren und Soziale Netzwerke ausweiten, einheitlich in einem Ergebniss
      darstellen, aber auch die Ergebnisse der einzelnen Kanäle vergleichen. <br />
    </p>
    <h3>Vorteile von SC-CEA Customer Feedback</h3>
    <ul>
      <li>Einheitliche kanal- und sprachübergreifende Analyse des gesamten Customer Feedback <br /></li>
      <li>Minimaler manueller Aufwand bei qualitativ hochwertigen Ergebnissen <br /></li>
      <li>
        Keine zusätzlichen Tools zwingend notwendig, da auch die allgemeine Kundenkorespondenz oder Social Media Daten alleine aussgewertet werden können <br />
      </li>
      <li>Dynamisches Modell das für jede Situation oder neue Herausforderung angepasst werden kann</li>
    </ul>
    <h3>Themen</h3>
    <ul>
      <li><a title="Speech Analytics" href="/Themen/Customer-Experience-Analytics/speech-analytics">Speech Analytics</a></li>
      <li><a title="Text Analytics" href="/Themen/Customer-Experience-Analytics/text-analytics">Text Analytics</a></li>
      <li><a title="Social Media Monitoring" href="/Themen/Customer-Experience-Analytics/social-media-monitoring">Social Media Monitoring</a></li>
      <li><a title="Customer Feedback" href="/Themen/Customer-Experience-Analytics/Customer-Feedback">Customer Feedback</a></li>
      <li><a title="Customer Interaction" href="/Themen/Customer-Experience-Analytics/customer-interaction">Customer Interaction</a><br /></li>
    </ul>
    <h3>Expertengespräch</h3>
    <p>Vereinbaren Sie hier ganz unkompliziert einen Termin zu Ihrem persönlichen Expertengespräch.</p>
    <h3>Projektbeispiel: <br /> Transportunternehmen</h3>
    <p>
      Das Kategorisierungsmodell von STRATECO und der Einsatz von Text Analytics ermöglichten einem Reiseanbieter, Customer Feedback, sei es aus Befragungen
      oder Emails und unabhängig davon in welcher Sprache, automatisiert auszuwerten.<br /><br /> Das Ergebnis: Das Transportunternehmen ist jetzt in der Lage
      neue Trends oder Optimierungsbedarf nahezu in Realtime zu erkennen und umzusetzen.Der manuelle Anteil und damit auch die Kosten der Bearbeitung des
      Customer Feedbacks auf ein Minimum.<br />
    </p>
  </div>

  <a href={localizeHref('/topics/cea')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
