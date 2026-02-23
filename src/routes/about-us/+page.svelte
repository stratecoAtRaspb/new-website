<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m.aboutUs_title()}</title>
  <meta name="description" content={m.aboutUs_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.aboutUs_introTitle()} description={m.aboutUs_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.aboutUs_title()}</h2>
    <div class="prose">
      {@html m.aboutUs_text()}
    </div>
  </div>
{/snippet}
{#snippet right()}{/snippet}

<Section>
  <BasicContentArea {left} {right} />
</Section>
