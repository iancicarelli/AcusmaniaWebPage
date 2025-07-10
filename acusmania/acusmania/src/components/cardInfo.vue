<!-- src/components/CardInfo.vue -->
<template>
  <div class="rounded-xl overflow-hidden shadow-md">
    <!-- Header -->
    <div class="bg-hover px-6 py-4">
      <h3 class="text-xl font-semibold text-text-dark">{{ title }}</h3>
    </div>

    <!-- Cuerpo -->
    <div class="bg-card-bg px-6 py-4">
      <p class="text-text-dark text-base leading-relaxed ">
        {{ content }} 
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
})
</script>
