export const GET = async ({ url, locals }) => {
    // you can also fetch all records at once via getFullList
const records = await locals.pb.collection('sites').getFullList();

const adtxt = records.find((item) => item.site.includes(url.origin));

	return new Response(
        adtxt?.google_ads, {
		headers: {
			'content-type': 'text/plain; charset=utf-8'
		}
	});
};
new Response();