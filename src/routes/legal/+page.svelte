<script lang="ts">
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['legal.title']()}</title>
  <meta name="description" content={m['legal.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['legal.introTitle']()} description={m['legal.introDescription']()}></IntroBox>
</Stage>

<Section>
  <Breadcrumb />
  <div class="prose mt-4">
    <h2>{m['legal.title']()}</h2>

    <p>
      STRATECO ist eine Unternehmensberatung, die seit mehr als 20 Jahren führende Unternehmen dabei unterstützt, anstehende Herausforderungen zu meistern. Von
      der Strategie über Prozesse bis hin zur Umsetzung erzielen wir Höchstleistungen für unsere Kunden.
    </p>
    <p>
      In mehr als 500 Projekten aus den Bereichen Marketing und Sales, Finance und Controlling haben wir für über 80 Unternehmen aus verschiedensten Branchen
      immer nur ein Ziel gehabt: Exzellente Ergebnisse zu erreichen. Ihre Ziele werden stets zu unseren Zielen, Ihr Erfolg wird zu unserem Ansporn.
    </p>
    <p>
      Wie wir das schaffen? Mit den besonderen Menschen, die hinter STRATECO stehen. Mit einer einzigartigen Mischung aus Leidenschaft und Fachkompetenz. Mit
      Erfahrung und erprobter Methodik. Daraus formen wir maßgeschneiderte Lösungen für unsere Kunden!
    </p>
    <p>Deswegen haben wir auch das Leistungsversprechen von STRATECO zum Leitsatz gemacht: Unsere Kompetenz ist Ihr Wettbewerbsvorteil!</p>
  </div>

  <a href={localizeHref('/')}>Zurück</a>
</Section>
