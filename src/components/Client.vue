<template>

    <a :href="client.link" @mouseover="hover = true" @mouseleave="hover = false" target="_blank">
        <img class="h-24 w-auto p-4" :src="client.image" :alt="client.name + ' logo'" :class="{ 'scale-110 brightness-125': hover }">
    </a>

</template>

<script>
export default {
    props: {
        client: Object
    },
    data() {
        return {
            hover: false,
        };
    }
}
</script>

<style>
</style>