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
  <title>{m.expertise_title()}</title>
  <meta name="description" content={m.expertise_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.expertise_introTitle()} description={m.expertise_introDescription()}></IntroBox>
</Stage>

<Section>
  <Breadcrumb />
  <div class="prose">
    <h2>{m.expertise_title()}</h2>
    <div class="prose">
      {@html m.expertise_text()}
    </div>
  </div>

  <div class="divider"></div>

  <div class="flex flex-row gap-10 pt-4 md:gap-20">
    <div class="prose basis-sm">
      <h3>{m.expertise_sectionHeadline1()}</h3>
      <ul class="linklist">
        <li><a href={localizeHref('/expertise/strategy')}>{m.navigation_expertise_strategy()}</a></li>
        <li><a href={localizeHref('/expertise/processes')}>{m.navigation_expertise_processes()}</a></li>
        <li><a href={localizeHref('/expertise/implementation')}>{m.navigation_expertise_implementation()}</a></li>
        <li><a href={localizeHref('/expertise/people')}>{m.navigation_expertise_people()}</a></li>
        <li><a href={localizeHref('/expertise/technology')}>{m.navigation_expertise_technology()}</a></li>
      </ul>
    </div>
    <div class="prose basis-sm">
      <h3>{m.expertise_sectionHeadline2()}</h3>
      <ul class="linklist">
        <li><a href={localizeHref('/expertise/financial-institution')}>{m.navigation_expertise_financialInstitution()}</a></li>
        <li><a href={localizeHref('/expertise/pharma-healthcare')}>{m.navigation_expertise_pharmaAndHealthcare()}</a></li>
        <li><a href={localizeHref('/expertise/telecoms-media-hightech')}>{m.navigation_expertise_telecomsMediaAndHighTech()}</a></li>
        <li><a href={localizeHref('/expertise/travel-transport-logistics')}>{m.navigation_expertise_travelTransportAndLogistics()}</a></li>
        <li><a href={localizeHref('/expertise/other')}>{m.navigation_expertise_other()}</a></li>
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
