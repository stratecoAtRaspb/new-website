<script lang="ts">
  import Breadcrumb from '$lib/components/breadcrumb.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const topicsSections = [
    {
      heading: m['navigation.topics.aos'](),
      color: 'blue',
      items: [
        { key: 'aos', label: m['navigation.topics.aosOverview'], href: '/topics/aos' },
        { key: 'digitalTransformation', label: m['navigation.topics.digitalTransformation'], href: '/topics/aos/digital-transformation' },
        { key: 'managementCoaching', label: m['navigation.topics.managementCoaching'], href: '/topics/aos/management-coaching' },
        { key: 'changeManagement', label: m['navigation.topics.changeManagement'], href: '/topics/aos/change-management' },
        { key: 'postMergeIntegration', label: m['navigation.topics.postMergeIntegration'], href: '/topics/aos/post-merge-integration' },
        { key: 'culturalChangeFacilliation', label: m['navigation.topics.culturalChangeFacilliation'], href: '/topics/aos/cultural-change-facilliation' },
        {
          key: 'strategyOptimizationAndImplementation',
          label: m['navigation.topics.strategyOptimizationAndImplementation'],
          href: '/topics/aos/strategy-optimization-and-implementation'
        },
        {
          key: 'workflowAndBusinessProcessAlignment',
          label: m['navigation.topics.workflowAndBusinessProcessAlignment'],
          href: '/topics/aos/workflow-and-business-process-alignment'
        },
        { key: 'collaborationPlatform', label: m['navigation.topics.collaborationPlatform'], href: '/topics/aos/collaboration-platform' }
      ]
    },
    {
      heading: m['navigation.topics.financeAndControlling'](),
      color: 'blue',
      items: [
        { key: 'financeAndControllingOverview', label: m['navigation.topics.financeAndControllingOverview'], href: '/topics/finance-controlling' },
        { key: 'strategy', label: m['navigation.topics.strategy'], href: '/topics/finance-controlling/strategy' },
        { key: 'processes', label: m['navigation.topics.processes'], href: '/topics/finance-controlling/processes' },
        { key: 'architecture', label: m['navigation.topics.architecture'], href: '/topics/finance-controlling/architecture' },
        { key: 'reporting', label: m['navigation.topics.reporting'], href: '/topics/finance-controlling/reporting' },
        { key: 'analysis', label: m['navigation.topics.analysis'], href: '/topics/finance-controlling/analysis' },
        { key: 'workflows', label: m['navigation.topics.workflows'], href: '/topics/finance-controlling/workflows' },
        { key: 'documentManagement', label: m['navigation.topics.documentManagement'], href: '/topics/finance-controlling/document-management' },
        { key: 'intranet', label: m['navigation.topics.intranet'], href: '/topics/finance-controlling/intranet' },
        { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/finance-controlling/business-intelligence' },
        { key: 'dataManagement', label: m['navigation.topics.dataManagement'], href: '/topics/finance-controlling/data-management' },
        { key: 'sharepoint', label: m['navigation.topics.sharepoint'], href: '/topics/finance-controlling/sharepoint' }
      ]
    },
    {
      heading: m['navigation.topics.ras'](),
      items: [
        { key: 'ras', label: m['navigation.topics.rasOverview'], href: '/topics/ras' },
        { key: 'kamakuraIntegratedRisk', label: m['navigation.topics.kamakuraIntegratedRisk'], href: '/topics/ras/kamakura-integrated-risk' },
        { key: 'partnershipWithKamakuraCorp', label: m['navigation.topics.partnershipWithKamakuraCorp'], href: '/topics/ras/partnership-with-kamakura-corp' },
        { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/ras/business-intelligence' },
        { key: 'dataManagement', label: m['navigation.topics.dataManagement'], href: '/topics/ras/data-management' }
      ]
    },
    {
      heading: m['navigation.topics.tas'](),
      items: [
        { key: 'tas', label: m['navigation.topics.tasOverview'], href: '/topics/tas' },
        { key: 'sellSideBuySide', label: m['navigation.topics.sellSideBuySide'], href: '/topics/tas/sell-side-buy-side' },
        { key: 'reportingAndAnalyses', label: m['navigation.topics.reportingAndAnalysis'], href: '/topics/tas/reporting-and-analysis' },
        { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/tas/business-intelligence' },
        { key: 'dataManagment', label: m['navigation.topics.dataManagment'], href: '/topics/tas/data-managment' }
      ]
    },
    {
      heading: m['navigation.topics.cea'](),
      color: 'orange',
      items: [
        { key: 'cea', label: m['navigation.topics.ceaOverview'], href: '/topics/cea' },
        { key: 'speechAnalytics', label: m['navigation.topics.speechAnalytics'], href: '/topics/cea/speech-analytics' },
        { key: 'textAnalytics', label: m['navigation.topics.textAnalytics'], href: '/topics/cea/text-analytics' },
        { key: 'socialMediaMonitoring', label: m['navigation.topics.postMergeIntegration'], href: '/topics/cea/social-media-monitoring' },
        { key: 'customerFeedback', label: m['navigation.topics.customerFeedback'], href: '/topics/cea/customer-feedback' },
        { key: 'customerInteraction', label: m['navigation.topics.customerInteraction'], href: '/topics/cea/customer-interaction' },
        { key: 'brandAndLoyalityManagement', label: m['navigation.topics.brandAndLoyalityManagement'], href: '/topics/cea/brand-and-loyality-management' },
        { key: 'changeManagement', label: m['navigation.topics.changeManagement'], href: '/topics/cea/change-management' },
        { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/cea/business-intelligence' },
        { key: 'dataManagement', label: m['navigation.topics.dataManagement'], href: '/topics/cea/data-management' }
      ]
    },
    {
      heading: m['navigation.topics.marketing'](),
      color: 'orange',
      items: [
        { key: 'marketing', label: m['navigation.topics.marketingOverview'], href: '/topics/marketing' },
        { key: 'marketingAsAService', label: m['navigation.topics.marketingAsAService'], href: '/topics/marketing/marketing-as-a-service' },
        { key: 'leadgenerierung', label: m['navigation.topics.leadgenerierung'], href: '/topics/marketing/leadgenerierung' },
        { key: 'leadManagement', label: m['navigation.topics.leadManagement'], href: '/topics/marketing/lead-management' },
        { key: 'marketingAutomation', label: m['navigation.topics.marketingAutomation'], href: '/topics/marketing/marketing-automation' },
        { key: 'behaviouralMarketing', label: m['navigation.topics.behaviouralMarketing'], href: '/topics/marketing/behavioural-marketing' },
        {
          key: 'customerRelationshipManagement',
          label: m['navigation.topics.customerRelationshipManagement'],
          href: '/topics/marketing/customer-relationship-management'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>{m['topics.title']()}</title>
  <meta name="description" content={m['topics.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['topics.introTitle']()} description={m['topics.introDescription']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <Breadcrumb />
    <h2>{m['topics.title']()}</h2>
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
            <li><a href={localizeHref(item.href)}>{item.label()}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</Section>
