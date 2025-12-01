<script lang="ts">
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  // Mapping von URL-Segmenten zu übersetzten Labels
  const messages: Record<string, string> = {
    // Main sections
    expertise: m['navigation.expertise.self'](),
    kompetenzen: m['navigation.expertise.self'](),
    topics: m['navigation.topics.self'](),
    themen: m['navigation.topics.self'](),
    'about-us': m['navigation.aboutUs.self'](),
    'ueber-uns': m['navigation.aboutUs.self'](),
    contact: m['navigation.contact.self'](),
    kontakt: m['navigation.contact.self'](),
    legal: m['navigation.legal.self'](),
    impressum: m['navigation.legal.self'](),
    privacy: m['navigation.privacy.self'](),
    datenschutz: m['navigation.privacy.self'](),

    // Expertise sub-pages
    strategy: m['navigation.expertise.strategy'](),
    strategie: m['navigation.expertise.strategy'](),
    processes: m['navigation.expertise.processes'](),
    prozesse: m['navigation.expertise.processes'](),
    implementation: m['navigation.expertise.implementation'](),
    implementierung: m['navigation.expertise.implementation'](),
    people: m['navigation.expertise.people'](),
    menschen: m['navigation.expertise.people'](),
    technology: m['navigation.expertise.technology'](),
    technologie: m['navigation.expertise.technology'](),
    'financial-institution': m['navigation.expertise.financialInstitution'](),
    'pharma-healthcare': m['navigation.expertise.pharmaAndHealthcare'](),
    'telecoms-media-hightech': m['navigation.expertise.telecomsMediaAndHighTech'](),
    'travel-transport-logistics': m['navigation.expertise.travelTransportAndLogistics'](),
    other: m['navigation.expertise.other'](),
    sonstige: m['navigation.expertise.other'](),

    // Topics sub-pages
    aos: m['navigation.topics.aos'](),
    'finance-controlling': m['navigation.topics.financeAndControlling'](),
    tas: m['navigation.topics.tas'](),
    ras: m['navigation.topics.ras'](),
    cea: m['navigation.topics.cea'](),
    marketing: m['navigation.topics.marketing'](),
    intranet: m['navigation.topics.intranet'](),

    // Topics Level 3 - AOS
    'change-management': m['navigation.topics.changeManagement'](),
    'collaboration-platform': m['navigation.topics.collaborationPlatform'](),
    'cultural-change-facilliation': m['navigation.topics.culturalChangeFacilliation'](),
    'management-coaching': m['navigation.topics.managementCoaching'](),
    'post-merge-integration': m['navigation.topics.postMergeIntegration'](),
    'strategy-optimization-and-implementation': m['navigation.topics.strategyOptimizationAndImplementation'](),
    'workflow-and-business-process-alignment': m['navigation.topics.workflowAndBusinessProcessAlignment'](),

    // Topics Level 3 - CEA
    'brand-and-loyality-management': m['navigation.topics.brandAndLoyalityManagement'](),
    'business-intelligence': m['navigation.topics.businessIntelligence'](),
    'customer-feedback': m['navigation.topics.customerFeedback'](),
    'data-management': m['navigation.topics.dataManagement'](),
    'social-media-monitoring': m['navigation.topics.socialMediaMonitoring'](),
    'speech-analytics': m['navigation.topics.speechAnalytics'](),
    'text-analytics': m['navigation.topics.textAnalytics'](),

    // Topics Level 3 - Finance & Controlling
    analysis: m['navigation.topics.analysis'](),
    architecture: m['navigation.topics.architecture'](),
    'document-management': m['navigation.topics.documentManagement'](),
    reporting: m['navigation.topics.reporting'](),
    sharepoint: m['navigation.topics.sharepoint'](),
    workflows: m['navigation.topics.workflows'](),

    // Topics Level 3 - Marketing
    'behavioural-marketing': m['navigation.topics.behaviouralMarketing'](),
    'customer-relationship-management': m['navigation.topics.customerRelationshipManagement'](),
    'lead-management': m['navigation.topics.leadManagement'](),
    'lead-generation': m['navigation.topics.leadGeneration'](),
    'marketing-as-a-service': m['navigation.topics.marketingAsAService'](),
    'marketing-automation': m['navigation.topics.marketingAutomation'](),

    // Topics Level 3 - RAS
    'kamakura-integrated-risk': m['navigation.topics.kamakuraIntegratedRisk'](),
    'partnership-with-kamakura-corp': m['navigation.topics.partnershipWithKamakuraCorp'](),

    // Topics Level 3 - TAS
    'reporting-and-analysis': m['navigation.topics.reportingAndAnalysis'](),
    'sell-side-buy-side': m['navigation.topics.sellSideBuySide'](),

    // About sub-pages
    management: m['navigation.aboutUs.management'](),
    team: m['navigation.aboutUs.team'](),
    customers: m['navigation.aboutUs.customers'](),
    kunden: m['navigation.aboutUs.customers'](),
    partner: m['navigation.aboutUs.partner'](),
    career: m['navigation.aboutUs.career'](),
    karriere: m['navigation.aboutUs.career']()
  };

  interface BreadcrumbItem {
    label: string;
    href: string;
    isActive: boolean;
  }

  // Generate breadcrumb items from current path
  const breadcrumbs = $derived.by(() => {
    const pathname = page.url.pathname;

    // Remove leading/trailing slashes and language prefix
    const cleanPath = pathname.replace(/^\/?(en|de)?\/?/, '').replace(/\/$/, '');

    // If we're on the home page, return empty array
    if (!cleanPath) {
      return [];
    }

    // Split path into segments
    const segments = cleanPath.split('/').filter(Boolean);

    // Always start with "Start" (Home)
    const items: BreadcrumbItem[] = [
      {
        label: m['navigation.home.self'](),
        href: localizeHref('/'),
        isActive: false
      }
    ];

    // Build breadcrumbs progressively
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      const label = messages[segment];

      if (label) {
        items.push({
          label,
          href: localizeHref(currentPath),
          isActive: isLast
        });
      }
    });

    return items;
  });
</script>

{#if breadcrumbs.length > 1}
  <div class="breadcrumbs text-sm">
    <ul>
      {#each breadcrumbs as item}
        <li>
          {#if item.isActive}
            {item.label}
          {:else}
            <a href={item.href}>{item.label}</a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}

<style lang="postcss">
  @reference '../../app.css';
</style>
