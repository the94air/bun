<template>
	<div>
		<label :for="ident">{{ label }}</label>
		<div class="switch">
			<input :id="ident" type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
			<label :for="ident">
				<div class="switcher" data-checked="Yes" data-unchecked="No"></div>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			ident: String,
			label: String,
			value: Boolean,
		},
	}
</script>