<template>
  <main class="relative lg:mx-28 mx-6">

    <section id="contact" class="lg:grid lg:grid-cols-12 lg:gap-4 mx-8 lg:mx-0 my-36">
      <ContactVue contactText="contactText2" :variant="false"/>
    </section>

  </main>
</template>

<script>
import ContactVue from '../components/Contact.vue'

export default {
  components: {
    ContactVue
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