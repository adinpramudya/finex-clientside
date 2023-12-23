<template>
  <div class="verification bg-textPrimary h-screen p-8">
    <h1 class="text-center font-bold">Your Email Has Been Verified</h1>
    <p class="text-center mt-5">You can now sign in with your new account</p>
    <button class="hover:btn-hover btn-primary w-full py-2 mt-7 rounded-2xl" @click="handleLogin">
      GO TO LOGIN
    </button>
  </div>
</template>

<script setup>
import router from '../router'

const handleLogin = () => {
  router.push('/login')
}
</script>
