<template>
  <div class="lg:px-40 bg-textPrimary">
    <swiper
      :navigation="true"
      :modules="modules"
      :pagination="{
        dynamicBullets: true
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(data, index) in products" :key="index">
        <div class="lg:max-w-6xl mx-10 lg:flex lg:mx-auto lg:items-stretch pb-10">
          <img
            :src="data.attachment?.url"
            :alt="data.name"
            class="lg:h-[200px] lg:w-[200px] w-[93px] mx-auto lg:mx-0"
          />
          <div class="h-full mx-6 mt-8 lg:mt-0">
            <h1 class="font-bold text-2xl">{{ data.name }}</h1>
            <p class="line-clamp-2">{{ data.desc }}</p>
          </div>
          <p
            class="mt-auto font-bold text-textDenim pl-6 lg:block lg:pl-0 cursor-pointer"
            @click="toProduct(data.id)"
          >
            Selengkapnya
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/main.css'
import 'swiper/css/navigation'
import router from '../router'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import { useDataStore } from '../stores/data'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    products() {
      return this.dataStore.products
    }
  },
  data() {
    return {}
  },
  methods: {
    toProduct(id) {
      router.push({ name: 'product', params: { id: id } })
    }
  },
  setup() {
    const dataStore = useDataStore()
    return {
      dataStore,
      modules: [Navigation, Pagination]
    }
  }
}
</script>
