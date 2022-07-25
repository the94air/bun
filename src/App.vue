<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Settings from "./components/Settings.vue";
import Preview from "./components/Preview.vue";
import Generator from "./components/Generator.vue";
</script>

<template>
  <Header />
  <main>
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap md:-mx-4">
          <div class="w-full lg:w-1/2 md:px-4">
            <Preview />
          </div>
          <div class="w-full lg:w-1/2 md:px-4">
            <Settings />
          </div>
        </div>
        <div class="flex flex-wrap md:-mx-4">
          <div class="w-full lg:w-1/2 md:px-4"></div>
          <div class="w-full lg:w-1/2 md:px-4">
            <Generator />
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
