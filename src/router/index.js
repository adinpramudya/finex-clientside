import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landing-page.vue'
import { useUserStore } from '../stores/user'
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
      component: () => import('../views/login.vue'),
      meta: {
        requiresUnauth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/product/:name',
      name: 'product',
      component: () => import('../views/product.vue')
    },
    {
      path: '/:notFound(.*)',
      component: () => import('../views/not-found.vue')
    }
  ]
})

router.beforeEach

router.beforeEach(function (to, _, next) {
  const userStore = useUserStore()
  console.log('tometa', to.meta)
  if (to.meta.requiresAuth && userStore.isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresUnauth && !userStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

// const routes = [
//   {
//     path: '/',
//     name: 'landingPage',
//     component: landingPage
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: () => import('../views/register.vue')
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/login.vue'),
//     meta: {
//       requiresUnauth: true
//     }
//   },
//   {
//     path: '/dashboard',
//     name: 'dashboard',
//     component: () => import('../views/dashboard.vue'),
//     meta: {
//       requiresAuth: true
//     }
//   },
//   {
//     path: '/product/:name',
//     name: 'product',
//     component: () => import('../views/product.vue')
//   }
// ]

// const router = createRouter({
//   routes,
//   history: createWebHistory()
// })
export default router
