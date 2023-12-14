import { getOnePocketbase } from '$lib/utils/api';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const minfuelId = 'b4t9g4j9m0dgvlc';
	const company = await getOnePocketbase('norway_companies', { expand: 'city' }, minfuelId);
	const data = {
		company
	};
	return data;
}
