import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!locals.user.role.includes('admin')) {
		throw redirect(303, '/dashboard/profile/preview');
	}
};
