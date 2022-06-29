<template>
  <section id="contact" class="lg:grid lg:grid-cols-12 lg:gap-4 mx-8 lg:mx-0 my-36">
    <ContactVue />
  </section>
</template>

<script>
import ContactVue from '../components/Contact.vue'

export default {
  components: {
    ContactVue
  }
}
</script>