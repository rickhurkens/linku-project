<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Fa from 'svelte-fa';
	import {
		faBehance,
		faDribbble,
		faLinkedinIn,
		faTwitter,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import logo from '$lib/images/logo2.png';

	export let contactLinkInFooter: boolean;

	let navigationItems: Link[];
	$: navigationItems = [
		{ url: '/works', title: 'Works' },
		{ url: '/about', title: 'About' },
		{ url: '/media', title: 'Media' },
		...(contactLinkInFooter ? [{ url: '/contact', title: 'Contact' }] : [])
	];
</script>

<footer>
	<div class="left">
		<a class="logo" href="/">
			<img src={logo} alt="Logo Haruno" />
		</a>
		<Navigation id="footer-nav" items={navigationItems} side="left" />
	</div>
	<div class="social-links">
		<ul>
			<li>
				<a href="https://www.behance.com/" title="Behance"><Fa icon={faBehance} size="lg" /></a>
			</li>
			<li>
				<a href="https://www.dribbble.com/" title="Dribbble"><Fa icon={faDribbble} size="lg" /></a>
			</li>
			<li>
				<a href="https://www.linkedin.com/" title="LinkedIn">
					<Fa icon={faLinkedinIn} size="lg" /></a
				>
			</li>
			<li>
				<a href="https://www.twitter.com/" title="Twitter"><Fa icon={faTwitter} size="lg" /></a>
			</li>
			<li>
				<a href="https://www.instagram.com/" title="Instagram">
					<Fa icon={faInstagram} size="lg" /></a
				>
			</li>
		</ul>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		height: 3.5rem;
		margin-top: var(--spacing-l);
	}

	.left {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		height: 100%;
	}

	.logo {
		height: 100%;
		margin-right: var(--spacing-xs);
	}

	.logo img {
		height: 100%;
		object-fit: contain;
	}

	.social-links {
		margin-right: var(--spacing-2xs);
	}

	.social-links ul {
		display: flex;
		flex-flow: row nowrap;
		column-gap: var(--spacing-xs);
	}

	.social-links li {
		list-style-type: none;
	}

	.social-links a {
		color: var(--color-3);
	}
	.social-links a:hover {
		color: var(--color-5);
	}

	@media (width > 480px) {
		.logo {
			margin-right: var(--spacing-xs);
		}
	}
	@media (width > 768px) {
		.logo {
			margin-right: var(--spacing-m);
		}
	}
</style>
