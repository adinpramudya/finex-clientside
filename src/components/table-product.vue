<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-sunglow">
        <tr>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">Kode</th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">Contract Unit</th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">Margin Per Lot Spot</th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">
            Margin Per Lot Remote
          </th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">
            Commission Per Side Lot
          </th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">
            Trading Days And Hour
          </th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">Minimum Price Change</th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">Price</th>
          <th scope="col" class="px-6 py-3 border-[1px] border-woodsmkoke">Contract Month</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-textPrimary border-woodsmkoke text-xs text-center">
        <tr
          v-for="(data, index) in futureContracts"
          :key="index"
          class="bg-textPrimary border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.code }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.contractUnit }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.marginPerLotSpot ? formattedValue(data.marginPerLotSpot) : '-' }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.marginPerLotRemote ? formattedValue(data.marginPerLotRemote) : '-' }}
          </td>

          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.commissionPerSideLot ? formattedValue(data.commissionPerSideLot) : '-' }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.tradingDaysAndHours }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.minimumPriceChange ? data.minimumPriceChange : '-' }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.price }}
          </td>
          <td class="px-6 py-4 font-bold border-[1px] text-black border-woodsmkoke">
            {{ data.contractMonth }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    futureContracts: Array
  },
  setup() {
    const formattedValue = (value) => {
      return formatCurrency(value)
    }

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(value)
    }
    return { formattedValue }
  }
}
</script>
