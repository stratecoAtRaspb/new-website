<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.aboutUs.career']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.aboutUs.career']()}</h1>

    <p>
      STRATECO bietet ambitionierten Talenten vielfältige Karrieremöglichkeiten in einem dynamischen Umfeld. Bei uns können Sie an spannenden Projekten
      arbeiten, von erfahrenen Kollegen lernen und Ihre Karriere aktiv gestalten.
    </p>
    <p>
      Wir suchen Menschen mit Begeisterung für Beratung, analytischem Denkvermögen und dem Willen, gemeinsam Außergewöhnliches zu leisten. Werden Sie Teil
      unseres Teams und gestalten Sie die Zukunft mit uns!
    </p>
  </div>
  <a href={localizeHref('/about-us')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
