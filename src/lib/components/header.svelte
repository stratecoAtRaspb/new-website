<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref, setLocale } from '$lib/paraglide/runtime';
  let mobileNavOpen = $state(false);
</script>

<header>
  <div class="inner-box">
    <div class="inner-wrapper">
      <div class="logo-area">
        <a class="company-logo" href={localizeHref('/')} aria-label="STRATECO - Logo"></a>
      </div>
      <nav class="navigation">
        <ul class="main-nav">
          <li><a href={localizeHref('/expertise')} class:active={page.url.pathname.includes('expertise') || page.url.pathname.includes('kompetenzen')} >{m['navigation.expertise.self']()}</a></li>
          <li><a href={localizeHref('/topics')} class:active={page.url.pathname.includes('topics') || page.url.pathname.includes('themen')}>{m['navigation.topics.self']()}</a></li>
          <li><a href={localizeHref('/about-us')} class:active={page.url.pathname.includes('about-us') || page.url.pathname.includes('ueber-uns')}>{m['navigation.about.self']()}</a></li>
          <li><a href={localizeHref('/contact')} class:active={page.url.pathname.includes('contact') || page.url.pathname.includes('kontakt')}>{m['navigation.contact.self']()}</a></li>
        </ul>
        <ul class="lang-switch">
          <li><button class="text-link-button" class:active={getLocale() === 'en'} onclick={() => setLocale('en')}>en</button></li>
          <li><button class="text-link-button" class:active={getLocale() === 'de'} onclick={() => setLocale('de')}>de</button></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style lang="postcss">
  @reference '../../app.css';
  header {
    @apply relative flex h-30 flex-col items-center justify-center;

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
              @apply mx-4 p-2;
              a {
                @apply text-white no-underline hover:text-white/70;
                &.active {
                  @apply underline text-white/70 cursor-default;
                }
              }
            }
          }
          ul.lang-switch {
            @apply flex flex-row items-center justify-center pr-2;
            li {
              button {
                @apply text-white no-underline hover:text-white/70 px-3;
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
</style>
