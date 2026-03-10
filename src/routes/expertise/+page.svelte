<script lang="ts">
  import { page } from '$app/state';
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { resolve } from '$app/paths';
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
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/strategy') as any) }>{m.navigation_expertise_strategy()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/processes') as any) }>{m.navigation_expertise_processes()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/implementation') as any) }>{m.navigation_expertise_implementation()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/people') as any) }>{m.navigation_expertise_people()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/technology') as any) }>{m.navigation_expertise_technology()}</a></li>
      </ul>
    </div>
    <div class="prose basis-sm">
      <h3>{m.expertise_sectionHeadline2()}</h3>
      <ul class="linklist">
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/financial-institution') as any) }>{m.navigation_expertise_financialInstitution()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/pharma-healthcare') as any) }>{m.navigation_expertise_pharmaAndHealthcare()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/telecoms-media-hightech') as any) }>{m.navigation_expertise_telecomsMediaAndHighTech()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/travel-transport-logistics') as any) }>{m.navigation_expertise_travelTransportAndLogistics()}</a></li>
        <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
        <li><a href={ resolve(localizeHref('/expertise/other') as any) }>{m.navigation_expertise_other()}</a></li>
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
