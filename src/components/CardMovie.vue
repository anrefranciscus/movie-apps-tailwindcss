<template>
  <div class="md:flex py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
    <div class="md:flex-1 p-2 rounded shadow-lg">
      <div>
        <img
          :src="posterImage"
          :alt="title"
          class="w-full hover:opacity-75 transition ease-in-out duration-150"
        />
      </div>
      <div class="px-4 pt-4">
        <p class="text-lg mb-2">
          {{ title }}
        </p>
        <p class="text-gray-700 text-sm flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 473.486 473.486"
            v-for="i in 5"
            :key="i"
            :class="
              i <= Number(voteAverage) / 2 ? 'text-yellow-400' : 'text-gray-600'
            "
            class="h-4 w-4 fill-current mr-1"
          >
            <path
              d="M473.486 182.079l-162.871-24.127L235.904 11.23l-73.276 147.445L0 184.389l117.584 115.252-25.798 162.616 145.946-76.215 146.684 74.787-27.384-162.356z"
            />
          </svg>
        </p>
        <p class="text-gray-700 text-sm mt-1">
          {{ voteAverage * 10 }} % {{ date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PopularMovieService from "@/usecases/PopularMovieService'";

export default {
  name: "CardMovie",
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    voteAverage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    posterImage() {
      return PopularMovieService.getPosterPath(this.image);
    },
  },
};
</script>
