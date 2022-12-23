<template lang="">
    <div class="lg:grid lg:grid-cols-2 lg:gap-4 justify-items-stretch flex flex-col items-center my-16">
        <div class="xl:w-[480px] w-48 my-6 h-auto lg:col-span-1 flex flex-col justify-center" :class="imgClass">
            <img 
            class="object-contain" 
            :src="imgUrl" 
            :alt="imgAlt">
        </div>
        <div class="flex flex-col justify-center lg:col-span-1" :class="textClass">
            <h4 class="text-5xl lg:text-left">
                {{ $t(title) }}
            </h4>
            <p class="lg:text-left my-6">
                {{ $t(mainText) }}
            </p>
            <ul class=" columns-2">
                <li v-for="(item, index) in itemList" :key="index" class=" list-disc text-left ml-4">
                {{ $t(item) }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        order: String,
        imgUrl: String,
        imgAlt: String,
        title: String,
        mainText: String,
        itemList: Array,
    },
    computed: {
        imgClass() {
            if(window.innerWidth < 800) {
                return 'order-1'
            }
            return this.order === 'left' ? 'order-2' : 'order-1'
        },
        textClass() {
            if(window.innerWidth < 800) {
                return 'order-2'
            }
            return this.order === 'left' ? 'order-1' : 'order-2'
        }
    }
}
</script>