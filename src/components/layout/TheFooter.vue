<template>
    <footer class="bg-TertiaryD pt-12 pb-4">
        <div class="lg:mx-32 mx-6">
            <div class="grid grid-cols-2">
                <div class="lg:grid lg:grid-cols-6">
                    <img class="col-start-2 col-span-full w-64 h-auto" src="../../assets/imgs/Recurso 18 1.png" alt="">
                </div>
                <div class="lg:grid lg:grid-cols-6">
                    <div class="col-span-5 flex flex-col items-end justify-evenly">
                        <nav class="invisible lg:visible flex flex-row justify-between content-center items-center w-2/3">
                            <RouterLink class="h-fit" to="/">Nosotros</RouterLink>
                            <RouterLink class="h-fit" to="/products">Productos</RouterLink>
                            <RouterLink class="h-fit" to="/projects">Proyectos</RouterLink>
                        </nav>
                        <ul class="flex flex-row mt-4">
                            <li class="ml-2">
                                <a target="_blank" href="https://www.facebook.com/priversapp">
                                    <img class="w-6" src="../../assets/imgs/icon/facebook.png"
                                        alt="social icon, link to our facebook">
                                </a>

                            </li>
                            <li class="ml-2">
                                <a target="_blank" href="#">
                                    <img class="w-6" src="../../assets/imgs/icon/telegram.png"
                                        alt="social icon, link to our telegram">
                                </a>
                            </li>
                            <li class="ml-2">
                                <a target="_blank" href="#">
                                    <img class="w-6" src="../../assets/imgs/icon/twitter.png"
                                        alt="social icon, link to our twitter">
                                </a>
                            </li>
                            <li class="ml-2">
                                <a target="_blank" href="https://www.instagram.com/priver.app/">
                                    <img class="w-6" src="../../assets/imgs/icon/instagram.png"
                                        alt="social icon, link to our instagram">
                                </a>
                            </li>
                            <li class="ml-2">
                                <a href="#">
                                    <img class="w-6" src="../../assets/imgs/icon/whatsapp.png"
                                        alt="social icon, link to our whatsapp">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12">
                <p class="col-start-2 col-span-10 text-xs mt-6 text-center">Lorem ipsum dolor sit amet, consectetur
                    adipiscing
                    elit, sed do eiusmod
                    tempor
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea </p>
            </div>
        </div>

    </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'TheFooter'
}
</script>

<style>
</style>