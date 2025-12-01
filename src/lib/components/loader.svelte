<script lang="ts">
  let { size = 'small' } = $props();
</script>

<div class="loader {size}"></div>

<style lang="postcss">
  @reference '../../app.css';

  .loader {
    @apply relative aspect-square h-16 w-16;
    &:before,
    &:after {
      @apply absolute aspect-square rounded-full;
      content: '';
      inset: 0 auto auto 0;
      box-shadow: 0 0 0 3px inset var(--deep-green);
      animation: smallPulse 1s infinite linear alternate;
    }
    &:after {
      inset: auto 0 0 auto;
      animation-delay: -1s;
    }

    &.tiny {
      @apply h-8 w-8;
      &:before,
      &:after {
        box-shadow: 0 0 0 2px inset var(--pale-blue);
        animation: tinyPulse 1s infinite linear alternate;
      }
      &:after {
        inset: auto 0 0 auto;
        animation-delay: -1s;
      }
    }
    &.medium {
      @apply h-24 w-24;
      &:before,
      &:after {
        box-shadow: 0 0 0 6px inset var(--pale-blue);
        animation: mediumPulse 1s infinite linear alternate;
      }
      &:after {
        inset: auto 0 0 auto;
        animation-delay: -1s;
      }
    }
    &.large {
      @apply h-32 w-32;
      &:before,
      &:after {
        @apply absolute aspect-square rounded-full;
        content: '';
        inset: 0 auto auto 0;
        box-shadow: 0 0 0 8px inset var(--pale-blue);
        animation: largePulse 1s infinite linear alternate;
      }
      &:after {
        inset: auto 0 0 auto;
        animation-delay: -1s;
      }
    }
  }

  @keyframes tinyPulse {
    0% {
      width: 10px;
    }
    100% {
      width: 25px;
    }
  }

  @keyframes smallPulse {
    0% {
      width: 20px;
    }
    100% {
      width: 50px;
    }
  }

  @keyframes mediumPulse {
    0% {
      width: 30px;
    }
    100% {
      width: 75px;
    }
  }

  @keyframes largePulse {
    0% {
      width: 40px;
    }
    100% {
      width: 100px;
    }
  }
</style>
