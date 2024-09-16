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
		align-items: end;
		margin-right: calc(-1 * var(--container-horizontal-margin));
		width: 100vw;
		position: relative;
		right: var(--container-horizontal-margin);
	}
	.hero-text {
		display: flex;
		flex-flow: column nowrap;
		position: absolute;
		gap: var(--spacing-2xs);
		left: var(--container-horizontal-margin);
		margin-bottom: var(--spacing-l);
		margin-right: var(--container-horizontal-margin);
		z-index: 1;
	}

	hgroup {
		max-width: 70%;
		white-space: nowrap;
	}

	h1 {
		font-family: var(--font-script);
		font-size: var(--font-size-l);
		margin-bottom: var(--spacing-3xs);
	}

	hgroup p {
		font-size: var(--font-size-3xl);
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
		flex: 0 0 100%;
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

	@media (width > 700px) {
		.hero {
			align-items: center;
			width: unset;
			right: unset;
		}

		.hero-text {
			flex: 0 0 33%;
			max-width: 33%;
			gap: var(--spacing-xs);
			position: static;
			margin-bottom: unset;
			margin-right: unset;
		}

		hgroup {
			max-width: 100%;
		}

		h1 {
			font-size: var(--font-size-xl);
		}

		hgroup p {
			font-size: var(--font-size-4xl);
		}

		.hero-image-wrapper {
			flex: 0 0 67%;
		}
	}

	@media (width < 430px) {
		h1 {
			font-size: 5.8vw;
		}

		hgroup p {
			font-size: 10.5vw;
		}
	}
</style>
