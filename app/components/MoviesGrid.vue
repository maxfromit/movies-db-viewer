<script setup lang="ts">
import type { Movie } from "@/pages/index.vue"

const props = defineProps<{
  movies: Movie[]
}>()

// const emit = defineEmits<{
//   (e: "selected-movie", id: number): void
// }>()
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-6 gap-4">
    <ULink
      v-for="movie in props?.movies"
      :key="movie?.id"
      raw
      :to="`/movie/${movie?.id}`"
    >
      <UCard
        class="flex flex-col justify-center hover:shadow-[6px_6px_0_0_rgb(112,43,254)] aspect-[324/306]"
      >
        <div class="aspect-[300/172]">
          <NuxtImg
            :src="movie?.poster"
            :alt="movie?.name"
            width="300"
            height="172"
            loading="lazy"
            class="w-full mb-2"
            @error="console.error"
          />
        </div>
        <div>
          <div class="text-xl line-clamp-1">{{ movie?.name }}</div>
          <div class="text-xs line-clamp-2 mb-2">{{ movie?.description }}</div>
        </div>
        <MovieCommonDataInBadges
          :rating="movie?.rating"
          :genre="movie?.genre"
          :duration="movie?.duration"
        />
      </UCard>
    </ULink>
  </div>
</template>
