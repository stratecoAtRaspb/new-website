<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m.topics_financeAndControlling_intranet_title()}</title>
  <meta name="description" content={m.topics_financeAndControlling_intranet_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.navigation_topics_intranet()} description={m.aboutUs_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.navigation_topics_intranet()}</h2>
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
