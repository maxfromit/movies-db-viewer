<script setup lang="ts">
import type { Movie } from "@/pages/index.vue"

const props = defineProps<{
  movies: Movie[]
}>()

const emit = defineEmits<{
  (e: "selected-movie", id: number): void
}>()
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <UCard
      v-for="movie in props.movies"
      :key="movie.id"
      @click="emit('selected-movie', movie.id)"
    >
      <NuxtImg
        :src="movie.poster"
        :alt="movie.name"
        :placeholder="[50, 25]"
        width="300"
        height="172"
      />
      <div>{{ movie.name }}</div>
      <div>{{ movie.description }}</div>
      <div>
        <UBadge :label="movie.rating" />
        <UBadge :label="movie.genre" />
        <UBadge :label="movie.duration" />
      </div>
    </UCard>
  </div>
</template>
