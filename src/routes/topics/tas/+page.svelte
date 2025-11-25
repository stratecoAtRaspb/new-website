<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.tas']()} description={m['topics.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.topics.tas']()}</h1>

    <p>
      Transactions Advisory Services (TAS) von STRATECO unterstützen Sie bei allen Aspekten von Unternehmenstransaktionen – 
      von der Due Diligence über Bewertung bis zur Post-Merger-Integration.
    </p>
    <p>
      Unsere erfahrenen Berater begleiten Sie durch den gesamten M&A-Prozess und helfen Ihnen, Risiken zu minimieren 
      und Wertpotenziale zu maximieren. Mit fundierter Analyse und strategischer Expertise sichern wir den Erfolg 
      Ihrer Transaktionen.
    </p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
</Section>
