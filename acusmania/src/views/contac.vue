<template>
    <div class="bg-hover w-full py-6 flex justify-center items-center">
            <h2 class="text-3xl font-semibold text-text-dark">Contacto</h2>
        </div>
  <section class="w-full bg-card-bg py-12 px-6 md:px-20">
    
    <!-- Título y descripción -->
    <div class="text-center mb-10">
      <p class="text-lg text-text-dark">
       Contáctenos y responderemos lo antes posible su requerimiento
      </p>
    </div>

    <!-- Lista vertical con íconos y texto al lado -->
    <div class="flex flex-col space-y-8 max-w-xl mx-auto">
      <!-- Item 1 -->
      <div class="flex items-center space-x-4">
        <img
          src="../assets/iconos/mail.svg"
          alt="Correo"
          class="w-10 h-10"
        />
        <p class="text-text-dark text-base break-words">
          contacto@acusmania.cl
        </p>
      </div>

      <!-- Item 2 -->
      <div class="flex items-center space-x-4">
        <img
          src="../assets/iconos/telefono.svg"
          alt="Teléfono"
          class="w-10 h-10"
        />
        <p class="text-text-dark text-base text-left">
          Fono: +56 225708710 - Celular: 987899921
        </p>
      </div>

      <!-- Item 3 -->
      <div class="flex items-center space-x-4">
        <img
          src="../assets/iconos/wsp.svg"
          alt="WhatsApp"
          class="w-10 h-10"
        />
        <p class="text-text-dark text-base">
          +56 9 8789 9921
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// sin lógica
</script>
