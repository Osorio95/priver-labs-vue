<template>
    <div class="fixed -top-20 -bottom-20 left-0 right-0 flex justify-center z-40 bg-TertiaryB bg-opacity-40"
        @click="$emit('close-modal')">
        <div class="bg-Primary rounded-2xl flex xl:flex-row flex-col xl:gap-12 gap-6 lg:p-10 p-6 h-fit mx-auto lg:w-2/3 w-3/4 2xl:mt-60 md:mt-48 mt-24 z-50"
            @click.stop>
            <div class="rounded-2xl xl:w-full w-full mx-auto h-full overflow-hidden">
                <vueper-slides :slide-ratio="1 / 1">
                    <vueper-slide v-for="(slide, i) in item.images" :key="i" :image="slide" />
                </vueper-slides>
            </div>
            <div class="w-full flex flex-col gap-2 justify-center">
                <h6 class="text-left text-base font-bold">
                    {{ item.tags }}
                </h6>
                <h2 class="text-left lg:text-5xl text-2xl font-bold">
                    {{ item.title }}
                </h2>
                <p class="text-left text-base">
                    {{ item.description }}
                </p>
                <div class="absolute bottom-0 flex md:justify-end justify-center w-full my-4" v-if="hasLink">
                    <a class="self-center w-fit lg:px-6 lg:py-2 py-4 px-6 h-fit text-center rounded-lg bg-White text-Secondary lg:text-3xl text-xl font-bold"
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