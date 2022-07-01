<template>

    <a class="h-24 mx-4" :href="client.link" @mouseover="hover = true" @mouseleave="hover = false" target="_blank">
        <img :src="client.image" :alt="client.name + ' logo'" :class="{ 'scale-110': hover }">
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