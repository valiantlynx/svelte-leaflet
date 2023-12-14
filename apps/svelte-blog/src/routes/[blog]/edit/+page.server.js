import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils/api';

export const load = async ({ locals, params }) => {
	if (!locals.pb.authStore.isValid) {
		throw error(401, 'Unauthorized');
	}

	try {
		const project = serializeNonPOJOs(
			await locals.pb.collection('projects_valiantlynx').getOne(params.projectId)
		);

		if (locals.user.id === project.user) {
			return {
				project
			};
		} else {
			throw error(403, 'Forbidden');
		}
	} catch (err) {
		console.error('Error: ', err);
		throw error(err.status, err.message);
	}
};

export const actions = {
	updateProject: async ({ request, locals, params }) => {
		const formData = await request.formData();

		const thumbnail = formData.get('thumbnail');

		if (thumbnail.size === 0) {
			formData.delete('thumbnail');
		}

		try {
			await locals.pb.collection('projects_valiantlynx').update(params.projectId, formData);
		} catch (err) {
			console.error('Error: ', err);
			console.error('Error.data: ', err.data);
			if (err.data?.data?.name?.message) {
				throw error(err.status, `project name cannot be empty: ${err.data?.data?.name?.message}`);
			} else if (err.data?.data?.tagline?.message) {
				throw error(
					err.status,
					`project tagline cannot be empty: ${err.data?.data?.tagline?.message}`
				);
			} else if (err.data?.data?.url?.message) {
				throw error(err.status, `project url cannot be empty: ${err.data?.data?.url?.message}`);
			} else {
				throw error(err.status, err.message);
			}
		}

		throw redirect(303, `/dashboard/manager`);
	},

	deleteThumbnail: async ({ locals, params }) => {
		try {
			await locals.pb
				.collection('projects_valiantlynx')
				.update(params.projectId, { thumbnail: null });
		} catch (err) {
			console.error('Error: ', err);
			console.error('Error.data: ', err.data);
			if (err.data?.data?.name?.message) {
				throw error(err.status, `project name cannot be empty: ${err.data?.data?.name?.message}`);
			} else if (err.data?.data?.tagline?.message) {
				throw error(
					err.status,
					`project tagline cannot be empty: ${err.data?.data?.tagline?.message}`
				);
			} else if (err.data?.data?.url?.message) {
				throw error(err.status, `project url cannot be empty: ${err.data?.data?.url?.message}`);
			} else {
				throw error(err.status, err.message);
			}
		}
		return {
			success: true
		};
	}
};
