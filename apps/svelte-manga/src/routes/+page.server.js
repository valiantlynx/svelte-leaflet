import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils/api';

export const load = async (event) => {
	const popularMangas = await Popular(event.locals, 1);
	const latestMangas = await Latest(event, 1);

	return {
		popularMangas,
		latestMangas
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	popular: async (event) => {
		const data = await event.request.formData();
		const page = data.get('page');
		console.log('page', page);
		try {
			const popularMangas = await Popular(event.locals, page); 
			console.log('popularMangas', popularMangas); 
			return {
				popularMangas
			};
		} catch (err) {
			console.log('err', err);
			throw error(err.status, err.message);
		}
		
	},
	latest: async (event) => {
		const data = await event.request.formData();
		const page = data.get('page');
		try {
			const latestMangas = await Latest(event, page);
			return {
				latestMangas
			};
		} catch (err) {
			console.log('err', err);
			throw error(err.status, err.message);
		}
		
	}
};

// function to get the data from the url
const Popular = async (locals, pageNo) => {
	const resultList = serializeNonPOJOs(
		await locals.pb.collection('reading_progress').getList(1, 20, {
			filter: 'user = "77760erf1db6qql"',
			expand: ['manga', 'currentChapter'],
			perPage: 20,
			sort: '-updated',
			page: pageNo
		})
	);

	const mangas = resultList.items.map((manga) => manga.expand?.manga);
	return mangas;
};

const Latest = async (event, pageNo) => {
	const url = event.url.origin + "/api/manga?page=" + pageNo
	const res = await event.fetch(url);
	const data = await res.json();
	
	return data.mangas;
};

