import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landing-page.vue'
import { useUserStore } from '../stores/user'
import { computed, onMounted } from 'vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: landingPage
  },
  {
    path: '/register',
    name: 'register',
    meta: { requiresUnAuth: true },
    component: () => import('../views/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { requiresUnAuth: true },
    component: () => import('../views/login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { requiresAuth: true },
    component: () => import('../views/dashboard.vue')
  },

  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/product.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/kontak.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/gallery.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/news/detail-news/:id',
    name: 'detail-news',
    component: () => import('../views/detail-news.vue')
  },
  {
    path: '/:notFound(.*)',
    component: () => import('../views/not-found.vue')
  },
  {
    path: '/verification',
    component: () => import('../views/verification.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = userStore.isAuthenticated

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    // Redirect to login if trying to access a protected route without authentication
    next({ path: '/login' })
  } else if (to.matched.some((record) => record.meta.requiresUnAuth) && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
export default router
