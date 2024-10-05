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
		background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' style='width: %7Bsize%7Drem; height: %7Bsize%7Drem;'%3E%3Cpath d='M13 8H9C8.44772 8 8 8.44772 8 9V23C8 23.5523 8.44772 24 9 24H13C13.5523 24 14 23.5523 14 23V9C14 8.44772 13.5523 8 13 8Z' fill='%23000'/%3E%3Cpath d='M23 8H19C18.4477 8 18 8.44772 18 9V23C18 23.5523 18.4477 24 19 24H23C23.5523 24 24 23.5523 24 23V9C24 8.44772 23.5523 8 23 8Z' fill='%23000'/%3E%3C/svg%3E");
	}

	[aria-label="play"] {
		background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' style='width: %7Bsize%7Drem; height: %7Bsize%7Drem;'%3E%3Cpath d='M9 9.26274C9 8.82178 9.23717 8.41278 9.62559 8.18376C10.0141 7.95467 10.4976 7.93877 10.9011 8.14174C14.1656 9.7835 20.8201 13.1302 24.2974 14.879C24.7291 15.0961 25 15.5284 25 16C25 16.4716 24.7291 16.9039 24.2974 17.121C20.8201 18.8698 14.1656 22.2165 10.9011 23.8583C10.4976 24.0612 10.0141 24.0453 9.62559 23.8162C9.23717 23.5872 9 23.1782 9 22.7373V9.26274Z' fill='%23000'/%3E%3C/svg%3E");
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
