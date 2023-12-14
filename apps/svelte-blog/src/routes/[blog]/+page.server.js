/* eslint-disable no-unused-labels */
import { getImageURL, serializeNonPOJOs } from '$lib/utils/api';

export const load = async (event) => {
	const slug = event.params['blog'];
	const blog = await event.locals.pb.collection('blogs').getFirstListItem(`slug="${slug}"`, {
		expand: ['author']
	});
	blog.image = getImageURL(blog.collectionId, blog.id, blog.image, 'thumb=200x200');

	return {
		blog: serializeNonPOJOs(blog)
	};
};
