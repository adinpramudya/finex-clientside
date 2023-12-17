<template>
  <div class="">
    <div class="px-4 pt-4 pb-6 lg:px-28">
      <div class="grid grid-cols-12 lg:gap-10 gap-0">
        <div
          v-for="(data, index) in news"
          :key="index"
          class="col-span-12 mb-10 lg:mb-0 lg:gap-4 lg:col-span-4"
        >
          <img :src="data.attachment?.url" :alt="data.title" />
          <h1 class="text-base font-bold mt-3">{{ data.title }}</h1>
          <p class="text-sm font-semibold mt-3">{{ formatDate(data.createdAt) }}</p>
          <p class="text-sm text-justify mt-3 line-clamp-3">
            {{ data.content }}
          </p>

          <button class="text-textDenim mt-3" @click="toDetailNews(data.id)">
            Lihat Selengkapnya ...
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import footerVue from './footer.vue'
import navbar from './navbar.vue'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import router from '../router'

export default {
  props: {
    news: {
      type: Array,
      default: []
    }
  },

  setup() {
    const formatDate = (date) => {
      return dayjs(date)
        .locale('id') // Set the locale to Indonesian
        .format('DD MMMM YYYY; HH.mm [WIB]')
    }
    const toDetailNews = (id) => {
      router.push({ name: 'detail-news', params: { id: id } })
    }
    return { formatDate, toDetailNews }
  }
}
</script>
