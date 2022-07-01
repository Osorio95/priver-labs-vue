<template>

  <section id="header" class="relative grid grid-cols-2 mt-12">
    <div
      class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
    </div>
    <div class="h-full lg:flex lg:flex-col justify-center">
      <h1 class="my-4 w-fit font-semibold lg:text-7xl text-4xl mr-6">
        Lorem ipsum dolor sit amet consectetur
      </h1>
    </div>
    <div class="flex justify-center mt-8 lg:mt-0">
      <img class="lg:h-[618px] lg:w-[773px] h-72 w-auto object-contain" src="../assets/imgs/briefcase 1.svg"
        alt="hand using a smartphone">
    </div>
  </section>

  <section id="projects" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden lg:mx-0 text-center">
    <div class="lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-4 lg:my-12">
      <div class="lg:col-start-4 lg:col-end-10 text-center">
        <div class="lg:my-6 flex flex-col justify-center">
          <h2 class="font-bold text-5xl mb-4">
            Proyectos
          </h2>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-around h-auto lg:flex-row lg:flex-wrap col-span-12">
      <Portfolio v-for="(item, index) in projects" :key="index" :item="item" @click="showModal = true" />
    </div>

  </section>

  <section id="clients" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden lg:mx-0 text-center my-36">

    <div class="lg:col-span-12 my-24">
      <h2 class="font-bold text-5xl mb-4">
        Clientes
      </h2>
    </div>

    <div class="lg:col-span-12 flex flex-row justify-around">
      <Client v-for="(client, index) in clients" :key="index" :client="client" />
    </div>

  </section>

  <Transition name="slide-up" mode="out-in">
    <ProjectModal v-show="showModal" @close-modal="showModal = false" />
  </Transition>

</template>
<script>
import projects from '../database/portfolio.json'
import clients from '../database/clients.json'

import Portfolio from '../components/Portfolio.vue';
import Client from '../components/Client.vue';
import ProjectModal from '../components/ProjectModal.vue';

export default {
  data() {
    return {
      projects,
      clients,
      showModal: false
    };
  },
  components: {
    Portfolio,
    Client,
    ProjectModal
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>