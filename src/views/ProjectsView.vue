<template>
  <main class="relative lg:mx-28 mx-6">

    <!-- <section id="header" class="relative lg:grid lg:grid-cols-2 2xl:my-36 my-14">
    <div
      class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
    </div>
    <div class="h-full lg:flex lg:flex-col justify-center">
      <h1 class="my-4 w-fit font-semibold 2xl:text-7xl text-5xl mr-6">
        Lorem ipsum dolor sit amet consectetur
      </h1>
    </div>
    <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <img class="2xl:h-[618px] 2xl:w-[773px] h-96 w-auto object-contain self-center" src="../assets/imgs/briefcase 1.svg"
        alt="3d render of a briefcase">
    </div>
  </section> -->

    <section id="projects" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden mx-8 lg:mx-0 text-center mb-36">

      <h2 class="lg:col-span-12 lg:my-24 my-12 font-bold text-5xl text-center">
        Proyectos
      </h2>

      <div class="flex flex-col justify-around h-auto lg:flex-row lg:flex-wrap col-span-12">
        <Portfolio v-for="(item, index) in projects" :key="index" :item="item" @click="showModal = true"
          @emitPorfolio="createModal" />
      </div>

    </section>

    <section id="clients" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden lg:mx-0 text-center my-36">

      <div class="lg:col-span-12 my-24">
        <h2 class="font-bold text-5xl mb-4">
          Clientes
        </h2>
      </div>

      <div class="lg:col-span-12 flex md:flex-row md:flex-wrap flex-col justify-around items-center">
        <Client v-for="(client, index) in clients" :key="index" :client="client" />
      </div>

    </section>

    <Transition name="slide-up" mode="out-in">
      <ProjectModal v-if="showModal" @close-modal="showModal = false" :item="portfolioModal" />
    </Transition>
  </main>
</template>
<script>

import dataProjects from '../database/portfolio.json';
import dataClients from '../database/clients.json';

import Portfolio from '../components/Portfolio.vue';
import Client from '../components/Client.vue';
import ProjectModal from '../components/Modal.vue';

export default {
  data() {
    return {
      projects: dataProjects,
      clients: dataClients,
      portfolioModal: null,
      showModal: false
    };
  },
  components: {
    Portfolio,
    Client,
    ProjectModal
  },
  methods: {
    createModal(event) {
      this.portfolioModal = event
    }
  }
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