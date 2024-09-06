<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import logo from '$lib/images/logo.png';
</script>

<header>
	<a class="logo" href="/">
		<img src={logo} alt="Logo Haruno" />
	</a>
	<nav>
		<div class="mobile-menu">
			<Fa icon={faBars} size="1x" />
		</div>
		<ul>
			<li aria-current={$page.url.pathname.startsWith('/works') ? 'page' : undefined}>
				<a href="/works">Works</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/works">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/media' ? 'page' : undefined}>
				<a href="/works">Media</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href="/works">Contact</a>
			</li>
		</ul>
	</nav>
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

	nav .mobile-menu {
		color: var(--color-1);
		margin-right: var(--spacing-xs);
	}

	nav ul {
		display: none;
	}

	@media (width > 768px) {
		.mobile-menu {
			display: none;
		}
	}
</style>
