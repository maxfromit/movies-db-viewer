<script setup lang="ts">
const props = defineProps<{
  rating: number
  genre: string
  duration: string
}>()

const getColorByNumber = (number: number) => {
  if (number >= 7) {
    return "#039C55"
  }
  if (number >= 4) {
    return "purple"
  } else {
    return "#E81A0C"
  }
}

// const capitalizeFirstLetter = (string: string) => {
//   if (!string) {
//     return ""
//   }
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }
</script>

<template>
  <div class="flex gap-1.5">
    <UBadge
      :label="props?.rating"
      :style="{ 'background-color': getColorByNumber(props?.rating) }"
      icon="i-lucide-star"
      size="xs"
      class="rounded-full"
    />
    <UBadge
      :label="props?.genre"
      style="background-color: #2c81fb"
      icon="i-lucide-film"
      size="xs"
      class="rounded-full capitalize"
    />
    <UBadge
      :label="props?.duration"
      style="background-color: #702bfe"
      icon="i-lucide-clock"
      size="xs"
      class="rounded-full"
    />
  </div>
</template>
