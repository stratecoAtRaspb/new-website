<script lang="ts">
  import BasicContentHalf from '$lib/components/basic-content-half.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { onMount } from 'svelte';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { browser } from '$app/environment';

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFzcGIiLCJhIjoiY21pbHY3a3h4MW9yNTNkcXgxY3Y3dm5zNSJ9.nhcu1xJvHDqpJ8-5tQy0jA';

  onMount(async () => {
    const el = document.createElement('div');
    el.className = 'stratecoMapMarker';

    const map = new mapboxgl.Map({
      container: 'map',
      attributionControl: false,
      center: [8.61881, 50.22803],
      zoom: 13.75
    });

    map.on('load', () => {
      new mapboxgl.Marker(el).setLngLat([8.61749, 50.228438]).addTo(map);
    });
  });
</script>

<svelte:head>
  <title>{m['contact.title']()}</title>
  <meta name="description" content={m['contact.title']()} />
</svelte:head>

<Stage>
  <IntroBox title={m['contact.introTitle']()} description={m['aboutUs.introDescription']()}></IntroBox>
</Stage>

{#if !browser}
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
    <input type="hidden" name="form-name" value="contact" />

    <p class="hidden">
      <label>
        Nicht ausfüllen:
        <input name="bot-field" />
      </label>
    </p>

    <div class="form-field-container">
      <div class="form-field-section">
        <label for="first-name">{m['contact.form.firstNameLabel']()}</label>
        <input type="text" id="first-name" name="first-name" placeholder={m['contact.form.firstNamePlaceholder']()} required />
      </div>
      <div class="form-field-section">
        <label for="last-name">{m['contact.form.lastNameLabel']()}</label>
        <input type="text" id="last-name" name="last-name" placeholder={m['contact.form.lastNamePlaceholder']()} required />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="email">{m['contact.form.emailLabel']()}</label>
        <input type="email" id="email" name="email" placeholder={m['contact.form.emailPlaceholder']()} required />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="phone">{m['contact.form.phoneLabel']()}</label>
        <input type="tel" id="phone" name="phone" placeholder={m['contact.form.phonePlaceholder']()} />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="subject">{m['contact.form.subjectLabel']()}</label>
        <input type="text" id="subject" name="subject" placeholder={m['contact.form.subjectPlaceholder']()} />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="message">{m['contact.form.messageLabel']()}</label>
        <span class="additional-information"></span>
        <textarea id="message" name="message" rows="4" placeholder="" required></textarea>
      </div>
    </div>
    <div class="form-field-container">
      <div class="form-field-section full-width checkbox-dialog">
        <input id="dsgvo" name="dsgvo" type="checkbox" value="dsgvo-confirmed" class="is-checkbox accent-secondary" required />
        <label for="dsgvo">{m['contact.form.dsgvoLabel']()}</label>
      </div>
    </div>
    <div class="medium-spacer"></div>
    <div class="submit-row">
      <button type="submit" class="btn btn-secondary ml-auto">{m['contact.form.submitButton']()}</button>
    </div>
  </form>
{/if}

{#snippet left()}
  <div class="prose">
    <h2>{m['contact.title']()}</h2>
    <div class="prose">
      {@html m['contact.text']()}
    </div>
  </div>

  <h3 class="pt-10 pb-5">{m['contact.secondHeadline']()}</h3>

  <div id="map"></div>
{/snippet}
{#snippet right()}
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
    <input type="hidden" name="form-name" value="contact" />

    <p class="hidden">
      <label>
        Nicht ausfüllen:
        <input name="bot-field" />
      </label>
    </p>

    <div class="form-field-container">
      <div class="form-field-section">
        <label for="first-name">{m['contact.form.firstNameLabel']()}</label>
        <input type="text" id="first-name" name="first-name" placeholder={m['contact.form.firstNamePlaceholder']()} required />
      </div>
      <div class="form-field-section">
        <label for="last-name">{m['contact.form.lastNameLabel']()}</label>
        <input type="text" id="last-name" name="last-name" placeholder={m['contact.form.lastNamePlaceholder']()} required />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="email">{m['contact.form.emailLabel']()}</label>
        <input type="email" id="email" name="email" placeholder={m['contact.form.emailPlaceholder']()} required />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="phone">{m['contact.form.phoneLabel']()}</label>
        <input type="tel" id="phone" name="phone" placeholder={m['contact.form.phonePlaceholder']()} />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="subject">{m['contact.form.subjectLabel']()}</label>
        <input type="text" id="subject" name="subject" placeholder={m['contact.form.subjectPlaceholder']()} />
      </div>
    </div>

    <div class="form-field-container">
      <div class="form-field-section full-width">
        <label for="message">{m['contact.form.messageLabel']()}</label>
        <span class="additional-information"></span>
        <textarea id="message" name="message" rows="4" placeholder="" required></textarea>
      </div>
    </div>
    <div class="form-field-container">
      <div class="form-field-section full-width checkbox-dialog">
        <input id="dsgvo" name="dsgvo" type="checkbox" value="dsgvo-confirmed" class="is-checkbox accent-secondary" required />
        <label for="dsgvo">{m['contact.form.dsgvoLabel']()}</label>
      </div>
    </div>
    <div class="medium-spacer"></div>
    <div class="submit-row">
      <button type="submit" class="btn btn-secondary ml-auto">{m['contact.form.submitButton']()}</button>
    </div>
  </form>
{/snippet}
<Section>
  <BasicContentHalf {left} {right} />
</Section>

<style lang="postcss">
  @reference '../../app.css';
  #map {
    @apply m-auto h-[360px] w-full max-w-7xl rounded-2xl shadow-lg;
  }
  :global(div.stratecoMapMarker) {
    background-image: url('/map-marker.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-top: -25px;
    margin-left: 3px;
  }

  form {
    @apply w-full max-w-4xl;
    .form-field-container {
      @apply mb-4 grid w-full gap-6 md:grid-cols-2;
      .form-field-section {
        &.full-width {
          @apply col-span-full;
        }
        &.checkbox-dialog {
          @apply flex h-6 items-center;
          label {
            @apply !mb-0 !ml-3 cursor-pointer pt-2;
            &:hover {
              @apply text-mediumGrey;
            }
          }
        }
        label {
          @apply text-mediumGrey mb-1 block text-base leading-snug;

          &[for='first-name'],
          &[for='last-name'],
          &[for='email'],
          &[for='phone'],
          &[for='subject'],
          &[for='message'] {
            @apply pl-0.5 font-bold;
          }
        }
        input,
        textarea {
          @apply border-mediumGrey text-mediumGrey focus:border-secondary focus:ring-secondary mt-1 block w-full border bg-white p-3 text-sm;
        }
        input.is-checkbox {
          @apply mt-0 h-6 w-6 p-0;
        }

        .additional-information {
          @apply text-mediumGrey text-sm;
        }
      }
    }
    .submit-row {
      @apply flex flex-row items-center justify-end;
    }
  }
</style>
