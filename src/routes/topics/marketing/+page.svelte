<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.marketing']()} description={m['topics.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.topics.marketing']()}</h1>

    <p>
      Modernes Marketing erfordert die richtige Balance zwischen Kreativität und datengetriebenen Entscheidungen. 
      STRATECO unterstützt Sie bei der Entwicklung und Umsetzung erfolgreicher Marketingstrategien.
    </p>
    <p>
      Von der Markenpositionierung über digitale Marketingkampagnen bis hin zur Marketing-Automation – wir helfen 
      Ihnen, Ihre Zielgruppen effektiv zu erreichen und messbare Geschäftsergebnisse zu erzielen.
    </p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
</Section>
