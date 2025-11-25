<script lang="ts">
  let { style = 'grey' } = $props();
</script>

<div class="feature-box">
  <div class="feature">
    <h3>Managed Services</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, est. Pariatur quidem, rerum ex, numquam odio repudiandae beatae, omnis velit sit ullam
      iure corrupti voluptas est aspernatur inventore praesentium expedita.
    </p>
  </div>
  <div class="feature">
    <h3>Smart Data Management</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, est. Pariatur quidem, rerum ex, numquam odio repudiandae beatae, omnis velit sit ullam
      iure corrupti voluptas est aspernatur inventore praesentium expedita.
    </p>
  </div>
  <div class="feature">
    <h3>Risk Management</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, est. Pariatur quidem, rerum ex, numquam odio repudiandae beatae, omnis velit sit ullam
      iure corrupti voluptas est aspernatur inventore praesentium expedita.
    </p>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';
  div.feature-box {
    @apply bg-darkGrey/80 flex min-h-48 w-full flex-row gap-6 rounded-lg;

    .feature {
      @apply flex-1/3 p-5 text-white/80 hover:text-white cursor-pointer;

      h3 {
        @apply mb-3
      }
      p {
        @apply text-base;
      }
    }
  }
</style>
