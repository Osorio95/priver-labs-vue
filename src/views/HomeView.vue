<template>
  <section id="header" class="relative grid grid-cols-2 my-36">
      <div
        class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
      </div>
      <div class="h-full lg:flex lg:flex-col justify-center">
        <h1 class="my-4 w-fit font-semibold lg:text-7xl text-4xl mr-6">
          ¡Transformamos tu marca en un referente digital!
        </h1>
        <p class="my-4 font-normal text-3xl">
          Tenemos a tu disposición el mejor equipo y principales servicios de excelente calidad para que potencies y
          posiciones tu marca.
        </p>
        <a class="lg:my-4 my-8 w-fit lg:px-6 lg:py-4 px-3 py-2 text-center rounded-lg bg-Secondary lg:text-3xl text-xl font-bold"
          href="#contact">Consultanos para
          más</a>
      </div>
      <div class="flex justify-center mt-8 lg:mt-0">
        <img class="lg:h-[618px] lg:w-[773px] h-72 w-auto object-contain" src="../assets/imgs/Hand_4_1.png"
          alt="hand using a smartphone">
      </div>
  </section>

  <section id="services" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden mx-8 lg:mx-0 text-center">
    <div class="lg:col-start-4 lg:col-end-10 text-center">
      <div class="lg:my-6 flex flex-col justify-center">
        <h2 class="font-bold text-5xl mb-4">
          Quienes somos
        </h2>
        <p class="mt-2 text-xl lg:text-3xl">
          Somos un team de talentos multidisciplinarios, con trayectoria y experiencia suficiente para hacerte crecer en
          el entorno digital. Nos especializamos en el desarrollo, diseño y comunicación de marcas con un amplio abanico
          de opciones, diseñados para satisfacer cualquier demanda de nuestros clientes, con el objetivo principal de:
          ADAPTARNOS A LA ERA DIGITAL.
        </p>
      </div>
    </div>
    <div class="lg:col-start-2 lg:col-end-12">
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
        <div class="w-2/5 lg:w-3/4 flex flex-col justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_1.png" alt="a computer with graphs in the screen">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-5xl lg:text-left">
            Desarrollo
          </h4>
          <p class="lg:text-left my-4 text-xl">
            Construimos aplicativos web que se caracterizan por su profundidad, versatilidad y capacidad de adaptación
            visual en cualquier dispositivo. Logrando así, que el usuario pueda tener una experiencia cautivadora y
            satisfactoria en el servicio que proveemos.
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
            Tenemos el equilibrio perfecto entre el marketing tradicional y marketing digital, creando las estrategias
            necesarias para que nuestros clientes siempre estén a la vanguardia
          </p>
        </div>
        <div class="hidden lg:h-[541] w-auto place-self-end lg:flex flex-col items-center justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_2.png" alt="">
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
        <div class="w-2/5 lg:w-3/4 flex flex-col justify-center">
          <img class="object-contain" src="../assets/imgs/Rectangle_3.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-5xl lg:text-left">
            Diseño gráfico
          </h4>
          <p class="lg:text-left my-4 text-xl">
            proyectamos y ejecutamos soluciones visuales alternativas para impactar y cautivar a cada uno de nuestros
            clientes con enfoques nuevos y originales. Tenemos a tu disposición múltiples servicios de diseño, que van
            de la mano con las necesidades de cada cliente, logrando así, que el mundo vea la mejor versión de tu marca
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