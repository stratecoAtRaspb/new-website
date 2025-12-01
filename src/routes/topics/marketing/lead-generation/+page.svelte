<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.leadGeneration.title']()}</title>
  <meta name="description" content={m['topics.marketing.leadGeneration.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['topics.marketing.leadGeneration.introTitle']()} description={m['topics.marketing.leadGeneration.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['topics.marketing.leadGeneration.title']()}</h2>
    <p>
      Die Generierung von Leads zählt im Marketing zu den wichtigsten, aber zugleich auch zu den schwierigsten Aufgaben. Profitieren Sie von STRATECO, wenn es
      darum geht, Ihr Budget dabei bestmöglich einzusetzen!<br />
    </p>
    <h3>Marketing liefert zu wenig Leads! <br /></h3>
    <p>
      Diesen Satz kennt wohl jeder Marketing Manager. Marketing heute heisst, mit immer weniger Budget mehr Leads zu liefern - und am besten noch gut
      qualifiziert bitte. Ein Spagat, der ohne die richtige Strategie und den Einsatz der notwendigen Werkzeuge nicht zu lösen ist.
    </p>
    <p>
      STRATECO hilft Ihnen dabei, diese Herausforderung zu meistern. Gemeinsam mit Ihnen entwickeln wir eine auf Ihre Produkte und Ihre Zielgruppe abgestimmte
      Strategie zur Leadgenerierung. Im Wesentlichen kommt es hier auf die "richtige Mischung" an, den ausgewogenen Einsatz von Content Marketing, Social Media
      aber auch "echten" Veranstaltungen und Events. Nicht zu vergessen die unendlichen Möglichkeiten im Bereich Displaywerbung und Search Engine Marketing. Wir
      sorgen für einen ausgewogenen Mix der Möglichkeiten - und damit für gute Ergebnisse!
    </p>
    <p>
      Dabei haben wir stets den gesamten Prozess im Fokus - denn auch die Balance zwischen Quantität und Qualität muss sichergestellt werden. Viele
      unqualifizierte Leads sind vielleicht auf den ersten Blick ein gutes Ergebniss - aber spätestens beim Versuch diese zu konvertieren, holt einen die
      Realität ein. Daher versuchen wir stets, einen effizienten <a title="Lead Management" href="/de/topics/marketing/lead-management">Lead Management</a> Prozess
      aufzubauen, der am Ende auch die gewünschte Leadqualität liefert. Dies erleichtert die Arbeit für ihr Sales-Team und spart zugleich Kosten.<br />
    </p>
    <p>
      STRATECO bietet Ihnen mehr als 10 Jahre Erfahrung im Bereich Leadgenerierung. Von der Strategie bis zur Umsetzung, im B2B und B2C-Bereich,
      branchenübergreifend und in ganz Europa. Unsere Kompetenz ist dabei Ihr Wettbewerbsvorteil!
    </p>
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
    <h3>Testzugang</h3>
    <p>Fordern Sie gleich Ihren Testzugang an und erleben Sie Leadgenerierung live und direkt.</p>
    <h3>Einsatzbereiche</h3>
    <p>
      <strong>B2B-Leadgenerierung</strong><br /> Gerade im B2B-Bereich ist statt dem "Giesskannen-Prinzip" eine sehr individuelle Vorgehensweise gefragt. STRATECO
      ist spezialisiert auf effektives Content-Marketing. Die Möglichkeiten sind dabei nahezu unbegrenzt:
    </p>
    <p>+ Studien und Whitepapers</p>
    <p>+ Webinare und Videoclips<br /></p>
    <p>+ Events und Messen</p>
    <p>+ Microsites und Landingpages</p>
    <p>+ Telemarketing<br /></p>
    <p>
      Entscheidend ist, alle Tools und Medien dabei richtig auf Ihre Zielgruppe abzustimmen und miteinander zu kombinieren. STRATECO entwickelt dies alles aus
      einer Hand und unter Einsatz modernster Technologien. So können Sie sich darauf verlassen, dass Ihre Botschaft auch bei allen Interessenten richtig
      ankommt. Das Ergebnis zeigt sich an der Reaktion!<br />
    </p>
    <p>
      <strong>B2C-Leadgenerierung</strong><br /> Egal ob Social Media oder klassische Bannerwerbung - wir mobilisieren Ihre Zielgruppe. Dafür arbeiten wir mit einem
      leistungsfähigen Partnernetzwerk zusammen, so dass auch groß angelegte Kampagnen in den richtigen Kanälen landen und Gewinnspiele durchschlagenden Erfolg bringen.
      Fordern Sie uns heraus!
    </p>
    <h3>Aktuelle Studien</h3>
    <blockquote>
      <p>
        Social Media wird derzeit noch kaum zur Leadgenerierung genutzt. Lediglich 20 Prozent der Befragten einer aktuellen Studie von <a
          href="https://www.yougov.de"
          target="_blank">Yougov</a
        >
        und <a href="https://www.eloqua.com" target="_blank">Eloqua</a> nutzen Social Media bereits Lead-Generierung. 72 Prozent geht es in erster Linie darum,
        die Bekanntheit von Marke und Unternehmen zu steigern.<br />
      </p>
    </blockquote>
    <p>
      <strong>Quelle: Haufe Media</strong><a
        title="Haufe Media"
        href="https://www.haufe.de/marketing-vertrieb/online-marketing/vertrieb-social-media-werden-selten-zur-lead-generierung-genutzt_132_143510.html"
        target="_blank">"Social Media werden selten zur Lead-Generierung genutzt"</a
      >
    </p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
