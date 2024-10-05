<script lang="ts">
	export let right: number
	export let bottom: number
	export let angle: number
</script>

<div
	class="sticker"
	style={`right: ${right}; bottom: ${bottom}; transform: translateZ(${angle});`}
	>
	<span class="certification">
		<img src="./ce.svg"/>
	</span>
	<span class="link">
		<a href="https://bubble.supply" target="_blank">bubble.supply</a>
	</span>
</div>

<style>
  .sticker {
		font-family: monospace;
		font-size: 0.75em;
		padding: 0.25em;
		position: absolute;
		display: flex;
		right: 0.5em;
		bottom: 0.25em;
		gap: 1em;
		border-radius: 3px;
		transform: rotatez(1deg);
		background: #fce6f4;
		color: #000;
		align-items: start;
		transition: background linear 0.1s;
  }

	.sticker a {
		color: #000;
	}

	.sticker:hover a {
		color: #000;
	}

	.certification {
		height: 2em;
		width: 2em;
		display: flex;
		flex-grow: 0;
		gap: 0.25em;
		margin-right: 0.25rem;
	}
</style>

