<template>
	<div>
		<label :for="ident">{{ label }}</label>
		<div class="flex">
			<div class="w-1/2">
				<div class="switch">
					<input :id="ident" type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />
					<label :for="ident">
						<div class="switcher" data-checked="Yes" data-unchecked="No"></div>
					</label>
				</div>
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
			value: Boolean,
		},
	}
</script>