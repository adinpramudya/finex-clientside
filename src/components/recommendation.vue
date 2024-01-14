<template>
  <div class="px-8 lg:px-40 pt-20 pb-10 lg:flex lg:justify-between lg:items-center bg-textPrimary">
    <div class="flex-col mb-[50px] lg:mb-0 lg:w-1/2 w-full">
      <div class="lg:w-[454px] w-full lg:mr-auto">
        <h1 class="font-bold text-base">Aplikasi JAFeTS NOW</h1>
        <div class="mt-10"></div>
        <div class="my-5 flex items-center">
          <div class="mr-10">
            <img src="../assets/images/cheklist.png" class="w-20 lg:w-[55px]" alt="checklist" />
          </div>
          <p class="text-sm font-medium">
            Aplikasi canggih yang menyediakan informasi grafik pergerakan harga, market depth,
            posisi keuangan nasabah, dan lain-lain.
          </p>
        </div>
        <div class="my-5 flex items-center">
          <div class="mr-10">
            <img src="../assets/images/cheklist.png" class="w-24 lg:w-[64px]" alt="checklist" />
          </div>
          <p class="text-sm font-medium">
            Aplikasi resmi yang disediakan oleh Jakarta Futures Exchange (JFX).Dapat digunakan
            melalui browser ataupun diunduh dari Play Store/App Store.
          </p>
        </div>
        <a href="https://jafetsnow.jfx.co.id/#/login" target="_blank">
          <button class="btn-primary w-full py-2 mt-5 hover:btn-hover">Klik Disini</button>
        </a>
      </div>
    </div>
    <div class="lg:w-1/2">
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dycicfqk1/image/upload/v1703348433/Attachments/u2ej63cq5ldmxzmsssee.png"
        alt="jafets"
        class="ml-auto lg:w-[531px]"
      />
    </div>
  </div>
</template>

<script>
import icons from './icons.vue'
export default {
  components: {
    icons
  },
  data() {
    return {
      recommendations: [
        {
          id: 1,
          desc: ''
        },
        {
          id: 2,
          desc: ''
        }
      ]
    }
  }
}
</script>
