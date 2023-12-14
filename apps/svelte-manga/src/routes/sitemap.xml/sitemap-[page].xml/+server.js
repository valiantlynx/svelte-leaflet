import { render } from '$lib/utils/api';
// import { google } from 'googleapis';

export const trailingSlash = 'never';

export const GET = async ({ params, url }) => {
	// ping google to update the the urls of the company and the images
	// pingGoogle(Number(params.page), url.origin);
	return new Response(await render(Number(params.page), url.origin), {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};
new Response();