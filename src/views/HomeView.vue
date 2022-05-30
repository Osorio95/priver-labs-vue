<template>
  <section id="header" class="relative lg:flex lg:flex-col lg:justify-center">
    <div class="flex flex-col lg:grid lg:grid-cols-12 gap-4 xl:mt-6 xl:mb-16">
      <div
        class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
      </div>
      <div class="lg:col-span-6 h-full lg:flex lg:flex-col justify-center">
        <h1 class="my-4 w-fit font-semibold lg:text-5xl text-4xl mr-6">Transforma tu marca en un referente
          digital
        </h1>
        <p class="my-4 font-normal text-2xl">
          Centralizamos los mejores servicios digitales para lograr posicionar tu marca
        </p>
        <a class="lg:my-4 my-8 w-fit lg:px-8 lg:py-2 px-3 py-2 text-center rounded-lg bg-Secondary lg:text-3xl text-xl font-bold"
          href="#contact">Consultanos para
          más</a>
      </div>
      <div class="lg:col-span-6 flex justify-center mt-8 lg:mt-0">
        <img class="lg:h-[618px] lg:w-[773px] h-72 w-auto object-contain" src="../assets/imgs/Hand_4_1.png"
          alt="hand using a smartphone">
      </div>
    </div>
  </section>

  <section id="services" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden mx-8 lg:mx-0 text-center">
    <div class="lg:col-start-2 lg:col-end-12 text-center">
      <div class="lg:my-6 flex flex-col justify-center">
        <h2 class="font-bold text-5xl mb-4">
          Quienes somos
        </h2>
        <p class="mt-2 text-xl lg:text-3xl">
          Somos un equipo con perfiles multidisciplinario de mucha trayectoria, dedicados al desarrollo, diseño y
          comunicación de marcas con un amplio catálogo de servicios centrados en resolver cualquier necesidad que
          pueda demandar y trabajo en equipo y bajo una misma metodología: adaptarte a la era digital.
        </p>
      </div>
    </div>
    <div class="lg:col-start-2 lg:col-end-12">
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
        <div class="w-2/5 lg:w-full flex flex-col justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_1.png" alt="a computer with graphs in the screen">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-5xl lg:text-left">
            Desarrollo
          </h4>
          <p class="lg:text-left my-4 text-xl">
            Construimos aplicaciones web que se caracterizan por su profundidad, versatilidad y facilidad para ser
            visualizadas en cualquier dispositivo. Manteniendo como objetivo al usuario y la experiencia cautivante
            que deseamos proveer.
          </p>
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
        <div class="lg:hidden w-2/5 flex flex-col justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_2.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-5xl lg:text-left">
            Marketing
          </h4>
          <p class="lg:text-left my-4 text-xl">
            Cumplimos los objetivos de nuestros clientes en idea de negocios a partir de estratégias creativas para
            el público objetivo ofreciendo un visión holística necesaria basado en el marketing digital.
          </p>
        </div>
        <div class="hidden lg:h-[541] w-auto place-self-end lg:flex flex-col items-center justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_2.png" alt="">
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
        <div class="w-2/5 lg:w-full flex flex-col justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_3.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-5xl lg:text-left">
            Diseño gráfico
          </h4>
          <p class="lg:text-left my-4 text-xl">
            Proyectamos soluciones alternativas para impactar a tus clientes con un enfoque nuevo y original.
            Disponemos de múltiples servicios de diseño relacionados a tus necesidades y logramos que el mundo vea
            la mejor versión de tu marca.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="lg:grid lg:grid-cols-12 lg:gap-4 mb-24 mx-8 lg:mx-0">
    <ContactVue />
  </section>
</template>

<script>
import ContactVue from '../components/Contact.vue'
export default {
  name: 'homeview',
  components: {
    ContactVue
  }
}
</script>