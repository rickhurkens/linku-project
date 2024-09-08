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
	<div class="hero-image">
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
	}
	.hero-text {
		flex: 0 0 33%;
		display: flex;
		flex-flow: column nowrap;
		gap: var(--spacing-xs);
	}
	h1 {
		font-family: var(--font-script);
		font-size: var(--font-size-2xl);
		margin-bottom: var(--spacing-3xs);
	}
	hgroup p {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-2xl);
		line-height: 1.1;
	}

	.tagline {
		font-weight: var(--font-weight-l);
		font-size: var(--font-size-s);
		padding-right: var(--spacing-3xs);
	}

	.hero-image {
		flex: 0 0 67%;
		position: relative;
	}
</style>
