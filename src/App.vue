<template>
  <header class="relative container h-fit m-auto mt-2 py-6">

    <div class="w-fit absolute hidden">
      <h2 class="text-lg">Priver</h2>
      <h4 class="text-sm text-right mt-0">Labs</h4>
    </div>

    <nav class="flex flex-row justify-evenly content-center items-center w-2/3 m-auto">
      <RouterLink class="h-fit" to="/">Nosotros</RouterLink>
      <RouterLink class="h-fit" to="/products">Productos</RouterLink>
      <RouterLink class="h-fit" to="/projects">Proyectos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>