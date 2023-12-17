<template>
  <div class="mb-20">
    <div class="pt-20 h-max bg-sunglow pb-20 rounded-b-[10rem]">
      <div class="px-[118px] grid grid-cols-12">
        <div class="flex-col col-span-8">
          <h1 class="font-bold text-3xl">{{ dataProduct.name }}</h1>
          <p class="mt-4 text-base">
            {{ dataProduct.desc }}
          </p>
        </div>
        <img
          :src="dataProduct?.attachment?.url"
          class="h-[308px] col-span-4 ml-auto"
          :alt="dataProduct.name"
        />
      </div>
    </div>
    <div class="px-[118px] mt-32">
      <TableProduct :futureContracts="dataProduct.FuturesContract" />
    </div>
  </div>
</template>
<script>
import TableProduct from './table-product.vue'
import { defineProps } from 'vue'
export default {
  components: {
    TableProduct
  },
  props: {
    dataProduct: Object
  }
}
</script>
