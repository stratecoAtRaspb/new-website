<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.ras']()} description={m['topics.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.topics.ras']()}</h1>

    <p>
      Risk Advisory Services (RAS) von STRATECO helfen Ihnen, Risiken frühzeitig zu identifizieren, zu bewerten 
      und effektiv zu managen. In einer zunehmend komplexen Geschäftswelt ist professionelles Risikomanagement 
      unverzichtbar.
    </p>
    <p>
      Wir unterstützen Sie bei der Entwicklung und Implementierung ganzheitlicher Risk-Management-Frameworks, 
      der Identifikation von Compliance-Risiken und der Etablierung wirksamer Kontrollsysteme für nachhaltigen 
      Unternehmenserfolg.
    </p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
</Section>
