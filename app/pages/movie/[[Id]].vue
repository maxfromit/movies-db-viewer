<script setup lang="ts">
const route = useRoute()

const movieId = computed(() => route?.params?.Id)
</script>

<template>
  <MovieDetail
    v-if="movieId && typeof movieId === 'string'"
    :movie-id="parseInt(movieId, 10)"
  />
</template>
