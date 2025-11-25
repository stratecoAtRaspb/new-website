<script lang="ts">
  import { resolve } from '$app/paths';
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import StageSlider from '$lib/components/stage-slider.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { setLocale, localizeHref, getLocale } from '$lib/paraglide/runtime';
</script>


<StageSlider></StageSlider>

<!-- <Stage style={'front-page'}>
  <div class="bg-deepGreen/70 mb-16 ml-auto h-40 w-64"></div>
  <div class="bg-darkGrey/80 h-48 w-full"></div>
</Stage> -->

{#snippet left()}
  <div class="prose">
    <h2>{m['about.title']()}</h2>
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
{/snippet}

{#snippet right()}
  <div class="card bg-base-100 card-md w-full shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Medium Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div class="card bg-base-100 card-md w-full shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Medium Card</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
{/snippet}

<Section type={'extended'}>
  <BasicContentArea {left} {right} hideBreadCrumb={true}/>
</Section>

<style lang="postcss">
  @reference '../app.css';
</style>
