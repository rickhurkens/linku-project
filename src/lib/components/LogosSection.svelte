<script lang="ts">
	import logoGoogle from '$lib/images/dummy_imgs/logo_google.png';
	import logoFlickr from '$lib/images/dummy_imgs/logo_flickr.png';
	import logoNatgeo from '$lib/images/dummy_imgs/logo_natgeo.png';
	import logoSlack from '$lib/images/dummy_imgs/logo_slack.png';

	const logos = [
		{ title: 'Google', url: 'https://google.com', imgSrc: logoGoogle },
		{ title: 'Flickr', url: 'https://google.com', imgSrc: logoFlickr },
		{ title: 'National Geographic', url: 'https://google.com', imgSrc: logoNatgeo },
		{ title: 'Slack', url: 'https://google.com', imgSrc: logoSlack }
	];
</script>

<section class="logos-section">
	{#each logos as { title, url: href, imgSrc: src }}
		<div class="logos-section-logo-wrapper">
			<a {href}>
				<img {src} alt={title} class="logos-section-logo-img" />
			</a>
		</div>
	{/each}
</section>

<style>
	/* TODO: needs extra margin-top and bottom but we'll do page rhythm later */

	.logos-section {
		margin-block: var(--spacing-xs);
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		row-gap: var(--spacing-s);
	}

	.logos-section-logo-wrapper {
		height: var(--spacing-s);
		flex: 0 1 35%;
	}

	.logos-section-logo-img {
		height: 100%;
		object-fit: contain;
	}
	.logos-section-logo-wrapper:nth-child(2n) .logos-section-logo-img {
		margin-left: auto;
	}

	@media (width > 500px) {
		.logos-section {
			flex-flow: row nowrap;
		}
		.logos-section-logo-wrapper {
			flex-basis: unset;
		}
	}

	@media (width > 768px) {
		.logos-section {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			height: var(--spacing-m);
			max-height: 5vw;
		}
		.logos-section-logo-wrapper {
			flex-basis: unset;
			height: var(--spacing-m);
		}
	}
</style>
