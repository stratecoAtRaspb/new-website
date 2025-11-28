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
  <title>{m['aboutUs.title']()}</title>
  <meta name="description" content={m['aboutUs.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['aboutUs.introTitle']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['aboutUs.title']()}</h2>
    <div class="prose">
      {@html m['aboutUs.text']()}
    </div>
  </div>
{/snippet}
{#snippet right()}{/snippet}

<Section>
  <BasicContentArea {left} {right} />
</Section>
