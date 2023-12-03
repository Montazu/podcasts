<script lang="ts">
	const getPodcasts = async () => {
		const response = await fetch('/api/podcasts')
		const result = await response.json()
		return result
	}

	let podcasts = getPodcasts()
</script>

{#await podcasts}
	<p>Loading...</p>
{:then podcasts}
	<ul class="podcasts">
		{#each podcasts as podcast}
			<li class="podcasts__item">
				<a class="podcasts__link" href={podcast.url_path}>
					<img class="podcasts__image" src={podcast.image} alt={podcast.title} />
					<h3 class="podcasts__title">{podcast.title}</h3>
					<p class="podcasts__author">{podcast.author}</p>
				</a>
			</li>
		{/each}
	</ul>
{/await}

<style lang="scss">
	.podcasts {
		padding: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		gap: 1rem;

		&__image {
			width: 100%;
			border-radius: .5rem;
		}
	}
</style>