
<script lang="ts">
  let { style = "green", title = "N/A", description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. " } = $props();
</script>

<div class="intro-box {style}">
  <div class="title">
    <h2 class:oneLiner={title.length < 20}>{title}</h2>
  </div>
  <div class="description">
    <p>{description}</p>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';
  div.intro-box {
    @apply w-full flex flex-row py-8 px-6 rounded-xl;

    .title {
      @apply w-fit pr-6 border-r-2 border-dotted border-white flex justify-center items-center;
      h2 {
        @apply text-white font-light;
        &.oneLiner {
          @apply  whitespace-nowrap; 
        }
      }
    }

    .description {
      @apply px-6 grow flex justify-center items-center;
      p {
        @apply text-white text-base leading-snug line-clamp-3;
      }
    }

    &.green {
      @apply bg-deepGreen/85;
    }

  }
</style>