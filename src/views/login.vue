<template>
  <navbar />
  <div class="px-4 lg:px-28 pb-6 bg-textPrimary">
    <div class="grid grid-cols-12 items-center">
      <div class="col-span-12 mr-0 lg:mr-6 lg:col-span-6">
        <h1 class="text-xl font-bold text-center">Selamat Datang kembali!</h1>
        <h1 class="text-sm font-semibold text-center mt-3">
          Masuk ke dalam finex komoditi dan raih profitmu
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
            <label class="block text-gray-700 text-sm mb-2" for="email"> Email </label>
            <input
              class="shadow appearance-none border border-gray-600 rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="password"> Password </label>
            <input
              class="shadow appearance-none border border-gray-600 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button class="hover:btn-hover btn-primary w-full py-2 rounded-2xl" @click="handleLogin">
            MASUK
          </button>
          <button
            @click="userStore.loginWithGoogle"
            class="hover:btn-google-hover btn-google-primary mt-3 text-black font-bold w-full py-2 rounded-2xl flex justify-center items-center"
          >
            <icons name="ic-google" width="20px" height="20px"></icons>
            <span class="ml-3"> GOOGLE </span>
          </button>

          <p class="text-xs font-semibold mt-6 text-center mx-auto">
            Belum Memiliki Akun?
            <router-link to="/register"
              ><button class="text-textDenim">Daftar?</button></router-link
            >
          </p>
        </div>
      </div>
      <div class="w-full col-span-12 lg:col-span-6">
        <img
          src="https://res.cloudinary.com/dycicfqk1/image/upload/v1702805218/Attachments/ne28px8q4idndkocorgm.png"
          alt="login"
          class="w-full lg:w-full lg:h-[500px] lg:ml-auto ml-0 lg:justify-center mt-12 mr-0"
        />
      </div>
    </div>
  </div>
  <footerVue />
</template>

<script setup>
import icons from '../components/icons.vue'
import navbar from '../components/navbar.vue'
import footerVue from '../components/footer.vue'
import { ref } from 'vue'

import { useUserStore } from '../stores/user'

const email = ref('')
const password = ref('')

const userStore = useUserStore()

const handleLogin = async () => {
  if (email.value && password.value) {
    await userStore.loginUser(email.value, password.value)
  } else {
    alert('check form again')
  }
}
</script>
