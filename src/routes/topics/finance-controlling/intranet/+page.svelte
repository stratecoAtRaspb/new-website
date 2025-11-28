<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.intranet']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
<div class="prose">
    <h1>{m['navigation.topics.intranet']()}</h1>
<p>Hier kommt ein kurzer Introtext/Beschreibungstext hin...</p> <h3>Headline</h3> <p>Hier kommen noch Inhalte hin...</p> <p>Hier kommen noch Inhalte hin...</p>
  </div>

  <a href={localizeHref('/topics/finance-controlling')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
