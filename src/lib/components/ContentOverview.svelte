<script lang="ts">
	import { onMount } from 'svelte';
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
	let overviewElement: HTMLDivElement;

	onMount(() => {
		/* TODO: This is made so the user can scroll through this on desktop.
			 Would feel nicer if this was implemented with grab.
		*/
		if (type === 'carousel') {
			overviewElement.addEventListener('wheel', (event) => {
				if (event.deltaY % 1 !== 0) {
					// check if is not a trackpad
					event.preventDefault();
					overviewElement.scrollLeft += event.deltaY;
				}
			});
		}
	});
</script>

<div class="content-overview {type}" bind:this={overviewElement}>
	{#each content as item}
		<ContentOverviewItem {item} {urlPrefix} {type} />
	{/each}
</div>

<style>
	.content-overview {
		display: flex;
		flex-flow: column nowrap;
		row-gap: var(--spacing-l);
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
		--masonry-height: auto;
		--masonry-item-width: 100%;
		--masonry-large-item: calc(1 * (var(--masonry-height) - var(--masonry-row-gap)));
		--masonry-small-item: calc(1 * (var(--masonry-height) - var(--masonry-row-gap)));

		display: flex;
		flex-flow: column wrap;
		column-gap: var(--masonry-column-gap);
		row-gap: var(--masonry-row-gap);
		max-height: var(--masonry-height);
	}

	@container section-contents (width > 520px) {
		.masonry {
			--masonry-height: 840px;
			--masonry-item-width: calc(50% - 0.5 * var(--masonry-column-gap));
			--masonry-large-item: calc(0.55 * (var(--masonry-height) - var(--masonry-row-gap)));
			--masonry-small-item: calc(0.45 * (var(--masonry-height) - var(--masonry-row-gap)));
		}
	}

	@container section-contents (width > 780px) {
		.masonry {
			--masonry-height: 1140px;
		}
	}

	/* 
	TODO: enable once we request 6 works on larger screens
	@container section-contents (width > 1000px) {
		.masonry {
			--masonry-item-width: calc(33% - 1 / 3 * var(--masonry-column-gap));
		}
	} 
	*/

	@media (width > 480px) {
		.carousel {
			--carousel-col-gap: var(--spacing-s);

			flex-flow: row nowrap;
			column-gap: var(--carousel-col-gap);
			overflow-x: auto; /* TODO: doesn't show items outside of margin. Need to fix with different solution */
			scroll-snap-type: x mandatory;
			scroll-behavior: smooth;
		}
	}

	@media (width > 768px) {
		.grid--small {
			gap: var(--spacing-m);
		}
	}
</style>
