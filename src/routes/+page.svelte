<script>
	import HomepageSection from '$lib/components/HomepageSection.svelte';
</script>

<HomepageSection title="Specialisation" subtitle="What I do best">
	<div class="content"></div>
</HomepageSection>
<HomepageSection
	title="Works"
	subtitle="Projects that are clients love"
	morelink={{ url: '/works', title: 'Explore all projects' }}
>
	<div class="content"></div></HomepageSection
>
<HomepageSection
	title="Design newsletter"
	subtitle="My weekly newsletter and blogs"
	morelink={{ url: '/blog', title: 'Explore all blogs' }}
	><div class="content"></div></HomepageSection
>

<style>
	.content {
		height: 200px;
		width: 100%;
		background: var(--color-2);
	}
</style>
