<template>
    <div class="relative lg:w-[31%] rounded-md overflow-hidden cursor-pointer my-4" @mouseover="hover = true"
        @mouseleave="hover = false">
        <div class="absolute top-0 bg-cBlack w-full h-full opacity-40 z-10" :class="{ 'opacity-60': hover }"></div>
        <img class="w-full h-fit" :src="item.image1" :class="{ 'scale-125': hover }" alt="">
        <div class="absolute bottom-0 p-6 w-full z-20">
            <h6 class="text-left text-base font-bold w-1/2" :class="{ 'text-lg': hover }">{{ item.tags }}</h6>
            <h2 class="text-left text-5xl" :class="{ 'text-6xl text-Secondary font-bold': hover }">{{ item.title }}</h2>
            <p class="text-left text-base">
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