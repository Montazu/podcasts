<div class="podcast">
	<img class="podcast__image" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEMfT8k-P0FQvUaXF8XxM4PpJ18SJiGy8iZkr0GOwIwfdbBRdQ" alt="Taby vs spacje" />
	<h1 class="podcast__title">Taby vs spacje</h1>
	<h2 class="podcast__author">The Software House</h2>
	<div class="podcast__options">
		<a href="https://tsh.io/" target="_blank">Strona internetowa</a>
	</div>
	<p class="podcast__description">Taby vs spacje to podcast prowadzony przez Adama Polaka (VP of Technology w The Software House) oraz Andrzeja Wysoczańskiego (Head of Frontend w The Software House). Dołącz do nas i posłuchaj o najważniejszych sporach związanych z branżą IT. Świat technologii ciągle się zmienia, a Adam i Andrzej oceniają najnowsze trendy i przedstawiają swoje poglądy na ich temat.</p>
</div>
<ul class="list">
	<li class="list__item">
		<h3 class="list__title">#75 Taby vs spacje – Nie ma testów automatycznych bez testów manualnych. Kim tak naprawdę jest QA? Rozmawiamy z Marcinem Basiakowskim.</h3>
		<p class="list__description">Z pozoru może się wydawać, że QA i development to dwa inne światy. Nic bardziej mylnego – ich jeden wspólny cel, to dostarczanie wysokiej jakości oprogramowania. Razem z naszym Head of Quality Assurance (Marcinem Basiakowskim) rozmawiamy o procesach, przełomowych momentach i przyszłości QA w świecie developmentu.</p>
		<button class="list__duration">1 g 2 min</button>
		<button class="list__download">Pobierz</button>
	</li>
	<li class="list__item">
		<h3 class="list__title">#75 Taby vs spacje – Nie ma testów automatycznych bez testów manualnych. Kim tak naprawdę jest QA? Rozmawiamy z Marcinem Basiakowskim.</h3>
		<p class="list__description">Z pozoru może się wydawać, że QA i development to dwa inne światy. Nic bardziej mylnego – ich jeden wspólny cel, to dostarczanie wysokiej jakości oprogramowania. Razem z naszym Head of Quality Assurance (Marcinem Basiakowskim) rozmawiamy o procesach, przełomowych momentach i przyszłości QA w świecie developmentu.</p>
		<button class="list__play">1 g 2 min</button>
		<button class="list__download">Pobierz</button>
	</li>
	<li class="list__item">
		<h3 class="list__title">#75 Taby vs spacje – Nie ma testów automatycznych bez testów manualnych. Kim tak naprawdę jest QA? Rozmawiamy z Marcinem Basiakowskim.</h3>
		<p class="list__description">Z pozoru może się wydawać, że QA i development to dwa inne światy. Nic bardziej mylnego – ich jeden wspólny cel, to dostarczanie wysokiej jakości oprogramowania. Razem z naszym Head of Quality Assurance (Marcinem Basiakowskim) rozmawiamy o procesach, przełomowych momentach i przyszłości QA w świecie developmentu.</p>
		<button class="list__play">1 g 2 min</button>
		<button class="list__download">Pobierz</button>
	</li>
</ul>
<style lang="scss">
	.podcast {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		grid-column-gap: 1rem;

		&__image {
			grid-area: 1 / 1 / 3 / 2;
			border-radius: .5rem;
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
				border-bottom: .1rem solid #303030;
			}
		}

		&__title, &__description {
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