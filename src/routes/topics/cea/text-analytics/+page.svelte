<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.cea.textAnalytics.title']()}</title>
  <meta name="description" content={m['topics.cea.textAnalytics.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.textAnalytics']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.textAnalytics']()}</h2>
    <p>
      Egal ob Social Media, aus Feedback-Prozessen oder internen Quellen - überall im Unternehmen stehen große Textmengen zur Verfügung. Wir helfen Ihnen,
      diesen unstrukturierten Text in strukturierte Informationen &amp; "Insights" zu verwandeln!<br />
    </p>
    <h3>Gewinnen Sie strukturierte Informationen aus unstrukturiertem Text!</h3>
    <p>Die Marktforschung ist ein wichtiges Instrument um wertvolle Informationen als Grundlage für Entscheidungen und Strategie des Unternehmens.</p>
    <p>
      Marktforschung hat bei allem Nutzen aber auch essentielle Nachteile. Um schnell und effizient an wichtige Informationen zu gelangen, ist nur eine kleine
      Gruppe von Probanten als Quelle nutzbar, bei gleichzeitig sehr hohen Kosten. Social Media Daten zu Marktforschungszwecken zu nutzen, liefert wiederum
      aktuelle Ergebnisse, von einer großen Anzahl von Konsumenten, ist aber zu umfangreich und unstrukturiert um die gleiche Qualität an Ergebnissen zu
      liefern.
    </p>
    <p>SC-CEA und der Einsatz von Text Analytics, kann ALLE schriftlichen Kundenkanäle und vor allem auch die Sozialen Netze auswerten.</p>
    <p>
      Ein vordefiniertes und an die Ansprüche und Herausforderung des Unternehmens angepasst dynamisches Analysemodell ermöglicht es, analog zur Marktforschung,
      alle relevanten Informationen zu erfassen und in alle Richtungen auszuwerten, in Echtzeit, zu einem Bruchteil der Kosten von Fokusgruppen und
      kanalübergreifend. Gleichzeitig meldet das System neue Trends und kritische Faktoren, um auch Antworten auf Fragen zu erhalten, die im Vorfeld nicht
      abzusehen waren. <br />
    </p>
    <h3>Einsatzmöglichkeiten von Text Analytics:</h3>
    <ul>
      <li>
        Kampagnenbewertung - Alle Kanäle lassen sich zu Zufriedenheit und Erfolg von Marketingkampagnen auswerten, liefern aber gleichzeitig auch
        Optimierungspotentiale, da der Kontext der Kritik einheitlich auswertbar und dadurch messbar wird <br />
      </li>
      <li>
        Produktdesign - Offene Fragenstellungen sind mit SC-CEA genauso schnell und qualitativ auswertbar, wie geschlossene Fragen, erlauben den Kunden mehr
        Freiheit bei der Beantwortung und liefert dadurch tiefere Einblicke <br />
      </li>
      <li>
        Diagnosetool - Alle Unternehmensbereiche und Services können im Modell abgebildet werden, läuft etwas nicht entsprechend, meldet SC-CEA umgehend und
        detailliert wo ein Problem vorliegt
      </li>
      <li>
        Prozessoptimierung - Fehlerhafte Prozesse wurden optimiert oder neue eingeführt. SC-CEA gibt Ihnen umgehend <br /> Rückmeldung ob diese Änderungen von
        Erfolg waren <br />
      </li>
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
    <h3>Projektbeispiel: <br /> Marktforschung</h3>
    <p>
      Im Gegensatz zur herkömmlichen Marktforschung ist das SC-CEA Konzept dynamisch. So lassen sich die Ergebnisse auch nach der Befragung noch nach neuen
      Anforderungen und Fragestellungen asuwerten.<br /><br /> Eine Umfrage zur Zufriedenheit nach dem Kauf eines neuen Produktes kann so leicht dazu benutzt
      werden, um im Nachgang nach spezifischen Mängeln zu suchen. Zusätzlich lassen sich diese Ergebnissse unter einer neuen Fragestellung per Knopfdruck mit
      Informationen aus allen anderen Kanälen anreichern. <br />
    </p>
    <h3>Nutzbare Quellen</h3>
    <p>
      Text Analytics kann genutzt werden, um Kundeninteraktionen und Feedback aus verschiedensten internen und externen Quellen auszuwerten, wie zum Beispiel:
    </p>
    <ul>
      <li>Blogs</li>
      <li>Chats</li>
      <li>Notizen im Contact Center</li>
      <li>E-Mail</li>
      <li>Briefpost</li>
      <li>News- und Bewertungs-Sites</li>
      <li>Social Media-Kanäle</li>
      <li>Kommentare in Umfragen</li>
    </ul>
  </div>

  <a href={localizeHref('/topics/cea')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
