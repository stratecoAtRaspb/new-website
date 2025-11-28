<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['topics.aos.managementCoaching.introTitle']()} description={m['topics.aos.managementCoaching.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['topics.aos.managementCoaching.title']()}</h1>
<p>Die einzigartige Kombination aus fachlicher Branchenexpertise und langjähriger Coaching Erfahrung begründet den Erfolg unserer Coaching Methodik.<br /> Wir verwandeln Ihre Herausforderungen in operationale Arbeitspakete!</p> <h3>Weil Menschen Entscheidungen treffen... <br /></h3> <p>Nicht Unternehmen bestimmen ihren Weg - sondern deren Mitarbeiter. Durch viele Entscheidungen, die sie tagtäglich treffen. Wir unterstützen ihre Mitarbeiter dabei, RICHTIG zu entscheiden. Mit unserer Methodik entwickeln wir Ihre Führungskräfte und Mitarbeiter zu Persönlichkeiten, die jederzeit verantwortungsbewusst handeln und auch die fortwährende Veränderung im Unternehmensalltag spielend meistern. Dabei nutzen Sie gezielt eigene Stärken - und arbeiten aktiv an ihren Schwächen. Unser PERSONAL COACHING kanalisiert dies in einem konstruktiven Prozess, der den grössten Wert in ihrem Unternehmen NOCH wertvoller macht: Ihre Mitarbeiter!</p> <h3>Weil fortwährende Veränderung die einzige Konstante ist...</h3> <p>Veränderungen gehören zum Unternehmensalltag - daher kommt dem CHANGE MANAGEMENT eine entscheidende Rolle im Unternehmen zu. Wir helfen Ihnen dabei, CHANGE erfolgreich zu gestalten. Denn Change braucht verantwortungsbewusste Führungskräfte und eine weitsichtige, klare Prozessgestaltung, in die auch die Mitarbeiter und Teams integriert werden können. Dies beginnt bei Kommunikations- und Informationsmodellen - und hört bei Teambildung und -förderung noch lange nicht auf. Damit Sie neben dem "Daily Business" diese Herausforderungen meistern können, ohne dabei die für viele Entscheidungen notwendige Objektivität zu verlieren, entwickeln wir gerne ein massgeschneidertes Konzept für Sie!</p> <h3>Weil individuelle Lösungen gefragt sind... <br /></h3> <p>Jede Organisation steht vor individuellen Herausforderungen. Unser Portfolio umfasst verschiedene Leistungsmodule, aus denen wir Ihnen ein maßgeschneidertes Konzept entwickeln können:</p> <ul><li>Personal Coaching - individuelle Persönlichkeitsentwicklung für Mitarbeiter und Führungskräfte</li> <li>Team Coaching - stabile und effiziente Teams formen und deren Zusammenspiel optimieren</li> <li>Change Management - Konzeption und Durchführung von Veränderungsprozessen in Teams und Organisationen <br /></li> <li>Präsentationstraining - aus Inhalt, Form und persönlichem Stil einen bemerkenswerten Gesamtauftritt entwickeln</li></ul> <h3>Konzept entscheidet! <br /></h3> <p>Die <strong>BodyBasedManagement©</strong> Methode bietet Ihnen umfassendes und professionelles Handwerkszeug für die professionelle und angewandte Kommunikation, um in den unterschiedlichsten beruflichen Situationen sicher und kompetent zu sein. BBM funktioniert unabhängig von allen Management-Richtungen.<br /><br /> Kriterien aus Kopf, Körper, Raum und Richtung ermöglichen Perspektivenwechsel und bilden die Basis für konstruktive Handlungsmöglichkeiten und einen strategischen Umgang mit der Eigen- und Fremdwahrnehmung.<br /><br /> Unser Coaching Team im Hause STRATECO wird geleitet von Frau Nanna Rüster - Senior Business Coach und zertifizierter Personal Coach.</p> <h3>Jetzt neu bei STRATECO:</h3> <p>Spezielles Training für Ihre webgestützte Kommunikation. Wir machen Sie fit für Ihr nächstes Webinar - mit kompetentem und persönlichem Team. Gönnen Sie sich ein Update und testen Sie unsere <a target="_blank" href="http://www.webinartraining.de">Webinar-Trainings</a> auf www.webinartraining.de!</p> <h3>Kundenstimmen</h3> <blockquote><p>Ein guter Coach ist wie ein Sparrings-Partner der einem hilft, auch in kritischen Situation objektiv das Richtige zu tun und gute Entscheidungen zu treffen. Meine Erwartungen wurden voll erfüllt!</p></blockquote> <p><strong>Ingrid Johnson - Head of Revenue Management, Steigenberger Hotel Group</strong></p>
  </div>

  <a href={localizeHref('/topics/aos')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
