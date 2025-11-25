<script lang="ts">
  let { children, type = 'default' } = $props();
</script>

{#if type === 'default'}
  <section class="base-section">
    <div class="inner-container">
      {@render children?.()}
    </div>
  </section>
{/if}

<style lang="postcss">
  @reference '../../app.css';
  section.base-section {
    @apply relative w-full max-w-7xl px-10 m-auto -mt-36;

    .inner-container {
      @apply bg-white rounded-tr-md rounded-tl-md shadow-2xl px-12 pt-8 pb-16;
    }
  }
</style>
