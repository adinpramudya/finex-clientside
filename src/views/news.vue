<template>
  <div>
    <cardNews
      images="../src/assets/images/news.png"
      title="Beragamnya Sentimen, Emas Galau"
      date="13 Juli 2020; 08.00 WIB"
      desc="Data ketenagakerjaan AS (non farm payroll) yang bagus semalam, membuat selera investor terhadap risiko membaik. Logam mulia emas yang sedang berada di rentang tingginya pada"
    ></cardNews>
  </div>
</template>
<script>
import cardNews from '@/components/card-news.vue'
export default {
  components: {
    cardNews
  }
}
</script>
