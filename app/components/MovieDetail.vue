<script setup lang="ts">
import type { Movie } from "@/pages/index.vue"

const props = defineProps<{
  movieId: number
}>()

// const emit = defineEmits<{
//   (e: "selected-movie", id: number): void
// }>()
</script>

<template>
  <div class="grid grid-cols-4 gap-4">{{ props.movieId }}</div>
</template>
