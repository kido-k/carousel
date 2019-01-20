<template>
  <section class="container">
    <div class="header">
      <Header/>
    </div>
    <div class="carousel">
      <no-ssr>
        <Carousel/>
      </no-ssr>
    </div>
    <div class="main">
      <Main/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </section>
</template>

<script>
import Header from '~/components/atoms/header.vue'
import Carousel from '~/components/atoms/carousel.vue'
import Main from '~/components/atoms/main.vue'
import Footer from '~/components/atoms/Footer.vue'

export default {
  components: {
    Header,
    Carousel,
    Main,
    Footer
  }
}
</script>

<style>
.conteiner {
  width: 100%;
  overflow: hidden;
}
.header {
  margin: 5px 0 5px 0;
}
.carousel {
  margin: 5px 0 5px 0;
}
.main {
  margin: 5px 0 5px 0;
}
.footer {
  margin: 5px 0 5px 0;
}
</style>
