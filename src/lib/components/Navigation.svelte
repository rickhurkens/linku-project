<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa';
	import { faBars } from '@fortawesome/free-solid-svg-icons';

	/** The unique id for this navigation element */
	export let id: string;
	/** The navigation items */
	export let items: Link[];
	/** Whether the mobile-menu should appear on the 'left' or 'right' side */
	export let side: 'left' | 'right';

	let mobileMenuToggleButton: HTMLButtonElement;

	let isMobileMenuOpened = false;
	const toggleMenu = () => {
		isMobileMenuOpened = !isMobileMenuOpened;
	};

	let isDesktopSize = true;
	if (browser) {
		const mediaQueryList = window.matchMedia('(width > 768px)');
		isDesktopSize = mediaQueryList.matches ? true : false;

		mediaQueryList.addEventListener('change', (evt) => {
			isDesktopSize = evt.matches ? true : false;
		});

		document.addEventListener(
			'click',
			(event) => {
				if (event.target != mobileMenuToggleButton && isMobileMenuOpened) {
					isMobileMenuOpened = false;
				}
			},
			{ capture: true }
		);

		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape' && isMobileMenuOpened) {
				isMobileMenuOpened = false;
			}
		});
	}
</script>

<nav class="main-navigation">
	{#if !isDesktopSize}
		<div class="mobile-menu">
			<button
				aria-controls={id}
				aria-expanded={isMobileMenuOpened}
				aria-label="Open main navigation menu"
				on:click={toggleMenu}
				bind:this={mobileMenuToggleButton}
			>
				<Fa icon={faBars} size="1x" />
			</button>
		</div>
	{/if}
	<ul
		{id}
		aria-hidden={isDesktopSize ? undefined : !isMobileMenuOpened}
		class={`menu--${side} ${!isDesktopSize ? 'menu--mobile' : ''}`}
	>
		{#each items as item}
			<li aria-current={'/' + $page.url.pathname.split('/')[1] === item.url ? 'page' : undefined}>
				<a href={item.url}>{item.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	[aria-current='page'] a {
		color: var(--color-2);
		text-decoration: underline;
	}

	.mobile-menu button {
		background: unset;
		color: var(--color-1);
		transition: scale 100ms;
		transform: perspective(1px) translateZ(0) scale(1);
		backface-visibility: hidden;
		padding: 0;
		/* TODO: fix blurriness in Chrome */
	}

	.mobile-menu button:hover {
		transform: scale(1.1);
	}

	.main-navigation {
		z-index: 99;
	}

	.main-navigation ul.menu--mobile {
		display: flex;
		position: fixed;
		top: 0;
		height: 100vh;
		background: white;
		padding: var(--spacing-xs) var(--spacing-m);
		flex-flow: column nowrap;
		row-gap: var(--spacing-3xs);
		transition: transform 250ms ease-in-out;
		visibility: hidden;
		/* TODO: maybe we could find a way to also transition on closing */
	}

	.main-navigation ul.menu--mobile.menu--left {
		left: 0;
		padding-right: var(--spacing-xs);
		align-items: end;
		transform: translateX(-100%);
	}

	.main-navigation ul.menu--mobile.menu--right {
		right: 0;
		padding-left: var(--spacing-xs);
		align-items: start;
		transform: translateX(100%);
	}

	.main-navigation ul.menu--mobile[aria-hidden='false'] {
		transform: translateX(0);
		visibility: visible;
	}

	.main-navigation li {
		list-style-type: none;
	}

	.main-navigation ul.menu--mobile a {
		font-size: var(--font-size-l);
	}

	@media (width > 768px) {
		.main-navigation ul {
			display: flex;
			flex-flow: row nowrap;
			column-gap: var(--spacing-m);
			position: static;
			height: unset;
			transform: unset;
			padding: 0;
			background: none;
		}
	}
</style>
