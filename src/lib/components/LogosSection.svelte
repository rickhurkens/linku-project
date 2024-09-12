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

<section class="logos-section"></section>

<style>
	.logos-section {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}

	@media (width > 768px) {
		.logos-section {
			flex-flow: row nowrap;
			justify-content: space-between;
		}
	}
</style>
