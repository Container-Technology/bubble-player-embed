const mapRange = (val, inMin, inMax, outMin, outMax) => {
  return outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin);
}

// Derive unique sticker rotation and x/y based on device ID
const computeStickerPosition = (uuid: string) => {
	const uuidInt = parseInt(uuid.replace(/-/g, '').substring(0, 16), 16) >>> 0

	// Between 0.25 and 1.5
	const right = mapRange(uuidInt % 1000, 0, 1000, 0.25, 1.5) + 'em'
	const bottom = mapRange(uuidInt % 100, 0, 1000, 0.25, 1.5) + 'em'

	// Between -1.5 and 1.5
	const angle = mapRange(uuidInt % 1000, 0, 1000, -1.5, 1.5) + 'deg'

	return { right, bottom, angle }
}


export default computeStickerPosition
