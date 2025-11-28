<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import QuoteCard from '$lib/components/quote-card.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
</script>

<Stage>
  <IntroBox title={m['expertise.strategy.introTitle']()} description={m['expertise.strategy.introDescription']()}></IntroBox>
</Stage>

{#snippet left()}
  <div class="prose">
    <h2>{m['expertise.strategy.title']()}</h2>
    <div class="prose">
      {@html m['expertise.strategy.text']()}
    </div>
  </div>
{/snippet}
{#snippet right()}
  <QuoteCard
    quote={'In Dir muss brennen, was Du in anderen entzünden willst !'}
    author={'Augustinus von Hippo'}
    role={'Kirchenlehrer und Philosoph (354-430)'}
    image={'/images/augustinus-von-hippo.jpg'}
  />
{/snippet}
<Section>
  <BasicContentArea {left} {right} />
</Section>
