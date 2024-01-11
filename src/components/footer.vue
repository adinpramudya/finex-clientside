<template>
  <div class="bg-woodsmkoke w-full text-white">
    <div class="py-4 border-b-2 border-white">
      <div class="px-4 lg:px-28 flex justify-between">
        <div class="flex flex-col">
          <h1 class="text-base lg:text-2xl font-extrabold mb-1">Hubungi</h1>
          <h1 class="text-base lg:text-2xl font-extrabold flex items-center">
            <img src="../assets/images/ic-whatsapp.svg" class="w-4 lg:w-8" alt="whatsapp" />
            <a
              :href="getWhatsAppLink(contact?.whatsApp)"
              target="_blank"
              class="text-xs lg:text-base"
              >{{ contact?.whatsApp }} (Chat)</a
            >
          </h1>
        </div>
        <div></div>
        <div class="flex flex-col">
          <h1 class="text-base lg:text-2xl font-extrabold mb-1">Ikuti Kami</h1>
          <div class="flex justify-between items-center">
            <a href="https://www.facebook.com/finexbroker" target="_blank">
              <img class="w-4 lg:w-8" src="../assets/images/sosmed/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/finexcommodity/" target="_blank">
              <img class="w-4 lg:w-8" src="../assets/images/sosmed/instagram.png" alt="instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UC-l61LxjsphAAjnoQwGTV6Q" target="_blank">
              <img class="w-4 lg:w-8" src="../assets/images/sosmed/youtube.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 px-4 lg:px-28 lg:flex lg:justify-between">
      <div class="flex justify-between lg:w-1/3 pt-3 lg:pt-0">
        <div>
          <h1 class="font-bold">Produk Kami</h1>
          <p
            class="mt-3 cursor-pointer"
            v-for="(data, index) in products"
            :key="index"
            @click="toProduct(data.id)"
          >
            {{ data.name }}
          </p>
        </div>
        <div>
          <h1 class="font-bold">Hubungi Kami</h1>
          <p class="mt-3 cursor-pointer" @click="toKontak">Kontak</p>
          <div class="mt-3 hover:underline">
            <a href="https://pengaduan.bappebti.go.id/" target="_blank">Link Pengaduan Nasabah</a>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 lg:mt-0 mt-5">
        <h1 class="font-bold text-base">Disclaimer:</h1>
        <p class="text-xs lg:text-base">
          {{ contact?.disclaimer }}
        </p>
      </div>
    </div>

    <div class="pt-4 px-4 lg:px-28 pb-4">
      <p class="text-[10px] pt-2">{{ contact?.address }}</p>
      <p class="text-[10px] text-right pt-2">© 2023 Finex. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import { useDataStore } from '../stores/data'
import { computed, onMounted } from 'vue'
import router from '../router'

export default {
  created() {
    this.dataStore.retrieveContact()
  },
  computed: {
    products() {
      return this.dataStore.products
    },
    contact() {
      return this.dataStore.contact
    }
  },

  methods: {
    toProduct(id) {
      router.push({ name: 'product', params: { id: id } })
    },
    getWhatsAppLink(phoneNumber) {
      // Remove non-numeric characters from the phone number
      if (phoneNumber) {
        const cleanPhoneNumber = phoneNumber.replace(/\D/g, '')
        return `https://api.whatsapp.com/send?phone=${cleanPhoneNumber}`
      }
      // Create the WhatsApp link
    },
    toKontak() {
      router.push({ name: 'contact' })
    }
  },
  setup() {
    const dataStore = useDataStore()

    // const products = computed(() => {
    //   return dataStore.products
    // })
    // const contact = computed(() => {
    //   return dataStore.contact
    // })

    const toProduct = (id) => {
      router.push({ name: 'product', params: { id: id } })
    }
    return { dataStore, toProduct }
  }
}
</script>
