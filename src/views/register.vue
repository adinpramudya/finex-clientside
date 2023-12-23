<template>
  <navbar />
  <div class="px-4 lg:px-28 pb-6 bg-textPrimary">
    <div class="grid grid-cols-12 items-center">
      <img
        src="https://res.cloudinary.com/dycicfqk1/image/upload/v1702805235/Attachments/itw7ebrkhsyakl2sstta.png"
        alt="register
        "
        class="w-[248px] lg:w-[554px] lg:ml-auto ml-0 lg:justify-center mt-12 col-span-12 mr-0 lg:mr-auto lg:col-span-8"
      />
      <div class="col-span-12 mr-0 lg:mr-6 lg:col-span-4">
        <h1 class="text-xl font-bold text-center">Pendaftaran</h1>
        <h1 class="text-sm font-semibold text-center mt-3">
          Daftar ke dalam finex komoditi dan raih profitmu
        </h1>
        <div class="flex w-full justify-between px-4 mt-6">
          <img src="../assets/images/illustration/gold.png" class="w-[25px] h-[25px]" alt="gold" />
          <img src="../assets/images/illustration/kopi.png" class="w-[25px] h-[25px]" alt="kopi" />
          <img
            src="../assets/images/illustration/olein.png"
            class="w-[12px] h-[25px]"
            alt="olein"
          />
          <img
            src="../assets/images/illustration/kakao.png"
            class="w-[25px] h-[25px]"
            alt="kakao"
          />
        </div>
        <div class="mt-7">
          <div class="mb-2">
            <label class="block text-gray-700 text-sm mb-2" for="name"> Nama Lengkap </label>
            <input
              class="shadow appearance-none border border-gray-600 rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              v-model="fullname"
            />
          </div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm mb-2" for="email"> Email </label>
            <input
              class="shadow appearance-none border border-gray-600 rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="password"> Password </label>
            <input
              class="shadow appearance-none border border-gray-600 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              v-model="password"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="confirm">
              Konfirmasi Password
            </label>
            <input
              class="shadow appearance-none border border-gray-600 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm"
              type="password"
              v-model="confirmPass"
              @input="checkPass"
            />
            <p v-if="!isSame" class="text-sm text-red-700 mt-2">Password doesn't match!</p>
          </div>
          <button class="hover:btn-hover btn-primary w-full py-2 rounded-2xl" @click="handleSubmit">
            DAFTAR
          </button>
          <button
            @click="authStore.loginWithGoogle"
            class="hover:btn-google-hover btn-google-primary mt-3 text-black font-bold w-full py-2 rounded-2xl flex justify-center items-center"
          >
            <icons name="ic-google" width="20px" height="20px"></icons>
            <span class="ml-3"> GOOGLE </span>
          </button>

          <p class="text-xs font-semibold mt-6 text-center mx-auto">
            Sudah Memiliki Akun?
            <router-link to="/login"><button class="text-textDenim">Masuk?</button></router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <footerVue />
</template>

<script setup>
import footerVue from '@/components/footer.vue'
import icons from '@/components/icons.vue'
import navbar from '@/components/navbar.vue'
import { useUserStore } from '../stores/user'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPass = ref('')
const isSame = ref(false)
const fullname = ref('')
const authStore = useUserStore()

const checkPass = () => {
  if (confirmPass.value == password.value) {
    isSame.value = true
  } else {
    isSame.value = false
  }
}

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert('fail')
  }
  await authStore.registerUser(email.value, password.value, fullname.value)
}
</script>
