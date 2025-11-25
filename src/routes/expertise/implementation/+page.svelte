<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.implementation']()} description={m['about.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.expertise.implementation']()}</h1>

    <p>
      Von der Konzeption zur erfolgreichen Umsetzung – STRATECO begleitet Sie bei der Implementierung Ihrer Projekte. 
      Wir sorgen dafür, dass Strategien und Konzepte in der Praxis wirksam werden.
    </p>
    <p>
      Mit praxiserprobten Methoden und erfahrenen Experten stellen wir sicher, dass Ihre Vorhaben termingerecht, 
      im Budget und mit messbarem Erfolg realisiert werden.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
</Section>
