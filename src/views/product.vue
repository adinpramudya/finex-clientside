<template>
  <div>
    <Navbar />
    <ProductWeb :dataProduct="product" class="hidden lg:block" />
    <ProductMobile class="block lg:hidden" />
    <FooterVue />
  </div>
</template>
<script>
import products from '../assets/data/product.json'
import FooterVue from '@/components/footer.vue'
import Navbar from '@/components/navbar.vue'
import ProductMobile from '@/components/product-mobile.vue'
import ProductWeb from '@/components/product-web.vue'
import router from '../router/index'
export default {
  components: {
    Navbar,
    FooterVue,
    ProductWeb,
    ProductMobile
  },
  data: () => ({
    product: {}
  }),

  updated(){
    this.product = products.find((e) => e.name.toLowerCase() == this.$route.params.name)
  },
  mounted() {
    this.product = products.find((e) => e.name.toLowerCase() == this.$route.params.name)
  }


}
</script>
