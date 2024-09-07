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
	article img {
		margin-bottom: var(--spacing-xs);
		width: 100%;
		height: auto;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	.grid--small-item img {
		aspect-ratio: 16 / 10;
	}

	article h1 {
		font-size: var(--font-size-l);
		font-weight: var(--font-weight-xl);
	}

	article:has(.leadtext) h1 {
		margin-bottom: var(--spacing-xs);
	}

	article p {
		padding-right: var(--spacing-s);
	}

	a {
		color: unset;
	}

	a:hover {
		text-decoration: unset;
	}

	.image-wrapper {
		position: relative;
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

	@media (width > 768px) {
		article h1 {
			font-size: var(--font-size-xl);
		}

		article img {
			margin-bottom: var(--spacing-s);
		}

		.masonry-item img {
			aspect-ratio: unset;
		}
	}
</style>
