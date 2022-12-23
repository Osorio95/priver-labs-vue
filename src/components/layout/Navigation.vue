<template>
    <header class="pt-4 lg:mx-32 mx-6 bg-Primary">
        <nav class="text-2xl grid grid-cols-12 justify-items-stretch z-50">
            <div class="col-start-1 col-span-2">
                <img class="h-auto w-32" src="/logo/logo-priverlab.svg" alt="">
            </div>
            <transition>
                <ul id="main-navbar"
                    class="xl:col-start-4 xl:col-span-6 col-start-3 col-span-8 flex flex-row gap-12 justify-evenly items-center"
                    v-show="!mobile">
                    <li v-for="(el, index) in urls" :key="index">
                        <RouterLink class="h-fit hover:text-Secondary transition-colors ease-in-out" :to="el.path">
                            {{ $t(el.name) }}
                        </RouterLink>
                    </li>
                </ul>
            </transition>
            <div class="col-start-12 relative flex flex-row justify-evenly items-center">
                <img src="/icon/menu-4-64.png" @click="toggleMobileNav" v-show="mobile"
                    class="cursor-pointer bars sm:w-10 sm:h-10" :class="{ 'icon-active': mobileNav }" />
                <transition name="mobile-nav">
                    <ul class="absolute top-16 text-md right-0 z-40 bg-DarkB flex flex-col justify-evenly py-1 px-8"
                        v-show="mobileNav">
                        <li v-for="(el, index) in urls" :key="index" class="my-4">
                            <RouterLink class="h-fit hover:text-TertiaryA transition-colors ease-in-out"
                                @click="toggleMobileNav" :to="el.path">
                                {{ $t(el.name) }}
                            </RouterLink>
                        </li>
                    </ul>
                </transition>
            </div>
        </nav>
    </header>

</template>

<script>
import router from '../../router/index'
import { RouterLink } from 'vue-router'

export default {
    name: 'navigation',
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
            urls: router.getRoutes().slice(0, 4)
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        checkScreen() {
            this.windowWidth = innerWidth;
            if (this.windowWidth <= 1026) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    }

}
</script>

<style>
#main-navbar .router-link-active {
    padding-bottom: 8px;
    border-bottom: 4px solid #9747ff;
    transition: all .5s ease;
}

.icon-active {
    transform: rotate(180deg);
    transition: 0.5s ease all;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateY(-350px);
}

.mobile-nav-enter-to {
    transform: translateY(0);
}
</style>