<template>
	<footer class="footer">
		<div class="container">
			<div class="flex flex-wrap">
				<div class="w-1/2 text-center md:text-left mb-6">&copy; <a href="https://codolog.com" target="_blank">Codolog</a> {{ date }}</div>
				<div class="w-1/2 text-center md:text-right mb-6">Made by <a href="https://github.com/the94air" target="_blank">@the94air</a>.</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		computed: {
			date() {
				return new Date().getFullYear();
			}
		}
	}
</script>