import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils/api';


export const load = async (event) => {
	const { id } = event.params;

	const url = `/manga/${id}`;

	const response = await fetch(event.url.origin + `/api/manga/${id}?url=${url}`);
	const manga = await response.json();

	const pageNumbers = generatePageNumbers(manga);
	const chaptersToShow = updateChaptersToShow(1, manga);
	const similarManga = await getSimilarManga(event);

	return {
		manga,
		chaptersToShow,
		pageNumbers,
		similarManga
	};
};

/** @type {import('./$types').Actions} */
export const actions = {
	chapters: async (event) => {
		const data = await event.request.formData();
		const page = data.get('page');
		try {
			const { id } = event.params;
			const url = `/manga/${id}`;
			const response = await fetch(event.url.origin + `/api/manga/${id}?url=${url}`);
			const manga = await response.json();
			const chaptersToShow = updateChaptersToShow(page, manga);
			return {
				chaptersToShow
			};
		} catch (err) {
			console.log('err', err);
			throw error(err.status, err.message);
		}
	}
};

let chaptersPerPage = 12;
function updateChaptersToShow(currentPage, manga) {
	const startIndex = (currentPage - 1) * chaptersPerPage;
	const endIndex = startIndex + chaptersPerPage;
	const chaptersToShow = manga.episodes.slice(startIndex, endIndex);
	return chaptersToShow;
}
// Generate an array of page numbers for pagination buttons
function generatePageNumbers(manga) {
	const totalChapters = manga.episodes.length;
	const totalPages = Math.ceil(totalChapters / chaptersPerPage);
	const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
	return pageNumbers;
}

async function getSimilarManga(event) {
	const { locals } = event;
	// get similar manga, depending on the genre of the manga
	
	const similarMangaList = await serializeNonPOJOs(
	await locals.pb.collection('mangas').getList(1, 8, {
		
	})
	);

	return similarMangaList.items
}
