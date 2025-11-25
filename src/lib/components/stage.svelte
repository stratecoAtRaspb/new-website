<script lang="ts">
  let { children, style = 'default' } = $props();
</script>

<section class="{style}">
  <div class="outer-container">
    <div class="inner-container">
      {@render children?.()}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference '../../app.css';
  section {
    @apply flex flex-col justify-start items-center bg-gray-100 -mt-30;

    .outer-container {
      @apply w-full max-w-wqhd m-auto bg-cover bg-no-repeat bg-center pt-36;
      .inner-container {
        @apply w-full max-w-7xl m-auto px-10;
      }
    }

    &.default {
      .outer-container {
        @apply h-[474px];
        background-image: url('/images/city-bg.jpg');
      }
    }

    &.front-page {
      .outer-container {
        @apply h-[934px] flex items-end;
        background-image: url('/images/escalator-bg.jpg');
        .inner-container {
          @apply my-0 pb-42;
        }
      }
    }
  }
</style>
