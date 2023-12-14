import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils/api';

export const load = ({ locals }) => {
	const getAllProjects = async () => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection('projects_valiantlynx').getList(1, 20, {
					expand: ['user']
				})
			);

			return projects;
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		projects: getAllProjects()
	};
};
