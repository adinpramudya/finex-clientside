import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth'

import App from './App.vue'
import router from './router'
import { useUserStore } from './stores/user'
import Toast from 'vue-toastification'
const auth = getAuth()
setPersistence(auth, browserLocalPersistence)
const app = createApp(App)

app.use(createPinia())
app.use(Toast)
app.use(router)

// const userStore = useUserStore()
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     userStore.setUser(user)
//   }
// })

app.mount('#app')
