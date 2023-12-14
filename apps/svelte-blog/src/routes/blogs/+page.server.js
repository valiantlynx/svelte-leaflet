import { error } from '@sveltejs/kit';
import { getImageURL, serializeNonPOJOs } from '$lib/utils/api';

export const load = ({ locals, params }) => {
	const getBlogs = async () => {
		try {
			const blogs = await locals.pb.collection('blogs').getList(1, 50, {
				sort: 'created',
				expand: 'author'
			});
			for (const item of blogs.items) {
				item.image = getImageURL(item.collectionId, item.id, item.image);
			}
			return serializeNonPOJOs(blogs);
		} catch (err) {
			console.error('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		blogs: getBlogs()
	};
};
