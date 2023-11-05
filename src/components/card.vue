<template>
  <div class="w-full">
    <div
      @click="openCard"
      class="flex items-center p-[10px] relative z-10"
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
      <icons class="mr-2" name="ic_emas" v-if="name == 'Emas'"></icons>
      <icons class="mr-2" name="ic_kakao" v-if="name == 'Kakao'"></icons>
      <icons class="mr-2" name="ic_olein" v-if="name == 'Olein'"></icons>
      <icons class="mr-2" name="ic_kopi" v-if="name == 'Kopi'"></icons>
      <h3 class="font-bold text-slate-900">{{ title }}</h3>
    </div>
    <div
      class="pt-[10px] bg-textPrimary rounded-b-md border-sunglow"
      :class="
        isShow
          ? 'transform translate-y-0 transition-all ease-in-out duration-500 static'
          : 'transform -translate-y-16 transition-all ease-in-out duration-500 opacity-0 absolute'
      "
    >
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-t-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Satuan Kontrak
        </div>
        <div class="col-span-6 border-t-2 border-b-2 px-3 -mr-1 border-black py-4">
          {{ contractUnit }}
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Margin per lot
        </div>
        <div class="col-span-6 border-b-2 px-3 -mr-1 border-black py-4">
          <div class="flex flex-col">
            <div class="">
              <p class="mb-2">Spot :</p>
              <p>Rp {{ marginPerLotSpot }}</p>
            </div>
            <div class="">
              <p class="mb-2">Remote :</p>
              <p>Rp {{ marginPerLotRemote }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Komisi per lot sisi
        </div>
        <div class="col-span-6 border-b-2 px-3 -mr-1 border-black py-4">
          {{ commissionPerSideLot }}
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Hari dan Jam Perdagangan
        </div>
        <div class="col-span-6 border-b-2 px-3 -mr-1 border-black py-4">
          {{ tradingDaysAndHour }}
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Perubahan Harga Minimum
        </div>
        <div class="col-span-6 border-b-2 px-3 -mr-1 border-black py-4">
          {{ minimumPriceChange }}
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Harga
        </div>
        <div class="col-span-6 border-b-2 px-3 -mr-1 border-black py-4">{{ price }}</div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-span-6 flex items-center border-r-2 border-b-2 px-3 -ml-1 border-black py-4"
        >
          Bulan Kontrak
        </div>
        <div class="col-span-6 border-b-2 px-3 -mr-1 border-black py-4">{{ contractMonth }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import icons from '../components/icons.vue'
export default {
  components: {
    icons
  },
  props: {
    title: String,
    name: String,
    image: String,
    contractUnit: String,
    marginPerLotSpot: String,
    marginPerLotRemote: String,
    marginPerLotNone: String,
    commissionPerSideLot: String,
    tradingDaysAndHour: String,
    minimumPriceChange: String,
    price: String,
    contractMonth: String
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
