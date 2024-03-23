<template>
  <navbar />
  <banner />
  <achievement />
  <productCmp />
  <recommendation />
  <whyChooseUs />
  <bank />
  <regulasi />
  <footerVue />

  <fwb-modal persistent size="lg" v-if="isShowModal" class="!bg-black" @close="closeModal">
    <template #body>
      <img
        src="https://res.cloudinary.com/dycicfqk1/image/upload/v1711121001/Attachments/qsnus5o9toli7dpoicbb.jpg"
        alt="modal"
      />
      <a href="https://finex.co.id/" target="_blank" @click="closeModal">
        <button
          class="p-2 rounded-tl-3xl bg-[#fff] absolute right-0 bottom-0 lg:text-sm text-xs font-bold"
        >
          Lanjut ke website FINEX
        </button>
      </a>
      <!-- <div class="w-[944px] lg:h-[445px] md:h-[445px] h-[90px]"></div> -->
    </template>
  </fwb-modal>
</template>
<style>
.bg-white {
  background-color: #212b31;
  background-image: url('../assets/images/modal.png');
}
button {
  position: relative;
  z-index: 10;
}
</style>
<script setup>
import achievement from '@/components/achievement.vue'
import bank from '@/components/bank.vue'
import banner from '@/components/banner.vue'
import footerVue from '@/components/footer.vue'
import navbar from '@/components/navbar.vue'
import productCmp from '@/components/product-cmp.vue'
import recommendation from '@/components/recommendation.vue'
import regulasi from '@/components/regulasi.vue'
import whyChooseUs from '@/components/why-choose-us.vue'
import { FwbButton, FwbModal } from 'flowbite-vue'

import { computed, onMounted, ref } from 'vue'
import { useDataStore } from '../stores/data'
const dataStore = useDataStore()

const isShowModal = ref(false)

function closeModal() {
  isShowModal.value = false
  sessionStorage.setItem('isShowModal', true)
}

onMounted(() => {
  let session = sessionStorage.getItem('isShowModal')
  console.log('sess', session)
  if (session == null) {
    isShowModal.value = true
    sessionStorage.setItem('isShowModal', false)
  }

  if (session == 'false') {
    isShowModal.value = true
  }
})
</script>
