<script>
  import { goto } from '$app/navigation';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<div class="feature-box">
  <button
    class="feature"
    onclick={() => {
      goto(localizeHref('/expertise/financial-institution'));
    }}
  >
    <h3 class="managed-services">Managed Services</h3>
    <p>
      Wir helfen Ihnen, mit langjähriger Expertise und innovativen Technologien regulatorische Herausforderungen zu meistern. Fallabschließend bis zur Umsetzung
      - alles aus einer Hand.
    </p>
  </button>
  <button
    class="feature"
    onclick={() => {
      goto(localizeHref('/topics/finance-controlling'));
    }}
  >
    <h3 class="smart-data-management">Smart Data Management</h3>
    <p>
      Daten sind DER zentrale Erfolgsfaktor in der digitalisierten Welt. Wir konsolidieren Ihre Datensilos und machen „Big Data“ zu „smart, actionable
      intelligence“!
    </p>
  </button>
  <button
    class="feature"
    onclick={() => {
      goto(localizeHref('/topics/ras'));
    }}
  >
    <h3 class="risk-management">Risk Management</h3>
    <p>
      Nie war Risikomanagement für Unternehmen wichtiger als heute. STRATECO konzipiert und implementiert integrierte Risikomanagementlösungen für Banken und
      Finanzdienstleister.
    </p>
  </button>
</div>

<style lang="postcss">
  @reference '../../app.css';
  div.feature-box {
    @apply bg-darkGrey/80 flex min-h-48 w-full flex-row items-start justify-start gap-4 rounded-lg px-10 py-6;

    .feature {
      @apply flex-1/3 cursor-pointer text-left text-white/80 hover:text-white;

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
        @apply max-w-[300px] text-base;
      }
    }
  }
</style>
