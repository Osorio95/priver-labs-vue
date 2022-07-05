<template>
    <div class="fixed -top-20 -bottom-20 left-0 right-0 flex justify-center z-40 bg-Primary bg-opacity-80"
        @click="$emit('close-modal')">
        <div class="bg-TertiaryC rounded-2xl lg:p-10 p-6 h-fit mx-auto lg:w-1/2 w-11/12 2xl:mt-64 md:mt-36 mt-48 z-50" @click.stop>
            <div class="rounded-2xl overflow-hidden">
                <vueper-slides :slide-ratio="2 / 4" :arrows="false">
                    <vueper-slide v-for="(slide, i) in item.images" :key="i" :image="slide" />
                </vueper-slides>
            </div>
            <div class="w-full mt-6 flex md:flex-row flex-col">
                <div class="w-full">
                    <h6 class="text-left text-base font-bold">
                        {{ item.tags }}
                    </h6>
                    <h2 class="text-left lg:text-5xl text-4xl font-bold mb-4">
                        {{ item.title }}
                    </h2>
                    <p class="text-left text-base">
                        {{ item.description }}
                    </p>
                </div>
                <div class="md:w-1/3 flex md:justify-end justify-center w-full my-4" v-if="hasLink">
                    <a class="self-center w-fit lg:px-6 lg:py-4 py-4 px-6 h-fit text-center rounded-lg bg-White text-Secondary lg:text-3xl text-xl font-bold"
                        :href="item.link" target="_blank">
                        Ir a web
                    </a>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    props: {
        item: Object,
    },
    components: {
        VueperSlides,
        VueperSlide
    },
    data: () => ({
        pauseOnHover: true,
        autoPlaying: false,
        internalAutoPlaying: true,
        hasLink: true
    }),
    created() {
        if (this.item.link == '') {
            this.hasLink = false;
        }
    }
}
</script>

<style>
.vueperslides__arrow {
    color: #3c2975
}
</style>