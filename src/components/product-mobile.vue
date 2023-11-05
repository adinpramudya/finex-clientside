<template>
  <div class="">
    <div class="my-11 py-6 px-4 rounded-t-2xl bg-sunglow rounded-b-full">
      <h1 class="font-bold text-2xl">{{ dataProduct.name }}</h1>
      <p class="mt-4 text-base">
        {{ dataProduct.desc }}
      </p>
      <img :src="`../..${dataProduct.imgUrl}`" class="h-[128px] mx-auto mt-4" alt="gold" />
    </div>
    <div class="px-4">
      <p class="font-bold text-lg mb-10">Kontrak Berjangka {{ dataProduct.name }}</p>
      <div class="rounded-xl border-2 mb-7 border-sunglow">
        <div class="bg-sunglow">
          <p class="text-base p-3 font-bold">Kode</p>
        </div>
        <div class="p-1">
          <div class="bg-white" v-for="(data, index) in dataProduct.futuresContracts" :key="index">
            <Card
              :name="dataProduct.name"
              :title="data.code"
              :contractUnit="data.contractUnit"
              :marginPerLotRemote="data.marginPerLotRemote"
              :marginPerLotSpot="data.marginPerLotSpot"
              :marginPerLotNone="data.marginPerLotNone"
              :commissionPerSideLot="data.commissionPerSideLot"
              :tradingDaysAndHour="data.tradingDaysAndHour"
              :minimumPriceChange="data.minimumPriceChange"
              :price="data.price"
              :contractMonth="data.contractMonth"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from './card.vue'

export default {
  components: {
    Card
  },
  props: {
    dataProduct: Object
  }
}
</script>
