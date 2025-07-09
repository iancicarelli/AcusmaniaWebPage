<template>
  <div class="relative w-full max-w-9xl mx-auto overflow-hidden py-4">
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2"
      >
        <img
          :src="image"
          alt="Marca"
          class="w-full h-[120px] object-contain rounded-md bg-white shadow-sm"
        />
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const totalVisible = 5 // cuántas se muestran por slide
const currentIndex = ref(0)

const images = []
for (let i = 1; i <= 17; i++) {
  images.push(new URL(`../assets/marcas/marca${i}.png`, import.meta.url).href)
}

// Número de slides totales según cuántas imágenes se muestran a la vez
const totalSlides = computed(() => Math.ceil(images.length / totalVisible))

const slideWidth = 100 / totalSlides.value

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
}

let intervalId = null

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
