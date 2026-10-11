<script lang="ts" module>
  import { paths, type Path } from '$components/Header.svelte';
  import { removeItemFromArray } from '$utils/array';
</script>

<script lang="ts">
  type Props = {
    path: typeof paths[number];
  };
  let { path }: Props = $props();
  let pathsInHoverState: string[] = $state([]);
</script>

<a onmouseenter={() => pathsInHoverState.push(path.id)}
  onmouseleave={() => pathsInHoverState = removeItemFromArray(pathsInHoverState, path.id)}
  href={path.pathname}>{path.heading}
</a>