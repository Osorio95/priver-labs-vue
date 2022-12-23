<template>
    <div class="relative xl:w-[32.88%] md:w[31%] rounded-xl overflow-hidden cursor-pointer aspect-square group"
        @mouseover="hover = true" @mouseleave="hover = false" @click="emitPorfolio">
        <div class="absolute top-0 bg-cBlack w-full h-full opacity-20 group-hover:opacity-70 z-10"></div>
        <img class="object-cover h-full w-full group-hover:scale-125" :src="item.images[0]" alt="">
        <div class="absolute bottom-0 p-6 w-full z-20">
            <h6 class="text-left text-base font-bold w-2/3 group-hover:text-lg">
                {{ $t(item.tags) }}
            </h6>
            <h2
                class="text-left md:text-5xl text-3xl group-hover:text-5xl group-hover:text-Secondary group-hover:font-bold">
                {{ $t(item.title) }}
            </h2>
            <p class="text-left text-base overflow-hidden max-h-12 text-clip">
                {{ $t(item.description) }}
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