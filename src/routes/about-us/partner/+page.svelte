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
  <title>{m['aboutUs.partner.title']()}</title>
  <meta name="description" content={m['aboutUs.partner.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['aboutUs.partner.title']()} description={m['aboutUs.partner.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['aboutUs.partner.title']()}</h2>
    {@html m['aboutUs.partner.text']()}
  </div>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
