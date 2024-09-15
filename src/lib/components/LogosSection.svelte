<script lang="ts">
	import type { Logo } from '$lib/js/request/cms-types';

	export let logos: Logo[];
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
