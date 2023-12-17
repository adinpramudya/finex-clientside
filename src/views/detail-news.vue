<template>
  <navbar />
  <div class="bg-textPrimary px-0 pt-4 pb-6 lg:px-0">
    <div
      class="bg-sunglow pt-12 py-48 px-6 lg:px-28 lg:rounded-tr-full lg:rounded-tl-[1200px] lg:rounded-bl-full lg:rounded-br-[1200px] rounded-tl-3xl rounded-tr-[200px] rounded-br-3xl rounded-bl-[200px]"
    >
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <h1 class="text-3xl font-bold w-80">{{ post.title }}</h1>
        </div>
      </div>
      <div class="grid grid-cols-12 mt-20">
        <div class="col-span-6"></div>
        <div class="col-span-6 ml-auto">
          <h1 class="lg:text-lg font-bold text-xs">
            Ditulis oleh {{ post.author?.name }} - {{ formatDate(post.createdAt) }}
          </h1>
        </div>
      </div>
    </div>

    <img
      class="text-center mx-auto rounded-xl -mt-36 px-4 lg:px-28"
      width="886"
      :src="post.attachment?.url"
      alt="news"
    />

    <div class="px-4 mt-9 lg:px-28">
      <p class="indent-8 text-justify">
        {{ post.content }}
      </p>
    </div>
  </div>
  <footerVue />
</template>

<script>
import footerVue from '../components/footer.vue'
import navbar from '../components/navbar.vue'
import { useDataStore } from '../stores/data'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
export default {
  components: {
    footerVue,
    navbar
  },
  mounted() {
    this.dataStore.retrieveAPosts(this.$route.params.id)
  },
  computed: {
    post() {
      return this.dataStore.posts.find((e) => e.id == this.$route.params.id)
    }
  },
  setup() {
    const dataStore = useDataStore()

    // const post = computed(() => {
    //   return dataStore.posts
    // })
    const formatDate = (date) => {
      return dayjs(date)
        .locale('id') // Set the locale to Indonesian
        .format('DD MMMM YYYY; HH.mm [WIB]')
    }

    return { dataStore, formatDate }
  }
}
</script>
