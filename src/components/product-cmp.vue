<template>
  <div class="lg:px-[118px] bg-textPrimary">
    <swiper
      :navigation="true"
      :modules="modules"
      :pagination="{
        dynamicBullets: true
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(data, index) in products" :key="index">
        <div class="lg:max-w-6xl mx-10 lg:flex lg:mx-auto lg:items-stretch">
          <img
            :src="data.attachment?.url"
            :alt="data.name"
            class="lg:h-[200px] lg:w-[200px] w-[93px] mx-auto lg:mx-0"
          />
          <div class="h-full mx-6 mt-8 lg:mt-0">
            <h1 class="font-bold text-2xl">{{ data.name }}</h1>
            <p class="line-clamp-2">{{ data.desc }}</p>
            <p class="mt-auto font-bold text-textDenim lg:hidden block">Selengkapnya</p>
          </div>
          <p class="mt-auto font-bold text-textDenim hidden lg:block">Selengkapnya</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import emas from '@/assets/images/product/Gold.png'
import kopi from '@/assets/images/product/Kopi.png'
import olein from '@/assets/images/product/Olein.png'
import kakao from '@/assets/images/product/Kakao.png'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/main.css'
import 'swiper/css/navigation'

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
    return {
      // products: [
      //   {
      //     name: 'Emas',
      //     desc: 'Emas adalah salah satu jenis logam mulia yang paling populer. Karakteristik emas itu mudah ditempa, elastis, warnanya kuning mengkilap, dan emas tidak mudah terkontaminasi zat kimia lain. Oleh sebab itu, emas sering menjadi bahan perhiasan seperti anting, kalung, cincin, gelang, dan perhiasan lainnya...',
      //     image: emas
      //   },
      //   {
      //     name: 'Kopi',
      //     desc: 'Indonesia adalah salah satu produsen dan pengekspor kopi terbesar dunia. Kopi arabika menyumbang 75-80 persen dari produksi kopi di dunia, sedangkan robusta 20 persen. Brazil diketahui menjadi negara terbesar pengekspor kopi arabika, sementara pengekspor robusta berasal dari Vietnam. Indonesia menjadi urutan kedua setelah Brazil.',
      //     image: kopi
      //   },
      //   {
      //     name: 'Olein',
      //     desc: 'Olein adalah minyak goreng yang dibuat dari minyak kelapa sawit/Crude Palm Oil (CPO) setelah melalui proses rafinasi dan fraksinasi. Minyak goreng merupakan salah satu bahan pangan yang memiliki tingkat konsumsi yang tinggi dan sebagian besar olein yang diproduksi di Indonesia digunakan untuk konsumsi dalam negeri. Olein juga diperdagangkan di bursa dan salah satunya adalah Bursa Berjangka Jakarta (BBJ) dengan nama Kontrak Berjangka Olein. Keberadaan kontrak berjangka Olein di bursa bisa dijadikan sarana Lindung Nilai (Hedging) bagi  pelaku pasar fisik untuk melindungi asetnya dari fluktuasi harga pasar ataupun hanya sebagai sarana jual beli untuk meraih peluang keuntungan.',
      //     image: olein
      //   },
      //   {
      //     name: 'Kakao',
      //     desc: 'Kakao Indonesia menjadi salah satu komoditas yang dilirik di pasar perdagangan internasional. Menariknya, bahan baku pembuat coklat asal Indonesia ini bahkan sangat diminati oleh sejumlah negara maju. Badan Pusat Statistik (BPS) mencatat, nilai ekspor kakao dan olahannya dari Indonesia sebesar US$1,21 miliar. Melihat trennya, ekspor kakao bergerak fluktuatif dalam dekade terakhir. Produksi kakao Indonesia sebagian besar diekspor ke mancanegara dan sisanya dipasarkan di dalam negeri. Ekspor kakao Indonesia menjangkau lima benua yaitu Asia, Amerika, Eropa, Afrika, dan Australia dengan pangsa utama di Asia. Kakao juga diperdagangkan di Bursa Berjangka di Indonesia sebagai sarana Lindung Nilai bagi pelaku pasar fisik dan pelaku pasar secara umum yang bisa memanfaatkan fluktuasi harganya untuk mendapatkan capital gain.',
      //     image: kakao
      //   }
      // ]
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
