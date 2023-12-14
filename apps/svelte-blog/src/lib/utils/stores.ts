// stores.js
import { writable } from 'svelte/store';

// Initial cart state

const initialCart: any = [];

// Initial cart state
const initialUser = {};

// Create the cart store
export const cart = writable(initialCart);
export const order = writable(initialCart);

// Current User
export const authData: any = writable(initialUser);

const sidebarOpen = writable(true);

const toggleSidebar = () => {
	sidebarOpen.update((prev) => !prev);
};

const closeSidebar = () => {
	sidebarOpen.update(() => false);
};

export { sidebarOpen, toggleSidebar, closeSidebar };

// Current sidebar section
export const currentSection = writable('');

// Current page
export const currentPage = writable(1);

// pocketbase response
export const pocketbaseResponse = writable({
	page: 1,
	perPage: 5,
	totalItems: 0,
	totalPages: 0,
	items: []
});

// search query
export const searchQuery = writable('');

export const metaKeywords = writable('');

export const stationImageMap = {
	esso: 'https://kommunikasjon.ntb.no/data/images/00783/895a9654-643a-4b63-8be0-1eae85ec3439.png',
	'uno-x':
		'https://kommunikasjon.ntb.no/data/images/00076/9cec9334-e1ad-464e-a825-701f5e9fd487.png',
	'circle k':
		'https://kommunikasjon.ntb.no/data/images/00462/868b710b-1228-4abd-a263-932ef9fbf88c.png',
	shell: 'https://kommunikasjon.ntb.no/data/images/00276/293cf853-0336-4967-ab0f-37289ba4b9f1.png',
	best: 'https://nameless-cloud-5581.fly.dev/api/files/n4sfebjxm43jxvc/6fj9tp3sh5dyss7/best_logo_sgItXLC8eT.png',
	automat1:
		'https://nameless-cloud-5581.fly.dev/api/files/n4sfebjxm43jxvc/1secgrh5evietz0/automat1_logo_7PtdhgimTZ.png',
	'automat 1':
		'https://nameless-cloud-5581.fly.dev/api/files/n4sfebjxm43jxvc/1secgrh5evietz0/automat1_logo_7PtdhgimTZ.png',
	'yx ': 'https://kommunikasjon.ntb.no/data/images/00135/4224b07f-f849-4c67-86f9-7d9bd73eb915.png',
	'driv ':
		'https://nameless-cloud-5581.fly.dev/api/files/n4sfebjxm43jxvc/j0jw3j8mhe0tjez/logo_3_ongdfW1Gfi.png',
	'trønder oil':
		'https://nameless-cloud-5581.fly.dev/api/files/n4sfebjxm43jxvc/rd4qnyzyzzsp7f6/logo_tronder_oil_as_350x140_pzCQD0MyQJ.png',
	'agder olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Agder-Olje-logo-pa-hvit_1000.png',
	'randøy olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Randoy-Olje-logo-pa-hvit_600.png',
	'jæren olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Jaeren-Olje-logo-pa-hvit_1000.png',
	'haugaland olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Haugaland-Olje-logo-pa-hvit_1000.png',
	'finnøy olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Finnoy-Olje-logo-pa-hvit_1000.png',
	minol:
		'https://nameless-cloud-5581.fly.dev/api/files/n4sfebjxm43jxvc/p8ebkcha3rwr2l8/utvqho91v8olo08to2m_VehXvKIdhB.png'
};

// Current page
export const minimum_fuel_economy = 0.1;

export const state = writable(null);
export const verifier = writable(null);
