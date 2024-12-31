<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-dvh">
    <HeaderSection />
    <div class="grow main-padding">
      <slot />
    </div>
    <FooterSection />
  </div>
</template>
