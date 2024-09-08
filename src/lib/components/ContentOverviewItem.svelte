<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

	type ContentOverviewItem = {
		title: string;
		leadText?: string;
		imgUrl: string;
		id: string;
	};

	export let item: ContentOverviewItem;
	export let urlPrefix: string;
	export let type: 'grid--small' | 'masonry' | 'carousel';
</script>

<article class={`${type}-item`}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a href={`${urlPrefix}${item.id}`} title={item.title}>
		<div class="image-wrapper">
			<img src={item.imgUrl} />
			{#if type === 'carousel'}
				<button class="morelink">
					<span>Read</span>
					<Fa icon={faArrowRight} size="1x" />
				</button>
			{/if}
		</div>
	</a>
	<a href={`${urlPrefix}${item.id}`} title={item.title}><h1>{item.title}</h1></a>
	{#if item.leadText}
		<a href={`${urlPrefix}${item.id}`} title={item.title}><p class="leadtext">{item.leadText}</p></a
		>
	{/if}
</article>

<style>
	article {
		display: flex;
		flex-flow: column nowrap;
		row-gap: var(--spacing-xs);
	}

	article img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	article h1 {
		font-size: var(--font-size-l);
		font-weight: var(--font-weight-xl);
	}

	article p {
		padding-right: var(--spacing-s);
		display: -webkit-box;
		text-overflow: ellipsis;
		line-clamp: 3;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	a {
		color: unset;
	}

	a:hover {
		text-decoration: unset;
	}

	a:has(.image-wrapper) {
		flex: 1 0; /* TODO: causes images in carousel to be of different height based on text */
		min-height: 0;
		aspect-ratio: 16 / 10;
	}

	.image-wrapper {
		position: relative;
		height: 100%;
	}

	.image-wrapper img {
		height: 100%;
	}

	/* TODO: hover state */
	.morelink {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		column-gap: var(--spacing-2xs);
		position: absolute;
		right: 0;
		bottom: 0;
		background: white;
		padding: var(--spacing-xs) var(--spacing-s);
	}

	.grid--small-item img {
		aspect-ratio: 16 / 10;
	}

	.masonry-item {
		width: var(--masonry-item-width);
		height: var(--masonry-large-item);
	}
	.masonry-item:nth-of-type(2),
	.masonry-item:nth-of-type(3),
	.masonry-item:nth-of-type(6) {
		height: var(--masonry-small-item);
	}

	@media (width > 480px) {
		.carousel-item {
			/* TODO: less width as designed because on small screens
			   there's not enough margin to show the next items. */
			min-width: calc(50cqi - var(--carousel-col-gap));
			scroll-snap-align: start;
		}
	}

	@media (width > 768px) {
		article img {
			--overviewitem-image-margin: var(--spacing-s);
		}

		article h1 {
			font-size: var(--font-size-xl);
		}

		.masonry-item img {
			aspect-ratio: unset;
		}
	}
</style>
