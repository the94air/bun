<template>
  <div>
    <Header />
    <Generator />
    <!-- <Disqus /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../Components/Header";
import Generator from "../Components/Generator";
// import Disqus from '../Components/Disqus';
// import Footer from "../Components/Footer";

export default {
  components: { Header, Generator },
};
</script>
