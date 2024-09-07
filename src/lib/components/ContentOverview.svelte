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
		display: flex;
		flex-flow: column nowrap;
		row-gap: var(--spacing-l);
	}

	@media (width > 768px) {
		.grid--small {
			gap: var(--spacing-m);
		}
	}
</style>
