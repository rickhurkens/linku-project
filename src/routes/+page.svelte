<script lang="ts">
	import type { PageData } from './$types';
	import HomepageSection from '$lib/components/HomepageSection.svelte';
	import ContentOverview from '$lib/components/ContentOverview.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import LogosSection from '$lib/components/LogosSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';

	export let data: PageData;

	$: specialisations = data?.specialisations;
	$: works = data?.works; /* TODO: maybe limit amount of items on smaller screens */
	$: blogs = data?.blogs;
</script>

<HeroSection />

<LogosSection />

<HomepageSection title="Specialisation" subtitle="What I do best">
	<ContentOverview content={specialisations} urlPrefix="/works/" type="grid--small" />
</HomepageSection>

<HomepageSection
	title="Works"
	subtitle="Projects that are clients love"
	morelink={{ url: '/works', title: 'Explore all projects' }}
>
	<ContentOverview content={works} urlPrefix="/works/work/" type="masonry" />
</HomepageSection>

<HomepageSection
	title="Design newsletter"
	subtitle="My weekly newsletter and blogs"
	morelink={{ url: '/blog', title: 'Explore all blogs' }}
>
	<ContentOverview content={blogs} urlPrefix="/blog/" type="carousel" />
</HomepageSection>

<ContactSection />
