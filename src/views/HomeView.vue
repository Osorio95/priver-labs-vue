<script setup>
</script>

<template>
  <main class="container m-auto">
    <section class="w-full">
      <div class="flex bg-white" style="height:500px;">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h1 class="text-3xl font-semibold text-gray-800 md:text-5xl">Transforma tu marca en un referente digital
            </h1>
            <p class="mt-2 text-sm text-gray-500 md:text-base">Centralizamos los mejores servicios digitales para lograr
              posicionar tu marca</p>
            <div class="flex justify-center lg:justify-start mt-6">
              <a class="px-3 py-2 bg-gray-900 text-gray-200 text-xs rounded bg-Secondary hover:bg-gray-800 md:text-lg"
                href="#">Consultanos para más</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full mb-12">
      <div class="flex flex-col items-center text-center m-auto">
        <div class="flex m-auto">
          <div class="flex flex-col w-1/2 m-auto justify-center" style="height:300px;">
            <h2 class="text-3xl font-semibold md:text-5xl">
              Quienes somos
            </h2>
            <p class="mt-2 text-sm">
              Somos un equipo con perfiles multidisciplinario de mucha trayectoria, dedicados al desarrollo, diseño y
              comunicación de marcas con un amplio catálogo de servicios centrados en resolver cualquier necesidad que
              pueda demandar y trabajo en equipo y bajo una misma metodología: adaptarte a la era digital.
            </p>
          </div>
        </div>
        <div class="mx-24">
          <div class="grid grid-cols-2 justify-items-stretch my-8">
            <div class="w-64 h-64 bg-GreyD"></div>
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
          <div class="grid grid-cols-2 justify-items-stretch my-8">
            <div class="flex flex-col justify-center">
              <h4 class="text-4xl text-left">
                Marketing
              </h4>
              <p class="text-left my-4">
                Cumplimos los objetivos de nuestros clientes en idea de negocios a partir de estratégias creativas para
                el público objetivo ofreciendo un visión holística necesaria basado en el marketing digital.
              </p>
            </div>
            <div class="w-64 h-64 bg-GreyD place-self-end"></div>
          </div>
          <div class="grid grid-cols-2 justify-items-stretch my-8">
            <div class="w-64 h-64 bg-GreyD"></div>
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
      </div>
    </section>

    <section>
      <div class="grid grid-cols-2">
        <div>
          <h6 class="text-lg">
            ¿Quieres conocer más?
          </h6>
          <h2 class="text-4xl font-semibold my-4">
            Contáctanos
          </h2>
          <p class="mx-16 my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.

            Ut enim ad minim veniam, quis nostrud exercitation ullamco

            Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.

            Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>

        <div class="flex flex-col">
          <input class="px-2 py-1 text-DarkA m-2 rounded-md" placeholder="Nombre" type="text" name="" id="">
          <input class="px-2 py-1 text-DarkA m-2 rounded-md" placeholder="E-mail" type="email" name="" id="">
          <input class="px-2 py-1 text-DarkA m-2 rounded-md" placeholder="Móvil" type="tel" name="" id="">
          <input class="px-2 py-1 text-DarkA m-2 rounded-md" placeholder="Organización" type="text" name="" id="">
          <textarea class="px-2 py-1 text-DarkA m-2 rounded-md" placeholder="Descripción del proyecto" type="text"
            rows="6" name="" id=""></textarea>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-TertiaryC py-6 px-12 mt-12">
    <div class="grid grid-cols-2">
      <div>
        <div class="w-64 h-24 bg-GreyD"></div>
      </div>
      <div class="flex flex-col justify-center">
        <nav class="flex flex-row justify-evenly content-center items-center w-2/3 m-auto">
          <RouterLink class="h-fit" to="/">Nosotros</RouterLink>
          <RouterLink class="h-fit" to="/products">Productos</RouterLink>
          <RouterLink class="h-fit" to="/projects">Proyectos</RouterLink>
        </nav>
      </div>
    </div>
    <p class="text-sm mt-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
  </footer>
</template>