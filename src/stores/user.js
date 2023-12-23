import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
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
    isLoggedIn: false,
    errorAuth: ''
  }),
  actions: {
    setUser(user) {
      this.userData = user
    },
    setLoggedIn(login) {
      this.isLoggedIn = login
    },
    async registerUser(email, password, fullname) {
      this.loadingUser = true
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(user, {
          displayName: fullname
        })

        sendEmailVerification(auth.currentUser).then((res) => {
          alert('Email Verification Link Sent')
          router.push('/login')
        })

        // await this.setUser(user)
      } catch (error) {
        console.log(error)
      } finally {
        this.loadingUser = false
      }
    },
    async updateData(name) {
      this.loadingUser = true
      const userNow = auth.currentUser
      updateProfile({
        displayName: name
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log('resss', err)
        })
    },
    async loginUser(email, password) {
      this.loadingUser = true
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        console.log('logg', user)
        if (user) {
          this.setLoggedIn(true)
          this.setUser(user)
          router.push('/')
        }
      } catch (error) {
        console.log(error.code)
        // auth/email-already-in-use
      } finally {
        this.loadingUser = false
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
        this.userData = null
        this.setLoggedIn(false)
        router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
    currentUser() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.setLoggedIn(true)
          let userLogin = {
            email: user.email,
            uid: user.uid,
            fullname: user.displayName,
            token: user.accessToken
          }
          this.setUser(userLogin)
        }
      })
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
        .then((res) => {
          this.setUser(toRaw(res._tokenResponse))
          router.push('/')
          this.setLoggedIn(true)
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
    },
    isAuthenticated: (state) => {
      return state.isLoggedIn // code to check if authenticated
    }
  }
})
