<script lang="ts">
	import ContentOverviewItem from './ContentOverviewItem.svelte';

	type ContentOverviewItem = {
		title: string;
		leadText?: string;
		imgUrl: string;
		id: string;
	};

	export let content: ContentOverviewItem[];
	export let urlPrefix: string;
	export let type: 'grid--small' | 'masonry' | 'carousel';
</script>

<div class="content-overview {type}">
	{#each content as item}
		<ContentOverviewItem {item} {urlPrefix} {type} />
	{/each}
</div>

<style>
	.content-overview {
		margin-bottom: var(--spacing-xs);
	}

	.grid--small {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
		gap: var(--spacing-s);
	}

	.masonry {
		/* This is a very static way of creating this 4-item-masonry layout. 
       Maybe it could be more dynamic by using js. */
		/* TODO: bottom image aren't aligned like the design because there's
       a different amount of lines of text. Can we fix this? */
		--masonry-column-gap: var(--spacing-s);
		--masonry-row-gap: var(--spacing-m);
		--masonry-height: 1140px;
		--masonry-large-item: calc(0.55 * (var(--masonry-height) - var(--masonry-row-gap)));
		--masonry-small-item: calc(0.45 * (var(--masonry-height) - var(--masonry-row-gap)));

		display: flex;
		flex-flow: column wrap;
		column-gap: var(--masonry-column-gap);
		row-gap: var(--masonry-row-gap);
		max-height: var(--masonry-height);
	}

	@media (width > 768px) {
		.grid--small {
			gap: var(--spacing-m);
		}
	}
</style>
