<script lang="ts">
  import { resolve } from '$app/paths';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { setLocale, localizeHref, getLocale } from '$lib/paraglide/runtime';
</script>


<Stage style={"front-page"}>
  <div class="ml-auto w-64 bg-deepGreen/70 h-40 mb-16"></div>
  <div class="w-full bg-darkGrey/80 h-48"></div>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['about.title']()}</h1>

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
</Section>