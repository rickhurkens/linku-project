<script lang="ts">
	import heroImage from '$lib/images/hero_img.png';
	import ButtonMore from './ButtonMore.svelte';
</script>

<section class="hero">
	<div class="hero-text">
		<hgroup>
			<h1>Sakura haruno</h1>
			<p>Designer &<br />Illustrator</p>
		</hgroup>
		<p class="tagline">Norway based designer who specialised in Product design and illustration</p>
	</div>
	<div class="hero-image-wrapper">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src={heroImage} />
		<ButtonMore link={{ title: 'About Myself', url: '/about' }} />
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		margin-right: calc(-1 * var(--container-horizontal-margin));
	}
	.hero-text {
		flex: 0 0 33%;
		max-width: 33%;
		display: flex;
		flex-flow: column nowrap;
		gap: var(--spacing-xs);
	}
	h1 {
		font-family: var(--font-script);
		font-size: var(--font-size-xl);
		margin-bottom: var(--spacing-3xs);
	}

	hgroup {
		max-width: 100%;
		white-space: nowrap;
		z-index: 1;
	}
	hgroup p {
		font-size: var(--font-size-4xl);
		font-weight: var(--font-weight-2xl);
		line-height: 1.1;
		background-color: var(--color-1);
		background: url('$lib/images/space_pattern.jpg');
		background-clip: text;
		color: transparent;
		width: fit-content;
	}

	.tagline {
		padding-right: var(--spacing-3xs);
	}

	.hero-image-wrapper {
		flex: 0 0 67%;
		position: relative;
		display: grid;
		grid-template-columns: 1fr calc(0.5 * var(--container-horizontal-margin));
	}

	.hero-image-wrapper::after {
		content: '';
		background: url('$lib/images/space_pattern.jpg');
	}

	.hero-image-wrapper img {
		object-fit: cover;
	}
</style>
