<script lang="ts">
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  // Mapping von URL-Segmenten zu übersetzten Labels
  const messages: Record<string, string> = {
    // Main sections
    'expertise': m['navigation.expertise.self'](),
    'kompetenzen': m['navigation.expertise.self'](),
    'topics': m['navigation.topics.self'](),
    'themen': m['navigation.topics.self'](),
    'about-us': m['navigation.about.self'](),
    'ueber-uns': m['navigation.about.self'](),
    'contact': m['navigation.contact.self'](),
    'kontakt': m['navigation.contact.self'](),
    'legal': m['navigation.legal.self'](),
    'impressum': m['navigation.legal.self'](),
    'privacy': m['navigation.privacy.self'](),
    'datenschutz': m['navigation.privacy.self'](),
    
    // Expertise sub-pages
    'strategy': m['navigation.expertise.strategy'](),
    'strategie': m['navigation.expertise.strategy'](),
    'processes': m['navigation.expertise.processes'](),
    'prozesse': m['navigation.expertise.processes'](),
    'implementation': m['navigation.expertise.implementation'](),
    'implementierung': m['navigation.expertise.implementation'](),
    'people': m['navigation.expertise.people'](),
    'menschen': m['navigation.expertise.people'](),
    'technology': m['navigation.expertise.technology'](),
    'technologie': m['navigation.expertise.technology'](),
    'financial-institution': m['navigation.expertise.financialInstitution'](),
    'pharma-healthcare': m['navigation.expertise.pharmaAndHealthcare'](),
    'telecoms-media-hightech': m['navigation.expertise.telecomsMediaAndHighTech'](),
    'travel-transport-logistics': m['navigation.expertise.travelTransportAndLogistics'](),
    'other': m['navigation.expertise.other'](),
    'sonstige': m['navigation.expertise.other'](),
    
    // Topics sub-pages
    'aos': m['navigation.topics.aos'](),
    'finance-controlling': m['navigation.topics.financeAndControlling'](),
    'tas': m['navigation.topics.tas'](),
    'ras': m['navigation.topics.ras'](),
    'cea': m['navigation.topics.cea'](),
    'marketing': m['navigation.topics.marketing'](),
    
    // About sub-pages
    'management': m['navigation.about.management'](),
    'team': m['navigation.about.team'](),
    'customers': m['navigation.about.customers'](),
    'kunden': m['navigation.about.customers'](),
    'partner': m['navigation.about.partner'](),
    'career': m['navigation.about.career'](),
    'karriere': m['navigation.about.career']()
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
  <nav class="breadcrumb-navigation" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      {#each breadcrumbs as item, index}
        <li class="breadcrumb-item" class:active={item.isActive}>
          {#if item.isActive}
            <span class="breadcrumb-current">{item.label}</span>
          {:else}
            <a href={item.href} class="breadcrumb-link">
              {item.label}
            </a>
          {/if}
          {#if index < breadcrumbs.length - 1}
            <span class="breadcrumb-separator" aria-hidden="true">›</span>
          {/if}
        </li>
      {/each}
    </ol>
  </nav>
{/if}

<style lang="postcss">
  @reference '../../app.css';
  
  .breadcrumb-navigation {
    @apply w-full py-4;
  }
  
  .breadcrumb-list {
    @apply flex flex-wrap items-center gap-2 list-none p-0 m-0;
  }
  
  .breadcrumb-item {
    @apply flex items-center gap-2 text-sm;
    
    .breadcrumb-link {
      @apply text-darkGrey no-underline transition-all duration-200;
      @apply hover:text-darkGrey/70 hover:underline;
    }
    
    .breadcrumb-current {
      @apply text-darkGrey font-semibold;
    }
    
    .breadcrumb-separator {
      @apply text-gray-400 select-none;
      font-size: 1.2em;
      line-height: 1;
    }
    
    &.active {
      .breadcrumb-current {
        @apply cursor-default;
      }
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 640px) {
    .breadcrumb-navigation {
      @apply py-2;
    }
    
    .breadcrumb-item {
      @apply text-xs;
    }
  }
</style>
