<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-sunglow">
        <tr>
          <th scope="col" class="px-6 py-3">Kode</th>
          <th scope="col" class="px-6 py-3">Contract Unit</th>
          <th scope="col" class="px-6 py-3">Margin Per Lot Spot</th>
          <th scope="col" class="px-6 py-3">Margin Per Lot Remote</th>
          <th scope="col" class="px-6 py-3">Margin Per Lot None</th>
          <th scope="col" class="px-6 py-3">Commission Per Side Lot</th>
          <th scope="col" class="px-6 py-3">Trading Days And Hour</th>
          <th scope="col" class="px-6 py-3">Minimum Price Change</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Contract Month</th>
        </tr>
      </thead>
      <tbody class="border-2 border-sunglow text-xs text-center">
        <tr
          v-for="(data, index) in futureContracts"
          :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ data.code }}</td>
          <td class="px-6 py-4">{{ data.contractUnit }}</td>
          <td class="px-6 py-4">{{ data.marginPerLotSpot }}</td>
          <td class="px-6 py-4">{{ data.marginPerLotRemote }}</td>
          <td class="px-6 py-4">{{ data.marginPerLotNone }}</td>
          <td class="px-6 py-4">{{ data.commissionPerSideLot }}</td>
          <td class="px-6 py-4">{{ data.tradingDaysAndHour }}</td>
          <td class="px-6 py-4">{{ data.minimumPriceChange }}</td>
          <td class="px-6 py-4">{{ data.price }}</td>
          <td class="px-6 py-4">{{ data.contractMonth }}</td>
        </tr>
      </tbody>
      <!-- <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">$99</td>
        </tr>
      </tbody> -->
    </table>
  </div>

  <!-- <table class="table-auto">
    <thead class="bg-sunglow text-sm">
      <tr>
        <th>Kode</th>
        <th>Contract Unit</th>
        <th>Margin Per Lot Spot</th>
        <th>Margin Per Lot Remote</th>
        <th>Margin Per Lot None</th>
        <th>Commission Per Side Lot</th>
        <th>Trading Days And Hour</th>
        <th>Minimum Price Change</th>
        <th> Price </th>
        <th>Contract Month</th>

      </tr>
    </thead>
    <tbody class="border-2 border-sunglow text-xs text-center">
      <tr v-for="(data,index) in futureContracts" :key="index">
        <td>{{ data.code }}</td>
        <td>{{ data.contractUnit }}</td>
        <td>{{ data.marginPerLotSpot }}</td>
        <td>{{ data.marginPerLotRemote }}</td>
        <td>{{ data.marginPerLotNone }}</td>
        <td>{{ data.commissionPerSideLot }}</td>
        <td>{{ data.tradingDaysAndHour }}</td>
        <td>{{ data.minimumPriceChange }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.contractMonth }}</td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>
export default {
  props: {
    futureContracts: Array
  }
}
</script>
