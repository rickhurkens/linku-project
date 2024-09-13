<script lang="ts">
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';

	$: contactLinkInFooter =
		$page.data.contactLinkInFooter === undefined ? true : $page.data.contactLinkInFooter;
</script>

<div id="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer {contactLinkInFooter} />
</div>

<style>
	#app {
		--container-horizontal-margin: var(--spacing-xs);
		--container-vertical-margin: var(--spacing-2xs);

		max-width: var(--content-width);
		margin: 0 auto;
		padding: var(--container-vertical-margin) var(--container-horizontal-margin);
	}

	main {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: var(--spacing-l);
	}

	@media (width > 768px) {
		#app {
			--container-horizontal-margin: var(--spacing-s);
			--container-vertical-margin: var(--spacing-s);
		}

		main {
			row-gap: var(--spacing-xl);
		}
	}
</style>
