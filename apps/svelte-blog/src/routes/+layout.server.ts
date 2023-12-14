export const load = async (event) => {
	if (event.locals.user) {
		return {
			user: event.locals.user
		};
	}

	const data = {
		user: undefined
	};
	return data;
};
