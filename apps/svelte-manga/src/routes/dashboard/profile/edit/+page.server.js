import { error } from '@sveltejs/kit';

export const actions = {
	updateProfile: async ({ request, locals }) => {
		let data = await request.formData();
		const userAvatar = data.get('avatar');

		if (userAvatar.size === 0) {
			data.delete('avatar');
		}

		try {
			const { username, avatar } = await locals.pb
				.collection('users')
				.update(locals?.user?.id, data);

			locals.user.username = username;
			locals.user.avatar = avatar;
		} catch (err) {
			console.error('Error: ', err);

			throw error(400, 'Something went wrong updating your profile');
		}

		return {
			success: true
		};
	}
};
