<template>
	<div :style="{ background: value }"></div>
</template>

<script>
	export default {
		props: {
			value: String,
		},
	}
</script>

<style scoped>
	div {
		display: block;
		width: 100%;
		height: 2rem;
		border-radius: .25rem;
		cursor: pointer;
	}
</style>