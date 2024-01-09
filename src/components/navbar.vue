<template>
  <div class="px-4 py-[18px] lg:px-[118px] bg-textPrimary flex items-center justify-between">
    <router-link to="/">
      <img src="../assets/images/finex-logo.svg" class="w-[102px] lg:w-[188px]" alt="logo" />
    </router-link>
    <div class="flex items-center px-4" v-if="show">
      <button
        @click="hamburger"
        id="hamburger"
        name="hamburger"
        type="button"
        class="absolute right-4 block lg:hidden"
        :class="isShowHamburger ? 'hamburger-active' : ''"
      >
        <span
          class="hamburger-line origin-top-left transition duration-300 ease-in-out"
          :class="!isShowHamburger ? 'w-[21px]' : 'w-[31px]'"
        ></span>
        <span class="hamburger-line transition duration-300 ease-in-out w-[42px]"></span>
        <span
          class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"
          :class="!isShowHamburger ? 'w-[21px] ml-5' : 'w-[31px]'"
        ></span>
      </button>

      <nav
        id="nav-menu"
        :class="isShowHamburger ? 'block' : 'hidden'"
        class="absolute z-20 right-0 top-14 w-full max-w-[250px] transition-all duration-500 ease-in-out border-lemonChiffon rounded-lg py-5 bg-textPrimary shadow-xl lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
      >
        <ul class="block lg:flex">
          <li class="group">
            <router-link
              to="/"
              href="#home"
              class="lg:mr-[40px] lg:ml-0 ml-[40px] mr-0 flex py-2 text-base text-slate-700 font-bold hover:underline"
              >Beranda</router-link
            >
          </li>
          <li class="group relative">
            <div
              @click="showProduct"
              href="#portfolio"
              class="lg:mr-[40px] lg:ml-0 ml-[40px] cursor-pointer mr-0 flex py-2 text-base text-slate-700 font-bold items-center hover:underline"
            >
              Produk<icons name="ic-arrow-down" width="14" height="7" class="ml-2"></icons>
            </div>
            <div
              class="absolute z-20 bg-textPrimary px-10 py-5 shadow-custom"
              :class="isShowProduct ? 'block' : 'hidden'"
            >
              <ul v-for="(product, index) in products" :key="index">
                <li
                  class="text-base mb-2 text-slate-700 font-bold cursor-pointer"
                  @click="toProduct(product.id)"
                >
                  {{ product.name }}
                </li>
              </ul>
            </div>
          </li>
          <li class="group">
            <router-link
              to="/news"
              href="#experience"
              class="lg:mr-[40px] lg:ml-0 ml-[40px] mr-0 flex py-2 text-base text-slate-700 font-bold hover:underline"
              >Berita</router-link
            >
          </li>
          <li class="group">
            <router-link
              to="/gallery"
              class="lg:mr-[40px] lg:ml-0 ml-[40px] mr-0 flex py-2 text-base text-slate-700 font-bold hover:underline"
              >Galeri</router-link
            >
          </li>
          <li class="group">
            <router-link
              to="/contact"
              class="lg:mr-[40px] lg:ml-0 ml-[40px] mr-0 flex py-2 text-base text-slate-700 font-bold hover:underline"
              >Kontak</router-link
            >
          </li>

          <div class="lg:flex lg:border-l-2 lg:border-slate-900 lg:pl-8 lg:ml-0 ml-8">
            <div class="lg:flex cursor-pointer relative ml-2 mt-2 lg:ml-0 lg:mt-0" v-if="user">
              <div class="flex items-center w-[150px]" @click="openDropdownAccount">
                <p class="mr-4 font-bold truncate">{{ user.fullname }}</p>
                <icons name="ic-arrow-down" width="14" height="7"></icons>
              </div>
              <div
                v-if="isShowDropdown"
                class="w-full absolute top-10 right-0 bg-textPrimary border-[1px] shadow-xl border-slate-600"
              >
                <p class="py-2 px-6 font-bold hover:bg-sunglow" @click="openDashboard">Buka Akun</p>
                <div
                  @click="userStore.logoutUser"
                  class="w-100 flex items-center py-2 px-6 hover:bg-sunglow my-3 lg:my-0 mb-4 lg:mb-0"
                >
                  <icons name="ic-login" width="20" height="20"></icons>
                  <span class="font-bold ml-1">Sign Out</span>
                </div>
              </div>
            </div>
            <!-- <router-link to="/login" class="lg:flex" v-else>
              <div class="flex items-center lg:mr-[40px] my-3 lg:my-0 mb-4 lg:mb-0" @click="login">
                <icons name="ic-login" width="20" height="20"></icons>
                <span class="font-bold ml-1">Sign In</span>
              </div>
            </router-link> -->
            <router-link to="/login" class="lg:flex" v-else>
              <div
                class="flex items-center bg-[#edeff2] px-5 rounded-md lg:mr-[40px] my-3 lg:my-0 mb-4 lg:mb-0"
                @click="login"
              >
                <!-- <icons name="ic-login" width="20" height="20"></icons> -->
                <span class="font-medium">Masuk</span>
              </div>
            </router-link>
            <router-link to="/register" class="lg:flex" v-if="!user">
              <div
                class="flex items-center bg-sunglow px-5 rounded-md lg:mr-[40px] my-3 lg:my-0 mb-4 lg:mb-0"
              >
                <!-- <icons name="ic-login" width="20" height="20"></icons> -->
                <span class="font-medium">Buka Akun</span>
              </div>
            </router-link>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import icons from './icons.vue'
import { useUserStore } from '../stores/user'
import { useDataStore } from '../stores/data'
import { onMounted } from 'vue'
import { computed } from '@vue/reactivity'
import router from '../router'
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    icons
  },

  data() {
    return {
      isShowHamburger: false,
      isShowProduct: false,
      isShowDropdown: false
    }
  },

  methods: {
    hamburger() {
      this.isShowHamburger = !this.isShowHamburger
      if (!this.isShowHamburger) {
        this.isShowProduct = false
      }
    },
    openDropdownAccount() {
      this.isShowDropdown = !this.isShowDropdown
    },
    showProduct() {
      this.isShowProduct = !this.isShowProduct
    },
    toProduct(id) {
      router.push({ name: 'product', params: { id: id } })
    },
    openDashboard() {
      router.push({ name: 'dashboard' })
    }
  },
  setup() {
    const userStore = useUserStore()
    onMounted(() => {
      userStore.currentUser()
      dataStore.retrieveAllProduct()
      console.log('user', user)
    })

    const user = computed(() => {
      return userStore.userData
    })

    const dataStore = useDataStore()
    const products = computed(() => {
      return dataStore.products
    })
    console.log('proo', products)

    return { user, userStore, products }
  }
}
</script>
