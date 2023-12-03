<script lang="ts">
	import { state } from '../store'
</script>

<div class="wrapper">
	<div class="slot">
		<slot  />
	</div>
	{#if $state}
		<div class="audio">
			<img src={$state.image} alt={$state.title} />
			<h4>{$state.title}</h4>
			<audio src={$state.src} autoplay controls />
		</div>
	{/if}
</div>

<style lang="scss">
	:global(html, body, .app) {
		height: 100%;
		margin: 0;
		font-family: sans-serif;
	}

	.wrapper {
		display: flex;
		flex-flow: column;
		height: 100%;
		width: 100%;
	}

	.slot {
		flex: 1;
		overflow-y: scroll;
	}

	.audio {
		width: 100%;
		background: rgb(241, 243, 244);
		display: flex;
		height: 4rem;
		gap: .5rem;
		align-items: center;
		padding: 0.5rem;
		width: 100%;
		box-sizing: border-box;

		img {
			height: 100%;
			border-radius: .3rem;
		}

		h4 {
			flex: 1;
			margin: 0;
			text-overflow: ellipsis; 
			overflow: hidden; 
			white-space: nowrap;
		}
	}
</style>