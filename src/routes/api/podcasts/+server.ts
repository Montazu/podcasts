import { json } from '@sveltejs/kit'
import Parser from 'rss-parser'
import { podcasts } from './podcasts'

const parser = new Parser()

export const GET = async () => {
	const response = podcasts.map(async ({ id, rss, slug }) => {
		const { title, image, itunes } = await parser.parseURL(rss)
		return { id, slug, title, image: image?.url, author: itunes?.author }
	})
	const results = await Promise.all(response)

	return json(results)
}