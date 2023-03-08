<template>
  <div class="bg-gray-900 text-white min-h-screen">
    <TopNav/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    TopNav: () =>
      import(
          "@/components/TopNav.vue"
      ),
  }
}
</script>
