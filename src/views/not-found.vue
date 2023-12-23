<template>
  <div class="bg-textPrimary lg:px-52 w-fit lg:w-full py-20 lg:flex lg:justify-between h-screen">
    <img
      src="https://res.cloudinary.com/dycicfqk1/image/upload/v1703350512/Attachments/uaupuw395o93amfvigqh.png"
      alt="404"
      class="lg:w-[600px] mb-4 lg:mb-0"
    />
    <div class="lg: w-[400px]">
      <div class="py-6 px-14 rounded-xl mx-4" style="background-color: rgba(255, 201, 60, 0.5)">
        <p class="text-md">HALAMAN TIDAK DITEMUKAN</p>
      </div>
      <p class="font-bold text-[48px] px-4 mt-10 lg:mt-0">Oh tidak! Error 404</p>
      <p class="font-medium text-lg px-4">
        Mungkin halaman dalam keadaan diperbaiki, kami tidak dapat menemukan apa yang anda cari.
      </p>
      <div
        @click="toHome"
        class="py-3 px-5 w-64 ml-auto mt-10 rounded-xl cursor-pointer bg-woodsmkoke"
      >
        <p class="text-md text-white">KEMBALI BERANDA</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '../router'

const toHome = () => {
  router.push('/')
}
</script>
