<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import { resolve } from '$app/paths';
</script>

<svelte:head>
  <title>{m.expertise_pharmaAndHealthcare_title()}</title>
  <meta name="description" content={m.expertise_pharmaAndHealthcare_title()} />
</svelte:head>

<Stage>
  <IntroBox title={m.navigation_expertise_pharmaAndHealthcare()} description={m.aboutUs_introDescription()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m.navigation_expertise_pharmaAndHealthcare()}</h2>

    <p>
      Im dynamischen Umfeld von Pharma und Healthcare unterstützt STRATECO Unternehmen bei der Navigation durch komplexe regulatorische Anforderungen und der
      Erschließung neuer Marktchancen.
    </p>
    <p>
      Unsere Expertise umfasst die gesamte Wertschöpfungskette – von Forschung und Entwicklung über Produktion bis hin zu Marketing und Vertrieb im
      Healthcare-Sektor.
    </p>
  </div>

  <!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
  <a href={ resolve(localizeHref('/expertise') as any) }>Zurück zu Kompetenzen</a>
{/snippet}
{#snippet right()}{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
