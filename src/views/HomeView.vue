<script setup>
</script>

<template>
  <section id="header" class="relative lg:flex lg:flex-col lg:justify-center -z-30">
    <div class="flex flex-col lg:grid lg:grid-cols-12 gap-4 my-24">
      <div
        class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
      </div>
      <div class="lg:col-span-6 h-full lg:flex lg:flex-col justify-center">
        <h1 class="my-4 w-fit font-semibold lg:text-7xl text-4xl mr-6">Transforma tu marca en un referente
          digital
        </h1>
        <p class="my-4 lg:w-2/3 font-normal text-3xl">Centralizamos los mejores servicios
          digitales para lograr
          posicionar tu marca</p>
        <a class="my-4 w-fit lg:px-8 lg:py-4 px-3 py-2 text-center rounded-md bg-Secondary lg:text-3xl text-lg font-bold"
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
    <div class="lg:col-start-4 lg:col-end-10 text-center">
      <div class="lg:my-6 flex flex-col justify-center">
        <h2 class="font-bold text-6xl mb-4">
          Quienes somos
        </h2>
        <p class="mt-2 text-xl lg:text-3xl">
          Somos un equipo con perfiles multidisciplinario de mucha trayectoria, dedicados al desarrollo, diseño y
          comunicación de marcas con un amplio catálogo de servicios centrados en resolver cualquier necesidad que
          pueda demandar y trabajo en equipo y bajo una misma metodología: adaptarte a la era digital.
        </p>
      </div>
    </div>
    <div class="lg:col-start-2 lg:col-end-11">
      <div class="lg:grid lg:grid-cols-2 justify-items-stretch my-16">
        <div class="lg:h-[541] w-auto flex flex-col justify-center">
          <img src="../assets/imgs/Rectangle_1.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-6xl lg:text-left">
            Desarrollo
          </h4>
          <p class="lg:text-left my-4 text-xl">
            Construimos aplicaciones web que se caracterizan por su profundidad, versatilidad y facilidad para ser
            visualizadas en cualquier dispositivo. Manteniendo como objetivo al usuario y la experiencia cautivante
            que deseamos proveer.
          </p>
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 justify-items-stretch my-16">
        <div class="lg:hidden lg:h-[541] w-auto place-self-end flex flex-col justify-center">
          <img src="../assets/imgs/Rectangle_2.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-6xl lg:text-left">
            Marketing
          </h4>
          <p class="lg:text-left my-4 text-xl">
            Cumplimos los objetivos de nuestros clientes en idea de negocios a partir de estratégias creativas para
            el público objetivo ofreciendo un visión holística necesaria basado en el marketing digital.
          </p>
        </div>
        <div class="hidden lg:h-[541] w-auto place-self-end lg:flex flex-col justify-center">
          <img src="../assets/imgs/Rectangle_2.png" alt="">
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:justify-items-stretch my-16">
        <div class="lg:h-[541] w-auto flex flex-col justify-center">
          <img src="../assets/imgs/Rectangle_3.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <h4 class="text-6xl lg:text-left">
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
    <div class="lg:col-start-1 lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-4">
      <h6 class="lg:col-start-1 lg:col-span-full text-3xl">
        ¿Quieres conocer más?
      </h6>
      <h2 class="lg:col-start-1 lg:col-span-full text-6xl font-bold my-4">
        Contáctanos
      </h2>
      <p class="lg:col-start-2 lg:col-span-full text-xl my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        <br>
        <br>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        <br>
        <br>
        Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
        <br>
        <br>
        Excepteur sint occaecat cupidatat non proident,
      </p>
    </div>

    <div class="lg:col-start-7 lg:col-span-6 lg:grid flex flex-col lg:mt-auto mt-6 text-2xl">
      <input class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Nombre" type="text" name="" id="">
      <input class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="E-mail" type="email" name="" id="">
      <input class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Móvil" type="tel" name="" id="">
      <input class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Organización" type="text" name="" id="">
      <textarea class="px-4 py-2 text-DarkA my-3 rounded-md" placeholder="Descripción del proyecto" type="text" rows="4"
        name="" id=""></textarea>
      <div class="mt-3">
        <button type="submit" class="lg:w-fit w-full px-6 py-2 text-center rounded-md bg-Secondary text-2xl">
          Envíar
        </button>
      </div>
    </div>
  </section>
</template>