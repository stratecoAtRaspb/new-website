<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const customers = [
    'Aareal Bank',
    'Aspect Communications',
    'Adam Opel',
    'Apollo Management International',
    'AVAYA Tenovis',
    'Bank Sarasin',
    'Bentley Motors EHO',
    'Casio',
    'Citigroup',
    'Concur Technologies',
    'Congstar',
    'Crealog',
    'Credit Europe Bank',
    'Credit Suisse Deutschland',
    'Credit Suisse First Boston',
    'Danet',
    'Demandware',
    'Deutsche Bahn',
    'Deutsche Post / CSC',
    'Disneyland Resort Paris',
    'Eicon',
    'E.ON-Bayern',
    'E-Plus Services',
    'Ernst & Young',
    'EVB Energie',
    'First Rand Bank',
    'FMS Wertmanagement',
    'Genesys',
    'Grove International',
    'Hasbro Deutschland',
    'Hochschule für Bankwirtschaft (HFB)',
    'IBM',
    'Jacada',
    'Lapithus',
    'Landesbank Berlin',
    'Lufthansa',
    'Merrill Lynch',
    'Morgan Stanley',
    'Philips',
    'National Bank of Greece',
    'Nortel Networks',
    'Nuance',
    'Price Waterhouse Coopers',
    'Premiere',
    'Projekt Promotions',
    'Raiffeisen Bank International',
    'Scansoft',
    'Senseo',
    'Rhein-Main-Verkehrsverbund (RMV)',
    'Shinsei Bank',
    'Shinsei Capital',
    'Shiseido',
    'Siemens',
    'Siemens Business Services',
    'Sikom',
    'Sparkasse Hannover',
    'Steigenberger Hotels AG',
    'Swiss Com',
    'Tchibo direkt',
    'Telenet',
    'Thomas Cook',
    'T-Com',
    'T-Online',
    'T-Mobile',
    'T-Systems',
    'UBS',
    'Union Investment',
    'VOICE Community',
    'Verint',
    'Voice Objects'
  ];
</script>

<svelte:head>
  <title>{m['aboutUs.customers.title']()}</title>
  <meta name="description" content={m['aboutUs.customers.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['aboutUs.customers.introTitle']()} description={m['aboutUs.customers.introDescription']()}></IntroBox>
</Stage>

<Section>
  <Breadcrumb/>
  <div class="prose mt-4">
    <h2>{m['aboutUs.customers.title']()}</h2>

    {@html m['aboutUs.customers.text']()}

    <h2 class="mt-8 text-2xl font-bold">Auszug unserer Kunden</h2>
    <div class="customer-list">
      {#each customers as customer}
        <div class="customer-item">
          <img src="/images/check.gif" alt="check" class="mr-2 inline-block h-4 w-4" />
          {customer}
        </div>
      {/each}
    </div>

    {@html m['aboutUs.customers.footer']()}
  </div>
</Section>

<style lang="postcss">
  @reference '../../../app.css';

  .customer-list {
    @apply mt-4 grid grid-cols-1 gap-2 md:grid-cols-3;
  }
  .customer-item {
    @apply rounded-md bg-gray-50 px-3 py-2 text-sm shadow-xs flex flex-row justify-start items-center;
  }
</style>
