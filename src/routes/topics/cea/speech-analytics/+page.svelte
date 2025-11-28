<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.speechAnalytics']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.speechAnalytics']()}</h1>
<p>Nichts liefert Ihnen ein ehrlicheres Feedback zu Ihrem Business als die Stimme Ihrer Kunden. Wir helfen Ihnen, die Informationen aus Kundengesprächen systematisch zu analysieren und zur Optimierung Ihres Busienss zu nutzen!<br /></p> <h3>Hören Sie Ihren Kunden richtig zu! <br /></h3> <p>Der Kundenservice wird zunehmend zum entscheidenden Wettbewerbsvorteil für Unternehmen. Durch immer schnelleren Informationsaustausch dank Internet auf PC und mobilen Endgeräten, steigt die Erwartungshaltung der Kunden permanent. Dies stellt Customer Service Organisationen ständig vor neue Herausforderungen, auch steigt das Anrufvolumen deutlich an.</p> <p>Die Folgen sind: wachsende Audio Archive, höherer Anforderungen an die Qualitätssicherung und dadurch auch ein erhöhter Bedarf an Automatisierung.<br /></p> <p><img style="margin: 17px 0 30px 0;" src="/media/4d6bd073-a849-4f28-b8f4-63bc50e51f91/speachana_jpg?mw=550" data-mce-style="margin: 17px 0 30px 0;" /></p> <p>Speech Analytics analysiert effektiv alle Gespräche aus Ihrem telefonischen Kundenkontakt und wandelt diese in strategisch nutzbare Daten für alle Unternehmensbereiche. Gesprächsinhalte werden automatisch kategorisiert, so lassen sich Anrufgründen herausfiltern, Anrufspitzen eruieren und zusätzliche Informationen, wie relavante Angebote von Mitbewerbern identifizieren.</p> <p>Durch das Analyse Tool lassen sich aufgezeichnete Gespräche auswerten, um Produkte, Prozesse und das Kundenerlebnis gezielt zu verbessern – und somit im Umkehrschluss auch die „first contact resolution“ zu steigern.</p> <h3>Vorteile durch den Einsatz von SC-CEA Speech Analytics:</h3> <ul><li>verborgene Trends und Entwicklungen aus der Vielzahl der Anrufe extrahieren, um damit Umsatzpotenziale oder Marktrisiken aufzudecken</li> <li>kostengünstig eine regelmäßige Marktforschung auf Basis eigener, zielgruppenspezifischer Daten durchzuführen und entsprechende Kennzahlen oder Frühwarnindikatoren zu entwickeln</li> <li>Wertvolles Wissen „zwischen den Zeilen“ der Anrufe generieren und dem gesamten Unternehmen zur Verfügung zu stellen, von der Erfolgskontrolle bei Marketingkampagnen bis hin zu Prozessdefiziten im Rechnungslauf oder zur Wettbewerbsbeobachtung <br /></li> <li>von niedrigen Betriebskosten, schnellem Return-on-Investment, Sicherheit und weiteren Vorteilen profitieren</li></ul> <h3>Themen</h3> <ul><li><a title="Speech Analytics" href="/Themen/Customer-Experience-Analytics/speech-analytics">Speech Analytics</a></li> <li><a title="Text Analytics" href="/Themen/Customer-Experience-Analytics/text-analytics">Text Analytics</a></li> <li><a title="Social Media Monitoring" href="/Themen/Customer-Experience-Analytics/social-media-monitoring">Social Media Monitoring</a></li> <li><a title="Customer Feedback" href="/Themen/Customer-Experience-Analytics/Customer-Feedback">Customer Feedback</a></li> <li><a title="Customer Interaction" href="/Themen/Customer-Experience-Analytics/customer-interaction">Customer Interaction</a><br /></li></ul> <h3>Expertengespräch</h3> <p>Vereinbaren Sie hier ganz unkompliziert einen Termin zu Ihrem persönlichen Expertengespräch.</p> <h3>Projektbeispiel: <br /> Online Reiseportal</h3> <p><img src="/media/40782d00-3a34-46d5-aa25-cf55260af461/speech-praxis-travel_jpg" /></p>
  </div>

  <a href={localizeHref('/topics/cea')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
