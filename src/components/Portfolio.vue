<template>
    <div class="relative xl:w-[32%] rounded-xl overflow-hidden cursor-pointer aspect-square" @mouseover="hover = true"
        @mouseleave="hover = false" @click="emitPorfolio">
        <div class="absolute top-0 bg-cBlack w-full h-full opacity-40 z-10" :class="{ 'opacity-70': hover }"></div>
        <img class="object-cover h-full" :src="item.images[0]" :class="{ 'scale-125': hover }" alt="">
        <div class="absolute bottom-0 p-6 w-full z-20">
            <h6 class="text-left text-base font-bold w-2/3" :class="{ 'text-lg': hover }">{{ item.tags }}</h6>
            <h2 class="text-left md:text-5xl text-3xl" :class="{ 'text-6xl text-Secondary font-bold': hover }">{{ item.title }}</h2>
            <p class="text-left text-base overflow-hidden max-h-12 text-clip">
                {{ item.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        emitPorfolio() {
            this.$emit('emitPorfolio', this.item)
        }
    }
}
</script>

<style>
h2,
h6,
img,
div {
    transition: all .2s ease;
}
</style>