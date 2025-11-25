<script lang="ts">
  import { resolve } from '$app/paths';
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { setLocale, localizeHref, getLocale } from '$lib/paraglide/runtime';
</script>



<div class="inner-box">
<div class="w-full h-80 bg-amber-700">
  <p>Hallo</p>
</div>

</div>

<style lang="postcss">
  @reference '../../app.css';
</style>
