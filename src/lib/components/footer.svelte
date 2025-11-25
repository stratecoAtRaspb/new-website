<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  const currentYear = new Date().getFullYear();
  let darkActive = $state(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function gotoExternal(target: string) {
    window.open(target, '_blank');
  }

  function updateDataAttribute() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const themeToActivate = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', themeToActivate);
  }

  onMount(() => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    darkActive = currentTheme === 'dark';
  });
</script>

<footer>
  <div class="inner-box">
    <div class="inner-wrapper">
      <div class="top-row">
        <div class="footer-logo"></div>
        <div class="line"></div>
      </div>

      <div class="final-row">
        <p class="brand"><strong>STRATECO</strong> &copy; {currentYear}</p>
        <button class="btn btn-circle opacity-70" onclick={scrollToTop} title="Scroll to top" aria-label="Scroll to top">
          <svg class="text-base-content-50/80 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  @reference '../../app.css';

  footer {
    @apply flex flex-col items-center justify-start bg-gray-100;
    .inner-box {
      @apply m-auto w-full max-w-7xl px-10;

      .inner-wrapper {
        @apply bg-darkGrey/80 flex w-full flex-col items-center justify-between px-12 h-80;
        .top-row {
          @apply flex w-full items-center justify-between py-10;

          .line {
            @apply mx-2 h-0.5 w-full grow;
          }
        }

        .final-row {
          @apply mt-6 flex w-full items-center justify-between border-t-2 py-6 pr-2 pl-4;
        }
      }
    }
  }
</style>
