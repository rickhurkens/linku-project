import type { PageLoad } from './$types';
import * as cms from '$lib/js/request/cms';

export const load: PageLoad = async ({ params }) => {
	const pageSettings = { contactLinkInFooter: false };

	const [specialisations, works, blogs, logos] = await Promise.all([
		cms.getSpecialisations(),
		cms.getWorks(),
		cms.getBlogs(),
		cms.getLogos()
	]);

	const pageData = { specialisations, works, blogs, logos };

	return {
		...pageSettings,
		...pageData
	};
};
