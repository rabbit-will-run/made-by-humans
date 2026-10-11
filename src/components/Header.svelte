<script lang="ts" module>
	export type Path = {
		id: string;
		heading: string;
		pathname: string;
	};
	export const paths: Path[] = [
		{
			id: 'about',
			heading: 'About',
			pathname: '/about'
		},
		{
			id: 'services',
			heading: 'Services',
			pathname: '/services'
		},
	];
</script>
<script lang="ts">
	import { page } from '$app/state';
	import NavBarItem from '$components/NavBarItem.svelte';
	import { Menu as MenuIcon } from '@lucide/svelte';
	
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
  import IconMadeByHumans from './IconMadeByHumans.svelte';
  import { MOBILE_WIDTH_BREAKPOINT_PX } from '../consts';
	let isHeaderInHoverState: boolean = $state(false);
	let x = $state(0);
	let isMobile = $derived(x <= MOBILE_WIDTH_BREAKPOINT_PX);
	let iconWidth = $derived(isMobile ? 40 : 70);
</script>
<svelte:window bind:innerWidth={x} />


<header class="bg-surface-50-950/70 backdrop-blur-sm">
	<nav class="mx-4 my-2">
		<a class={page.url.pathname === '/' ? 'logo-heading' : 'logo-heading nav-item'} href="/" role="menuitem" tabindex="0"
			onmouseenter={() => isHeaderInHoverState = true}
			onmouseleave={() => isHeaderInHoverState = false}>
			 <IconMadeByHumans isActive={page.url.pathname === '/'} isInHoverState={isHeaderInHoverState} width={iconWidth} />
			<h1 class="h4 md:h1 mx-4 text-primary-700-300">Made By Humans</h1>
		</a>
		<div class="md:hidden">
			<Menu>
				<Menu.Trigger class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							<Menu.Item value="about">
								<a href="/about">About</a>
							</Menu.Item>
							<Menu.Item value="services">
								<a href="/services">Services</a>
							</Menu.Item>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu>
		</div>
		<div class="hidden nav-bar-items md:flex">
			{#each paths as path}
				<NavBarItem path={path} />
			{/each}
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	nav {
		display: flex;
		
		align-items: center;
		width: 100%;

		.logo-heading {
			display: flex;
			align-items: center;
			flex-grow: 1;
		}
		.nav-bar-items {
			
			gap: 2rem;
		}
	}

	.nav-item:hover {
		color: var(--color-foreground-accent);
	}
</style>
