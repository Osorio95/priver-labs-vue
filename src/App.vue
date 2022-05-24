<template>

  <NavigationVue />

  <main class="relative lg:mx-32 mx-6">
    <RouterView />
  </main>

  <div
    class="-z-10 absolute top-1/3 right-36 lg:-right-36 w-36 h-36 overflow-hidden lg:w-72 lg:h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>
  <div
    class="-z-10 absolute top-1/2 right-36 lg:-left-36 w-36 h-36 overflow-hidden lg:w-72 lg:h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>
  <div
    class="-z-10 absolute top-3/4 left-1/3 w-36 h-36 overflow-hidden lg:w-72 lg:h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>

  <TheFooterVue />

</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import TheFooterVue from './components/layout/TheFooter.vue';
import NavigationVue from './components/layout/Navigation.vue';

export default {
  components: {
    TheFooterVue,
    NavigationVue
  }
}

</script>