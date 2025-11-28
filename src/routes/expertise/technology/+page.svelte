<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.technology']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.expertise.technology']()}</h1>

    <p>
      Technologie als Enabler für geschäftlichen Erfolg – STRATECO berät Sie bei der Auswahl, Einführung und Optimierung modernster Technologielösungen für Ihr
      Unternehmen.
    </p>
    <p>
      Wir verbinden tiefes Technologie-Know-how mit Geschäftsprozess-Expertise, um sicherzustellen, dass IT-Investitionen echten Mehrwert schaffen und Ihre
      strategischen Ziele unterstützen.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
