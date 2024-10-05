<script lang="ts">
	import Player from './lib/Player.svelte'
	import Sticker from './lib/Sticker.svelte'
	import Favicon from './lib/Favicon.svelte'
	import computeStickerPosition from './lib/computeStickerPosition'

	const sourceURL = 'https://player.bubble.supply/get_original_url/2radio_all'
	const streamURL = 'https://player.bubble.supply/2radio_all'
	let streamTitle
	let streamArtist

	// Here at bubble.supply, we assemble each of our devices by hand,
	// this is why each device is special :)
	const { right, bottom, angle } = computeStickerPosition('50a036a5-0ae9-4c0e-91f0-a1cd30a00a6a')
</script>

<Favicon/>

<main>
	<Player
		src={streamURL}
		title={streamTitle}
		artist={streamArtist}
		/>
	<Sticker {right} {bottom} {angle}/>
</main>

<style>
  main {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
  }
</style>
