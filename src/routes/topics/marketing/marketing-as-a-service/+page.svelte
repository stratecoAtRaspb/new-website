<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.marketingAsAService']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.marketingAsAService']()}</h1>
<p>Weil in vielen Projekten Beratung und Umsetzung aus einer Hand gefragt ist, haben wir ein ganzes Marketing-Team dafür aufgebaut. STRATECO unterstützt Sie von der Kampagne bis zum ganzheitlichen Outsourcing.</p> <h3>Wie hätten Sie es denn gerne? <br /></h3> <p>Immer dann, wenn alle Komponenten richtig aufeinander abgestimmt sind, entfaltet sich die Wirkung am besten. So verstehen wir bei STRATECO auch unseren Ansatz des ganzheitlichen Marketings. Und liefern Ihnen alle dafür notwendigen Komponenten aus einer Hand.<br /><br /> Jeder Kunde ist dabei individuell – und bringt individuelle Herausforderungen mit sich. Wir denken uns in Ihre Situation hinein, berücksichtigen Ihre Prozesse und Anforderungen und entwickeln eine maßgeschneiderte Lösung. Von der Konzeption bis zur Umsetzung. Über alle sinnvollen Kanäle und unter Einsatz aller hilfreichen Technologien. Schritt für Schritt. Dabei haben wir ständig Ihre Ziele im Visier!</p> <p><a href="/Frontend/Images/imagesBig/Marketingportfolio.jpg" rel="bigImage"><img style="margin: 17px 0 17px 0;" onmouseover="this.src='/media/061954a6-4eb3-4f38-a06b-8e3e87a6faaa/Marketingportfolio-hover_jpg'" onmouseout="this.src='/media/7f2bc64c-6747-49d6-b703-efa38ae88c78/outsourcing_smal_final2_jpg'" src="/media/7f2bc64c-6747-49d6-b703-efa38ae88c78/outsourcing_smal_final2_jpg" width="555" data-mce-style="margin: 17px 0 17px 0;" /></a></p> <p>Manchmal lässt sich auch mit kleinem Aufwand ein großer Effekt erzielen. Die „Wahl der Waffen“ ist meist entscheidend für den Erfolg von Kampagnen. Deswegen sind wir bei allen aktuellen Themen stets vorne dabei – egal ob „social networks“ oder „mobile marketing“. Unsere ausgeprägte Technologie-Kompetenz hilft uns dabei, Ihr Produkt besser zu verstehen, Ihre Botschaft effektiv zu kommunizieren und die richtigen Zielgruppen zu erreichen.</p> <p>STRATECO hilft Ihnen dabei, Ihre Schlagkraft im Marketing zu verbessern. Bei einzelnen Kampagnen oder ganzheitlich, in einzelnen Regionen oder europaweit. Unsere Kompetenz ist dabei Ihr Wettbewerbsvorteil!</p> <h3>Themen</h3> <ul><li><a title="Marketing as a Service" href="/Themen/Marketing/Marketing-as-a-Service">Marketing as a Service</a></li> <li><a title="Leadgenerierung" href="/Themen/Marketing/Leadgenerierung">Leadgenerierung</a></li> <li><a title="Lead Management" href="/Themen/Marketing/Lead-Management">Lead Management</a></li> <li><a title="Marketing Automation" href="/Themen/Marketing/Marketing-Automation">Marketing Automation</a></li> <li><a title="Behavioural Marketing" href="/Themen/Marketing/Behavioural-Marketing">Behavioural Marketing</a></li> <li><a title="Customer Relationship Management" href="/Themen/Marketing/Customer-Relationship-Management">Customer Relationship Management</a></li> <li><a title="Instant Magazine" href="/page(8fa6873a-6656-4444-b287-7416f4aaa68a)">Instant Magazine</a></li></ul> <h3>Expertengespräch</h3> <p>Vereinbaren Sie hier ganz unkompliziert einen Termin zu Ihrem persönlichen Expertengespräch.</p> <h3>Rückruf anfordern</h3> <p>Ihr persönlicher Ansprechpartner Kristian Setzer wird Sie zu einem gewünschten Zeitpunkt zurückrufen.</p> <h3>Vorteile</h3> <p>Nutzen Sie uns einfach als "verlängerte Werk- bank" um auf Kapazitätsschwankungen zu reagieren oder Engpässe zu lösen.<br /></p> <p>Wir entlasten Sie vom Routinegeschäft -<br /> So können Sie sich auf das Wesentliche konzentrieren.<br /></p> <p>Bei STRATECO finden Sie ein eingespieltes Team sowie modernste Technologien - und zahlen nur dann, wenn Sie es benötigen.<br /></p> <h3>Kundenstimmen</h3> <blockquote><p>STRATECO ist für uns wie ein erweitertes Marketing-Team. Dadurch können wir Programme und Kampagnen im Rahmen unser Geschäftsanforderungen jederzeit schnell und flexibel umsetzen. Am wichtigsten ist für uns dabei, dass STRATECO sich unserer Projekte so annimmt, als wären es ihre eigenen. Die intensive Auseinandersetzung mit unseren Produkten, Märkten und Kunden sichert jederzeit exzellente Ergebnisse. Ich kann STRATECO nur uneingeschränkt weiterempfehlen - für Marketing Projekte aller Art, sogar europaweit!.<br /></p></blockquote> <p><strong>Anita Marsh, Director Online Marketing EMEA, Concur Technologies <br /></strong></p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
