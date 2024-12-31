<script setup lang="ts">
import type { Movie } from "@/pages/movie/[[id]].vue"

const props = defineProps<{
  movie: Movie
}>()

// const emit = defineEmits<{
//   (e: "selected-movie", id: number): void
// }>()
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-14">
    <div class="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
      <div class="custom-h1">{{ props?.movie?.name }}</div>
      <NuxtImg
        src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/three_thousand_years_of_longing_240x360_crop_center.progressive.jpg?v=1656957331"
        :alt="props?.movie?.name"
        loading="lazy"
        class="w-full"
        @error="console.error"
      />
      <MovieCommonDataInBadges
        :rating="props?.movie?.rating"
        :genre="props?.movie?.genre"
        :duration="props?.movie?.duration"
      />
    </div>

    <div class="flex flex-col gap-4 md:col-span-4 lg:col-span-3">
      <div class="custom-h1">Description</div>
      <div class="custom-body">{{ props?.movie?.description }}</div>
      <div class="custom-h1">Trivia</div>
      <div class="ml-5">
        <ul
          v-for="(trivia, index) in props?.movie?.trivia"
          :key="index"
          class="list-disc flex flex-col gap-1 custom-body"
        >
          <li>
            {{ trivia }}
          </li>
        </ul>
      </div>
      <div class="custom-h1">Actors</div>
      <div class="ml-5">
        <ul
          v-for="(actor, key) in props?.movie?.actors"
          :key="key"
          class="list-disc flex flex-col gap-1 custom-body"
        >
          <li>
            <ULink
              raw
              :href="`https://www.imdb.com/name/${actor?.imdb_id}`"
              target="_blank"
              style="text-decoration: underline"
            >
              {{ actor?.name }}
            </ULink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
