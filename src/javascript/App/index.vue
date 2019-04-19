<template>
	<div>
		<Header />
		<Generator />
		<Footer />
	</div>
</template>

<script>
	import Header from '../Components/Header';
	import Generator from '../Components/Generator';
	import Footer from '../Components/Footer';

	export default {
		components: { Header, Generator, Footer },
	}
</script>
