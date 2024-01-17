<template>
  <div class="px-8 lg:px-40 pt-20 pb-10 lg:flex lg:justify-center lg:items-center bg-textPrimary">
    <div class="flex-col mb-[50px] lg:mb-0 lg:w-1/2 w-full lg:mr-10">
      <div class="w-full lg:mr-auto">
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
          <button
            class="btn-hover w-full rounded-lg md:px-32 lg:px-8 lg:mr-0 mr-4 py-2 mt-5 mx-auto text-center"
          >
            <img src="../assets/images/web.svg" class="mx-auto" alt="web" width="150" />
          </button>
        </a>
        <div class="flex gap-4 justify-between">
          <a
            href="https://play.google.com/store/apps/details?id=com.compass.jfxmobile&hl=en&gl=US"
            target="_blank"
            class="w-full"
          >
            <button
              class="btn-hover w-full rounded-lg md:px-32 lg:px-8 lg:mr-0 mr-4 py-2 mt-5 mx-auto text-center"
            >
              <img
                src="../assets/images/google-play.svg"
                class="mx-auto"
                alt="google-play"
                width="150"
              />
            </button>
          </a>
          <a
            class="w-full"
            href="https://apps.apple.com/id/app/jafets-now/id1634520823"
            target="_blank"
          >
            <button
              class="w-full btn-hover rounded-lg md:px-32 lg:px-8 py-2 mt-5 mx-auto text-center"
            >
              <img
                src="../assets/images/app-store.svg"
                class="mx-auto"
                alt="app-store"
                width="150"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2">
      <img
        loading="lazy"
        src="https://res.cloudinary.com/dycicfqk1/image/upload/v1703348433/Attachments/u2ej63cq5ldmxzmsssee.png"
        alt="jafets"
        class="ml-auto lg:w-full"
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
