<script lang="ts">
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.financeAndControlling']()} description={m['topics.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.topics.financeAndControlling']()}</h1>

    <p>
      Effektives Finance & Controlling ist essenziell für fundierte Unternehmensentscheidungen. STRATECO unterstützt 
      Sie bei der Modernisierung und Optimierung Ihrer Finance-Prozesse und -Systeme.
    </p>
    <p>
      Von der Implementierung moderner Planungs- und Reporting-Tools über die Prozessoptimierung bis hin zur 
      Einführung von Business Intelligence --dark-grey wir machen Ihr Finance & Controlling fit für die Zukunft.
    </p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
</Section>

<style>
  .bread-crumb-navigation {
    width: 100%;
    background-color: #f9fafb;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
</style>
