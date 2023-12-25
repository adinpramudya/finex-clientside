<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from './stores/user'

const userStore = useUserStore()
onMounted(() => {
  userStore.autoLogout
  userStore.currentUser()
})
</script>

<template>
  <RouterView class="bg-textPrimary" />
</template>
