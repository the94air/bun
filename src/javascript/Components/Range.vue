<template>
	<div>
		<label :for="ident">{{ label }}</label>
		<input type="range" :id="ident" :min="min" :max="max" :step="step" :value="value" @input="$emit('input', $event.target.value)" />
		<div class="value">{{ value }}</div>
	</div>
</template>

<script>
	export default {
		props: {
			ident: String,
			label: String,
			value: String,
			min: Number,
			max: Number,
			step: Number,
		},
	}
</script>