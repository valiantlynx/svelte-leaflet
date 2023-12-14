import { patchPocketbase1only } from '$lib/utils/api';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const minfuelId = 'b4t9g4j9m0dgvlc';
	const company = await patchPocketbase1only('norway_companies', minfuelId, { expand: 'city' });
	const data = {
		company
	};
	return data;
}
