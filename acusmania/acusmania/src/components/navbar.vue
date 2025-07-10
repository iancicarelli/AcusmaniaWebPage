<template>
  <nav class="bg-navbar font-inter">
    <div class="relative flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-0 max-w-7xl mx-auto w-full">
      <!-- Logo -->
      <div class="flex items-center">
        <RouterLink to="/">
          <img
            src="../assets/Logo2.svg"
            alt="Logo Acusmania"
            class="h-[60px] w-auto md:h-[80px] object-contain"
            aria-label="Ir a la página de inicio"
          />
        </RouterLink>
      </div>

      <!-- Botón móvil -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-text-main text-3xl focus:outline-none">
          ☰
        </button>
      </div>

      <!-- Menú -->
      <div
        :class="isOpen ? 'flex' : 'hidden'"
        class="absolute top-full left-0 w-full bg-navbar flex-col items-center py-4
               md:relative md:flex md:flex-row md:w-auto md:bg-transparent md:py-0
               z-20 shadow-lg md:shadow-none"
      >
        <ul
          class="flex flex-col md:flex-row justify-center items-center w-full md:w-auto
                 space-y-4 md:space-y-0 md:space-x-8 text-text-main text-lg md:text-xl font-semibold mb-6 md:mb-0"
        >
          <li><RouterLink @click="isOpen = false" to="/" class="hover:text-hover transition-colors duration-200 py-2 block">Inicio</RouterLink></li>
          <li><RouterLink @click="isOpen = false" to="/Nosotros" class="hover:text-hover transition-colors duration-200 py-2 block">Quienes Somos</RouterLink></li>
          <li><RouterLink @click="isOpen = false" to="/Servicios" class="hover:text-hover transition-colors duration-200 py-2 block">Servicios</RouterLink></li>
          <li><RouterLink @click="isOpen = false" to="/Contactanos" class="hover:text-hover transition-colors duration-200 py-2 block">Contacto</RouterLink></li>
        </ul>

        <!-- Contacto -->
        <div class="text-text-main text-sm text-center md:text-right leading-6 mt-6 md:mt-0 md:ml-10">
          <p>Email: <a href="mailto:contacto@acusmania.cl" class="hover:text-hover">contacto@acusmania.cl</a></p>
          <p>Celular:<a href="tel:987899921" class="hover:text-hover">987899921</a></p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
