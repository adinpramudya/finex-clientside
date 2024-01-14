<template>
  <div class="bg-textPrimary">
    <navbar />
    <fwb-toast v-if="isSend" class="fixed right-0" closable type="success">
      Send Message successfully.
    </fwb-toast>
    <div class="px-8 lg:px-28 pb-6 mb-6">
      <iframe
        :src="contact?.gmapUrl"
        class="w-full"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="lg:flex mt-16 lg:items-center">
        <div class="bg-sunglow p-[26px] rounded-2xl w-full lg:w-2/5">
          <h1 class="font-bold mb-8 text-center text-woodsmkoke">Kirimkan pesan kepada kami</h1>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Nama </label>
            <input
              class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              placeholder="nama"
              v-model="nama"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
            <input
              class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              v-model="email"
              @input="checkValidEmail"
            />
            <small class="text-sm text-red-600" v-if="!isValidEmail && email.length > 0"
              >e-mail tidak valid</small
            >
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="pesan"> Pesan </label>
            <textarea
              v-model="pesan"
              rows="5"
              class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            class="bg-woodsmkoke text-white w-full py-3 rounded-2xl transition-all ease-in-out duration-500 hover:bg-mahogany"
            @click="sendMessage"
            :disabled="!email && !nama && !pesan && !isValidEmail && isSend"
          >
            KIRIM PESAN
          </button>
        </div>
        <div class="w-full lg:w-3/5 lg:ml-7 flex-col flex">
          <div class="flex mr-auto my-[28px] items-center">
            <img
              src="../assets/images/icons/location.png"
              class="col-span-2 ml-auto mr-4 w-[40px]"
              alt="location"
            />
            <p class="text-base col-span-10">
              {{ contact?.address }}
            </p>
          </div>
          <div class="flex mr-auto my-[28px] items-center">
            <img
              src="../assets/images/icons/telephone.png"
              class="col-span-2 ml-auto mr-4 w-[40px]"
              alt="telephone"
            />
            <p class="text-base col-span-10">{{ contact?.telephone }}</p>
          </div>
          <div class="flex mr-auto my-[28px] items-center">
            <img
              src="../assets/images/icons/faksimili.png"
              class="col-span-2 ml-auto mr-4 w-[40px]"
              alt="faksimili"
            />
            <p class="text-base col-span-10">{{ contact?.fax }}</p>
          </div>
          <div class="flex mr-auto my-[28px] items-center">
            <img
              src="../assets/images/icons/whatsapp.png"
              class="col-span-2 ml-auto mr-4 w-[40px]"
              alt="whatsapp"
            />
            <p class="text-base col-span-10">{{ contact?.whatsApp }} (Chat)</p>
          </div>
          <div class="flex mr-auto my-[28px] items-center">
            <img
              src="../assets/images/icons/email.png"
              class="col-span-2 ml-auto mr-4 w-[40px]"
              alt="whatsapp"
            />
            <p class="text-base col-span-10">{{ contact?.email }}</p>
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
import axios from 'axios'
import { useDataStore } from '../stores/data'
import { FwbToast } from 'flowbite-vue'

export default {
  components: {
    icons,
    footerVue,
    navbar,
    FwbToast
  },
  data() {
    return {
      nama: '',
      email: '',
      pesan: '',
      isValidEmail: false,
      isSend: false
    }
  },

  mounted() {
    this.dataStore.retrieveContact()
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: for smooth scrolling
    })
  },
  computed: {
    contact() {
      return this.dataStore.contact
    },
    checkValidEmail() {
      if (this.emailRegex.test(this.email)) {
        this.isValidEmail = true
      } else {
        this.isValidEmail = false
      }
    }
  },

  methods: {
    async sendMessage() {
      if (this.nama && this.email && this.pesan) {
        let body = {
          name: this.nama,
          email: this.email,
          message: this.pesan
        }
        await axios
          .post('https://api.finexkomoditi.id/v1/contact-form', body)
          .then((res) => {
            this.email = ''
            this.pesan = ''
            this.nama = ''
            this.isSend = true
            setTimeout(() => {
              this.isSend = false
            }, 5000)
          })
          .catch((err) => {
            console.log('error', err)
          })
      }
    }
  },
  setup() {
    const dataStore = useDataStore()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return { dataStore, emailRegex }
  }
}
</script>
