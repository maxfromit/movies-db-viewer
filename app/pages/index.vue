<!-- eslint-disable vue/no-multiple-template-root -->
<script setup lang="ts">
import axios from "axios"

export type Movie = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
}

// const router = useRouter()

// const {
//   data: movies,
//   status,
//   error,
//   refresh,
//   clear,
// } = await  useAsyncData("movies", ()=>$fetch(
//       "https://my-json-server.typicode.com/maxfromit/movies-db-viewer/items"
//     )
// )

// const {
//   data: movies,
//   status,
//   error,
//   refresh,
//   clear,
// } = await useAsyncData("movies", async () => {
//   try {
//     return await $fetch(
//       "https://my-json-server.typicode.com/maxfromit/movies-db-viewer/items"
//     )
//   } catch (err) {
//     console.error("Failed to fetch movies:", err)
//     return null
//   }
// })
const movies = ref<Movie[]>([])

await axios
  .get("https://my-json-server.typicode.com/maxfromit/movies-db-viewer/items")
  .then(function (response) {
    movies.value = response.data
  })
  .catch(function (err) {
    console.error("Failed to fetch movies:", err)
  })

// const goToDetail = (id: number) => {
//   router.push(`/movie/${id}`)
// }
</script>

<template>
  <MoviesGrid v-if="movies?.length > 0" :movies="movies" />
  <div v-else>...</div>
</template>
