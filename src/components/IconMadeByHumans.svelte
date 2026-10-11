<script lang="ts">
  import IconFingerprint from './IconFingerprint.svelte';
  import { CircleCheckBig } from '@lucide/svelte';
  let {
    isActive = false,
    isInHoverState = false,
    width=60
  } = $props();
</script>

<div class="flex flex-col self-center relative">
  <IconFingerprint isActive={isActive} isInHoverState={isInHoverState} width={width} />
  <div class="bg-surface-50-950 rounded-full absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4">
    <CircleCheckBig class="md:scale-115 text-secondary-700-300" />
  </div>
</div>