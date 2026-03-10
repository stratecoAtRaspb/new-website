<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>{m.expertise_financialInstitution_title()}</title>
  <meta name="description" content={m.expertise_financialInstitution_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.navigation_expertise_financialInstitution()} description={m.aboutUs_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.navigation_expertise_financialInstitution()}</h2>

    <p>
      STRATECO verfügt über tiefgreifende Expertise im Finanzsektor. Wir unterstützen Banken, Versicherungen und andere Finanzdienstleister bei der Bewältigung
      regulatorischer Anforderungen und der digitalen Transformation.
    </p>
    <p>
      Von Risikomanagement über Compliance bis hin zu Customer Experience – wir kennen die spezifischen Herausforderungen der Finanzbranche und entwickeln
      maßgeschneiderte Lösungen für nachhaltigen Erfolg.
    </p>
  </div>

  <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
  <a href={ resolve(localizeHref('/expertise') as any) }>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
