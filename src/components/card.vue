<template>
  <div class="w-[295px] border-2">
    <div
      class="bg-sunglow flex items-center p-[10px] relative z-10"
      :class="
        !isShow
          ? 'rounded-md transition-all ease-in-out duration-500'
          : 'rounded-t-md transition-all ease-in-out duration-500'
      "
    >
      <icons
        @click="openCard"
        :class="isShow ? 'open-card' : 'transition-all duration-500'"
        class="cursor-pointer rotate-180 mr-5"
        name="arrow-dropdown"
        width="16"
        height="16"
        color="#FFFFFF"
      ></icons>
      <h3 class="font-bold text-white">{{ title }}</h3>
    </div>
    <div
      class="py-[10px] px-[15px] bg-textPrimary rounded-b-md border-sunglow"
      :class="
        isShow
          ? 'transform translate-y-0 transition-all ease-in-out duration-500 static'
          : 'transform -translate-y-16 transition-all ease-in-out duration-500 opacity-0 absolute'
      "
    >
      <div class="grid grid-cols-12">
        <div class="col-span-6">TESTTTTT</div>
        <div class="col-span-6">TESTTTTT</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import icons from '../components/icons.vue'
export default {
  components: {
    icons
  },
  props: {
    title: String,
    desc: String,
    image: String
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    openCard() {
      this.isShow = !this.isShow
      console.log('log', this.isShow)
    }
  }
}
</script>
