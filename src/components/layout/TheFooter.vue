<template>
    <footer class="bg-TertiaryD pt-24 pb-4">
        <div class="lg:mx-32 mx-6">
            <div class="lg:grid lg:grid-cols-2 flex flex-col">
                <div class="lg:grid lg:grid-cols-6 flex items-center justify-center">
                    <img class="lg:col-start-2 lg:col-span-full h-2/3 w-auto" src="../../assets/imgs/logo-priver.svg"
                        alt="">
                </div>
                <div class="lg:grid lg:grid-cols-6">
                    <div class="lg:col-span-5 flex flex-col lg:items-end lg:justify-evenly justify-center">
                        <nav
                            class="hidden lg:flex text-2xl flex-row justify-between content-center items-center w-full">
                            <ul class="flex flex-row justify-between items-center w-full">
                                <li>
                                    <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/">
                                        Nosotros
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/">
                                        Productos
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/">
                                        Proyectos
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" to="/">
                                        Contacto
                                    </RouterLink>
                                </li>
                            </ul>
                        </nav>
                        <ul class="flex flex-row mt-8 justify-around">
                            <li class="ml-8">
                                <a target="_blank" href="https://www.facebook.com/priversapp">
                                    <img class="w-10" src="../../assets/imgs/icon/facebook.png"
                                        alt="social icon, link to our facebook">
                                </a>
                            </li>
                            <li class="ml-8">
                                <a target="_blank" href="https://www.instagram.com/priver.app/">
                                    <img class="w-10" src="../../assets/imgs/icon/instagram.png"
                                        alt="social icon, link to our instagram">
                                </a>
                            </li>
                            <li class="ml-8">
                                <a href="https://api.whatsapp.com/send?phone=584126479641">
                                    <img class="w-10" src="../../assets/imgs/icon/whatsapp.png"
                                        alt="social icon, link to our whatsapp">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 mt-16">
                <p class="col-start-2 col-span-10 text-base mt-6 text-center">Copyright &copy; {{ copyrightYear }} Grupo
                    Priver, C.A.
                    Todos los derechos reservados.</p>
            </div>
        </div>

    </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'TheFooter',
    computed: {
        copyrightYear: () => {
            return (new Date(Date.now())).getFullYear()
        }
    },
}
</script>

<style>
</style>