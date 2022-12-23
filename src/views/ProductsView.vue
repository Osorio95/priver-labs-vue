<template>
  <main class="relative lg:mx-28 mx-6">
    <section id="products" class="lg:overflow-hidden mx-8 lg:mx-0 text-center mb-36">
      <h2 class="lg:col-span-12 lg:my-24 my-12 font-bold text-5xl text-center">
        {{$t('productsTitle')}}
      </h2>
      <div class="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col my-8">
        <Product 
          bannerImg="productsImg/product_lab.png" 
          bannerAlt="A group of people working on a laptop"
          logoImg="logo/logo-priverlab.svg" 
          logoAlt="Priver Lab logo" 
          :text="$t('productsLabText')"
          link=""
          brochure="https://api.priver.app/qr/redirect/brochure" />
        <Product 
          bannerImg="productsImg/product_maps.png" 
          bannerAlt="A smartphone showing a route on the road"
          logoImg="logo/logo-privermaps.svg" 
          logoAlt="Priver Maps logo" 
          :text="$t('productsMapsText')" 
          link="https://maps.priver.app/" />
        <Product 
          bannerImg="productsImg/product_umap.png" 
          bannerAlt="A tablet showing a map and a location"
          logoImg="logo/logo-umap.svg" 
          logoAlt="uMap logo"
          by="logo/logo-privermaps.svg"
          :text="$t('productsUmapText')" 
          link="https://maps.priver.app/umap"
          brochure="https://api.priver.app/qr/redirect/umap"
          special="En preventa" />
      </div>
    </section>
  </main>
</template>

<script>
import Product from '../components/Product.vue';
import Hero from '../components/layout/Hero.vue';

export default {
  components: [
    Product,
    Hero
  ],
  components: { Product, Hero }
}
</script>

<style>

</style>