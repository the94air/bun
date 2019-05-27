<template>
	<div class="range">
		<label :for="ident">{{ label }}</label>
		<input type="range" :id="ident" :min="min" :max="max" :step="step" :value="value" @input="$emit('input', $event.target.value)" />
		<div class="flex">
			<div class="w-1/2">
				<div class="value">{{ value }}{{ tag }}</div>
			</div>
			<div class="w-1/2 text-right">
				<button class="reset-button" @click="$emit('reset')">Reset</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			ident: String,
			label: String,
			value: String,
			tag: String,
			min: Number,
			max: Number,
			step: Number,
		},
	}
</script>