<script setup lang="ts">
export type Movie = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
}

const router = useRouter()

const {
  data: movies,
  status,
  error,
  refresh,
  clear,
} = await useAsyncData("movies", () =>
  $fetch("https://my-json-server.typicode.com/maxfromit/movies-db-viewer/items")
)

const goToDetail = (id: number) => {
  router.push(`/movie/${id}`)
}
</script>

<template>
  <MoviesGrid v-if="movies" :movies="movies" @selected-movie="goToDetail" />
</template>
