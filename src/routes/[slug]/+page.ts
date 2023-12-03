import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params: { slug }, fetch }) => {
	const response = await fetch(`/api/podcasts/${slug}`)
	const result = await response.json()
	if (result.message) throw error(404, 'Not found')
	return result
}