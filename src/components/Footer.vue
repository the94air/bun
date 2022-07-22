<template>
  <footer class="py-12 bg-[#f4f4f4] border border-[#e9e9e9]">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          &copy;
          <a href="https://abdalla.sd" rel="nofollow" target="_blank"
            >Abdalla Arbab</a
          >
          &bull; {{ new Date().getFullYear() }}
        </div>
        <div class="w-full md:w-1/2 text-center md:text-right mb-6 md:mb-0">
          <a
            href="https://github.com/the94air/bun"
            rel="nofollow"
            target="_blank"
            class="underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230074d9' fill-opacity='0.22' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
