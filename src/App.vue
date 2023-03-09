<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <TopNav />
    <div class="container mx-auto mt-24 md:mt-16">
      <home-movie />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    TopNav: () => import("@/components/TopNav.vue"),
    HomeMovie: () => import("@/views/HomeMovie.vue"),
  },
};
</script>
