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
  <title>{m.expertise_technology_title()}</title>
  <meta name="description" content={m.expertise_technology_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.navigation_expertise_technology()} description={m.aboutUs_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.navigation_expertise_technology()}</h2>

    <p>
      Technologie als Enabler für geschäftlichen Erfolg – STRATECO berät Sie bei der Auswahl, Einführung und Optimierung modernster Technologielösungen für Ihr
      Unternehmen.
    </p>
    <p>
      Wir verbinden tiefes Technologie-Know-how mit Geschäftsprozess-Expertise, um sicherzustellen, dass IT-Investitionen echten Mehrwert schaffen und Ihre
      strategischen Ziele unterstützen.
    </p>
  </div>

  <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
  <a href={ resolve(localizeHref('/expertise') as any) }>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
