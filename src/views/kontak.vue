<template>
  <div class="bg-textPrimary">
    <navbar />
    <div class="px-8 lg:px-28 mb-6">
      <img src="../assets/images/news.png" alt="maps" class="lg:w-full" />
      <h1 class="text-sm text-woodsmkoke my-4 lg:text-base">
        Kami percaya dari kekuatan komunikasi sederhana
      </h1>
      <div class="lg:flex">
        <div class="bg-sunglow p-[26px] rounded-2xl w-full lg:w-2/3">
          <h1 class="font-bold mb-8 text-center text-woodsmkoke">Kirimkan pesan kepada kami</h1>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Nama </label>
            <input
              class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="nama"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
            <input
              class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="pesan"> Pesan </label>
            <textarea
              rows="5"
              class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            class="bg-woodsmkoke text-white w-full py-3 rounded-2xl transition-all ease-in-out duration-500"
          >
            KIRIM PESAN
          </button>
        </div>
        <div class="mt-7 w-full lg:w-1/3 lg:ml-7">
          <div class="grid grid-cols-12 mt-6 items-center">
            <img
              src="../assets/images/icons/location.png"
              class="col-span-2 w-[25px]"
              alt="location"
            />
            <p class="text-sm col-span-10">
              SoHo Pancoran Tower Splendor Lt. 30 Unit 3005 Jl. Letjen. MT. Haryono Kav. 2-3 Tebet
              Jakarta Selatan 12810
            </p>
          </div>
          <div class="grid grid-cols-12 mt-6">
            <img
              src="../assets/images/icons/telephone.png"
              class="col-span-2 w-[25px]"
              alt="telephone"
            />
            <p class="text-sm col-span-10">+62 21 5010 1569</p>
          </div>
          <div class="grid grid-cols-12 mt-6">
            <img
              src="../assets/images/icons/faksimili.png"
              class="col-span-2 w-[25px]"
              alt="faksimili"
            />
            <p class="text-sm col-span-10">+62 21 5010 1569</p>
          </div>
          <div class="grid grid-cols-12 mt-6">
            <img
              src="../assets/images/icons/whatsapp.png"
              class="col-span-2 w-[25px]"
              alt="whatsapp"
            />
            <p class="text-sm col-span-10">+62 811 8105 688 (Chat)</p>
          </div>
          <div class="grid grid-cols-12 mt-6">
            <img
              src="../assets/images/icons/email.png"
              class="col-span-2 w-[25px]"
              alt="whatsapp"
            />
            <p class="text-sm col-span-10">customer@finex.co.id</p>
          </div>
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script>
import icons from '@/components/icons.vue'
import footerVue from '@/components/footer.vue'
import navbar from '@/components/navbar.vue'
import { useAuthStore } from '@/stores/authStore'

export default {
  components: {
    icons,
    footerVue,
    navbar
  }
}
</script>
