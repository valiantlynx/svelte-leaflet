import { redirect } from '@sveltejs/kit';

export const POST = (event) => {
	event.locals.pb.authStore.clear();
	event.locals.user = undefined;

	throw redirect(303, '/login');
};
