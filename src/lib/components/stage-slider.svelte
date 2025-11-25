<script lang="ts">
  import { onMount } from 'svelte';
  import { register } from 'swiper/element/bundle';

  register();

  let mySwiper: any;
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    keyboard: {
      enabled: true
    },
    navigation: {
      nextEl: '.stage-slider-button-next',
      prevEl: '.stage-slider-button-prev'
    },
    autoplay: {
      delay: 7500,
      pauseOnMouseEnter: true
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      init() {}
    }
  };

  let slides = [
    {
      image: '/images/slides/glass-building.jpg',
      headline: 'Sie wollen hoch hinaus?',
      text: 'Unser Know-how und unsere Lösungen schaffen ein solides Fundament für Ihr Wachstum.'
    },
    {
      image: '/images/slides/ideen.jpg',
      headline: 'Unserer Ergebnisse stechen heraus?',
      text: 'Wir sind eine Idee einfallsreicher und dabei hochprofessionell in der Umsetzung.'
    },
    {
      image: '/images/slides/hoch-hinaus-1.jpg',
      headline: 'Schritt für Schritt erklimmen wir die nächste Stufe',
      text: 'Wir sind Ihr zuverlässiger Partner, wenn es um das Meistern Ihrer Herausforderungen geht!'
    },
    {
      image: '/images/slides/sky.jpg',
      headline: 'Bis zur Unendlichkeit und noch weiter...',
      text: 'Streben Sie nach den Unerreichbaren? Wir helfen Ihnen dabei, ganz dicht an Ihr Zile zu kommen.'
    },
    {
      image: '/images/slides/escalator.jpg',
      headline: 'Unsere Kompetenz ist Ihr Wettbewerbsvorteil',
      text: 'Mit Leidenschaft (er)finden wir uns seit mehr als 20 Jahren die erfolgreichsten Startegien und Lösungen für unsere Klienten.'
    }
  ];

  onMount(() => {
    Object.assign(mySwiper, params);
    mySwiper.initialize();
  });
</script>

<div class="stage-slider-container">
  <swiper-container bind:this={mySwiper} init="false" class="stage-slider-swiper">
    {#each slides as slide}
      <swiper-slide>
        <div class="stage-slider-slide" style="--bg-image: url({slide.image})">
          <div class="stage-slider-overlay"></div>
          <div class="stage-slider-content">
            <div class="stage-slider-text-area">
              <div class="stage-slider-headline">{slide.headline}</div>
              <p class="stage-slider-text">{slide.text}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>

  <!-- Custom Navigation -->
  <div class="stage-slider-navigation">
    <button class="stage-slider-button-prev stage-slider-nav-btn" type="button" aria-label="previous">
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button class="stage-slider-button-next stage-slider-nav-btn" type="button" aria-label="next">
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none">
        <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';

  .stage-slider-container {
    @apply relative -mt-30 h-[948px] w-full overflow-hidden;
  }

  .stage-slider-swiper {
    @apply h-full w-full;
  }

  .stage-slider-slide {
    @apply relative flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat;
    background-image: var(--bg-image);
  }

  .stage-slider-overlay {
    @apply absolute inset-0 z-10 bg-black/10;
  }

  .stage-slider-content {
    @apply max-w-7xl w-full pl-10 pr-24 pb-36 m-auto z-30;
    .stage-slider-text-area {

      @apply bg-deepGreen/85 ml-auto w-80 md:w-[480px] rounded-md p-4;

      .stage-slider-headline {
        @apply text-xl leading-tight font-medium text-white mb-3;
      }
      .stage-slider-text {
        @apply text-base font-medium leading-snug text-white;
      }
    }
  }

  .stage-slider-navigation {
    @apply pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-[7vw] z-20;
  }

  .stage-slider-nav-btn {
    @apply pointer-events-auto cursor-pointer rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 md:p-4;

    &:hover {
      @apply scale-110 shadow-lg;
    }

    &:disabled {
      @apply cursor-not-allowed opacity-50;
    }
  }

  :global(.hero-swiper .swiper-slide) {
    @apply h-full w-full;
  }
</style>
