<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.people']()} description={m['about.description']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h1>{m['navigation.expertise.people']()}</h1>

    <p>
      Menschen sind der Erfolgsfaktor jeder Organisation. STRATECO unterstützt Sie dabei, Ihre Mitarbeiter optimal 
      zu entwickeln und die richtigen Talente für Ihr Unternehmen zu gewinnen und zu binden.
    </p>
    <p>
      Von Change Management über Führungskräfteentwicklung bis hin zur Organisationsentwicklung – wir helfen Ihnen, 
      eine leistungsstarke und motivierte Organisation aufzubauen.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>