import { serializeNonPOJOs } from '$lib/utils/api';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (projectId) => {
		try {
			const project = serializeNonPOJOs(
				await locals.pb.collection('projects_valiantlynx').getOne(projectId)
			);
			return project;
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		project: getProject(params.projectId)
	};
};
