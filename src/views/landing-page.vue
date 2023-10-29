<template>
  <navbar />
  <banner />
  <achievement />
  <productCmp />
  <recommendation />
  <whyChooseUs />
  <bank />
  <regulasi />
  <footerVue />
</template>
<script setup>
import achievement from '@/components/achievement.vue'
import bank from '@/components/bank.vue'
import banner from '@/components/banner.vue'
import footerVue from '@/components/footer.vue'
import navbar from '@/components/navbar.vue'
import productCmp from '@/components/product-cmp.vue'
import recommendation from '@/components/recommendation.vue'
import regulasi from '@/components/regulasi.vue'
import whyChooseUs from '@/components/why-choose-us.vue'
import { useUserStore } from '../stores/user'


</script>
