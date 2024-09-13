import type { PageLoad } from './$types';

/* TODO: implement fetch + error handling and remove dummy data */
import brandingImg from '$lib/images/dummy_imgs/branding.png';
import illustrationImg from '$lib/images/dummy_imgs/illustration.png';
import productdesignImg from '$lib/images/dummy_imgs/productdesign.png';
import works1Img from '$lib/images/dummy_imgs/works2.png';
import works2Img from '$lib/images/dummy_imgs/works1.png';
import works3Img from '$lib/images/dummy_imgs/works4.png';
import works4Img from '$lib/images/dummy_imgs/works3.png';

export const load: PageLoad = ({ params }) => {
	return {
		contactLinkInFooter: false,
		specialisations: [
			{ title: 'Product design', imgUrl: productdesignImg, id: 'product-design' },
			{ title: 'Branding', imgUrl: brandingImg, id: 'branding' },
			{ title: 'Illustration', imgUrl: illustrationImg, id: 'illustration' }
		],
		works: [
			{
				title: 'Google Art & Culture',
				leadText:
					"Exploring New upcoming feature in Google arts and culture and it's future enhancement",
				imgUrl: works1Img,
				id: '1'
			},
			{
				title: 'E - bank',
				leadText:
					"Exploring New upcoming feature in Google arts and culture and it's future enhancement",
				imgUrl: works2Img,
				id: '2'
			},
			{
				title: 'Abstract illustration',
				leadText:
					'Engaging online class with the interaction between masters and students and offering more valuable features',
				imgUrl: works3Img,
				id: '3'
			},
			{
				title: 'Tutor application',
				leadText:
					'Engaging online class with the interaction between masters and students and offering more valuable features',
				imgUrl: works4Img,
				id: '4'
			}
		],
		blogs: [
			{
				title: 'User psychology',
				leadText:
					"The ultimate guide to proper understanding user perspective and it's impact on day to day life",
				imgUrl: works2Img,
				id: '1'
			},
			{
				title: 'Illustration nuance',
				leadText: 'A brief explanation on how to apply colors',
				imgUrl: works3Img,
				id: '2'
			},
			{
				title: 'User resolutions',
				leadText: 'Broadcasting valuable assets from top-down or bottom-up in the marketplace',
				imgUrl: works2Img,
				id: '3'
			},
			{
				title: 'User psychology',
				leadText:
					"The ultimate guide to proper understanding user perspective and it's impact on day to day life",
				imgUrl: works3Img,
				id: '4'
			},
			{
				title: 'Illustration nuance',
				leadText: 'A brief explanation on how to apply colors',
				imgUrl: works2Img,
				id: '5'
			},
			{
				title: 'User resolutions',
				leadText: 'Broadcasting valuable assets from top-down or bottom-up in the marketplace',
				imgUrl: works3Img,
				id: '6'
			}
		]
	};
};
