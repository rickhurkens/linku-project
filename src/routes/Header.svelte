<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import logo from '$lib/images/logo.png';

	const navigationItems: Link[] = [
		{ url: '/works', title: 'Works' },
		{ url: '/about', title: 'About' },
		{ url: '/media', title: 'Media' },
		{ url: '/contact', title: 'Contact' }
	];
</script>

<header>
	<a class="logo" href="/">
		<img src={logo} alt="Logo Haruno" />
	</a>
	<Navigation id="header-nav" items={navigationItems} side="right" />
</header>

<style>
	header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		height: 3.5rem;
		margin-bottom: var(--spacing-2xs);
	}

	.logo {
		height: 100%;
	}

	.logo img {
		height: 100%;
	}
</style>
