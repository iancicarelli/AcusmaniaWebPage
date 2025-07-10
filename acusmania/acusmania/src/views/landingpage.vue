<template>
  <section class="py-2 bg-white">
    <CarrouselPortada />

    <!-- Texto descriptivo -->
    <div class="mt-12 max-w-6xl mx-auto px-6 text-center font-inter">
      <h2 class="text-3xl font-semibold text-text-main mb-6">
        Acusmania Ingeniería Acústica
      </h2>
      <p class="text-base font-medium text-text-main leading-relaxed text-justify">
        Somos una empresa de Ingeniería Acústica que ofrece servicios a todo Chile de mediciones de ruido y su correspondiente evaluación, tanto para el área ambiental como laboral, junto con el desarrollo de ingeniería, fabricación y montaje de soluciones acústicas en el área de control de ruido.
        <br /><br />
        Nuestra empresa nace con el fin cubrir el importante aumento por asesorías en el área de la contaminación acústica, lo anterior principalmente por las modificaciones que se han hecho a las normativas que regulan este tipo de contaminante y que finalmente lleva a las empresas a tomar medidas con respecto a evaluar y mitigar en caso que sea necesario.
        <br /><br />
        Contamos con ingenieros con vasta experiencia en el área de la ingeniería acústica.
      </p>
    </div>
    <h2 class="mt-12 mx-auto px-6 text-center text-3xl font-semibold text-text-main mb-6 font-inter">
    Servicios
    </h2>
    <!-- Cards 2x2 -->
    <div class="mt-16 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <cardInfo
        title="Mediciones de ruido ambiental"
        content="Acusmania ofrece mediciones de ruido ambiental en todo Chile,
         asegurando el cumplimiento de la normativa DS38/11 mediante equipos calibrados y certificados.
          Además, proporciona informes válidos para trámites municipales y fiscalizaciones."
      />
      <cardInfo
        title="Mediciones de ruido laboral"
        content="Acusmania ofrece servicios especializados en medición y evaluación de ruido laboral, incluyendo:
                - Implementación del Programa PREXOR
                - Elaboración de mapas de ruido laboral
                - Propuestas de mitigación para cumplir con la normativa vigente
                "
      />
      <cardInfo
        title="Estudios acústicos"
        content="Acusmania brinda asesoría especializada en evaluación de ruido y vibraciones para Estudios (EIA) y
                 Declaraciones (DIA) de Impacto Ambiental, incluyendo: 
                - Mediciones de línea base
                - Modelaciones acústicas predictivas 
                - Diseño de medidas correctivas para cumplir con la normativa"
      />
      <cardInfo
        title="Control de ruido"
        content="Ofrecemos ingeniería especializada en diseño, fabricación e instalación de sistemas para reducir ruido ambiental y laboral, con:
                -Evaluaciones técnicas y soluciones a medida (fuente, trayectoria o receptor).
                -Silenciadores, barreras acústicas, cabinas insonorizadas y más."
      />
    </div>
    <h2 class="mt-12 mx-auto px-6 text-center text-3xl font-semibold text-text-main mb-6 font-inter">
    Principales clientes
    </h2>
    <carrouselMarcas />

  </section>
</template>

<script setup>
import CarrouselPortada from '../components/carrousel-portada.vue'
import cardInfo from '../components/cardInfo.vue';
import carrouselMarcas from '../components/carrouselMarcas.vue';
</script>
