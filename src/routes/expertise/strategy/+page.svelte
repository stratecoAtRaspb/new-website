<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import QuoteCard from '$lib/components/quote-card.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>{m.expertise_strategy_title()}</title>
  <meta name="description" content={m.expertise_strategy_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.expertise_strategy_introTitle()} description={m.expertise_strategy_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.expertise_strategy_title()}</h2>
    <div class="prose">
      {@html m.expertise_strategy_text()}
    </div>
  </div>
{/snippet}
{#snippet right()}
  <QuoteCard
    quote="In Dir muss brennen, was Du in anderen entzünden willst !"
    author="Augustinus von Hippo"
    role="Kirchenlehrer und Philosoph (354-430)"
    image="/images/augustinus-von-hippo.jpg"
  />
{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
