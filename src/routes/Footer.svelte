<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import {
		faBehance,
		faDribbble,
		faLinkedinIn,
		faTwitter,
		faInstagram
	} from '@fortawesome/free-brands-svg-icons';
	import logo from '$lib/images/logo2.png';
</script>

<footer>
	<div class="left">
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
			</ul>
		</nav>
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
		justify-content: first;
		align-items: center;
		height: 100%;
	}

	.logo {
		height: 100%;
		margin-right: var(--spacing-2xs);
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

	.social-links {
		margin-right: var(--spacing-xs);
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

	@media (width > 768px) {
		.mobile-menu {
			display: none;
		}
	}
</style>
