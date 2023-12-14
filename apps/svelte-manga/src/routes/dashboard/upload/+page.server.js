/* eslint-disable no-console */
import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils/api';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	if (!locals.user.role.includes('creator')) {
		throw redirect(303, '/pricing');
	}

	const getUsersProjects = async (userId) => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection('projects_valiantlynx').getFullList(undefined, {
					filter: `user = "${userId}"`
				})
			);
			return projects;
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		projects: getUsersProjects(locals.user.id)
	};
};

export const actions = {
	deleteProject: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('projects_valiantlynx').delete(id);
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}
		return {
			success: true
		};
	}
};
