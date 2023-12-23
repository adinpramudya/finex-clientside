import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landing-page.vue'
import { useUserStore } from '../stores/user'
import { computed, onMounted } from 'vue'
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'landingPage',
//       component: landingPage
//     },
//     {
//       path: '/register',
//       name: 'register',
//       component: () => import('../views/register.vue')
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: () => import('../views/login.vue'),
//       meta: {
//         requiresUnauth: true
//       }
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: () => import('../views/dashboard.vue'),
//       meta: {
//         requiresAuth: true
//       }
//     },
//     {
//       path: '/product/:name',
//       name: 'product',
//       component: () => import('../views/product.vue')
//     },
//     {
//       path: '/:notFound(.*)',
//       component: () => import('../views/not-found.vue')
//     }
//   ]
// })

// router.beforeEach(function (to, _, next) {
//   const userStore = useUserStore()
//   const isAuth = computed(() => {
//     return userStore.isAuthenticated
//   })
//   console.log(isAuth.value)
//   console.log(to.meta)
//   if (to.meta.requiresAuth && !isAuth.value) {
//     next('/login')
//   } else if (to.meta.requiresUnauth && isAuth.value) {
//     next('/')
//   } else {
//     next()
//   }
// })

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore()
  userStore.loadingSession = true
  const user = computed(() => {
    return userStore.isAuthenticated
  })
  console.log('auth', user.value)
  console.log('yuserrr', to.path)
  if (user.value && to.path === '/login') {
    next('/')
  } else if (!user.value && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
  userStore.loadingSession = false
}
const routes = [
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
    path: '/dashboard',
    name: 'dashboard',
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
  }
  // {
  //   path: '/verification',
  //   component: () => import('../views/verification.vue')
  // }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
