<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.about.team']()} description={m['about.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.about.team']()}</h1>

    <p>
      Unser Team ist unser größtes Kapital. Bei STRATECO arbeiten erfahrene Berater, die ihre Expertise aus 
      verschiedensten Branchen und Projekten mitbringen und täglich mit Leidenschaft für unsere Kunden einsetzen.
    </p>
    <p>
      Diversität, Teamgeist und kontinuierliche Weiterentwicklung prägen unsere Unternehmenskultur. Gemeinsam 
      meistern wir die Herausforderungen unserer Kunden und schaffen nachhaltige Lösungen.
    </p>
  </div>

  <a href={localizeHref('/about-us')}>Zurück zu Über uns</a>
</Section>
