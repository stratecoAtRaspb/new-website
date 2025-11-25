<script lang="ts">
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['navigation.topics.cea']()} description={m['topics.description']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h1>{m['navigation.topics.cea']()}</h1>

    <p>
      Customer Experience Analytics (CEA) ermöglicht es Ihnen, Ihre Kunden besser zu verstehen und ihre Erwartungen 
      zu übertreffen. STRATECO unterstützt Sie dabei, datengetriebene Einblicke in die Customer Journey zu gewinnen 
      und daraus konkrete Handlungsempfehlungen abzuleiten.
    </p>
    <p>
      Mit modernen Analytics-Tools und bewährten Methoden helfen wir Ihnen, Customer Touchpoints zu optimieren, 
      die Kundenzufriedenheit zu steigern und langfristige Kundenbeziehungen aufzubauen.
    </p>
  </div>

  <a href={localizeHref('/topics')}>Zurück zu Themen</a>
</Section>
