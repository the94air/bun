<template>
	<div class="picker-tool-preview" :style="{ background: value }"></div>
</template>

<script>
	export default {
		props: {
			value: String,
		},
	}
</script>
