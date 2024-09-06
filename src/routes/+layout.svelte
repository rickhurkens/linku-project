<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<div id="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	#app {
		max-width: var(--content-width);
		margin: 0 auto;
		padding: var(--spacing-2xs) var(--spacing-2xs);
	}
</style>
