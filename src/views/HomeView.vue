<template>
  <main class="relative lg:mx-28 mx-6">

    <section id="header" class="relative lg:grid lg:grid-cols-2 2xl:my-36 my-14">
      <div
        class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
      </div>
      <div class="h-full lg:flex lg:flex-col justify-center">
        <h1 class="my-4 w-fit font-semibold 2xl:text-7xl text-5xl mr-6">
          ¡Transformamos tu marca en un referente digital!
        </h1>
        <p class="my-8 lg:my-4 font-normal 2xl:text-3xl text-2xl">
          Tenemos a tu disposición el mejor equipo y principales servicios de excelente calidad para que potencies y
          posiciones tu marca.
        </p>
        <a class="lg:my-4 w-fit lg:px-6 lg:py-4 px-3 py-2 text-center rounded-lg bg-Secondary lg:text-3xl text-xl font-bold"
          href="#contact">Consultanos para
          más</a>
      </div>
      <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img class="2xl:h-[618px] 2xl:w-[773px] h-96 w-auto object-contain self-center"
          src="../assets/imgs/box-plot-hand1.svg" alt="hand using a smartphone">
      </div>
    </section>

    <section id="services" class="lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-hidden mx-8 lg:mx-0 text-center">
      <div class="md:col-start-2 md:col-end-12 text-center">
        <div class="lg:my-6 flex flex-col justify-center">
          <h2 class="font-bold text-5xl mb-4">
            Quienes somos
          </h2>
          <p class="mt-2 text-xl lg:text-2xl">
            Somos un team de talentos multidisciplinarios, con trayectoria y experiencia suficiente para hacerte crecer
            en
            el entorno digital. Nos especializamos en el desarrollo, diseño y comunicación de marcas con un amplio
            abanico
            de opciones, diseñados para satisfacer cualquier demanda de nuestros clientes, con el objetivo principal de <span class=" font-bold">adaptarte a la era digital</span>.
          </p>
        </div>
      </div>
      <div class="lg:col-start-2 lg:col-end-12">
        <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
          <div class="w-[330px] h-auto flex flex-col justify-center">
            <img class="object-contain" src="../assets/imgs/au-1.svg" alt="a computer with graphs in the screen">
          </div>
          <div class="flex flex-col justify-center">
            <h4 class="text-5xl lg:text-left">
              Desarrollo
            </h4>
            <p class="lg:text-left my-4 text-xl">
              Construimos software especializado que se caracteriza por su adaptabilidad a cualquier dispositivo y
              requerimiento de trabajo. Centrando el desarrollo hacia la simplicidad y una rica experiencia de usuario.
            </p>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
          <div class="lg:hidden w-[330px] h-auto flex flex-col justify-center">
            <img class="object-contain" src="../assets/imgs/au-2.svg" alt="">
          </div>
          <div class="flex flex-col justify-center">
            <h4 class="text-5xl lg:text-left">
              Marketing
            </h4>
            <p class="lg:text-left my-4 text-xl">
              Tenemos el equilibrio perfecto entre el marketing tradicional y marketing digital, creando las estrategias
              necesarias para que nuestros clientes siempre estén a la vanguardia.
            </p>
          </div>
          <div class="hidden w-[330px] h-auto place-self-end lg:flex flex-col items-center justify-center">
            <img class="object-contain" src="../assets/imgs/au-2.svg" alt="">
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
          <div class="w-[330px] h-auto flex flex-col justify-center">
            <img class="object-contain" src="../assets/imgs/au-3.svg" alt="">
          </div>
          <div class="flex flex-col justify-center">
            <h4 class="text-5xl lg:text-left">
              Diseño gráfico
            </h4>
            <p class="lg:text-left my-4 text-xl">
              Proyectamos y ejecutamos soluciones visuales alternativas para innovar junto a nuestros
              clientes con enfoques originales. Tenemos a tu disposición múltiples servicios de diseño, que van
              de la mano con las necesidades de tu empresa.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="lg:grid lg:grid-cols-12 lg:gap-4 mb-24 mx-8 lg:mx-0 pt-12">
      <ContactVue />
    </section>
  </main>
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