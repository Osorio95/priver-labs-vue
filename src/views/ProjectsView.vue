<template>
  <main class="relative lg:mx-28 mx-6">
    <section id="projects" class="lg:grid lg:grid-cols-12 flex flex-col justify-center lg:gap-4 lg:overflow-hidden mx-8 lg:mx-0 text-center mb-36">
      <h2 class="lg:col-span-12 lg:mt-24 lg:mb-6 my-12 font-bold text-5xl text-center">
        Proyectos
      </h2>
      <div class="flex flex-col xl:gap-2 md:gap-4 gap-6 h-auto md:flex-row xl:justify-start justify-center md:flex-wrap col-span-12">
        <Project 
          v-for="(item, index) in projects" 
          :key="index" 
          :item="item" 
          @click="showModal = true"
          @emitPorfolio="createModal" />
      </div>
    </section>
    <Transition name="slide-up" mode="out-in">
      <ProjectModal v-if="showModal" @close-modal="showModal = false" :item="portfolioModal" />
    </Transition>
  </main>
</template>
<script>
import dataProjects from '../database/portfolio.json';

import Project from '../components/Project.vue';
import ProjectModal from '../components/Modal.vue';

export default {
  data() {
    return {
      projects: dataProjects,
      portfolioModal: null,
      showModal: false,
    };
  },
  components: {
    Project,
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