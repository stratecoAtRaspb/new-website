<script lang="ts">
  import { page } from '$app/state';
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
  <title>{m['expertise.title']()}</title>
  <meta name="description" content={m['expertise.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['expertise.introTitle']()} description={m['expertise.introDescription']()}></IntroBox>
</Stage>

<Section>
  <Breadcrumb />
  <div class="prose">
    <h2>{m['expertise.title']()}</h2>
    <div class="prose">
      {@html m['expertise.text']()}
    </div>
  </div>

  <div class="divider"></div>

  <div class="flex flex-row gap-10 pt-4 md:gap-20">
    <div class="prose basis-sm">
      <h3>{m['expertise.sectionHeadline1']()}</h3>
      <ul class="linklist">
        <li><a href={localizeHref('/expertise/strategy')}>{m['navigation.expertise.strategy']()}</a></li>
        <li><a href={localizeHref('/expertise/processes')}>{m['navigation.expertise.processes']()}</a></li>
        <li><a href={localizeHref('/expertise/implementation')}>{m['navigation.expertise.implementation']()}</a></li>
        <li><a href={localizeHref('/expertise/people')}>{m['navigation.expertise.people']()}</a></li>
        <li><a href={localizeHref('/expertise/technology')}>{m['navigation.expertise.technology']()}</a></li>
      </ul>
    </div>
    <div class="prose basis-sm">
      <h3>{m['expertise.sectionHeadline2']()}</h3>
      <ul class="linklist">
        <li><a href={localizeHref('/expertise/financial-institution')}>{m['navigation.expertise.financialInstitution']()}</a></li>
        <li><a href={localizeHref('/expertise/pharma-and-healthcare')}>{m['navigation.expertise.pharmaAndHealthcare']()}</a></li>
        <li><a href={localizeHref('/expertise/telecoms-media-hightech')}>{m['navigation.expertise.telecomsMediaAndHighTech']()}</a></li>
        <li><a href={localizeHref('/expertise/travel-transport-logistics')}>{m['navigation.expertise.travelTransportAndLogistics']()}</a></li>
        <li><a href={localizeHref('/expertise/other')}>{m['navigation.expertise.other']()}</a></li>
      </ul>
    </div>
  </div>
</Section>

<style lang="postcss">
  @reference '../../app.css';
  .divider {
    @apply mb-6 h-0.5 w-full bg-black/5;
  }
</style>
