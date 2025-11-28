<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['topics.marketing.marketingAsAService.title']()}</title>
  <meta name="description" content={m['topics.marketing.marketingAsAService.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['navigation.topics.marketingAsAService']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.topics.marketingAsAService']()}</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus vel quasi dolores, aliquid impedit a. Possimus, optio adipisci, cupiditate explicabo
      nisi rerum, amet itaque vel ab qui iste asperiores nesciunt.
    </p>
  </div>

  <a href={localizeHref('/topics/marketing')}>Zurück zu Übersicht</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
