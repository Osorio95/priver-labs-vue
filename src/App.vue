<template>

  <header class="grid grid-cols-12 gap-4 m-auto my-6 mx-32">
    <div class="w-fit col-start-1 col-end-1">
      <img src="./assets/imgs/Recurso 17 1.png" alt="">
    </div>
    <nav class="col-start-2 col-end-12 flex flex-row justify-evenly content-center items-center w-2/3 m-auto">
      <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/">Nosotros</RouterLink>
      <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/products">Productos</RouterLink>
      <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/projects">Proyectos</RouterLink>
    </nav>
  </header>

  <main class="relative mx-32">
    <RouterView />
  </main>

  <div
    class="z-0 absolute top-1/3 -right-36 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>
  <div
    class="z-0 absolute top-1/2 -left-36 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>
  <div
    class="z-0 absolute top-3/4 left-1/3 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>

  <TheFooterVue />

</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import TheFooterVue from './components/icons/layout/TheFooter.vue';

export default {
  components: {
    TheFooterVue
  }
}

</script>