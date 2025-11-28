<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['expertise.processes.title']()}</title>
  <meta name="description" content={m['expertise.processes.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.expertise.processes']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['navigation.expertise.processes']()}</h2>

    <p>
      Effiziente Prozesse sind der Schlüssel zum Erfolg. STRATECO analysiert Ihre bestehenden Abläufe und entwickelt optimierte Prozesslandschaften, die Ihre
      Organisation nachhaltig stärken.
    </p>
    <p>Wir kombinieren bewährte Methoden mit innovativen Ansätzen, um Ihre Prozesse schlank, effektiv und zukunftssicher zu gestalten.</p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
