<script setup>
</script>

<template>
    <section class="relative lg:flex lg:flex-col lg:justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div
          class="z-0 absolute top-12 -left-2 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
        </div>
        <div class="z-10 lg:col-span-6 h-full lg:flex lg:flex-col justify-center">
          <h1 class="my-4 w-fit font-semibold text-5xl">Transforma tu marca en un referente
            digital
          </h1>
          <p class="my-4 lg:w-2/3 text-sm">Centralizamos los mejores servicios
            digitales para lograr
            posicionar tu marca</p>
          <a class="my-4 w-fit px-3 py-2 text-center rounded-md bg-Secondary text-lg" href="#">Consultanos para
            más</a>
        </div>
        <div class="lg:col-span-6 flex justify-center">
          <img class="h-fit" src="../assets/imgs/Hand_4_1.png" alt="hand using a smartphone">
        </div>
      </div>
    </section>

    <section class="lg:grid lg:grid-cols-12 gap-4 lg:overflow-hidden">
      <div class="lg:col-start-4 lg:col-end-10 text-center">
        <div class="h-72 flex flex-col justify-center">
          <h2 class="text-3xl font-semibold lg:text-5xl">
            Quienes somos
          </h2>
          <p class="mt-2 text-sm">
            Somos un equipo con perfiles multidisciplinario de mucha trayectoria, dedicados al desarrollo, diseño y
            comunicación de marcas con un amplio catálogo de servicios centrados en resolver cualquier necesidad que
            pueda demandar y trabajo en equipo y bajo una misma metodología: adaptarte a la era digital.
          </p>
        </div>
      </div>
      <div class="lg:col-start-2 lg:col-end-11">
        <div class="grid grid-cols-2 justify-items-stretch my-16">
          <div class="lg:w-64 lg:h-64 flex flex-col justify-center">
            <img src="../assets/imgs/Rectangle_1.png" alt="">
          </div>
          <div class="flex flex-col justify-center">
            <h4 class="text-4xl text-left">
              Desarrollo
            </h4>
            <p class="text-left my-4">
              Construimos aplicaciones web que se caracterizan por su profundidad, versatilidad y facilidad para ser
              visualizadas en cualquier dispositivo. Manteniendo como objetivo al usuario y la experiencia cautivante
              que deseamos proveer.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 justify-items-stretch my-16">
          <div class="flex flex-col justify-center">
            <h4 class="text-4xl text-left">
              Marketing
            </h4>
            <p class="text-left my-4">
              Cumplimos los objetivos de nuestros clientes en idea de negocios a partir de estratégias creativas para
              el público objetivo ofreciendo un visión holística necesaria basado en el marketing digital.
            </p>
          </div>
          <div class="lg:w-64 lg:h-64 place-self-end flex flex-col justify-center">
            <img src="../assets/imgs/Rectangle_2.png" alt="">
          </div>
        </div>
        <div class="grid grid-cols-2 justify-items-stretch my-16">
          <div class="lg:w-64 lg:h-64 flex flex-col justify-center">
            <img src="../assets/imgs/Rectangle_3.png" alt="">
          </div>
          <div class="flex flex-col justify-center">
            <h4 class="text-4xl text-left">
              Diseño gráfico
            </h4>
            <p class="text-left my-4">
              Proyectamos soluciones alternativas para impactar a tus clientes con un enfoque nuevo y original.
              Disponemos de múltiples servicios de diseño relacionados a tus necesidades y logramos que el mundo vea
              la mejor versión de tu marca.
            </p>
          </div>
        </div>
      </div>

    </section>

    <section class="lg:grid lg:grid-cols-12 lg:gap-4 mb-24">
      <div class="lg:col-start-1 lg:col-span-6 lg:grid lg:grid-cols-6 lg:gap-4">
        <h6 class="lg:col-start-1 lg:col-span-full text-lg">
          ¿Quieres conocer más?
        </h6>
        <h2 class="lg:col-start-1 lg:col-span-full text-4xl font-semibold">
          Contáctanos
        </h2>
        <p class="lg:col-start-2 lg:col-span-full">
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

      <div class="lg:col-start-7 lg:col-span-6 grid lg:mt-auto mt-6">
        <input class="px-2 py-1 text-DarkA my-2 rounded-md" placeholder="Nombre" type="text" name="" id="">
        <input class="px-2 py-1 text-DarkA my-2 rounded-md" placeholder="E-mail" type="email" name="" id="">
        <input class="px-2 py-1 text-DarkA my-2 rounded-md" placeholder="Móvil" type="tel" name="" id="">
        <input class="px-2 py-1 text-DarkA my-2 rounded-md" placeholder="Organización" type="text" name="" id="">
        <textarea class="px-2 py-1 text-DarkA my-2 rounded-md" placeholder="Descripción del proyecto" type="text"
          rows="4" name="" id=""></textarea>
      </div>
      <div class="col-start-7">
        <button type="submit" class="w-fit px-5 py-1 text-center rounded-md bg-Secondary text-lg">
          Envíar
        </button>
      </div>
    </section>
</template>