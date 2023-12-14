import { renderMainSitemap } from '$lib/utils/api';

export const trailingSlash = 'never';

export const GET = async ({ url }) => {
	return new Response(await renderMainSitemap(url.origin), {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};
new Response();