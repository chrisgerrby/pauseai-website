export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	/** Path in URL from root */
	slug: string
	/** Meta description for SEO */
	description: string
	/**
	 * Date in YYYY-MM-DD format
	 */
	date: string
	categories: Categories[]
}
