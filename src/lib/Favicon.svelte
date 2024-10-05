<script lang="ts">
	const scheme = [
		'rgb(233, 136, 206)',
		'rgb(245, 250, 251)',
		'rgb(52, 81, 188)',
		'rgb(187, 204, 243)',
	];

	let currentColor = 'rgb(187, 204, 243)'

	let i = 0;

	setInterval(() => {
		currentColor = scheme[i++]

		if (i === scheme.length - 1) i = 0;
	}, 1000);
</script>

<svelte:head>
		<link rel="icon" href={`data:image/svg+xml;utf8,<svg width='64' height='64' xmlns='http://www.w3.org/2000/svg'><rect width='64' height='64' style='fill:${currentColor};'></rect></svg>`} type="image/svg+xml" />
</svelte:head>
