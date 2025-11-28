<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['expertise.financialInstitution.title']()}</title>
  <meta name="description" content={m['expertise.financialInstitution.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.expertise.financialInstitution']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.expertise.financialInstitution']()}</h1>

    <p>
      STRATECO verfügt über tiefgreifende Expertise im Finanzsektor. Wir unterstützen Banken, Versicherungen und andere Finanzdienstleister bei der Bewältigung
      regulatorischer Anforderungen und der digitalen Transformation.
    </p>
    <p>
      Von Risikomanagement über Compliance bis hin zu Customer Experience – wir kennen die spezifischen Herausforderungen der Finanzbranche und entwickeln
      maßgeschneiderte Lösungen für nachhaltigen Erfolg.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
