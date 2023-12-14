import { error, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	if (!locals.user.role.includes('creator')) {
		throw redirect(303, '/pricing');
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();

		const thumbnail = formData.get('thumbnail');

		if (thumbnail.size === 0) {
			formData.delete('thumbnail');
		}
		formData.append('user', locals.user.id);
		try {
			await locals.pb.collection('projects_valiantlynx').create(formData);
		} catch (err) {
			console.error('Error: ', err);
			console.error('err.data: ', err.data);
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

		throw redirect(303, '/dashboard/upload');
	}
};
