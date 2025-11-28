<script lang="ts">
  let {
    style = 'green',
    title = 'N/A',
    description = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. '
  } = $props();
</script>

<div class="intro-box {style}">
  <div class="title">
    <h2 class:oneLiner={title.length < 30}>{title}</h2>
  </div>
  <div class="description">
    <p>{description}</p>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';
  div.intro-box {
    @apply flex w-full flex-row rounded-xl px-6 py-8;

    .title {
      @apply flex w-fit items-center justify-center border-r-2 border-dotted border-white pr-6;
      h2 {
        @apply text-3xl leading-tight font-light text-white;
        &.oneLiner {
          @apply whitespace-nowrap;
        }
        &:not(.oneLiner) {
          @apply line-clamp-2 min-w-[18ch];
        }
      }
    }

    .description {
      @apply flex grow items-center justify-center px-6;
      p {
        @apply line-clamp-3 text-base leading-snug text-white;
      }
    }

    &.green {
      @apply bg-deepGreen/85;
    }
  }
</style>
