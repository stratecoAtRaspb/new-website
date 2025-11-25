<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.expertise.pharmaAndHealthcare']()} description={m['about.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.expertise.pharmaAndHealthcare']()}</h1>

    <p>
      Im dynamischen Umfeld von Pharma und Healthcare unterstützt STRATECO Unternehmen bei der Navigation durch 
      komplexe regulatorische Anforderungen und der Erschließung neuer Marktchancen.
    </p>
    <p>
      Unsere Expertise umfasst die gesamte Wertschöpfungskette – von Forschung und Entwicklung über Produktion bis 
      hin zu Marketing und Vertrieb im Healthcare-Sektor.
    </p>
  </div>

  <a href={localizeHref('/expertise')}>Zurück zu Kompetenzen</a>
</Section>
