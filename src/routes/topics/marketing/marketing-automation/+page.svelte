<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.marketingAutomation.title']()}</title>
  <meta name="description" content={m['topics.marketing.marketingAutomation.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.marketingAutomation']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.marketingAutomation']()}</h2>
    <p>
      Ob Sie neue Leads generieren oder bestehende weiter qualifizieren möchten - hier liegt viel Potenzial für effiziente Prozesse.<br /> Wir zeigen Ihnen neue
      Möglichkeiten mit "Marketing Automation"!
    </p>
    <h3>Kampagnen und Programme einfach automatisieren! <br /></h3>
    <p>
      Marketiers kennen das Problem: Viele Kampagnen parallel, oft mehrstufig und über verschiedene Kanäle. Da bleibt wenig Zeit für Kreativität und guten
      Content, noch weniger für Erfolgskontrolle und Optimierung. Mit einer "Marketing Automation"-Lösung lassen sich diese Probleme in den Griff bekommen. An
      einem "single point of control" haben Sie den Überblick über alle Kampagnen - und können auf Knopfdruck Transparenz über Ihre Ergebnisse bekommen.
    </p>
    <p>
      Beliebig viele Kampagnen und Programme können Sie in einem grafischen Editor per drag &amp; drop aufsetzen und konfigurieren. Einmal aufgesetzt, laufen
      diese Programme automatisch ab und können beliebig miteinander verknüpft werden. So entsteht im Laufe der Zeit ein grosser "Prozessbaukasten", der Ihnen
      eine effiziente Steuerung und Kontrolle ermöglicht!<br />
    </p>
    <p>
      Über verhaltensbasierte, zeitgesteuerte oder regelbasierte Kriterien sind Sie damit in der Lage, einen individuellen Kundendialog effizient aufzubauen.
      Bis hinunter auf eine echte "1:1 Kommunikation" mit dynamischen Inhalten. Auch personalisierte Landingpages oder Newsletter mit individuellen,
      präferenzbasierten Inhalten sind damit ein Kinderspiel.
    </p>
    <p>
      STRATECO hilft Ihnen dabei, eine für Ihren Bedarf geeignete "Marketing Automation"-Lösung auszuwählen und Schritt für Schritt richtig einzuführen. Wenn
      gewünscht, übernehmen wir sogar den gesamten Betrieb der Lösung für Sie. Damit Sie sich wieder um Ihre eigentliche Aufgabe kümmern können: Ihre Kunden mit
      gutem Marketing begeistern!<br />
    </p>
    <h3>Einsatzmöglichkeiten</h3>
    <p>
      Die Einsatzmöglichkeiten einer "Marketing Automation"-Lösung sind nahezu unbegrenzt. Einige Anregungen und Beispiele haben wir Ihnen hier
      zusammengestellt:<br />
    </p>
    <ul>
      <li>Behavioural Marketing und Verhaltenstracking im Web <br /></li>
      <li>Dynamische Newsletterprozesse mit personalisierten Inhalten</li>
      <li>Leadgenerierung und Leadqualifizierung</li>
      <li>Kundenbewertung mit Scoring Modellen</li>
      <li>Erfolgskontrolle und Reporting mit allen KPI's <br /></li>
      <li>Social Media Integration mit Standardmodulen <br /></li>
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
    <h3>Starterkit</h3>
    <p>Fordern Sie hier ein unverbindliches Starterkit zum Thema Marketing Automation an.</p>
    <h3>Demonstration</h3>
    <p>Machen Sie hier ganz einfach einen Termin mit unserem Experten für eine Online-Demonstration aus.</p>
    <h3>Weitere Informationen</h3>
    <p>
      Weitere Information zu Marketing Automation und den Einsatzmöglichkeiten finden Sie auf unserem <a href="http://www.marketingautomatisierung.de"
        >Informationsportal</a
      >. Einen guten Überblick liefert auch das
      <a title="Silverpop eBook" href="http://www.silverpop.com/downloads/white-papers/Ebook-Marketing-Automation-Best-Practices1.pdf"
        >eBook Marketing Automation</a
      >
      von Silverpop.<br />
    </p>
    <h3>Vorteile</h3>
    <p>Individueller Dialog mit personalisierten Inhalten schafft Relevanz - ihren Kunden werden es lieben.<br /></p>
    <p>Bestehende Programme und Templates verkürzen Ihre turnaround time für neue Kampagnen.</p>
    <p>Marketing Automation erlaubt es Ihnen mit weniger Resourcen im Marketing mehr zu bewegen.</p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
