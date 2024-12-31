<script setup lang="ts">
import axios from "axios"

const route = useRoute()

const movieId = computed(() => route?.params?.id)

export type Movie = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
  trivia: string[]
  actors: {
    name: string
    imdb_id: string
  }
}
const movie = ref<Movie | null>(null)

// const {
//   data: movies,
//   status,
//   error,
//   refresh,
//   clear,
// } = await useAsyncData("movie", async () => {
//   try {
//     return await $fetch(
//       `https://my-json-server.typicode.com/maxfromit/movies-db-viewer/details/`
//     )
//   } catch (err) {
//     console.error("Failed to fetch movies:", err)
//     return null
//   }
// })

await axios
  .get("https://my-json-server.typicode.com/maxfromit/movies-db-viewer/details")
  .then(function (response) {
    movie.value = response.data
  })
  .catch(function (err) {
    console.error("Failed to fetch movie detail:", err)
  })
</script>

<template>
  <MovieDetail v-if="movie" :movie="movie" />
  <div v-else>...</div>
</template>
