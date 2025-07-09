<template>
  <div class="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] mx-auto overflow-hidden">
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex-shrink-0 w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] relative"
      >
        <img
          :src="image"
          alt="Carrousel Image"
          class="w-full h-full object-cover object-bottom rounded-xl shadow-md"
        />
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full text-text-main z-10 mx-2 sm:mx-4"
      aria-label="Previous slide"
    >
      ‹
    </button>
    <button
      @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full text-text-main z-10 mx-2 sm:mx-4"
      aria-label="Next slide"
    >
      ›
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  new URL('../assets/CarrouselPortada/Carrousel1/Carrousel1.png', import.meta.url).href,
  new URL('../assets/CarrouselPortada/Carrousel1/Carrousel2.png', import.meta.url).href,
  new URL('../assets/CarrouselPortada/Carrousel1/Carrousel3.png', import.meta.url).href,
  new URL('../assets/CarrouselPortada/Carrousel1/Carrousel4.png', import.meta.url).href,
  new URL('../assets/CarrouselPortada/Carrousel1/Carrousel5.png', import.meta.url).href,
  new URL('../assets/CarrouselPortada/Carrousel1/Carrousel6.png', import.meta.url).href,
]

const currentIndex = ref(0)

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 5000) // Cambia de imagen cada 5 segundos (ajustable)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
