import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		contactLinkInFooter: false
	};
};

export const prerender = false;
