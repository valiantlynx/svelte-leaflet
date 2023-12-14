<script>
	import { onMount } from 'svelte';
	import { pb } from '$lib/utils/api'; // Adjust these imports accordingly

	/**
	 * Fetches and processes articles data.
	 * @returns {Promise<void>}
	 */
	const fetchArticles = async () => {
		try {
			/**
			 * @type {ArticleRecord[]}
			 */
			const res = await pb.collection('articles').getFullList();
			/**
			 * @type {Record<string, string>}
			 */
			const urls = {};

			for (let article of res) {
				/**
				 * @type {string}
				 */
				let url = pb.files.getUrl(article, article.image, {
					thumb: '500x750'
				});

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

				/**
				 * @type {string}
				 */
				urls[article.id] = url;
			}

			/**
			 * @type {ArticleRecord[]}
			 */
			articles = res;
			/**
			 * @type {Record<string, string>}
			 */
			imageUrls = urls;
		} catch (err) {
			console.error(err);
		}
	};

	/**
	 * @typedef {Object} ArticleRecord - Represents an article record.
	 * @property {string} collectionId - The collection ID.
	 * @property {string} collectionName - The name of the collection.
	 * @property {string} created - The creation date.
	 * @property {string} id - The article ID.
	 * @property {string} title - The title of the article.
	 * @property {string} subtitle - The subtitle of the article.
	 * @property {string} image - The image URL.
	 * @property {string} type - The article type.
	 * @property {string} cta - The call to action.
	 * @property {string} updated - The update date.
	 * @property {Object.<string, unknown>} expand - Additional properties.
	 */

	/**
	 * @type {ArticleRecord[]}
	 */
	let articles = [];

	/**
	 * @type {Record<string, string>}
	 */
	let imageUrls = {};

	/**
	 * Svelte onMount hook.
	 */
	onMount(fetchArticles);
</script>

<div class="grid grid-cols-1 gap-4 mt-6 max-h-l md:grid-cols-2 lg:grid-cols-2">
	{#each articles as article (article.id)}
		<div class="max-w-5xl mx-auto py-2 px-2 sm:px-2 lg:px-2">
			<div
				class="bg-base-200 text-base-content rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
			>
				<div class="pt-2 pb-6 px-2 sm:pt-6 sm:px-6 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
					<div class="lg:self-center">
						<h2 class="text-3xl font-extrabold sm:text-2xl">
							<span class="block">{article.title}</span>
						</h2>
						<p class="mt-4 text-lg leading-6">
							{article.subtitle}
						</p>
						<a
							href="blog/{article.id}"
							class="m-2 btn btn-primary border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium"
						>
							{article.cta}
						</a>
					</div>
				</div>
				<img
					class="h-full lg:object-contain object-fill rounded-md"
					src={imageUrls[article.id]}
					alt={article.title}
				/>
			</div>
		</div>
	{/each}
</div>
