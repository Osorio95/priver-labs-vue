<template>

  <NavigationVue />

  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <div
    class="-z-10 absolute top-1/3 right-36 lg:-right-36 w-36 h-36 overflow-hidden lg:w-72 lg:h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>
  <div
    class="-z-10 absolute top-1/2 sm:right-24 right-36 lg:-left-36 w-36 h-36 overflow-hidden lg:w-72 lg:h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>
  <div
    class="-z-10 absolute top-3/4 left-1/3 w-36 h-36 overflow-hidden lg:w-72 lg:h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
  </div>

  <TheFooterVue />

</template>
<script>
import TheFooterVue from './components/layout/TheFooter.vue';
import NavigationVue from './components/layout/Navigation.vue';

export default {
  components: {
    TheFooterVue,
    NavigationVue
  },
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    $route(to, from) {

      let toDepth = null;
      let fromDepth = null;

      switch (to.fullPath) {
        case '/':
          toDepth = 0;
          break;
        case '/products':
          toDepth = 1;
          break;
        case '/projects':
          toDepth = 2;
          break;
        case '/contact':
          toDepth = 3;
          break;
      }
      switch (from.fullPath) {
        case '/':
          fromDepth = 0;
          break;
        case '/products':
          fromDepth = 1;
          break;
        case '/projects':
          fromDepth = 2;
          break;
        case '/contact':
          fromDepth = 3;
          break;
      }
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right';
    },
  }
}

</script>
<style>
/* RIGTH */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s ease-in;
}

.slide-right-enter-to {
  position: absolute;
  right: 0;
}

.slide-right-enter-from {
  position: absolute;
  right: -100%;
}

.slide-right-leave-to {
  position: absolute;
  left: -100%;
}

.slide-right-leave-from {
  position: absolute;
  left: 0;
}

/* LEFT */

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.2s ease-in;
}

.slide-left-enter-to {
  position: absolute;
  left: 0;
}

.slide-left-enter-from {
  position: absolute;
  left: -100%;
}

.slide-left-leave-to {
  position: absolute;
  right: -100%;
}

.slide-left-leave-from {
  position: absolute;
  right: 0;
}
img,
div {
    transition: all .2s ease-in;
}
</style>