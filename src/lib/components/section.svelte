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
    @apply relative z-20 m-auto -mt-24 flex w-full max-w-7xl grow flex-col items-stretch px-4 md:-mt-36 md:px-6 xl:px-10;

    .inner-container {
      @apply h-full grow rounded-tl-md rounded-tr-md bg-white px-6 pt-8 pb-16 shadow-2xl md:px-12;
    }
  }
  section.master-base-section {
    @apply relative z-20 m-auto flex h-full w-full max-w-7xl grow flex-col items-stretch px-4 md:px-6 xl:px-10;

    .inner-container {
      @apply flex h-full grow items-center justify-center rounded-tl-md rounded-tr-md bg-white px-6 pt-8 pb-16 shadow-2xl md:px-12;
    }
  }

  section.extended-base-section {
    @apply relative z-20 m-auto -mt-72 w-full max-w-7xl px-4 md:-mt-[450px] md:px-6 xl:px-10;

    .inner-container {
      @apply mt-8 rounded-tl-md rounded-tr-md bg-white px-6 pt-8 pb-16 shadow-2xl md:px-12;
    }
  }
</style>
