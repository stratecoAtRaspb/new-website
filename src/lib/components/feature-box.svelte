<script>
  import { goto } from '$app/navigation';
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';
</script>

<div class="feature-box">
  <button
    class="feature"
    class:order-1={getLocale() == 'en'}
    onclick={() => {
      goto(localizeHref('/expertise/financial-institution'));
    }}
  >
    <h3 class="managed-services">{m['featureBox.feature1.headline']()}</h3>
    <p>{m['featureBox.feature1.text']()}</p>
  </button>
  <button
    class="feature"
    class:order-3={getLocale() == 'en'}
    onclick={() => {
      goto(localizeHref('/topics/finance-controlling'));
    }}
  >
    <h3 class="smart-data-management">{m['featureBox.feature2.headline']()}</h3>
    <p>{m['featureBox.feature2.text']()}</p>
  </button>
  <button
    class="feature"
    class:order-2={getLocale() == 'en'}
    onclick={() => {
      goto(localizeHref('/topics/ras'));
    }}
  >
    <h3 class="risk-management">{m['featureBox.feature3.headline']()}</h3>
    <p>{m['featureBox.feature3.text']()}</p>
  </button>
</div>

<style lang="postcss">
  @reference '../../app.css';
  div.feature-box {
    @apply bg-darkGrey/80 flex min-h-48 w-full flex-col items-start justify-start gap-8 rounded-lg px-6 py-6 md:flex-row md:gap-4 md:px-10;

    .feature {
      @apply w-full flex-auto cursor-pointer text-left text-white/80 hover:text-white md:w-auto md:flex-1/3;

      h3 {
        @apply relative mb-3 pl-11;
        &::before {
          @apply absolute -top-1 left-0 h-8 w-8 bg-white mask-contain mask-center mask-no-repeat;
          content: '';
        }
        &.managed-services::before {
          mask-image: url(/icons/chart-line-up.svg);
        }
        &.smart-data-management::before {
          mask-image: url(/icons/chart-mixed.svg);
        }
        &.risk-management::before {
          mask-image: url(/icons/user-shield.svg);
        }
      }
      p {
        @apply w-full text-base md:max-w-[300px];
      }
    }
  }
</style>
