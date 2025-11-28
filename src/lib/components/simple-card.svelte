<script lang="ts">
  import { goto } from "$app/navigation";
  import { localizeHref } from "$lib/paraglide/runtime";

  let {
    headline = 'Awesome Heading',
    text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    ctaText = null,
    ctaTarget = null,
    image = null
  } = $props();
</script>

<div class="card card-md w-full shadow-sm">
  <div class="card-body">
    <h3 class="card-title">{headline}</h3>
    {#if image && image !== ''}
      <img class="mb-2 w-full rounded-lg" src="{image}" alt="{headline}" />
    {/if}
    <p>{text}</p>
    {#if ctaText && ctaText !== ''}
    <div class="card-actions mt-2 justify-end">
      <button
        class="btn btn-basic"
        onclick={() => {
          goto(localizeHref(ctaTarget));
        }}>{ctaText}</button>
    </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';

  .card-body {
    h3.card-title {
      @apply pb-3;
    }
    p {
      @apply text-base;
    }
  }
</style>