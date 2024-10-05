<script lang="ts">
	// Here at bubble.supply, we make each of our devices by hand :)
	const getUniqueRotaition = () => {
		//  Derive rotation between  -1.5 and 1.5 degrees based on hash computed from App ID
	}
</script>

<div class="sticker" style={`transform: rotateZ(1deg)`}>
	<img src="./ce.svg" class="certificate"/>
	<span><a href="https://bubble.supply" target="_blank">bubble.supply</a>™</span>
</div>

<style>
  .sticker {
		font-family: monospace;
		font-size: 0.75em;
		padding: 0.25em 0.5em;
		position: absolute;
		display: flex;
		right: 0.25em;
		bottom: 0.25em;
		gap: 0.5em;
		border-radius: 3px;
		background: #fce6f4;	
		color: #000;
  }

	.sticker a {
		color: #000;
	}

	img {
		width: 1em;
		height: 1em;
	}
</style>

