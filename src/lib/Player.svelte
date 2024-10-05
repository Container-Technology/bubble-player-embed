<script lang="ts">
	export let src;
	export let title;
	export let artist;

	let paused = true;
</script>

<div class="player" class:paused>
	<audio
		{src}
		bind:paused
		preload="metadata"
	></audio>
	
	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
		on:click={() => paused = !paused}
	></button>

	<div class="info">
		<div class="description">
			<a href="" target="_blank">
				<strong>{title}</strong> /
				<span>{artist}</span>
			</a>
		</div>
	</div>
</div>

<style>
	.player {
		display: grid;
		grid-template-columns: 2.5em 1fr;
		align-items: center;
		gap: 1em;
		padding: 0.5em 1em 0.5em 0.5em;
		transition: filter 0.2s;
		color: #000;
		user-select: none;
		width: 100%;
		font-family: Helvetica, sans-serif;
		background: #fff;
		max-height: 50px;
	}

	.player:not(.paused) {
		color: #000;
	}
	
	button {
		width: 100%;
		aspect-ratio: 1;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		box-shadow: none;
		border: none;
		background: #fff;
		cursor: pointer;
	}

	/* Adaptive play/pause button, reverse engineer logo */
	[aria-label="pause"] {
		background-image: url(./pause.svg);
	}

	[aria-label="play"] {
		background-image: url(./play.svg);
	}

	.info {
		overflow: hidden;
		margin-top: 0.18em;
	}

	.info a {
		color: #000;
	}

	.info a:hover {
		text-decoration: underline;
	}

	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.2;
	}
</style>
