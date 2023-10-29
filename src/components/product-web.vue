<template>
  <div class="mb-20">
    <div class="pt-20 relative h-max">
      <div class="px-[118px] grid grid-cols-12">
        <div class="flex-col col-span-8">
          <h1 class="font-bold text-3xl"> {{ dataProduct.name }}</h1>
          <p class="mt-4 text-base">
            {{ dataProduct.desc }}
          </p>
        </div>
        <img
          :src="`../..${dataProduct.imgUrl}`"
          class="h-[308px]  col-span-4 ml-auto"
          alt="gold"
        />
      </div>
      <img
        class="absolute top-0 -z-10 w-full max-h-[480px]"
        src="../assets/images/bg-product.png"
        alt="bg"
      />
    </div>
    <div class="px-[118px] mt-32">
      <TableProduct :futureContracts="dataProduct.futuresContracts" />

    </div>
  </div>
</template>
<script>
import TableProduct from './table-product.vue'
import { defineProps } from 'vue';
export default {
  components: {
    TableProduct
  },
  props: {
    dataProduct:Object
  }   
}
</script>
