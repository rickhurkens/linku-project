<script lang="ts">
	import Fa from 'svelte-fa';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

	export let link: Link;
</script>

<a href={link.url} class="morelink">
	<span>{link.title}</span>
	<Fa icon={faArrowRight} size="1x" />
</a>

<style>
	/* TODO: hover state & responsive sizing */
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
</style>
