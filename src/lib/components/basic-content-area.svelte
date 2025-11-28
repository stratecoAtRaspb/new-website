<script lang="ts">
  import Breadcrumb from './breadcrumb.svelte';
  let { left, right, hideBreadCrumb = false } = $props();
</script>

<div class="basic-content-wrapper">
  {#if !hideBreadCrumb}
    <div class="bread-crumb-navigation">
      <Breadcrumb />
    </div>
  {/if}
  <div class="two-col-layout">
    <div class="left">{@render left?.()}</div>
    <div class="right">{@render right?.()}</div>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';
  .two-col-layout {
    @apply grid grid-cols-1 gap-10 md:grid-cols-12;

    .left {
      @apply md:col-span-8;
    }

    .right {
      @apply flex flex-col gap-8 md:col-span-4;
    }
  }
</style>
