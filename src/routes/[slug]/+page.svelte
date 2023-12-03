<script lang="ts">
	import type { PageData } from './$types'
	import { state } from '../../store'
	export let data: PageData

	const calcDuration = (duration: string) => {
		let seconds: number
		if (duration.includes(':')) {
			const [h, m, s] = duration.split(':')
			if (s) {
				seconds = +h * 3600 + +m * 60 + +s
			} else {
				seconds = +h * 60 + +m
			}
		} else {
			seconds = +duration
		}

		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)

		return hours ? `${hours} g ${minutes} min` : `${minutes} min`
	}
</script>

<div class="podcast">
	<img class="podcast__image" src={data.image} alt={data.title} />
	<h1 class="podcast__title">{data.title}</h1>
	<h2 class="podcast__author">{data.author}</h2>
	<div class="podcast__options">
		<a href={data.link} target="_blank">Odwiedź stronę</a>
	</div>
	<p class="podcast__description">{data.description}</p>
</div>
<ul class="list">
	{#each data.episodes as episode}
		<li class="list__item">
			<h3 class="list__title">{episode.title}</h3>
			<p class="list__description">{episode.contentSnippet}</p>
			<button class="list__duration" on:click={() => $state = { title: episode.title, src: episode.enclosure.url, image: data.image }}>{calcDuration(episode.itunes.duration)}</button>
			<!-- <button class="list__download">Pobierz</button> -->
		</li>
	{/each}
</ul>

<style lang="scss">
	.podcast {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		grid-column-gap: 1rem;

		&__image {
			grid-area: 1 / 1 / 3 / 2;
			border-radius: 0.5rem;
			width: 8rem;
		}

		&__title {
			grid-area: 1 / 2 / 2 / 3;
			margin: 0;
		}

		&__author {
			grid-area: 2 / 2 / 3 / 3;
			margin: 0;
		}

		&__options {
			grid-area: 3 / 1 / 4 / 3;
		}

		&__description {
			grid-area: 4 / 1 / 5 / 3;
		}
	}

	.list {
		padding: 0;
		list-style: none;

		&__item {
			margin: 0;
			padding: 1rem 0;

			&:not(:last-of-type) {
				border-bottom: 0.1rem solid #303030;
			}
		}

		&__title,
		&__description {
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
		}

		&__title {
			-webkit-line-clamp: 2;
			margin: 0;
		}

		&__description {
			-webkit-line-clamp: 3;
		}
	}
</style>
