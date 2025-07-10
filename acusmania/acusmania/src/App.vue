<template>
  <div class="min-h-screen flex flex-col">
    <navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <footerComponent />
    </div>
</template>

<script setup>
import navbar from './components/navbar.vue';
import footerComponent from './components/footer-component.vue';
</script>

