<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['aos.title']()} description={m['aos.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['aos.title']()}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur tempore magni natus suscipit, possimus qui repellat quidem id, deserunt quia at consectetur aperiam nesciunt ab, porro fugit debitis! Cum?</p>
  </div>
  <a href={localizeHref('/topics')}>Zurück zur Themenübericht</a>
</Section>
