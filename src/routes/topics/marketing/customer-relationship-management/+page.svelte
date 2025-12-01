<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.customerRelationshipManagement.title']()}</title>
  <meta name="description" content={m['topics.marketing.customerRelationshipManagement.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.customerRelationshipManagement']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.topics.customerRelationshipManagement']()}</h2>
    <p>
      Erfolgreiches Customer Relationship Management (CRM) ist kein Zufallsprodukt - sondern bedarf einer konsequenten Strategie, die mit den richtigen
      Werkzeugen umgesetzt wird. Wie genau, das entwickeln wir gerne gemeinsam mit Ihnen!
    </p>
    <h3>Beziehungen sind alles - man muss sie nur richtig managen! <br /></h3>
    <p>
      CRM ist ein ganzheitlicher Ansatz zur Unternehmensführung, welcher alle kundenbezogenen Prozesse abteilungsübergreifend integriert. Die Philosophie
      beschreibt dabei die konsequente Ausrichtung einer Unternehmung auf ihre Kunden und die systematische Gestaltung der Kundenbeziehungsprozesse. Die dazu
      gehörende Dokumentation und Verwaltung von Kundenbeziehungen ist ein wichtiger Baustein und ermöglicht ein vertieftes Beziehungsmarketing. Dies geschieht
      in der Regel auf der Grundlage einer Datenbank mit einer entsprechenden Software zur Marktbearbeitung und anhand eines vorher definierten
      Verkaufsprozesses. Zielsetzung von CRM ist dabei die Schaffung von Mehrwerten auf Kunden- und Lieferantenseite im Rahmen von Geschäftsbeziehungen.
    </p>
    <p>
      <br /> In der Vergangenheit wurden häufig erhebliche Beträge in die Implementierung von Softwaresystemen und den Aufbau einer zentralen Kundendatenbank
      investiert. In vielen Fällen ist jedoch die Unternehmensphilosophie nicht in letzter Konsequenz auf den Aufbau und die Pflege von Kundenbeziehungen
      ausgerichtet. Dies führt immer wieder dazu,<br />
    </p>
    <ul>
      <li><p>...dass vorhandene Daten, Informationen nicht verwendet werden, um das Kundenerlebnis zu optimieren.</p></li>
      <li><p>...dass Kunden nicht entsprechend Ihres Werts für das Unternehmen betreut werden.</p></li>
      <li><p>...dass Dienst-/ Serviceleistungen nicht konsequent auf Kunden und deren Nutzen ausgelegt sind.</p></li>
      <li><p>...dass das Kundenerlebnis im Kontakt mit dem Unternehmen oder dessen Produkte suboptimal ist.</p></li>
    </ul>
    <h3>Was wir für Sie tun können:</h3>
    <p>
      Mit SC-CRM können wir sie von der Strategie bis zur Implementierung der erforderlichen Software begleiten. Wir können Ihnen helfen, Ihre CRM-Strategie zu
      schärfen als auch z.B. durch Change Management Projekte Ihre Unternehmensausrichtung auf den Kunden zu entwickeln. Bei der Umsetzung von
      Prozessanpassungen können wir sie von der Anforderungsaufnahme bis hin zur Implementierung unterstützen. Dabei nutzen wir unsere langjährige Erfahrung mit
      den führenden CRM-Systemen (Siebel, MS Dynamics CRM, salesforce.com). Nutzen Sie uns!<br /><br />
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
    <h3>Fallstudie</h3>
    <p>Fordern Sie hier die aktuellste Fallstudie zum Thema Customer Relationship Management an.</p>
    <h3>Ausprägungen</h3>
    <p>Nur wer seine Datenbestände richtig analysiert, kann seine Kunden auch richtig einschätzen - und geeignete Massnahmen planen!<br /></p>
    <p>
      Social Media Kanäle bringen eine neue Dimension in den Kundendialog. Richtig integriert, sind diese von unschätzbarem Wert für die Informationsgewinnung.<br
      />
    </p>
    <p>
      Durch Smartphones und Tablet-PC's ist das mobile Internet allgegenwärtig. Nutzen Sie diesen "direkten Draht" zum Kunden - oder unterstützen Sie Ihren
      Aussendienst mit den Informationen die er braucht! (<a href="https://www.computerwoche.de/a/das-business-kommt-in-bewegung,2514583" target="_blank"
        >siehe Computerwoche 12/2012</a
      >)<br />
    </p>
    <h3>CRM Trends 2013 <br /></h3>
    <blockquote>
      <p>
        Gegenwärtig gehen Analysten davon aus, dass etwa 80 Prozent der deutschen Firmen Software zum Management ihrer Kundenbeziehungen einsetzen. Allerdings
        nutzt nur etwa die Hälfte davon CRM-Software in Verbindung mit einer kundenorientierten Unternehmensstrategie. Der Grund: Viele Betriebe haben in der
        mittlerweile 14 Jahre andauernden Historie CRM lediglich als Softwarethema betrachtet und nur technisch umgesetzt. Die eigentlichen CRM-Ziele wie
        Kundenbindung und Neukundengewinnung - also messbare Ergebnisse - blieben hingegen auf der Strecke. (<a
          href="https://www.computerwoche.de/a/das-business-kommt-in-bewegung,2514583"
          target="_blank">siehe Computerwoche 12/2012</a
        >) Genau hier setzt STRATECO an, und hilft, vorhandene Systeme richtig zu nutzen und mit neuen Informationen wie
        <a href="/de/topics/cea/">Customer Experience Analytics (CEA)</a>
        anzureichern. So schaffen wir Wettbewerbsvorteile für Ihr Unternehmen.<br />
      </p>
    </blockquote>
    <p><strong>Quelle: Computerwoche 12/2012 <br /></strong></p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
