import { error, redirect } from '@sveltejs/kit';

export const actions = {
	updateEmail: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').requestEmailChange(data.email);
		} catch (err) {
			throw error(err.status, err.message);
		}

		return {
			success: true
		};
	},

	updateUsername: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb
				.collection('users')
				.getFirstListItem(`username="${data.username}"`);
		} catch (err) {
			if (err.status === 404) {
				try {
					const { username } = await locals.pb
						.collection('users')
						.update(locals.user.id, { username: data.username });
					locals.user.username = username;
					return {
						success: true
					};
				} catch (err) {
					console.error('Error: ', err);
					throw error(err.status, err.message);
				}
			}
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}
	},

	updatePassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
};
