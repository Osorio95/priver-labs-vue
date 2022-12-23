<template lang="">
        <div 
            class="relative flex flex-col items-center text-xl col-span-4 border-2 border-Secondary rounded-lg hover:p-0 p-8 lg:my-0 my-4 overflow-hidden ease-in-out transition-all group h-[540px]">
                <div v-if="special" class="flex absolute group-hover:top-0 -top-10 right-0 left-0 justify-center z-20">
                    <span class="bg-Secondary rounded-b-xl px-2 py-1">
                        {{special}}
                    </span>
                </div>
            <img class="h-48 w-11/12 rounded-lg group-hover:rounded-none object-cover group-hover:w-full group-hover:h-full mx-auto transition-all duration-300" :src="bannerImg" :alt="bannerAlt">
            <div class="w-fit">
                <img class="mx-auto mt-4 w-36 group-hover:absolute group-hover:bottom-20 group-hover:right-6 z-10" :src="logoImg" :alt="logoAlt">
                <div v-if="by.length > 0" class="flex gap-2 w-fit group-hover:hidden">
                    <span class="text-sm">by</span>
                    <img class="w-16" :src="by" alt="logo">
                </div>
            </div>
            <p class="group-hover:hidden inline-block my-4">
                {{text}}
            </p>
            <div class="absolute bottom-6 right-6 flex gap-2 w-fit group-hover:justify-end transition-all z-10">
                <a v-if="brochure.length" :href="brochure" target="_blank" class="px-3 py-2 text-center rounded-lg bg-TertiaryA hover:bg-TertiaryB transition-all">
                    Brochure
                </a>
                <a v-if="link.length" :href="link" target="_blank" class="px-3 py-2 text-center rounded-lg bg-Secondary hover:bg-TertiaryC transition-all">
                    Ver más
                </a>
            </div>
            <div class="absolute bottom-0 h-0 bg-DarkA opacity-70 w-full group-hover:h-full ease-in">

            </div>
        </div>
</template>
<script>
export default {
    props: {
        bannerImg: String,
        bannerAlt: String,
        logoImg: String,
        by: {type: String, default: ''},
        logoAlt: String,
        text: String,
        link: { type: String, default: '' },
        brochure: { type: String, default: '' },
        special: { type: String, default: null },
    }
}
</script>