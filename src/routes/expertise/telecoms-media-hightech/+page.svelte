<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.telecomsMediaAndHighTech']()} description={m['about.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.expertise.telecomsMediaAndHighTech']()}</h1>

    <p>
      In den schnelllebigen Branchen Telekommunikation, Medien und High-Tech unterstützt STRATECO Unternehmen dabei, 
      mit dem rasanten Wandel Schritt zu halten und Wettbewerbsvorteile zu sichern.
    </p>
    <p>
      Von Digitalisierungsstrategien über Produktinnovation bis hin zur Kundenzentrierung – wir helfen Ihnen, 
      in diesen dynamischen Märkten erfolgreich zu sein.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
</Section>
