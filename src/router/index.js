import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landing-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/product/:name',
      name: 'product',
      component: () => import('../views/product.vue')
    }
  ]
})

export default router
