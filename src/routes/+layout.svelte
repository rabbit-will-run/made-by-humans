<script lang="ts">
	import Header from '../components/Header.svelte';
	import appCssUrl from '../app.css?url';
	import layoutCssUrl from './layout.css?url';

	let { children } = $props();
</script>
<svelte:head>
	<link rel="stylesheet" href={appCssUrl} />
	<link rel="stylesheet" href={layoutCssUrl} />
</svelte:head>

<div class="app">
	<Header />
	<main>{@render children()}</main>

	<footer>
		<p>
			Est.: 2026 | Made By Humans
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 70rem;
		margin: 0 auto;
		box-sizing: border-box;
		align-items: center;
		text-align: center;
		height: 100%;
		justify-content: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
