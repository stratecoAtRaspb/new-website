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
  
  // Navigation structure with sub-items grouped
  const navigation: Record<string, { sections: { heading?: string; items: NavItemLink[] }[] }> = {
    expertise: {
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
            { key: 'telecomsMediaAndHighTech', label: m['navigation.expertise.telecomsMediaAndHighTech'], href: '/expertise/telecoms-media-hightech' } as NavItemLink,
            { key: 'travelTransportAndLogistics', label: m['navigation.expertise.travelTransportAndLogistics'], href: '/expertise/travel-transport-logistics' } as NavItemLink,
            { key: 'other', label: m['navigation.expertise.other'], href: '/expertise/other' } as NavItemLink
          ]
        }
      ]
    },
    topics: {
      sections: [
        {
          items: [
            { key: 'aos', label: m['navigation.topics.aos'], href: '/topics/aos' } as NavItemLink,
            { key: 'financeAndControlling', label: m['navigation.topics.financeAndControlling'], href: '/topics/finance-controlling' } as NavItemLink,
            { key: 'tas', label: m['navigation.topics.tas'], href: '/topics/tas' } as NavItemLink,
            { key: 'ras', label: m['navigation.topics.ras'], href: '/topics/ras' } as NavItemLink,
            { key: 'cea', label: m['navigation.topics.cea'], href: '/topics/cea' } as NavItemLink,
            { key: 'marketing', label: m['navigation.topics.marketing'], href: '/topics/marketing' } as NavItemLink
          ]
        }
      ]
    },
    about: {
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
    closeTimeout = setTimeout(() => {
      activeMenu = null;
      closeTimeout = null;
    }, 100) as unknown as number;
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
            onmouseenter={() => handleMouseEnter('expertise')}
            onmouseleave={handleMouseLeave}
          >
            <a 
              href={localizeHref('/expertise')} 
              class="solid"
              class:active={page.url.pathname.includes('expertise') || page.url.pathname.includes('kompetenzen')}
            >
              {m['navigation.expertise.self']()}
            </a>
            {#if activeMenu === 'expertise'}
              <div 
                class="mega-menu"
                role="menu"
                tabindex="-1"
                onmouseenter={cancelClose}
                onmouseleave={handleMouseLeave}
              >
                <div class="mega-menu-content">
                  <div class="mega-menu-sections">
                    {#each navigation.expertise.sections as section}
                      <div class="mega-menu-section">
                        {#if section.heading}
                          <h3 class="section-heading">{section.heading}</h3>
                        {/if}
                        <ul class="section-links">
                          {#each section.items as item}
                            <li>
                              <a 
                                href={localizeHref(item.href)} 
                                class="menu-link"
                                class:active={page.url.pathname.includes(item.href)}
                              >
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
            onmouseenter={() => handleMouseEnter('topics')}
            onmouseleave={handleMouseLeave}
          >
            <a 
              href={localizeHref('/topics')} 
              class="solid"
              class:active={page.url.pathname.includes('topics') || page.url.pathname.includes('themen')}
            >
              {m['navigation.topics.self']()}
            </a>
            {#if activeMenu === 'topics'}
              <div 
                class="mega-menu"
                role="menu"
                tabindex="-1"
                onmouseenter={cancelClose}
                onmouseleave={handleMouseLeave}
              >
                <div class="mega-menu-content">
                  <div class="mega-menu-sections">
                    {#each navigation.topics.sections as section}
                      <div class="mega-menu-section">
                        {#if section.heading}
                          <h3 class="section-heading">{section.heading}</h3>
                        {/if}
                        <ul class="section-links">
                          {#each section.items as item}
                            <li>
                              <a 
                                href={localizeHref(item.href)} 
                                class="menu-link"
                                class:active={page.url.pathname.includes(item.href)}
                              >
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
            onmouseenter={() => handleMouseEnter('about')}
            onmouseleave={handleMouseLeave}
          >
            <a 
              href={localizeHref('/about-us')} 
              class="solid"
              class:active={page.url.pathname.includes('about-us') || page.url.pathname.includes('ueber-uns')}
            >
              {m['navigation.about.self']()}
            </a>
            {#if activeMenu === 'about'}
              <div 
                class="mega-menu"
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
                              <a 
                                href={localizeHref(item.href)} 
                                class="menu-link"
                                class:active={page.url.pathname.includes(item.href)}
                              >
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
            <a 
              href={localizeHref('/contact')} 
              class="solid"
              class:active={page.url.pathname.includes('contact') || page.url.pathname.includes('kontakt')}
            >
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
        @apply bg-darkGrey/70 flex w-full flex-row rounded-xl py-2 shadow-md;
        .logo-area {
          @apply flex w-fit items-center justify-center px-2;
          .company-logo {
            @apply h-8 w-52 bg-cover bg-left bg-no-repeat;
            background-image: url('/images/logo.png');
          }
        }

        nav.navigation {
          @apply flex grow flex-row items-center justify-between pl-6;
          ul.main-nav {
            @apply flex flex-row items-center justify-center;
            li {
              @apply mx-4 p-2 relative;
              
              &.nav-item-with-submenu {
                @apply static;
              }
              
              a {
                @apply text-white no-underline hover:text-white/70 transition-all duration-300;
                &.active {
                  @apply underline text-white/70 cursor-default;
                }
              }
              
              /* Mega Menu Styles */
              .mega-menu {
                @apply absolute left-0 right-0 top-16 mt-2 opacity-0 pointer-events-none;
                animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                
                .mega-menu-content {
                  @apply mx-auto max-w-7xl px-10 py-6;
                  
                  .mega-menu-sections {
                    @apply rounded-2xl shadow-2xl p-10 flex gap-16;
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.15),
                                0 0 0 1px rgba(0, 0, 0, 0.05);
                    
                    .mega-menu-section {
                      @apply flex-1 min-w-[220px];
                      animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
                        @apply font-bold text-darkGrey text-xs uppercase tracking-widest mb-5 pb-3;
                        background: linear-gradient(135deg, var(--deep-green) 0%, var(--dark-grey) 100%);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        position: relative;
                        
                        &::after {
                          content: '';
                          @apply absolute bottom-0 left-0 h-0.5 w-12 rounded-full;
                          background: linear-gradient(90deg, var(--deep-green), transparent);
                        }
                      }
                      
                      .section-links {
                        @apply list-none p-0 m-0 space-y-0.5;
                        
                        li {
                          @apply m-0 p-0;
                          
                          .menu-link {
                            @apply block px-4 py-3 rounded-xl text-darkGrey no-underline;
                            @apply transition-all duration-300 ease-out;
                            font-size: 0.95rem;
                            position: relative;
                            overflow: hidden;
                            
                            &::before {
                              content: '';
                              @apply absolute inset-0 rounded-xl opacity-0 transition-all duration-300;
                              background: linear-gradient(135deg, 
                                rgba(var(--deep-green-rgb), 0.08) 0%, 
                                rgba(var(--deep-green-rgb), 0.03) 100%);
                              --deep-green-rgb: 45, 106, 79;
                              transform: translateX(-100%);
                            }
                            
                            &::after {
                              content: '→';
                              @apply absolute right-4 opacity-0 transition-all duration-300;
                              color: var(--deep-green);
                              transform: translateX(-8px);
                            }
                            
                            &:hover {
                              @apply text-deepGreen translate-x-2;
                              transform: translateX(8px) scale(1.02);
                              
                              &::before {
                                @apply opacity-100;
                                transform: translateX(0);
                              }
                              
                              &::after {
                                @apply opacity-100;
                                transform: translateX(0);
                              }
                            }
                            
                            &.active {
                              @apply text-deepGreen font-semibold;
                              background: linear-gradient(135deg, 
                                rgba(var(--deep-green-rgb), 0.12) 0%, 
                                rgba(var(--deep-green-rgb), 0.06) 100%);
                              --deep-green-rgb: 45, 106, 79;
                              box-shadow: inset 4px 0 0 0 var(--deep-green),
                                          0 2px 8px -2px rgba(var(--deep-green-rgb), 0.2);
                              
                              &::after {
                                content: '●';
                                @apply opacity-100;
                                transform: translateX(0);
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
                @apply text-white no-underline hover:text-white/70 px-3 transition-all duration-300;
                &.active {
                  @apply underline text-white/70 cursor-default;
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
      transform: translateY(-20px) scale(0.96);
      pointer-events: none;
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }
  }
  
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(12px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
