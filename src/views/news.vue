<template>
  <div class="bg-textPrimary">
    <navbar />
    <cardNews :news="displayedItems"></cardNews>
    <fwb-pagination
      class="flex justify-center py-8"
      :total-pages="totalPages"
      v-model="currentPage"
      @change="handlePageChange"
      show-icons
    >
    </fwb-pagination>
    <footerVue />
  </div>
</template>
<script setup>
import footerVue from '../components/footer.vue'
import navbar from '../components/navbar.vue'
import cardNews from '@/components/card-news.vue'
import { FwbPagination } from 'flowbite-vue'
import { ref, computed } from 'vue'

const currentPage = ref(1)

const nextPage = (page) => {
  console.log('dadada', page)
}
const setPage = (page) => {
  console.log('dadada', page)
}
const itemsPerPage = ref(5)

const totalPages = computed(() => {
  return Math.ceil(datas.length / itemsPerPage.value)
})

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return datas.slice(startIndex, endIndex)
})

const handlePageChange = (newPage) => {
  currentPage.value = newPage
}

const datas = [
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 1',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 2',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 3',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 4',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 5',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 6',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 7',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau - 8',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  },
  {
    images: '../src/assets/images/news.png',
    title: 'Beragamnya Sentimen, Emas Galau',
    date: '13 Juli 2020; 08.00 WIB',
    desc: 'Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada'
  }
]
</script>
