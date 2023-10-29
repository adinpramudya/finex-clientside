<template>
  <table class="table-auto">
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
  </table>
</template>

<script>
export default {
  props:{
    futureContracts: Array
  }
}
</script>
