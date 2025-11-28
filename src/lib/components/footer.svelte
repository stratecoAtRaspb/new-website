<script lang="ts">
  import { goto } from '$app/navigation';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';

  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function gotoExternal(target: string) {
    window.open(target, '_blank');
  }
</script>

<footer>
  <div class="inner-box">
    <div class="inner-wrapper">
      <div class="top-row">
        <div class="footer-logo"></div>
        <div class="line"></div>
        <div class="social-media-links">
          <button
            class="social-media-icon mail"
            onclick={() => {
              goto(localizeHref('/contact'));
            }}
            aria-label="Instagram"
          ></button>
          <button
            class="social-media-icon facebook"
            onclick={() => {
              gotoExternal('https://www.facebook.com/strateco/');
            }}
            aria-label="Facebook"
          ></button>
          <button
            class="social-media-icon x"
            onclick={() => {
              gotoExternal('https://x.com/STRATECO');
            }}
            aria-label="X"
          ></button>
          <button
            class="social-media-icon linkedin"
            onclick={() => {
              gotoExternal('https://de.linkedin.com/company/strateco-gmbh');
            }}
            aria-label="LinkedIn"
          ></button>

          <button
            class="social-media-icon xing"
            onclick={() => {
              gotoExternal('https://www.xing.com');
            }}
            aria-label="Xing"
          ></button>
        </div>
      </div>

      <div class="content-row">
        <!-- Left Column: Info -->
        <div class="info-col">
          <div class="address-details">
            <p><span class="font-black">STRATECO GmbH</span></p>
            <p>Kaiser-Friedrich-Promenade 45</p>
            <p>61348 Bad Homburg v.d.H.</p>

            <p class="mt-4">Telefon: +49 (0) 6172 - 99 59 500 | Fax: +49 (0) 6172 99 59 599</p>
            <p>
              E-Mail: <a href="mailto:info@strateco.de">info@strateco.de</a> <span class="px-2">oder</span>
              <a href="mailto:kontakt@strateco.de">kontakt@strateco.de</a>
            </p>
          </div>
        </div>
        <div class="news-col"></div>
      </div>

      <!-- Divider -->
      <div class="divider"></div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <nav>
          <a href={localizeHref('/')}>{ m['navigation.home.self']() }</a>
          <a href={localizeHref('/privacy')}>{ m['navigation.privacy.self']() }</a>
          <a href={localizeHref('/legal')}>{ m['navigation.legal.self']() }</a>
          <a href={localizeHref('/contact')}>{ m['navigation.contact.self']() }</a>
        </nav>
        <div class="copyright">
          <span>&copy; {currentYear} STRATECO GmbH</span>
          <span class="pl-4">
            <button class="btn btn-circle h-6 w-6 opacity-70" onclick={scrollToTop} title="Scroll to top" aria-label="Scroll to top">
              <svg class="text-base-content-50/80 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  @reference '../../app.css';

  footer {
    @apply bg-base-100 w-full;

    .inner-box {
      @apply mx-auto w-full max-w-7xl px-10;
    }

    .inner-wrapper {
      @apply w-full bg-linear-to-br from-(--dark-grey) to-(--medium-grey) px-16 pt-10 pb-6 text-white shadow-sm;

      .top-row {
        @apply flex w-full items-center justify-between;
        .footer-logo {
          @apply block h-[35px] w-[168px] bg-cover bg-left bg-no-repeat;
          background-image: url('/images/strateco-logo.png');
        }
        .line {
          @apply mx-3 h-0.5 grow bg-white/20;
        }
        .social-media-links {
          @apply ml-2 flex items-center justify-center;
          .social-media-icon {
            @apply mx-1 h-9 w-9 bg-white/90 mask-contain mask-center mask-no-repeat opacity-80;
            &:last-child {
              @apply mr-0;
            }
            &.x {
              mask-image: url('/icons/x-logo.svg');
            }
            &.linkedin {
              mask-image: url('/icons/linkedin-logo.svg');
            }
            &.mail {
              mask-image: url('/icons/mail-logo.svg');
            }
            &.xing {
              mask-image: url('/icons/xing-logo.svg');
            }
            &.facebook {
              mask-image: url('/icons/facebook-logo.svg');
            }
            &:hover {
              @apply scale-105 cursor-pointer opacity-100;
            }
          }
        }
      }

      .content-row {
        @apply flex flex-col justify-between gap-12 py-8 md:flex-row;

        .info-col {
          @apply flex flex-col items-start gap-6;

          .footer-logo {
            @apply -ml-2 h-[30px] w-auto opacity-95 brightness-0 invert;
          }

          .address-details {
            p {
              @apply m-0 border-none pb-1 text-base leading-relaxed text-white/90;
            }
            a {
              @apply text-white underline decoration-white/50 transition-all hover:decoration-white;
            }
          }
        }
      }

      .divider {
        @apply mb-6 h-0.5 w-full bg-white/20;
      }

      .footer-bottom {
        @apply flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row;

        nav {
          @apply flex flex-wrap gap-6;
          a {
            @apply text-white/70 no-underline transition-colors hover:text-white;
          }
        }

        .copyright {
          @apply flex flex-row items-center justify-end;
        }
      }
    }
  }
</style>
