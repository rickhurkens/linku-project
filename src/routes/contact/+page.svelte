<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<h1>Contact</h1>

{#if form?.success}
	<p>Thank you for you message, {form.name}! I'll make sure to get back to you soon.</p>
{/if}
