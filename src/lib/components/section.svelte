<script lang="ts">
  import FeatureBox from './feature-box.svelte';

  let { children, type = 'default' } = $props();
</script>

{#if type === 'default'}
  <section class="base-section">
    <div class="inner-container">
      {@render children?.()}
    </div>
  </section>
{/if}
{#if type === 'master'}
  <section class="master-base-section">
    <div class="inner-container">
      {@render children?.()}
    </div>
  </section>
{/if}
{#if type === 'extended'}
  <section class="extended-base-section">
    <FeatureBox />
    <div class="inner-container">
      {@render children?.()}
    </div>
  </section>
{/if}

<style lang="postcss">
  @reference '../../app.css';
  section.base-section {
    @apply relative z-20 m-auto -mt-36 w-full max-w-7xl px-10;

    .inner-container {
      @apply rounded-tl-md rounded-tr-md bg-white px-12 pt-8 pb-16 shadow-2xl;
    }
  }
  section.master-base-section {
    @apply relative z-20 m-auto w-full max-w-7xl px-10;

    .inner-container {
      @apply rounded-tl-md rounded-tr-md bg-white px-12 pt-8 pb-16 shadow-2xl;
    }
  }

  section.extended-base-section {
    @apply relative z-20 m-auto -mt-[450px] w-full max-w-7xl px-10;

    .inner-container {
      @apply rounded-tl-md rounded-tr-md bg-white px-12 pt-8 pb-16 mt-8 shadow-2xl;
    }
  }
</style>
