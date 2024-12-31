<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-dvh">
    <HeaderSection />
    <div class="grow my-5 mx-7">
      <slot />
    </div>
    <FooterSection />
  </div>
</template>
