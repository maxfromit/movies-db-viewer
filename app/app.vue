<script setup lang="ts"></script>

<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
