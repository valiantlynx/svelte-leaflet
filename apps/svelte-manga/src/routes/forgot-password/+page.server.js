import { error } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	reset: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email');

		try {
			// Authenticate the user and get the token from the server
			await event.locals.pb.collection('users').requestPasswordReset(email);
		} catch (err) {
			if (err.response?.data.email?.message) {
				throw error(err.status, `Your email ${err.response?.data.email?.message}`);
			} else {
				throw error(err.status, err.response?.message);
			}
		}
	}
};
