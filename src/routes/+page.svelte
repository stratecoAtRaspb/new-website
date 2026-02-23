<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import QuoteCard from '$lib/components/quote-card.svelte';
  import Section from '$lib/components/section.svelte';
  import SimpleCard from '$lib/components/simple-card.svelte';
  import StageSlider from '$lib/components/stage-slider.svelte';
  import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>{m.home_title()}</title>
  <meta name="description" content={m.home_title()} />
</svelte:head>

<StageSlider></StageSlider>

{#snippet left()}
  <div class="prose">
    <h2>{m.home_title()}</h2>
    <div class="prose">
      {@html m.home_text()}
    </div>
  </div>
{/snippet}

{#snippet right()}
  <QuoteCard quote={m.home_quote_text()} author={m.home_quote_author()} role={m.home_quote_role()} image={'/images/goethe.jpg'} />
  <SimpleCard
    headline={m.home_sideBarCard_title()}
    text={m.home_sideBarCard_text()}
    image={'/images/sidebar-img.jpg'}
    ctaText={m.home_sideBarCard_ctaText()}
    ctaTarget={'/contact'}
  />
{/snippet}

<Section type={'extended'}>
  <BasicContentArea {left} {right} hideBreadCrumb={true} />
</Section>
