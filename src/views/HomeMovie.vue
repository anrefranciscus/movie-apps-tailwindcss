<template>
  <div class="p-8">
    <div class="flex justify-between">
      <h2 class="text-2xl">Popular Movie</h2>
      <a class="text-gray-400 text-sm">View All</a>
    </div>
    <div class="md:flex content-center flex-wrap -mx-2">
      <div class="flex flex-wrap">
        <movie-card
          v-for="item in listPopularMovie"
          :key="item.id"
          :title="item.title"
          :image="item.posterPath"
          :date="item.releaseDate"
          :vote-average="item.voteAverage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PopularMovieService from "@/usecases/PopularMovieService'";

export default {
  name: "HomeMovie",
  components: {
    MovieCard: () => import("@/components/CardMovie.vue"),
  },
  data() {
    return {
      listPopularMovie: [],
    };
  },
  mounted() {
    this.getPopularMovies();
  },
  methods: {
    async getPopularMovies() {
      const response = await PopularMovieService.get();
      if (response.code === 200) {
        console.log(response);
        this.listPopularMovie = response.data.results.splice(0, 5);
      }
    },
  },
};
</script>

<style scoped></style>
