<template>
  <div class="bg-textPrimary">
    <Navbar />
    <ProductWeb :dataProduct="product" class="hidden lg:block" />
    <ProductMobile class="block lg:hidden" :dataProduct="product" />
    <FooterVue />
  </div>
</template>
<script>
import FooterVue from '@/components/footer.vue'
import Navbar from '@/components/navbar.vue'
import ProductMobile from '@/components/product-mobile.vue'
import ProductWeb from '@/components/product-web.vue'
import router from '../router/index'
import { useDataStore } from '../stores/data'
import { computed, onMounted, ref } from 'vue'
export default {
  components: {
    Navbar,
    FooterVue,
    ProductWeb,
    ProductMobile
  },
  data: () => ({}),

  // updated(){
  //   this.product = products.find((e) => e.name.toLowerCase() == this.$route.params.name)
  // },
  mounted() {
    // this.dataStore.retrieveAllProduct(this.$route.params.id)

    this.product = this.dataStore.products.find((e) => e.id == this.$route.params.id)
    console.log('product', this.product)
  },
  computed: {
    product() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: for smooth scrolling
      })
      return this.dataStore.products.find((e) => e.id == this.$route.params.id)
      // console.log('prams', this.$route.params.id)
    }
  },

  setup() {
    const dataStore = useDataStore()

    // const product = ref()

    // const product = computed(() => {
    //   return dataStore.products
    // })

    return { dataStore }
  }
}
</script>
