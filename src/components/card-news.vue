<template>
  <div class="bg-textPrimary">
    <navbar />
    <div class="px-4 mt-4 mb-6 lg:px-28">
      <div class="grid grid-cols-12 lg:gap-10 gap-0">
        <div v-for="index in 10" class="col-span-12 mb-10 lg:mb-0 lg:gap-4 lg:col-span-4">
          <img :src="images" :alt="title" />
          <h1 class="text-base font-bold mt-3">{{ title }}</h1>
          <p class="text-sm font-semibold mt-3">{{ date }}</p>
          <p class="text-sm text-justify mt-3">
            {{ desc }}
          </p>

          <button class="text-textDenim mt-3">Lihat Selengkapnya ...</button>
        </div>
      </div>
    </div>
    <footerVue />
  </div>
</template>

<script setup lang="ts">
import footerVue from './footer.vue'
import navbar from './navbar.vue'
defineProps<{
  images?: string
  title?: string
  date?: Date
  desc?: string
}>()
</script>
