<template lang="">
    <section id="header" class="relative lg:grid lg:grid-cols-2 2xl:my-36 xl:my-40 my-14">
        <div class="-z-10 absolute top-96 left-12 w-72 h-72 bg-TertiaryB rounded-full filter blur-3xl opacity-30 animate-blob">
        </div>
            <div class="h-full lg:flex lg:flex-col justify-center">
                <h1 class="my-4 w-fit font-semibold 2xl:text-7xl text-4xl mr-6">
                    {{title}}
                </h1>
                <p class="my-8 lg:my-4 font-normal 2xl:text-3xl text-2xl">
                    {{subTitle}}
                </p>
                <a class="lg:my-4 w-fit lg:px-6 lg:py-4 px-3 py-2 text-center rounded-lg bg-Secondary lg:text-3xl text-xl font-bold"
                    :href="ctaLink">
                    {{cta}}
                </a>
            </div>
            <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img class="2xl:h-[618px] 2xl:w-[773px] h-96 w-auto object-contain self-center" :src="img"
            :alt="imgAlt">
        </div>
    </section>
</template>
<script>
export default {
    props: {
        title: String,
        subTitle: String,
        img: String,
        imgAlt: String,
        cta: String,
        ctaLink: String,
    }
}
</script>
<style lang="">
    
</style>