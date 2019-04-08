<template>
	<div>
		<label>{{ label }}</label>
		<ColorPreview :value="value" @click.native="showPicker = !showPicker" />
		<Chrome v-if="showPicker" :value="value" @input="getColor" />
		<div class="value">{{ value }}</div>
	</div>
</template>

<script>
	import { Chrome } from 'vue-color';
	import ColorPreview from './ColorPreview';

	export default {
		data() {
			return {
				showPicker: false,
			}
		},
		props: {
			label: String,
			value: String,
		},
		components: { Chrome, ColorPreview },
		methods: {
			getColor(event) {
				let rgba = `rgba(${event.rgba.r}, ${event.rgba.g}, ${event.rgba.b}, ${event.rgba.a})`;
				this.$emit('input', rgba);
			}
		}
	}
</script>