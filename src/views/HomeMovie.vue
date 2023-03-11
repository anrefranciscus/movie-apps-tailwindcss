<template>
  <div class="p-8">
    <header-list title="Popular Movie" link-title="View All" />
    <div class="md:flex content-center flex-wrap -mx-2">
      <div class="flex flex-wrap">
        <movie-card
          v-for="item in listPopularMovie"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :image="item.posterPath"
          :date="item.releaseDate"
          :vote-average="item.voteAverage"
          :genre-movie="item.genreMovie"
          :list-genre="listGenreMovie"
        />
      </div>
    </div>
    <header-list title="UpComing Movie" link-title="View All" />
    <div class="md:flex content-center flex-wrap -mx-2">
      <div class="flex flex-wrap">
        <movie-card
          v-for="item in listUpComingMovie"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :image="item.posterPath"
          :date="item.releaseDate"
          :vote-average="item.voteAverage"
          :genre-movie="item.genreMovie"
          :list-genre="listGenreMovie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PopularMovieService from "@/usecases/PopularMovieService'";
import UpComingMovieService from "@/usecases/UpComingMovieService";
import GenreMovieService from "@/usecases/GenreMovieService";

export default {
  name: "HomeMovie",
  components: {
    HeaderList: () => import("@/components/HeaderList.vue"),
    MovieCard: () => import("@/components/CardMovie.vue"),
  },
  data() {
    return {
      listPopularMovie: [],
      listUpComingMovie: [],
      listGenreMovie: [],
    };
  },
  mounted() {
    this.getPopularMovies();
    this.getUpComingMovie();
    this.getGenreMovie();
  },
  methods: {
    async getPopularMovies() {
      const response = await PopularMovieService.get();
      if (response.code === 200) {
        this.listPopularMovie = response.data.results.splice(0, 10);
      }
    },
    async getUpComingMovie() {
      const response = await UpComingMovieService.get();
      if (response.code === 200) {
        this.listUpComingMovie = response.data.results.splice(0, 10);
      }
    },
    async getGenreMovie() {
      const response = await GenreMovieService.get();
      if (response.code === 200) {
        this.listGenreMovie = response.data.genres;
      }
    },
  },
};
</script>
