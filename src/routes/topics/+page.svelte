<script lang="ts">
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { resolve } from '$app/paths';

  const topicsSections = [
    {
      heading: m.navigation_topics_aos(),
      color: 'blue',
      items: [
        { key: 'aos', label: m.navigation_topics_aosOverview, href: '/topics/aos' },
        { key: 'digitalTransformation', label: m.navigation_topics_digitalTransformation, href: '/topics/aos/digital-transformation' },
        { key: 'managementCoaching', label: m.navigation_topics_managementCoaching, href: '/topics/aos/management-coaching' },
        { key: 'changeManagement', label: m.navigation_topics_changeManagement, href: '/topics/aos/change-management' },
        { key: 'postMergeIntegration', label: m.navigation_topics_postMergeIntegration, href: '/topics/aos/post-merge-integration' },
        { key: 'culturalChangeFacilliation', label: m.navigation_topics_culturalChangeFacilliation, href: '/topics/aos/cultural-change-facilliation' },
        {
          key: 'strategyOptimizationAndImplementation',
          label: m.navigation_topics_strategyOptimizationAndImplementation,
          href: '/topics/aos/strategy-optimization-and-implementation'
        },
        {
          key: 'workflowAndBusinessProcessAlignment',
          label: m.navigation_topics_workflowAndBusinessProcessAlignment,
          href: '/topics/aos/workflow-and-business-process-alignment'
        },
        { key: 'collaborationPlatform', label: m.navigation_topics_collaborationPlatform, href: '/topics/aos/collaboration-platform' }
      ]
    },
    {
      heading: m.navigation_topics_financeAndControlling(),
      color: 'blue',
      items: [
        { key: 'financeAndControllingOverview', label: m.navigation_topics_financeAndControllingOverview, href: '/topics/finance-controlling' },
        { key: 'strategy', label: m.navigation_topics_strategy, href: '/topics/finance-controlling/strategy' },
        { key: 'processes', label: m.navigation_topics_processes, href: '/topics/finance-controlling/processes' },
        { key: 'architecture', label: m.navigation_topics_architecture, href: '/topics/finance-controlling/architecture' },
        { key: 'reporting', label: m.navigation_topics_reporting, href: '/topics/finance-controlling/reporting' },
        { key: 'analysis', label: m.navigation_topics_analysis, href: '/topics/finance-controlling/analysis' },
        { key: 'workflows', label: m.navigation_topics_workflows, href: '/topics/finance-controlling/workflows' },
        { key: 'documentManagement', label: m.navigation_topics_documentManagement, href: '/topics/finance-controlling/document-management' },
        { key: 'intranet', label: m.navigation_topics_intranet, href: '/topics/finance-controlling/intranet' },
        { key: 'businessIntelligence', label: m.navigation_topics_businessIntelligence, href: '/topics/finance-controlling/business-intelligence' },
        { key: 'dataManagement', label: m.navigation_topics_dataManagement, href: '/topics/finance-controlling/data-management' },
        { key: 'sharepoint', label: m.navigation_topics_sharepoint, href: '/topics/finance-controlling/sharepoint' }
      ]
    },
    {
      heading: m.navigation_topics_ras(),
      items: [
        { key: 'ras', label: m.navigation_topics_rasOverview, href: '/topics/ras' },
        { key: 'kamakuraIntegratedRisk', label: m.navigation_topics_kamakuraIntegratedRisk, href: '/topics/ras/kamakura-integrated-risk' },
        { key: 'partnershipWithKamakuraCorp', label: m.navigation_topics_partnershipWithKamakuraCorp, href: '/topics/ras/partnership-with-kamakura-corp' },
        { key: 'businessIntelligence', label: m.navigation_topics_businessIntelligence, href: '/topics/ras/business-intelligence' },
        { key: 'dataManagement', label: m.navigation_topics_dataManagement, href: '/topics/ras/data-management' }
      ]
    },
    {
      heading: m.navigation_topics_tas(),
      items: [
        { key: 'tas', label: m.navigation_topics_tasOverview, href: '/topics/tas' },
        { key: 'sellSideBuySide', label: m.navigation_topics_sellSideBuySide, href: '/topics/tas/sell-side-buy-side' },
        { key: 'reportingAndAnalyses', label: m.navigation_topics_reportingAndAnalysis, href: '/topics/tas/reporting-and-analysis' },
        { key: 'businessIntelligence', label: m.navigation_topics_businessIntelligence, href: '/topics/tas/business-intelligence' },
        { key: 'dataManagment', label: m.navigation_topics_dataManagment, href: '/topics/tas/data-management' }
      ]
    },
    {
      heading: m.navigation_topics_cea(),
      color: 'orange',
      items: [
        { key: 'cea', label: m.navigation_topics_ceaOverview, href: '/topics/cea' },
        { key: 'speechAnalytics', label: m.navigation_topics_speechAnalytics, href: '/topics/cea/speech-analytics' },
        { key: 'textAnalytics', label: m.navigation_topics_textAnalytics, href: '/topics/cea/text-analytics' },
        { key: 'socialMediaMonitoring', label: m.navigation_topics_postMergeIntegration, href: '/topics/cea/social-media-monitoring' },
        { key: 'customerFeedback', label: m.navigation_topics_customerFeedback, href: '/topics/cea/customer-feedback' },
        { key: 'customerInteraction', label: m.navigation_topics_customerInteraction, href: '/topics/cea/customer-interaction' },
        { key: 'brandAndLoyalityManagement', label: m.navigation_topics_brandAndLoyalityManagement, href: '/topics/cea/brand-and-loyality-management' },
        { key: 'changeManagement', label: m.navigation_topics_changeManagement, href: '/topics/cea/change-management' },
        { key: 'businessIntelligence', label: m.navigation_topics_businessIntelligence, href: '/topics/cea/business-intelligence' },
        { key: 'dataManagement', label: m.navigation_topics_dataManagement, href: '/topics/cea/data-management' }
      ]
    },
    {
      heading: m.navigation_topics_marketing(),
      color: 'orange',
      items: [
        { key: 'marketing', label: m.navigation_topics_marketingOverview, href: '/topics/marketing' },
        { key: 'marketingAsAService', label: m.navigation_topics_marketingAsAService, href: '/topics/marketing/marketing-as-a-service' },
        { key: 'leadGeneration', label: m.navigation_topics_leadGeneration, href: '/topics/marketing/lead-generation' },
        { key: 'leadManagement', label: m.navigation_topics_leadManagement, href: '/topics/marketing/lead-management' },
        { key: 'marketingAutomation', label: m.navigation_topics_marketingAutomation, href: '/topics/marketing/marketing-automation' },
        { key: 'behaviouralMarketing', label: m.navigation_topics_behaviouralMarketing, href: '/topics/marketing/behavioural-marketing' },
        {
          key: 'customerRelationshipManagement',
          label: m.navigation_topics_customerRelationshipManagement,
          href: '/topics/marketing/customer-relationship-management'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>{m.topics_title()}</title>
  <meta name="description" content={m.topics_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.topics_introTitle()} description={m.topics_introDescription()}></IntroBox>
</Stage>

<Section>
  <Breadcrumb />
  <div class="prose">
    <h2>{m.topics_title()}</h2>
    <div class="flex items-center justify-center">
      <img src="/images/SC_Portfolio_Kreis.png" class="h-md m-4 mb-10 w-md" alt="Portfolio Kreis" />
    </div>
  </div>

  <div class="divider"></div>

  <div class="flex flex-row flex-wrap gap-10 py-4">
    {#each topicsSections as section}
      <div class="prose grow basis-xs">
        <h3 class={section.color ?? 'grey'}>{section.heading}</h3>
        <ul class="linklist">
          {#each section.items as item}
            <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
            <li><a href={ resolve(localizeHref(item.href) as any) }>{item.label()}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</Section>
