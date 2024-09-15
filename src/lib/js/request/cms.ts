import mock_fetch from './mock_data/mock_fetch';
import type { Work, Specialisation, Blog } from './cms-types';

// TODO: dummy API as a tryout of how to do API requests

const baseUrl = 'https://www.example.com/';

const abstractRequest = async (path: string): Promise<any> => {
	try {
		const response = await mock_fetch(baseUrl + path);

		if (!response.ok) {
			throw new Error(`HTTP error. Status: ${response.status}`);
		}

		const json = await response.json();
		return json;
	} catch (error) {
		console.error(`Error fetching ${path}:`, error);
		throw error;
	}
};

export const getBlogs = async (): Promise<Blog[]> => {
	return abstractRequest('/blogs');
};

export const getBlog = async (id: number): Promise<Blog> => {
	return abstractRequest(`/blog/${id}`);
};

export const getWorks = async (): Promise<Work[]> => {
	return abstractRequest('/works');
};

export const getWork = async (id: number): Promise<Work> => {
	return abstractRequest(`/work/${id}`);
};

export const getSpecialisations = async (): Promise<Specialisation[]> => {
	return abstractRequest('/specialisations');
};
