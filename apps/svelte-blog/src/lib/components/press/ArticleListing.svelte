<script>
	import { onMount } from 'svelte';
	import { pb, getImageURL } from '$lib/utils/api'; // Adjust these imports accordingly
	import { page } from '$app/stores';

	/**
	 * Fetches and processes category data.
	 * @returns {Promise<void>}
	 */
	const fetchCategorys = async () => {
		try {
			/**
			 * @type {CategoryRecord[]}
			 */
			const res = await pb.collection('altlokal_menu_type').getFullList();
			/**
			 * @type {Record<string, string>}
			 */
			const urls = {};

			for (let category of res) {
				let url = pb.files.getUrl(category, category.image, { thumb: '500x750' });

				try {
					const response = await fetch(url);

					if (!response.ok) {
						url =
							'https://analytics.minfuel.com/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg';
						throw new Error('Image not found');
					}
				} catch {
					url =
						'https://analytics.minfuel.com/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg';
				}

				urls[category.id] = url;
			}

			/**
			 * @typedef {Object} CategoryRecord - Represents a category record.
			 * @property {string} collectionId - The collection ID.
			 * @property {string} collectionName - The name of the collection.
			 * @property {string} created - The creation date.
			 * @property {string} id - The category ID.
			 * @property {string} kommentar - The comment.
			 * @property {boolean} sold_out - Indicates if it's sold out.
			 * @property {string} image - The image URL.
			 * @property {string} type - The category type.
			 * @property {string} updated - The update date.
			 * @property {Object.<string, unknown>} expand - Additional properties.
			 */

			/** @type {CategoryRecord[]} */
			/* eslint-disable @typescript-eslint/no-unused-vars */
			let categorys = res;

			/** @type {Record<string, string>} */
			/* eslint-disable @typescript-eslint/no-unused-vars */
			let imageUrls = urls;
		} catch (err) {
			console.error(err);
		}
	};

	onMount(fetchCategorys);
</script>

<div class="max-w-5xl mx-auto py-2 px-2 sm:px-2 lg:px-2">
	<div
		class="bg-slate-800 dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
	>
		<div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
			<div class="lg:self-center">
				<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
					<span class="block">{'$t(articlesModels.title)'}</span>
				</h2>
				<p class="mt-4 text-lg leading-6 text-gray-100 dark:text-gray-400">
					{'$t(articlesModels.description)'}
				</p>
				<a
					href="blog/{'$t(articlesModels.title)'}"
					class="mt-8 bg-white text-black-600 hover:text-black-700 dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium"
				>
					{'$t(articlesModels.btn_cta)'}
				</a>
			</div>
		</div>
		<div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
			<img
				class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
				src={$page.data.user?.avatar
					? getImageURL($page.data.user?.collectionId, $page.data.user?.id || '', $page.data.user?.avatar)
					: 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000'}
				alt="App screenshot"
			/>
		</div>
	</div>
</div>
