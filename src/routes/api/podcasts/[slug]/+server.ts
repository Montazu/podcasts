import { json } from '@sveltejs/kit'
import Parser from 'rss-parser'
import { podcasts } from '../podcasts.js'

const parser = new Parser()

export const GET = async ({ params: { slug } }) => {
	const podcast = podcasts.find((podcast) => podcast.slug === slug)
	if (!podcast) return json({ message: 'Not found' })
	const { title, description, link, image, itunes, items } = await parser.parseURL(podcast.rss)
	const result = {
		id: podcast.id,
		slug,
		title,
		description,
		link,
		image: image?.url,
		author: itunes?.author,
		episodes: items
	}

	return json(result)
}
