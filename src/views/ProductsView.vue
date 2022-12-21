<template>
  <main class="relative lg:mx-28 mx-6">

    <section id="products" class="lg:overflow-hidden mx-8 lg:mx-0 text-center mb-36">

      <h2 class="lg:col-span-12 lg:my-24 my-12 font-bold text-5xl text-center">
        Nuestros productos
      </h2>

      <div class="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col my-8">
        <Product 
          bannerImg="products/product_lab.png" 
          bannerAlt="A group of people working on a laptop"
          logoImg="logo/logo-priverlab.svg" 
          logoAlt="Priver Lab logo" 
          text="Solución integral especializada en acelear el crecimiento digital y tecnológico de startups y empresas tradicionales." 
          link=""
          brochure="https://api.priver.app/qr/redirect/brochure" />
        <Product 
          bannerImg="products/product_maps.png" 
          bannerAlt="A smartphone showing a route on the road"
          logoImg="logo/logo-privermaps.svg" 
          logoAlt="Priver Maps logo" 
          text="Solución integral especializada en acelear el crecimiento digital y tecnológico de startups y empresas tradicionales." 
          link="https://maps.priver.app/" />
        <Product 
          bannerImg="products/product_umap.png" 
          bannerAlt="A group of people working on a laptop"
          logoImg="logo/logo-umap.svg" 
          logoAlt="Priver Lab logo" 
          text="Dispositivo GPS diseñado in-house." 
          link="https://maps.priver.app/umap"
          brochure="https://api.priver.app/qr/redirect/umap"
          special="En preventa" />
        <Product 
          bannerImg="products/product_go.png" 
          bannerAlt="A man driving a car"
          logoImg="logo/logo-privergo.svg" 
          logoAlt="Priver Go logo" 
          text="Solución logistica para el servicio de traslado privado y encomiendas, potenciado por las teconolgías de información y geolocalización. " 
          link="" 
          special="Muy pronto"/>
        <Product 
          bannerImg="products/product_eats.png" 
          bannerAlt="A man on a delivery scooter"
          logoImg="logo/logo-privereats.svg" 
          logoAlt="Priver Eats logo" 
          text="Solución para la entrega de comida a domicilio, diseñado en función de agilizar el proceso de despacho de forma rápida y eficaz. " 
          link="" 
          special="Muy pronto"/>
        <Product 
          bannerImg="products/product_pay.png" 
          bannerAlt="A phone with a bank app open paying through NFC"
          logoImg="logo/logo-priverpay.svg" 
          logoAlt="Priver Pay logo" 
          text="La solución de pagos orientada a emprendedores y clientes." 
          link="" 
          special="Muy pronto"/>
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