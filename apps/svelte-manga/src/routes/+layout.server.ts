import { serializeNonPOJOs } from '$lib/utils/api';

export const load = async (event) => {
	// remove the www. and .com or whatever from the url if it exists and use that as the site name
	const siteName = event.url.origin.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0];
	// Check the device width
	const isSmallDevice = event.request.headers.get('user-agent').includes('Mobi');
	event.locals.isSmallDevice = isSmallDevice;

	if (event.locals.user) {
		return {
			user: event.locals.user,
			sites: await Sites(event),
			siteName,
			isSmallDevice
		};
	}
	
	const data = {
		user: undefined,
		sites: await Sites(event),
		siteName,
		isSmallDevice
	};
	return data;
};

const Sites = async (event) => {
	// you can also fetch all records at once via getFullList
const records = serializeNonPOJOs(
	await event.locals.pb.collection('sites').getFullList()
	);
const adtxt = records.find((item: any) => item.site.includes(event.url.origin));
	
	return adtxt;
};
