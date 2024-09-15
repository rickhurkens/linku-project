<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowRight, faMinus } from '@fortawesome/free-solid-svg-icons';

	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let morelink: Link | undefined = undefined;
</script>

<section class="homepage-section">
	<hgroup>
		{#if subtitle}<p><Fa icon={faMinus} class="inline" />{subtitle}</p>{/if}
		<h2>{title}</h2>
	</hgroup>
	<div class="contents">
		<slot />
	</div>
	{#if morelink}
		<a href={morelink.url} class="overviewlink">
			<span>{morelink.title}</span>
			<Fa icon={faArrowRight} size="1x" />
		</a>
	{/if}
</section>

<style>
	.homepage-section {
		display: grid;
		grid-template-columns: [left] 1fr [right] auto;
		grid-auto-rows: auto;
		grid-template-areas:
			'header header'
			'main main'
			'link link';
		align-items: last baseline;
	}

	hgroup {
		grid-area: header;
		margin-bottom: var(--spacing-s);
		color: var(--color-1);
	}

	hgroup > p {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		column-gap: var(--spacing-2xs);
		margin-bottom: var(--spacing-2xs);
		/* TODO: not the right dash icon */
	}

	.contents {
		grid-area: main;
		container: section-contents / inline-size;
	}

	.homepage-section:has(.overviewlink) .contents {
		margin-bottom: var(--spacing-xs);
	}

	.overviewlink {
		grid-area: link;
		display: flex;
		flex-flow: row nowrap;
		column-gap: var(--spacing-2xs);
		justify-content: right;
		align-items: center;
	}

	@media (width > 768px) {
		.homepage-section {
			grid-template-areas:
				'header link'
				'main main';
		}
	}
</style>
