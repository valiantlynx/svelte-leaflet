/**
 * Generate Posts List
 * @param options - An optional configuration object
 * @returns - posts list
 */
export const genPosts: any = ({
	modules = import.meta.glob<any>('/src/routes/**/*.{md,svelte.md}', { eager: true }),
	postHtml = false,
	postLimit = undefined,
	filterUnlisted = false
} = {}) =>
	Object.entries(modules)
		.map(([, module]) => ({
			...module.metadata,
			type: module.metadata.type ?? 'post',
			html: postHtml
				? module.default
						.render()
						.html // eslint-disable-next-line no-control-regex
						.replace(/[\u0000-\u001F]/g, '')
						.replace(/[\r\n]/g, '')
						.match(/<main [^>]+>(.*?)<\/main>/gi)?.[0]
						.replace(/<main [^>]+>(.*?)<\/main>/gi, '$1')
						// .replace(/( class=")(.*?)(")/gi, '')
						.replace(/( style=")(.*?)(")/gi, '')
						.replace(/(<span>)(.*?)(<\/span>)/gi, '$2')
						.replace(/(<main>)(.*?)(<\/main>)/gi, '$2')
				: ''
		}))
		.filter(
			(post, index) =>
				(!filterUnlisted || !post.flags?.includes('unlisted')) && (!postLimit || index < postLimit)
		)
		.sort((a, b) => Date.parse(b.published ?? b.created) - Date.parse(a.published ?? a.created));
