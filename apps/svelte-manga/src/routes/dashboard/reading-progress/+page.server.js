import { serializeNonPOJOs } from '$lib/utils/api';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
	const data = {
		sort: '-updated',
		filter: `user="${event.locals.user?.id}"`,
		expand: 'manga, currentChapter, user',
		page: 1
	};

	const readingProgress = serializeNonPOJOs(
		await event.locals.pb.collection('reading_progress').getList(1, 20, data)
	);

	return {
		readingProgress: readingProgress.items
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	readingProgress: async (event) => {
		const data = await event.request.formData();
		const page = data.get('page');

		const dataPb = {
			sort: '-updated',
			filter: `user="${event.locals.user?.id}"`,
			expand: 'manga, currentChapter, user',
			page: page
		};

		try {
			const readingProgress = serializeNonPOJOs(
				await event.locals.pb.collection('reading_progress').getList(1, 20, dataPb)
			);
			return {
				readingProgress: readingProgress.items
			};
		} catch (err) {
			console.log('err', err);
			throw error(err.status, err.message);
		}
	}
};
