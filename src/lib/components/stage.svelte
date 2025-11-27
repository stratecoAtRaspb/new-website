<script lang="ts">
  let { children, style = 'default' } = $props();
</script>

<section class={style}>
  <div class="outer-container">
    <div class="inner-container">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference '../../app.css';
  section {
    @apply -mt-30 flex flex-col items-center justify-start bg-gray-100;

    .outer-container {
      @apply max-w-wqhd m-auto w-full bg-cover bg-center bg-no-repeat pt-36;
      .inner-container {
        @apply m-auto w-full max-w-7xl px-10;
      }
    }

    &.default {
      .outer-container {
        @apply h-[474px];
        background-image: url('/images/city-bg.jpg');
        @media (width > 2500px) {
          mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
        }
      }
    }

    &.front-page {
      .outer-container {
        @apply flex h-[800px] items-end;
        background-image: url('/images/escalator-bg.jpg');
        @media (width > 2500px) {
          mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
        }
        .inner-container {
          @apply my-0 pb-42;
        }
      }
    }
  }
</style>
