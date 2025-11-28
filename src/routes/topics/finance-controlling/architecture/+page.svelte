<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.financeAndControlling.architecture.title']()}</title>
  <meta name="description" content={m['topics.financeAndControlling.architecture.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.architecture']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.topics.architecture']()}</h1>
    <p>Hier kommt ein kurzer Introtext/Beschreibungstext hin...</p>
    <h3>Headline</h3>
    <p>Hier kommen noch Inhalte hin...</p>
    <p>Hier kommen noch Inhalte hin...</p>
  </div>

  <a href={localizeHref('/topics/finance-controlling')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
