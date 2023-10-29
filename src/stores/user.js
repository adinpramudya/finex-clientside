import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { auth } from '../firebaseConfig'
import router from '../router'
import { toRaw } from 'vue'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: null,
    loadingUser: false,
    loadingSession: false,
    isLoggedIn: false
  }),
  actions: {
    setUser(user) {
      console.log('usersasas', user)
      this.userData = user
    },
    async registerUser(email, password, fullname) {
      this.loadingUser = true
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(user, {
          displayName: fullname
        })
        await this.setUser(user)
        router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingUser = false
      }
    },
    async loginUser(email, password) {
      this.loadingUser = true
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        await this.setUser(user)
        router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingUser = false
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
        this.userData = null
        router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
    currentUser() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          let userLogin = {
            email: user.email,
            uid: user.uid,
            fullname: user.displayName,
            token: user.accessToken
          }

          await this.setUser(userLogin)
        }
      })
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
        .then((res) => {
          this.setUser(toRaw(res._tokenResponse))
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    userLogin(state) {
      console.log('state', state.userData)
      return state.userData
    }
  }
})
