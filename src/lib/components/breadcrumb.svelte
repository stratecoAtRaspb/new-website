<script lang="ts">
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  // Mapping von URL-Segmenten zu übersetzten Labels
  const messages: Record<string, string> = {
    // Main sections
    expertise: m.navigation_expertise_self(),
    kompetenzen: m.navigation_expertise_self(),
    topics: m.navigation_topics_self(),
    themen: m.navigation_topics_self(),
    'about-us': m.navigation_aboutUs_self(),
    'ueber-uns': m.navigation_aboutUs_self(),
    contact: m.navigation_contact_self(),
    kontakt: m.navigation_contact_self(),
    legal: m.navigation_legal_self(),
    impressum: m.navigation_legal_self(),
    privacy: m.navigation_privacy_self(),
    datenschutz: m.navigation_privacy_self(),

    // Expertise sub-pages
    strategy: m.navigation_expertise_strategy(),
    strategie: m.navigation_expertise_strategy(),
    processes: m.navigation_expertise_processes(),
    prozesse: m.navigation_expertise_processes(),
    implementation: m.navigation_expertise_implementation(),
    implementierung: m.navigation_expertise_implementation(),
    people: m.navigation_expertise_people(),
    menschen: m.navigation_expertise_people(),
    technology: m.navigation_expertise_technology(),
    technologie: m.navigation_expertise_technology(),
    'financial-institution': m.navigation_expertise_financialInstitution(),
    'pharma-healthcare': m.navigation_expertise_pharmaAndHealthcare(),
    'telecoms-media-hightech': m.navigation_expertise_telecomsMediaAndHighTech(),
    'travel-transport-logistics': m.navigation_expertise_travelTransportAndLogistics(),
    other: m.navigation_expertise_other(),
    sonstige: m.navigation_expertise_other(),

    // Topics sub-pages
    aos: m.navigation_topics_aos(),
    'finance-controlling': m.navigation_topics_financeAndControlling(),
    tas: m.navigation_topics_tas(),
    ras: m.navigation_topics_ras(),
    cea: m.navigation_topics_cea(),
    marketing: m.navigation_topics_marketing(),
    intranet: m.navigation_topics_intranet(),

    // Topics Level 3 - AOS
    'change-management': m.navigation_topics_changeManagement(),
    'collaboration-platform': m.navigation_topics_collaborationPlatform(),
    'cultural-change-facilliation': m.navigation_topics_culturalChangeFacilliation(),
    'management-coaching': m.navigation_topics_managementCoaching(),
    'post-merge-integration': m.navigation_topics_postMergeIntegration(),
    'strategy-optimization-and-implementation': m.navigation_topics_strategyOptimizationAndImplementation(),
    'workflow-and-business-process-alignment': m.navigation_topics_workflowAndBusinessProcessAlignment(),

    // Topics Level 3 - CEA
    'brand-and-loyality-management': m.navigation_topics_brandAndLoyalityManagement(),
    'business-intelligence': m.navigation_topics_businessIntelligence(),
    'customer-feedback': m.navigation_topics_customerFeedback(),
    'data-management': m.navigation_topics_dataManagement(),
    'social-media-monitoring': m.navigation_topics_socialMediaMonitoring(),
    'speech-analytics': m.navigation_topics_speechAnalytics(),
    'text-analytics': m.navigation_topics_textAnalytics(),

    // Topics Level 3 - Finance & Controlling
    analysis: m.navigation_topics_analysis(),
    architecture: m.navigation_topics_architecture(),
    'document-management': m.navigation_topics_documentManagement(),
    reporting: m.navigation_topics_reporting(),
    sharepoint: m.navigation_topics_sharepoint(),
    workflows: m.navigation_topics_workflows(),

    // Topics Level 3 - Marketing
    'behavioural-marketing': m.navigation_topics_behaviouralMarketing(),
    'customer-relationship-management': m.navigation_topics_customerRelationshipManagement(),
    'lead-management': m.navigation_topics_leadManagement(),
    'lead-generation': m.navigation_topics_leadGeneration(),
    'marketing-as-a-service': m.navigation_topics_marketingAsAService(),
    'marketing-automation': m.navigation_topics_marketingAutomation(),

    // Topics Level 3 - RAS
    'kamakura-integrated-risk': m.navigation_topics_kamakuraIntegratedRisk(),
    'partnership-with-kamakura-corp': m.navigation_topics_partnershipWithKamakuraCorp(),

    // Topics Level 3 - TAS
    'reporting-and-analysis': m.navigation_topics_reportingAndAnalysis(),
    'sell-side-buy-side': m.navigation_topics_sellSideBuySide(),

    // About sub-pages
    management: m.navigation_aboutUs_management(),
    team: m.navigation_aboutUs_team(),
    customers: m.navigation_aboutUs_customers(),
    kunden: m.navigation_aboutUs_customers(),
    partner: m.navigation_aboutUs_partner(),
    career: m.navigation_aboutUs_career(),
    karriere: m.navigation_aboutUs_career()
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
        label: m.navigation_home_self(),
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
