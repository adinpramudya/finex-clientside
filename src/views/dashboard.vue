<template>
  <div class="flex">
    <fwb-toast v-if="isModal" class="fixed right-0 z-10" closable type="success">
      Send Message successfully.
    </fwb-toast>
    <div :class="isSwipe ? 'w-1/5' : 'w-[76px]'" class="bg-[#2C3333] h-screen">
      <div :class="isSwipe ? 'p-5' : 'pt-5 lg:pl-5 pb-5 pl-3'" class="">
        <img
          src="../assets/images/Finex Komoditi.png"
          alt="finex"
          v-if="isSwipe"
          class="w-[162px]"
        />
        <img src="../assets/images/finex-logo-m.png" alt="finex" v-else class="w-[50px]" />
      </div>
      <div :class="isSwipe ? 'mx-5' : ''">
        <div
          @click="toComponent('dashboard')"
          class="flex items-center py-6 cursor-pointer"
          :class="isSwipe ? 'ml-5' : 'justify-center lg:ml-0 lg:pr-0 ml-1 pr-3'"
        >
          <icons name="ic_dashboard" width="30" height="30"></icons>
          <p class="font-bold text-white" :class="isSwipe ? 'ml-4' : ''">
            {{ isSwipe ? 'Dashboard' : '' }}
          </p>
        </div>
        <div
          @click="toComponent('profile')"
          class="flex items-center cursor-pointer"
          :class="isSwipe ? 'ml-5' : 'justify-center lg:pr-0 lg:ml-0 ml-2 pr-3'"
        >
          <icons name="ic_profile" width="30" height="30"></icons>
          <p class="font-bold text-white" :class="isSwipe ? 'ml-4' : ''" @click="">
            {{ isSwipe ? 'Profile' : '' }}
          </p>
        </div>
        <a href="https://jafetsnow.jfx.co.id/#/login" target="_blank">
          <div
            class="flex py-6 items-center cursor-pointer"
            :class="isSwipe ? 'ml-5' : 'justify-center lg:pr-0 lg:ml-0 ml-2 pr-3'"
          >
            <icons name="ic_link" width="30" height="30"></icons>
            <p class="font-bold text-white" :class="isSwipe ? 'ml-4' : ''" @click="">
              {{ isSwipe ? 'Link Trading' : '' }}
            </p>
          </div>
        </a>
        <p class="text-white font-bold pb-5 px-6" v-if="isSwipe">
          Klik link berikut jika anda belum memiliki akun
        </p>
        <a href="https://bit.ly/RegistrasiFinexCommodity" target="_blank">
          <div
            @click="toComponent('profile')"
            class="flex items-center cursor-pointer"
            :class="isSwipe ? 'ml-5' : 'justify-center lg:pr-0 lg:ml-0 ml-2 pr-3'"
          >
            <icons name="ic_regis_verif" width="30" height="30"></icons>
            <p class="font-bold text-white" :class="isSwipe ? 'ml-4' : ''" @click="">
              {{ isSwipe ? 'Registrasi & Verifikasi ' : '' }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <div :class="isSwipe ? 'w-4/5' : 'w-full'" class="bg-textPrimary">
      <div class="p-5 flex items-center bg-sunglow w-full justify-between">
        <div class="flex items-center" @click="swipeDisplay">
          <button id="hamburger" name="hamburger" type="button" class="block">
            <span
              class="hamburger-line origin-top-left w-[21px] transition duration-300 ease-in-out"
            ></span>
            <span class="hamburger-line transition duration-300 ease-in-out w-[42px]"></span>
            <span
              class="ml-auto hamburger-line origin-bottom-left w-[21px] transition duration-300 ease-in-out"
            ></span>
          </button>
        </div>
        <div class="lg:flex cursor-pointer relative w-48 ml-5 lg:ml-0" v-if="user">
          <div class="flex items-center ml-auto" @click="openDropdownAccount">
            <p class="mr-4 font-bold">{{ user.fullname }}</p>
            <icons name="ic-arrow-down" width="14" height="7"></icons>
          </div>
          <div
            v-if="isShowDropdown"
            class="w-full absolute top-10 right-0 bg-textPrimary border-[1px] shadow-xl border-slate-600"
          >
            <div
              class="flex items-center py-2 px-6 hover:bg-sunglow my-3 lg:my-0 mb-4 lg:mb-0"
              @click="toHome"
            >
              <icons name="ic_arrow_back" fill="#000" width="20" height="20"></icons>
              <p class="font-bold ml-1">Back to home</p>
            </div>
            <div
              @click="userStore.logoutUser"
              class="w-100 flex items-center py-2 px-6 hover:bg-sunglow my-3 lg:my-0 mb-4 lg:mb-0"
            >
              <icons name="ic-login" width="20" height="20"></icons>
              <span class="font-bold ml-1">Sign Out</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:p-[35px] p-8">
        <div class="flex items-center">
          <hr width="48px" class="border-[1px] border-black" />
          <p class="text-3xl font-bold ml-4">
            {{ menu == 'dashnboard' ? 'Dashboard' : 'Profile' }}
          </p>
        </div>
        <div class="grid grid-cols-12 mt-10" v-if="menu == 'dashboard'">
          <a
            href="https://bit.ly/Deposit-Finex"
            target="_blank"
            class="block w-full col-span-12 mr-0 lg:pr-6 lg:col-span-6"
          >
            <div
              class="rounded-xl shadow-xl border-2 relative mb-6 lg:mb-0 lg:mr-6 lg:col-span-6 hover:bg-[#F0E68C]"
            >
              <icons name="ic_deposit" width="165" class="ml-auto"></icons>
              <div
                class="flex items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <icons name="ic_money" width="89" class="right-0"></icons>
                <p class="font-bold text-2xl pl-4">Deposit</p>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://bit.ly/FormWD-Finex"
            class="block w-full col-span-12 lg:col-span-6"
          >
            <div class="rounded-xl shadow-xl border-2 relative hover:bg-[#F0E68C]">
              <icons name="ic_withdrawl" width="165" class="ml-auto"></icons>
              <div
                class="flex items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <icons name="ic_money" width="89" class="rotate-180"></icons>
                <p class="font-bold text-2xl pl-4">Withdrawal</p>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-10" v-if="menu == 'profile'">
          <h1 class="font-bold text-xl">Ganti Informasi Profile</h1>
          <div class="grid grid-cols-12">
            <div class="col-span-4 lg:mr-6">
              <label class="block text-black text-lg mt-6 mb-2 font-medium" for="nama">
                Nama Lengkap
              </label>
              <input
                class="shadow appearance-none border border-gray-600 rounded-xl w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                placeholder="Nama Lengkap"
                v-model="nama"
              />
            </div>
            <div class="col-span-4">
              <label class="block text-black text-lg mt-6 mb-2 font-medium" for="email">
                Email
              </label>
              <input
                class="shadow appearance-none border border-gray-600 rounded-xl w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 py-8">
            <div class="col-span-8">
              <hr color="#000" class="h-1" />
            </div>
          </div>
          <h1 class="font-bold text-xl">Ganti Kata Sandi</h1>
          <div class="grid grid-cols-12">
            <div class="mb-4 col-span-4 lg:mr-6">
              <label class="block text-black text-lg mt-6 mb-2 font-medium" for="old-password">
                Kata sandi lama
              </label>
              <input
                class="shadow appearance-none border border-gray-600 rounded-xl w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="old-password"
                type="password"
                placeholder="Kata sandi lama"
                v-model="oldPassword"
              />
            </div>
            <div class="mb-4 col-span-4">
              <label class="block text-black text-lg mt-6 mb-2 font-medium" for="newPassword">
                Kata sandi baru
              </label>
              <input
                class="shadow appearance-none border border-gray-600 rounded-xl w-full py-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                type="password"
                placeholder="Kata sandi baru"
                v-model="newPassword"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 py-8">
            <div class="col-span-8">
              <button class="btn-hover w-full py-2 rounded-2xl mb-5">BATALKAN</button>
              <button class="btn-primary w-full py-2 rounded-2xl" @click="save">SIMPAN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Icons from '../components/icons.vue'
import { useUserStore } from '../stores/user'
import { computed } from '@vue/reactivity'
import router from '../router'
import { FwbToast } from 'flowbite-vue'
import { auth } from '../firebaseConfig'
import { updateProfile, onAuthStateChanged } from 'firebase/auth'
const isSwipe = ref(false)
const isShowDropdown = ref(false)
const menu = ref('dashboard')
const userStore = useUserStore()
const nama = ref('')
let isModal = ref(false)

onMounted(() => {
  userStore.currentUser()
})

const toHome = () => {
  router.push('/')
}
const user = computed(() => {
  return userStore.userData
})
const toComponent = (component) => {
  menu.value = component
}
const openDropdownAccount = () => {
  isShowDropdown.value = !isShowDropdown.value
}
const swipeDisplay = () => {
  isSwipe.value = !isSwipe.value
}

const save = async () => {
  await onAuthStateChanged(auth, async (user) => {
    await updateProfile(user, {
      displayName: nama.value
    })
      .then((res) => {
        isModal.value = true
        userStore.currentUser()
        setTimeout(() => {
          isModal = false
        }, 5000)
      })
      .catch((err) => {
        console.log(err)
      })
    // }),
  })
}
</script>
