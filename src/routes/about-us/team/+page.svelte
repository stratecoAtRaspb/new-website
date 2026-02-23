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
  <title>{m.aboutUs_team_title()}</title>
  <meta name="description" content={m.aboutUs_team_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.aboutUs_team_introTitle()} description={m.aboutUs_team_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.aboutUs_team_title()}</h2>
    {@html m.aboutUs_team_text()}
  </div>
{/snippet}

{#snippet right()}
  <QuoteCard quote={m.aboutUs_team_quote_text()} author={m.aboutUs_team_quote_author()} />
{/snippet}

<Section>
  <BasicContentArea {left} {right} />
</Section>
