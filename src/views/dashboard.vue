<template>
  <div class="flex">
    <div :class="isSwipe ? 'w-1/5' : 'w-[76px]'" class="bg-[#2C3333] h-screen">
      <div :class="isSwipe ? 'p-5' : 'pt-5 lg:pl-5 pb-5 pl-3'" class="">
        <img src="../assets/images/Finex.png" alt="finex" v-if="isSwipe" class="w-[162px]" />
        <img src="../assets/images/finex-logo-m.png" alt="finex" v-else class="w-[50px]" />
      </div>
      <div :class="isSwipe ? 'mx-5' : ''">
        <div
          class="flex items-center py-6"
          :class="isSwipe ? 'ml-5' : 'justify-center lg:ml-0 lg:pr-0 ml-1 pr-3'"
        >
          <icons name="ic_dashboard" width="30" height="30"></icons>
          <p class="font-bold text-white" :class="isSwipe ? 'ml-4' : ''">
            {{ isSwipe ? 'Dashboard' : '' }}
          </p>
        </div>
        <div
          class="flex items-center"
          :class="isSwipe ? 'ml-5' : 'justify-center lg:pr-0 lg:ml-0 ml-2 pr-3'"
        >
          <icons name="ic_profile" width="30" height="30"></icons>
          <p class="font-bold text-white" :class="isSwipe ? 'ml-4' : ''">
            {{ isSwipe ? 'Profile' : '' }}
          </p>
        </div>
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
        <div class="lg:flex cursor-pointer relative ml-5 lg:ml-0" v-if="user">
          <div class="flex items-center" @click="openDropdownAccount">
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
          <p class="text-3xl font-bold ml-4">Dashboard</p>
        </div>
        <div class="grid grid-cols-12 mt-10">
          <div
            class="rounded-xl shadow-xl border-2 relative col-span-12 mr-0 mb-6 lg:mb-0 lg:mr-6 lg:col-span-6 hover:bg-[#F0E68C]"
          >
            <icons name="ic_deposit" width="165" class="ml-auto"></icons>
            <div
              class="flex items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <icons name="ic_money" width="89" class="right-0"></icons>
              <p class="font-bold text-2xl">Deposit</p>
            </div>
          </div>
          <div
            class="rounded-xl shadow-xl border-2 relative col-span-12 lg:col-span-6 hover:bg-[#F0E68C]"
          >
            <icons name="ic_withdrawl" width="165" class="ml-auto"></icons>
            <div
              class="flex items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <icons name="ic_money" width="89" class="rotate-180"></icons>
              <p class="font-bold text-2xl">Withdrawal</p>
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

const isSwipe = ref(false)
const isShowDropdown = ref(false)
const userStore = useUserStore()
onMounted(() => {
  userStore.currentUser()
})

const toHome = () => {
  router.push('/')
}
const user = computed(() => {
  return userStore.userData
})
const openDropdownAccount = () => {
  isShowDropdown.value = !isShowDropdown.value
}

const swipeDisplay = () => {
  isSwipe.value = !isSwipe.value
}
</script>
