<template>
	<div class="picker-tool">
		<label>{{ label }}</label>
		<ColorPreview :value="value" @click.native="showPicker = !showPicker" />
		<Chrome v-if="showPicker" :value="value" @input="getColor" />
		<div class="flex">
			<div class="w-1/2">
				<div class="value">{{ value }}</div>
			</div>
			<div class="w-1/2 text-right">
				<button class="reset-button" @click="$emit('reset')">Reset</button>
			</div>
		</div>
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