<template>
  <section class="w-full">
    <!-- Imagen principal -->
    <div class="w-full h-[300px]">
      <img
        src="../assets/quienesSomos.png"
        alt="Imagen Quienes Somos"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <!-- Rectángulo con texto -->
    <div class="bg-hover w-full py-6 flex justify-center items-center">
      <h2 class="text-3xl font-semibold text-text-dark">Nosotros</h2>
    </div>
  </section>
  <div class="mt-12 max-w-6xl mx-auto px-6 text-center font-inter">
      <h2 class="text-3xl font-semibold text-text-main mb-6">
        Acusmania - Ingeniería Acústica
      </h2>
      <p class="text-base font-medium text-text-main leading-relaxed text-justify">
        Somos una empresa de Ingeniería Acústica que ofrece servicios a todo Chile de mediciones de ruido y su correspondiente evaluación, tanto para el área ambiental como laboral, junto con el desarrollo de ingeniería, fabricación y montaje de soluciones acústicas en el área de control de ruido.
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-card-bg rounded-xl shadow-md">
        <div class="bg-hover px-6 py-4 rounded-t-xl">
          <h3 class="text-2xl font-semibold text-text-dark">Visión</h3>
        </div>
        <div class="px-6 py-4">
          <p class="text-text-dark text-base leading-relaxed">
            Ser una empresa líder en la demanda de servicios de ingeniería acústica en nuestro país, implementando un mejoramiento continuo de nuestro servicio en todos los aspectos que ello involucra.
          </p>
        </div>
      </div>

      <div class="bg-card-bg rounded-xl shadow-md">
        <div class="bg-hover px-6 py-4 rounded-t-xl">
          <h3 class="text-2xl font-semibold text-text-dark">Misión</h3>
        </div>
        <div class="px-6 py-4">
          <p class="text-text-dark text-base leading-relaxed">
            Entregar a cada uno de nuestros clientes un servicio de calidad desde el primer momento, hasta la entrega conforme de los proyectos realizados. Cada proyecto es abordado de una forma integral, enfocando todos los esfuerzos en resolver cada requerimiento de parte de nuestros clientes.
          </p>
        </div>
      </div>
    </div>
</template>

<script setup>
// no se necesita lógica aquí aún
</script>
