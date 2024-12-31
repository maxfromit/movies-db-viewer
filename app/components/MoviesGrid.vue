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
  <div
    class="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-4"
  >
    <ULink
      v-for="movie in props?.movies"
      :key="movie?.id"
      raw
      :to="`/movie/${movie?.id}`"
      class="h-full"
    >
      <div
        class="bg-blue-950 rounded-lg flex flex-col content-start hover:shadow-[6px_6px_0_0_rgb(112,43,254)] p-2 h-full"
      >
        <NuxtImg
          :src="movie?.poster"
          :alt="movie?.name"
          width="300"
          height="172"
          loading="lazy"
          class="w-full mb-2 rounded-lg"
          @error="console.error"
        />
        <div class="grow mb-2">
          <div class="line-clamp-1 custom-h2">
            {{ movie?.name }}
          </div>
          <div class="line-clamp-2 custom-body">
            {{ movie?.description }}
          </div>
        </div>

        <MovieCommonDataInBadges
          :rating="movie?.rating"
          :genre="movie?.genre"
          :duration="movie?.duration"
        />
      </div>
    </ULink>
  </div>
</template>
