<script lang="ts">
  import BasicContentArea from '$lib/components/basic-content-area.svelte';
  import IntroBox from '$lib/components/intro-box.svelte';
  import Section from '$lib/components/section.svelte';
  import Stage from '$lib/components/stage.svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Stage>
  <IntroBox title={m['aboutUs.management.introTitle']()} description={m['aboutUs.management.introDescription']()}></IntroBox>
</Stage>

<Section>
  <div class="prose">
    <h2>{m['aboutUs.management.title']()}</h2>
    <blockquote class="relative mt-2 mb-12 ml-4 max-w-4xl">
      <svg
        class="absolute -start-6 -top-6 size-16 text-gray-100"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
          fill="currentColor"
        ></path>
      </svg>

      <div class="relative z-10">
        <p class="text-gray-800 sm:text-xl">
          <em
            >Our motivation for founding STRATECO in 2002 was to differentiate ourselves from other consultancies. We were not satisfied with the conventional
            role of consultant; we wanted to become something special to all our customers. That led us to our commitment to ensure that our customers achieve
            the highest level of performance. We have been dedicated to this commitment to this day. It is expressed in our company motto which states our
            mission: Our competence is your competitive-advantage!</em
          >
        </p>
      </div>
    </blockquote>

    <h3>Laurence A. Dickler</h3>
    <p>
      Laurence A. Dickler is Managing Partner of STRATECO Strategie- und Management-Beratungsgesellschaft mbH, located in Bad Homburg. The advisory services he
      oversees focus on the financial service industry. They consist of:
    </p>
    <ul class="checklist">
      <li><span>Transactions Advisory Services (TAS)</span></li>
      <li><span>Alignment of Organization to Strategy (AOS)</span></li>
      <li><span>Risk Advisory Services (RAS)</span></li>
      <li><span>Finance & Controlling</span></li>
    </ul>
<img src="/images/Laurence.jpg" alt="Jens W. Klemann" class="float-left rounded-lg mt-2 ml-2 mb-4 mr-10"/>
    <p>
      Previous to the founding of STRATECO GmbH in Bad Homburg, Mr. Dickler was an associate in Controlling in the section Tax & Legal, Assurance and Business
      Advisory of Arthur Andersen WP/Stb-Gesellschaft and later was engaged as a consultant for the design and implementation of the financial planning platform
      for the planned Initial Public Offering of a leading telecommunication group.
    </p>
    <p>
      As Managing Partner for Financial Institutions Mr. Dickler has assumed responsibility for numerous projects in the segments of transactions advisory
      services, risk management, as well as Finance and Controlling. The clients he has served include leading internationally active institutions in investment
      banking, asset management, private banking, wealth management and „Bad Banks“. Mr. Dickler combines functional expertise with technical and practical
      experience. Through specialized methods and technical know-how customers obtain valuable insights into their business processes. Tailor made solution
      based on standard technologies support sound decisions based on reliable information so that firms are competitive in international markets and can
      position themselves successfully. In order to expand our capability to adapt processes and solutions to your strategy, check our advisory services in the
      segment “Alignment of Organization to Strategy”.
    </p>

    <div class="divider"></div>


    <h3>Jens W. Klemann</h3>
    <p>
      Jens W. Klemann is Managing Partner of STRATECO, Strategie- and Management-Beratungsgesellschaft mbH located in Bad Homburg. His advisory activities focus
      on the following areas:
    </p>
    <ul class="checklist">
      <li><span>Marketing & Business Development</span></li>
      <li><span>Customer Interaction</span></li>
      <li><span>Customer Experience Analytics (CEA)</span></li>
      <li><span>Marketing Automation</span></li>
    </ul>

    <img src="/images/Jens_Klemann.jpg" alt="Jens W. Klemann" class="float-right rounded-lg mt-1 mr-4 mb-4 ml-12"/>
    <p>
      As Managing Partner at STRATECO he is responsible for the segments Marketing and Business Development. Special research focus is in the field of Marketing Automation, Customer Experience Analytics and Customer Interaction. He is the author of numerous studies as well as a “Praxis Manual Mobile Marketing”, publisher of “smart-service.com” and Co-Founder of MobileMonday Frankfurt.
    </p>
    <p>
      He graduated with honors in business administration from the Goethe-Universität in Frankfurt and was active as teaching assistant to professors, especially in the field of marketing. He is a certified banking professional (Bankkaufmann) who became an entrepreneur after completing a trainee program and entry into banking at the Deutsche Bank. For Microsoft he developed the MCP-Campus-Promotion program and was co-founder of Logo Communication GmbH, for which he assumed responsibilities as general manager in 1998. In 2000 he became a member of the executive board of Logo Connection Holding where he was responsible for Marketing and IT. 
    </p>

    <blockquote class="relative mt-4 mb-12 ml-4 max-w-4xl">
      <svg
        class="absolute -start-6 -top-6 size-16 text-gray-100"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
          fill="currentColor"
        ></path>
      </svg>

      <div class="relative z-10">
        <p class="text-gray-800 sm:text-xl">
          <em
            >Challenges? They are there to be met! That's what STRATECO is all about. For over 22 years we have met the challenges of our clients. With specialized competence and proven methodologies with a passion and creatively. Our concepts do not consist only of the design of strategy, instead they are complete by specifying performance results. Measure us on the basis of the results we achieve for you!</em
          >
        </p>
      </div>
    </blockquote>
    <p><strong class="font-black">Our competence is your competitive advantage!</strong></p>
  </div>
</Section>

<style lang="postcss">
  @reference '../../../app.css';
  .divider {
    @apply mb-6 h-0.5 w-full bg-black/5;
  }
</style>
