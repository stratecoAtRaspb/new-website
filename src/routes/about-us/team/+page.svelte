<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import QuoteCard from '$lib/components/quote-card.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['aboutUs.team.title']()}</title>
  <meta name="description" content={m['aboutUs.team.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['aboutUs.team.introTitle']()} description={m['aboutUs.team.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['aboutUs.team.title']()}</h2>
    {@html m['aboutUs.team.text']()}
  </div>
{/snippet}

{#snippet right()}
  <QuoteCard quote={m['aboutUs.team.quote.text']()} author={m['aboutUs.team.quote.author']()} />
{/snippet}

<Section>
  <BasicContentArea {left} {right} />
</Section>
