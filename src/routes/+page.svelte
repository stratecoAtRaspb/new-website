<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import QuoteCard from '$lib/components/quote-card.svelte';
  import Section from '$lib/components/section.svelte';
  import SimpleCard from '$lib/components/simple-card.svelte';
  import StageSlider from '$lib/components/stage-slider.svelte';
  import { m } from '$lib/paraglide/messages';
</script>

<svelte:head>
  <title>{m['home.title']()}</title>
  <meta name="description" content={m['home.title']()} />
</svelte:head>

<StageSlider></StageSlider>

{#snippet left()}
  <div class="prose">
    <h2>{m['home.title']()}</h2>
    <div class="prose">
      {@html m['home.text']()}
    </div>
  </div>
{/snippet}

{#snippet right()}
  <QuoteCard quote={m['home.quote.text']()} author={m['home.quote.author']()} role={m['home.quote.role']()} image={'/images/goethe.jpg'} />
  <SimpleCard
    headline={m['home.sideBarCard.title']()}
    text={m['home.sideBarCard.text']()}
    image={'/images/sidebar-img.jpg'}
    ctaText={m['home.sideBarCard.ctaText']()}
    ctaTarget={'/contact'}
  />
{/snippet}

<Section type={'extended'}>
  <BasicContentArea {left} {right} hideBreadCrumb={true} />
</Section>
