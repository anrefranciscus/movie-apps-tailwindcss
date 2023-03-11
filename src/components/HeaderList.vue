<template>
  <div class="flex justify-between">
    <h2 class="text-2xl">{{ title }}</h2>
    <a class="text-gray-400 text-sm">{{ linkTitle }}</a>
  </div>
</template>

<script>
export default {
  name: "HeaderList",
  props: {
    title: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
