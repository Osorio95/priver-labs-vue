<template>
  <main class="relative">
    <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <img class="absolute lg:w-1/2 opacity-0 lg:opacity-100 right-0 -top-10 pointer-events-none" src="/main/home-1.png"
        alt="blob">
    </div>
    <div class="lg:mx-28 mx-6">
      <section id="header" class="lg:grid lg:grid-cols-2 2xl:my-36 xl:my-60 my-24">
        <div
          class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
        </div>
        <div class="h-full lg:flex lg:flex-col justify-center">
          <h1 class="my-4 w-fit font-semibold 2xl:text-7xl text-4xl mr-6">
            {{ $t('mainHeroTitle') }}
          </h1>
          <p class="my-8 lg:my-4 font-normal 2xl:text-3xl text-2xl">
            {{ $t('mainHeroSubTitle') }}
          </p>
          <a class="lg:my-4 w-fit lg:px-6 lg:py-4 px-3 py-2 text-center rounded-lg bg-Secondary lg:text-3xl text-xl font-bold"
            href="#contact">
            {{ $t('mainHeroCTA') }}
          </a>
        </div>
      </section>
      <section id="services" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden mx-8 lg:mx-0 text-center">
        <div class="md:col-start-2 md:col-end-12 text-center">
          <div class="lg:my-6 flex flex-col justify-center">
            <h2 class="font-bold text-5xl mb-4">
              {{ $t('mainIntroTitle') }}
            </h2>
            <p class="mt-2 text-xl lg:text-2xl">
              {{ $t('mainIntroText') }}
            </p>
          </div>
        </div>
        <div class="lg:col-start-2 lg:col-end-12">
          <AreasVue order="right" imgUrl="/main/home-2.png" imgAlt="blob" title="mainDevelopmentTitle"
            mainText="mainDevelopmentText" :itemList="developmentArr" />
          <AreasVue order="left" imgUrl="/main/home-3.png" imgAlt="blob" title="mainGraphicDesTitle"
            mainText="mainGraphicDesText" :itemList="graphicDesignArr" />
        </div>
      </section>
      <section id="contact" class="lg:grid lg:grid-cols-12 lg:gap-4 mb-24 mx-8 lg:mx-0 pt-12">
        <ContactVue contactText="contactText" :variant="true" />
      </section>
    </div>
  </main>
</template>

<script>
import ContactVue from '../components/Contact.vue'
import AreasVue from '../components/Areas.vue';

export default {
  name: 'homeview',
  data() {
    return {
      developmentArr: [
        'mainDevelopmentItem1',
        'mainDevelopmentItem2',
        'mainDevelopmentItem3',
        'mainDevelopmentItem4',
        'mainDevelopmentItem5',
        'mainDevelopmentItem6',
      ],
      graphicDesignArr: [
        'mainGraphicDesignItem1',
        'mainGraphicDesignItem2',
        'mainGraphicDesignItem3',
        'mainGraphicDesignItem4',
        'mainGraphicDesignItem5',
        'mainGraphicDesignItem6',
      ]
    }
  },
  components: {
    ContactVue,
    AreasVue
  }
}
</script>