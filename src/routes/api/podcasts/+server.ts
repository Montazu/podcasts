import { json } from '@sveltejs/kit'
import Parser from 'rss-parser'

const parser = new Parser()

export const GET = async () => {
	const podcasts = [
		{
			id: 1,
			rss_url: 'https://www.spreaker.com/show/5396098/episodes/feed',
			url_path: 'taby-vs-spacje',
		},
		{
			id: 2,
			rss_url: 'https://anchor.fm/s/df655718/podcast/rss',
			url_path: 'tu-sie-testuje',
		},
		{
			id: 3,
			rss_url: 'https://anchor.fm/s/4a062198/podcast/rss',
			url_path: 'piatki-po-deployu',
		},
		{
			id: 4,
			rss_url: 'https://www.buzzsprout.com/103493.rss',
			url_path: 'porozmawiajmy-o-it',
		},
		{
			id: 5,
			rss_url: 'https://anchor.fm/s/58bbbd4c/podcast/rss',
			url_path: 'draft-rozmowy',
		},
		{
			id: 6,
			rss_url: 'https://feed.podbean.com/escolamobile/feed.xml',
			url_path: 'escola-mobile-biznes-masz-w-kieszeni',
		},
		{
			id: 7,
			rss_url: 'https://feeds.buzzsprout.com/1821946.rss',
			url_path: 'pierwsze-kroki-w-it',
		}
	]

	const response = podcasts.map(async ({ rss_url, url_path }) => {
		const { title, image, itunes } = await parser.parseURL(rss_url)
		return { url_path, title, image: image?.url, author: itunes?.author }
	})
	const results = await Promise.all(response)

	return json(results)
}
