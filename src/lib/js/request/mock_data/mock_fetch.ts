import specialisationsJson from './specialisations.json';
import blogsJson from './blogs.json';
import worksJson from './works.json';

/** TODO: mock fetch function to mock a REST response */
const mock_fetch = async (resource: string, options?: RequestInit): Promise<Response> => {
	return new Promise<Response>((resolve, reject) => {
		setTimeout(() => {
			if (resource.endsWith('fail')) {
				reject(new Error('Failed to fetch'));
				return;
			}

			let jsonData;

			if (resource.endsWith('/specialisations')) {
				jsonData = specialisationsJson;
			} else if (resource.endsWith('/blogs')) {
				jsonData = blogsJson;
			} else if (resource.endsWith('/works')) {
				jsonData = worksJson;
			} else {
				resolve(Response.error());
				return;
			}

			resolve(
				new Response(JSON.stringify(jsonData), {
					status: 200,
					headers: { 'Content-Type': 'application/json' }
				})
			);
			return;
		}, 200);
	});
};

export default mock_fetch;
