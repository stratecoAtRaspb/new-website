<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref, setLocale } from '$lib/paraglide/runtime';

  let mobileNavOpen = $state(false);
  let activeMenu = $state<string | null>(null);
  let closeTimeout: number | null = null;

  // Navigation structure types
  type NavItemDivider = { type: 'divider' };
  type NavItemLink = { key: string; label: () => string; href: string };
  type NavItemHeading = { key: string; label: () => string };
  type NavItem = NavItemDivider | NavItemLink | NavItemHeading;

  type MenuLayout = 'full' | 'compact';

  // Navigation structure with sub-items grouped
  const navigation: Record<string, { layout: MenuLayout; sections: { heading?: string; color?: string; items: NavItemLink[] }[] }> = {
    expertise: {
      layout: 'full',
      sections: [
        {
          heading: m['navigation.expertise.capabilities'](),
          items: [
            { key: 'strategy', label: m['navigation.expertise.strategy'], href: '/expertise/strategy' } as NavItemLink,
            { key: 'processes', label: m['navigation.expertise.processes'], href: '/expertise/processes' } as NavItemLink,
            { key: 'implementation', label: m['navigation.expertise.implementation'], href: '/expertise/implementation' } as NavItemLink,
            { key: 'people', label: m['navigation.expertise.people'], href: '/expertise/people' } as NavItemLink,
            { key: 'technology', label: m['navigation.expertise.technology'], href: '/expertise/technology' } as NavItemLink
          ]
        },
        {
          heading: m['navigation.expertise.clientSegments'](),
          items: [
            { key: 'financialInstitution', label: m['navigation.expertise.financialInstitution'], href: '/expertise/financial-institution' } as NavItemLink,
            { key: 'pharmaAndHealthcare', label: m['navigation.expertise.pharmaAndHealthcare'], href: '/expertise/pharma-healthcare' } as NavItemLink,
            {
              key: 'telecomsMediaAndHighTech',
              label: m['navigation.expertise.telecomsMediaAndHighTech'],
              href: '/expertise/telecoms-media-hightech'
            } as NavItemLink,
            {
              key: 'travelTransportAndLogistics',
              label: m['navigation.expertise.travelTransportAndLogistics'],
              href: '/expertise/travel-transport-logistics'
            } as NavItemLink,
            { key: 'other', label: m['navigation.expertise.other'], href: '/expertise/other' } as NavItemLink
          ]
        }
      ]
    },
    topics: {
      layout: 'full',
      sections: [
        {
          heading: m['navigation.topics.aos'](),
          color: 'blue',
          items: [
            { key: 'aos', label: m['navigation.topics.aosOverview'], href: '/topics/aos' } as NavItemLink,
            { key: 'managementCoaching', label: m['navigation.topics.managementCoaching'], href: '/topics/aos/management-coaching' } as NavItemLink,
            { key: 'changeManagement', label: m['navigation.topics.changeManagement'], href: '/topics/aos/post-merge-integration' } as NavItemLink,
            { key: 'postMergeIntegration', label: m['navigation.topics.postMergeIntegration'], href: '/topics/aos/post-merge-integration' } as NavItemLink,
            {
              key: 'culturalChangeFacilliation',
              label: m['navigation.topics.culturalChangeFacilliation'],
              href: '/topics/aos/cultural-change-facilliation'
            } as NavItemLink,
            {
              key: 'strategyOptimizationAndImplementation',
              label: m['navigation.topics.strategyOptimizationAndImplementation'],
              href: '/topics/aos/strategy-optimization-and-implementation'
            } as NavItemLink,
            {
              key: 'workflowAndBusinessProcessAlignment',
              label: m['navigation.topics.workflowAndBusinessProcessAlignment'],
              href: '/topics/aos/workflow-and-business-process-alignment'
            } as NavItemLink,
            { key: 'collaborationPlatform', label: m['navigation.topics.collaborationPlatform'], href: '/topics/aos/collaboration-platform' } as NavItemLink
          ]
        },
        {
          heading: m['navigation.topics.financeAndControlling'](),
          color: 'blue',
          items: [
            {
              key: 'financeAndControllingOverview',
              label: m['navigation.topics.financeAndControllingOverview'],
              href: '/topics/finance-controlling'
            } as NavItemLink,

            { key: 'strategy', label: m['navigation.topics.strategy'], href: '/topics/finance-controlling/strategy' } as NavItemLink,
            { key: 'processes', label: m['navigation.topics.processes'], href: '/topics/finance-controlling/processes' } as NavItemLink,
            { key: 'architecture', label: m['navigation.topics.architecture'], href: '/topics/finance-controlling/architecture' } as NavItemLink,
            { key: 'reporting', label: m['navigation.topics.reporting'], href: '/topics/finance-controlling/reporting' } as NavItemLink,
            { key: 'analysis', label: m['navigation.topics.analysis'], href: '/topics/finance-controlling/analysis' } as NavItemLink,
            {
              key: 'workflows',
              label: m['navigation.topics.workflows'],
              href: '/topics/finance-controlling/workflows'
            } as NavItemLink,
            {
              key: 'documentManagement',
              label: m['navigation.topics.documentManagement'],
              href: '/topics/finance-controlling/document-management'
            } as NavItemLink,
            { key: 'intranet', label: m['navigation.topics.intranet'], href: '/topics/finance-controlling/intranet' } as NavItemLink,
            {
              key: 'businessIntelligence',
              label: m['navigation.topics.businessIntelligence'],
              href: '/topics/finance-controlling/business-intelligence'
            } as NavItemLink,
            { key: 'dataManagement', label: m['navigation.topics.dataManagement'], href: '/topics/finance-controlling/data-management' } as NavItemLink,
            { key: 'sharepoint', label: m['navigation.topics.sharepoint'], href: '/topics/finance-controlling/sharepoint' } as NavItemLink
          ]
        },

        {
          heading: m['navigation.topics.ras'](),
          items: [
            { key: 'ras', label: m['navigation.topics.rasOverview'], href: '/topics/ras' } as NavItemLink,
            {
              key: 'kamakuraIntegratedRisk',
              label: m['navigation.topics.kamakuraIntegratedRisk'],
              href: '/topics/ras/kamakura-integrated-risk'
            } as NavItemLink,
            {
              key: 'partnershipWithKamakuraCorp',
              label: m['navigation.topics.partnershipWithKamakuraCorp'],
              href: '/topics/ras/partnership-with-kamakura-corp'
            } as NavItemLink,
            { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/ras/business-intelligence' } as NavItemLink,
            { key: 'dataManagement', label: m['navigation.topics.dataManagement'], href: '/topics/ras/data-management' } as NavItemLink
          ]
        },
        {
          heading: m['navigation.topics.tas'](),
          items: [
            { key: 'tas', label: m['navigation.topics.tasOverview'], href: '/topics/tas' } as NavItemLink,
            { key: 'sellSideBuySide', label: m['navigation.topics.sellSideBuySide'], href: '/topics/tas/sell-side-buy-side' } as NavItemLink,
            { key: 'reportingAndAnalyses', label: m['navigation.topics.reportingAndAnalysis'], href: '/topics/tas/reporting-and-analysis' } as NavItemLink,
            { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/tas/business-intelligence' } as NavItemLink,
            { key: 'dataManagment', label: m['navigation.topics.dataManagment'], href: '/topics/tas/data-managment' } as NavItemLink
          ]
        },

        {
          heading: m['navigation.topics.cea'](),
          color: 'orange',
          items: [
            { key: 'cea', label: m['navigation.topics.ceaOverview'], href: '/topics/cea' } as NavItemLink,
            { key: 'speechAnalytics', label: m['navigation.topics.speechAnalytics'], href: '/topics/cea/speech-analytics' } as NavItemLink,
            { key: 'textAnalytics', label: m['navigation.topics.textAnalytics'], href: '/topics/cea/text-analytics' } as NavItemLink,
            { key: 'socialMediaMonitoring', label: m['navigation.topics.postMergeIntegration'], href: '/topics/cea/social-media-monitoring' } as NavItemLink,
            { key: 'customerFeedback', label: m['navigation.topics.customerFeedback'], href: '/topics/cea/customer-feedback' } as NavItemLink,
            {
              key: 'customerInteraction',
              label: m['navigation.topics.customerInteraction'],
              href: '/topics/cea/customer-interaction'
            } as NavItemLink,
            {
              key: 'brandAndLoyalityManagement',
              label: m['navigation.topics.brandAndLoyalityManagement'],
              href: '/topics/cea/brand-and-loyality-management'
            } as NavItemLink,
            { key: 'changeManagement', label: m['navigation.topics.changeManagement'], href: '/topics/cea/change-management' } as NavItemLink,
            { key: 'businessIntelligence', label: m['navigation.topics.businessIntelligence'], href: '/topics/cea/business-intelligence' } as NavItemLink,
            { key: 'dataManagement', label: m['navigation.topics.dataManagement'], href: '/topics/cea/data-management' } as NavItemLink
          ]
        },
        {
          heading: m['navigation.topics.marketing'](),
          color: 'orange',
          items: [
            { key: 'marketing', label: m['navigation.topics.marketingOverview'], href: '/topics/marketing' } as NavItemLink,
            { key: 'marketingAsAService', label: m['navigation.topics.marketingAsAService'], href: '/topics/marketing/marketing-as-a-service' } as NavItemLink,
            { key: 'leadgenerierung', label: m['navigation.topics.leadgenerierung'], href: '/topics/marketing/leadgenerierung' } as NavItemLink,
            { key: 'leadManagement', label: m['navigation.topics.leadManagement'], href: '/topics/marketing/lead-management' } as NavItemLink,
            { key: 'marketingAutomation', label: m['navigation.topics.marketingAutomation'], href: '/topics/marketing/marketing-automation' } as NavItemLink,
            {
              key: 'behaviouralMarketing',
              label: m['navigation.topics.behaviouralMarketing'],
              href: '/topics/marketing/behavioural-marketing'
            } as NavItemLink,
            {
              key: 'customerRelationshipManagement',
              label: m['navigation.topics.customerRelationshipManagement'],
              href: '/topics/marketing/customer-relationship-management'
            } as NavItemLink
          ]
        }
      ]
    },
    about: {
      layout: 'compact',
      sections: [
        {
          items: [
            { key: 'management', label: m['navigation.about.management'], href: '/about-us/management' } as NavItemLink,
            { key: 'team', label: m['navigation.about.team'], href: '/about-us/team' } as NavItemLink,
            { key: 'customers', label: m['navigation.about.customers'], href: '/about-us/customers' } as NavItemLink,
            { key: 'partner', label: m['navigation.about.partner'], href: '/about-us/partner' } as NavItemLink,
            { key: 'career', label: m['navigation.about.career'], href: '/about-us/career' } as NavItemLink
          ]
        }
      ]
    }
  };

  function handleMouseEnter(menuKey: string) {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    activeMenu = menuKey;
  }

  function handleMouseLeave() {
    // Increased timeout for better usability (diagonal movement)
    closeTimeout = setTimeout(() => {
      activeMenu = null;
      closeTimeout = null;
    }, 300) as unknown as number;
  }

  function cancelClose() {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  }
</script>

<header>
  <div class="inner-box">
    <div class="inner-wrapper">
      <div class="logo-area">
        <a class="company-logo solid" href={localizeHref('/')} aria-label="STRATECO - Logo"></a>
      </div>
      <nav class="navigation">
        <ul class="main-nav">
          <li
            class="nav-item-with-submenu"
            class:full-width={navigation.expertise.layout === 'full'}
            class:compact={navigation.expertise.layout === 'compact'}
            onmouseenter={() => handleMouseEnter('expertise')}
            onmouseleave={handleMouseLeave}
          >
            <a
              href={localizeHref('/expertise')}
              class="solid nav-link-wrapper"
              class:active={page.url.pathname.includes('expertise') || page.url.pathname.includes('kompetenzen')}
            >
              <span>{m['navigation.expertise.self']()}</span>
              <svg
                class="nav-arrow"
                class:rotated={activeMenu === 'expertise'}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg
              >
            </a>
            {#if activeMenu === 'expertise'}
              <div
                class="mega-menu"
                class:compact={navigation.expertise.layout === 'compact'}
                role="menu"
                tabindex="-1"
                onmouseenter={cancelClose}
                onmouseleave={handleMouseLeave}
              >
                <div class="mega-menu-content">
                  <div class="mega-menu-sections">
                    <h3 class="w-full">Unsere Kompetenzen</h3>
                    {#each navigation.expertise.sections as section}
                      <div class="mega-menu-section">
                        {#if section.heading}
                          <h3 class="section-heading">{section.heading}</h3>
                        {/if}
                        <ul class="section-links">
                          {#each section.items as item}
                            <li>
                              <a href={localizeHref(item.href)} class="menu-link" class:active={page.url.pathname.includes(item.href)}>
                                {item.label()}
                              </a>
                            </li>
                          {/each}
                        </ul>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/if}
          </li>

          <li
            class="nav-item-with-submenu"
            class:full-width={navigation.topics.layout === 'full'}
            class:compact={navigation.topics.layout === 'compact'}
            onmouseenter={() => handleMouseEnter('topics')}
          >
            <a
              href={localizeHref('/topics')}
              class="solid nav-link-wrapper"
              class:active={page.url.pathname.includes('topics') || page.url.pathname.includes('themen')}
            >
              <span>{m['navigation.topics.self']()}</span>
              <svg
                class="nav-arrow"
                class:rotated={activeMenu === 'topics'}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg
              >
            </a>
            {#if activeMenu === 'topics'}
              <div class="mega-menu" class:compact={navigation.topics.layout === 'compact'} role="menu" tabindex="-1" onmouseenter={cancelClose}>
                <div class="mega-menu-content">
                  <div class="mega-menu-sections">
                    <h3 class="w-full">Unsere Themen</h3>
                    {#each navigation.topics.sections as section}
                      <div class="mega-menu-section">
                        {#if section.heading}
                          <h3 class="section-heading{section.color ? ' ' + section.color : ''}">{section.heading}</h3>
                        {/if}
                        <ul class="section-links">
                          {#each section.items as item}
                            <li>
                              <a href={localizeHref(item.href)} class="menu-link" class:active={page.url.pathname.includes(item.href)}>
                                {item.label()}
                              </a>
                            </li>
                          {/each}
                        </ul>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/if}
          </li>

          <li
            class="nav-item-with-submenu"
            class:full-width={navigation.about.layout === 'full'}
            class:compact={navigation.about.layout === 'compact'}
            onmouseenter={() => handleMouseEnter('about')}
            onmouseleave={handleMouseLeave}
          >
            <a
              href={localizeHref('/about-us')}
              class="solid nav-link-wrapper"
              class:active={page.url.pathname.includes('about-us') || page.url.pathname.includes('ueber-uns')}
            >
              <span>{m['navigation.about.self']()}</span>
              <svg
                class="nav-arrow"
                class:rotated={activeMenu === 'about'}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg
              >
            </a>
            {#if activeMenu === 'about'}
              <div
                class="mega-menu"
                class:compact={navigation.about.layout === 'compact'}
                role="menu"
                tabindex="-1"
                onmouseenter={cancelClose}
                onmouseleave={handleMouseLeave}
              >
                <div class="mega-menu-content">
                  <div class="mega-menu-sections">
                    {#each navigation.about.sections as section}
                      <div class="mega-menu-section">
                        {#if section.heading}
                          <h3 class="section-heading">{section.heading}</h3>
                        {/if}
                        <ul class="section-links">
                          {#each section.items as item}
                            <li>
                              <a href={localizeHref(item.href)} class="menu-link" class:active={page.url.pathname.includes(item.href)}>
                                {item.label()}
                              </a>
                            </li>
                          {/each}
                        </ul>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/if}
          </li>

          <li>
            <a href={localizeHref('/contact')} class="solid" class:active={page.url.pathname.includes('contact') || page.url.pathname.includes('kontakt')}>
              {m['navigation.contact.self']()}
            </a>
          </li>
        </ul>
        <ul class="lang-switch">
          <li><button class="text-link-button solid" class:active={getLocale() === 'en'} onclick={() => setLocale('en')}>en</button></li>
          <li><button class="text-link-button solid" class:active={getLocale() === 'de'} onclick={() => setLocale('de')}>de</button></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style lang="postcss">
  @reference '../../app.css';
  header {
    @apply relative flex h-30 flex-col items-center justify-center;
    z-index: 1000;

    .inner-box {
      @apply mx-auto w-full max-w-7xl px-10;

      .inner-wrapper {
        @apply bg-darkGrey/70 flex w-full flex-row rounded-xl shadow-md;
        .logo-area {
          @apply flex w-fit items-center justify-center px-2;
          .company-logo {
            @apply h-[35px] w-[168px] bg-cover bg-left bg-no-repeat;
            background-image: url('/images/strateco-logo.png');
          }
        }

        nav.navigation {
          @apply flex grow flex-row items-center justify-between pl-6;
          ul.main-nav {
            @apply flex flex-row items-center justify-center;
            li {
              @apply relative mx-4 py-4;

              /* Layout behavior classes */
              &.full-width {
                @apply static;
              }

              &.compact {
                @apply relative;
              }

              a {
                @apply text-white no-underline transition-all duration-300 hover:text-white/70;

                &.nav-link-wrapper {
                  @apply flex items-center gap-1;
                }

                &.active {
                  @apply cursor-default text-white/70 underline;
                }

                .nav-arrow {
                  @apply transition-transform duration-300;
                  &.rotated {
                    @apply rotate-180;
                  }
                }
              }

              /* Mega Menu Styles */
              .mega-menu {
                @apply pointer-events-none absolute top-[100px] z-50 opacity-0;
                animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;

                /* Full width specific styles (default/layout='full') */
                &:not(.compact) {
                  @apply right-0 left-0;

                  .mega-menu-content {
                    @apply mx-auto max-w-7xl px-10;
                  }
                }

                /* Compact layout specific styles */
                &.compact {
                  @apply top-[68px] left-1/2 -translate-x-1/2;
                  min-width: 280px;

                  .mega-menu-content {
                    @apply w-full p-0;

                    .mega-menu-sections {
                      @apply min-w-0 flex-col gap-0 p-5;
                      background-image: none;

                      .mega-menu-section {
                        @apply min-w-0;

                        .section-heading {
                          @apply mb-3 pb-2 text-xs;
                        }

                        .section-links li .menu-link {
                          @apply px-3 py-2 text-sm;
                        }
                      }
                    }
                  }
                }

                .mega-menu-content {
                  .mega-menu-sections {
                    @apply flex flex-wrap gap-12 overflow-hidden rounded-lg bg-white bg-no-repeat p-8 shadow-2xl;
                    box-shadow:
                      0 50px 100px -20px rgba(50, 50, 93, 0.25),
                      0 30px 60px -30px rgba(0, 0, 0, 0.3),
                      0 -2px 6px 0 rgba(10, 37, 64, 0.05) inset;

                    background-image: url('/icons/ring.svg');
                    background-position: calc(100% + 80px) calc(100% + 70px);
                    background-size: 400px 400px;

                    .mega-menu-section {
                      @apply min-w-[290px];
                      animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                      animation-delay: calc(var(--section-index, 0) * 0.05s);
                      opacity: 0;

                      &:nth-child(1) {
                        --section-index: 1;
                      }
                      &:nth-child(2) {
                        --section-index: 2;
                      }
                      &:nth-child(3) {
                        --section-index: 3;
                      }

                      .section-heading {
                        @apply text-specialGrey relative mb-4 w-fit pb-2 text-sm font-bold tracking-widest uppercase;

                        &.orange {
                          @apply text-specialOrange;
                          &::after {
                            background: linear-gradient(90deg, var(--orange), transparent);
                          }
                        }

                        &.blue {
                          @apply text-specialBlue;
                          &::after {
                            background: linear-gradient(90deg, var(--pale-blue), transparent);
                          }
                        }

                        &::after {
                          content: '';
                          @apply absolute bottom-0 left-0 h-0.5 w-full rounded-full opacity-50;
                          background: linear-gradient(90deg, var(--special-grey), transparent);
                        }
                      }

                      .section-links {
                        @apply m-0 list-none space-y-1 p-0;

                        li {
                          @apply m-0 p-0;

                          .menu-link {
                            @apply text-darkGrey block rounded-lg px-3 py-2 no-underline;
                            @apply relative leading-snug transition-all duration-200 ease-out;
                            font-size: 0.9rem;
                            max-width: 40ch;

                            /* Hover effect background */
                            &:hover {
                              @apply text-specialGrey bg-specialGrey/5 pl-5;
                            }

                            /* Active state */
                            &.active {
                              @apply text-specialGrey bg-specialGrey/10 font-semibold;

                              &::before {
                                content: '';
                                @apply bg-specialGrey absolute top-0 bottom-0 left-0 w-1 rounded-l-lg;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ul.lang-switch {
            @apply flex flex-row items-center justify-center pr-2;
            li {
              button {
                @apply px-3 text-white no-underline transition-all duration-300 hover:text-white/70;
                &.active {
                  @apply cursor-default text-white/70 underline;
                }
              }
              &:last-child button {
                @apply border-l border-white;
              }
            }
          }
        }
      }
    }
  }

  /* Animations */
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
