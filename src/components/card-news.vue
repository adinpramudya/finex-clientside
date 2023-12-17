<template>
  <div class="">
    <div class="px-4 pt-4 pb-6 lg:px-28">
      <div class="grid grid-cols-12 lg:gap-10 gap-0">
        <div
          v-for="(data, index) in news"
          :key="index"
          class="col-span-12 mb-10 lg:mb-0 lg:gap-4 lg:col-span-4"
        >
          <img :src="data.images" :alt="data.title" />
          <h1 class="text-base font-bold mt-3">{{ data.title }}</h1>
          <p class="text-sm font-semibold mt-3">{{ data.date }}</p>
          <p class="text-sm text-justify mt-3">
            {{ data.desc }}
          </p>

          <button class="text-textDenim mt-3">Lihat Selengkapnya ...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerVue from './footer.vue'
import navbar from './navbar.vue'
export default {
  props: {
    news: {
      type: Array,
      default: []
    }
  }
}
</script>
