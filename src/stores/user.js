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
          this.userData = userLogin
        }
      })
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
    async updateEmail() {
      const data = localStorage.getItem('user')
      const user = data ? JSON.parse(data) : null
      // const userNow = await auth
      await updateProfile(user.uid, {
        email: user.email,
        phoneNumber: null,
        emailVerified: true,
        displayName: user.fullname
      })
        .then((res) => {
          console.log('RES', res)
        })
        .catch((err) => {
          console.log('err', err)
        })
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
        const res = await signInWithEmailAndPassword(auth, email, password)
        this.userData = {
          email: res.user.email,
          fullname: res.user.displayName,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified
        }
        const token = res.user.stsTokenManager
        if (res) {
          localStorage.setItem('user', JSON.stringify(this.userData))
          localStorage.setItem('displayName', res.user.displayName)
          localStorage.setItem('token', token.accessToken)
          localStorage.setItem('tokenExpiration', token.expirationTime)
          router.push('/')
        }
      } catch (error) {
        console.log(error)
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
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
        router.push('/login')
      } catch (error) {
        console.log(error)
      }
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
    isTokenExpired() {
      const token = localStorage.getItem('token')
      if (!token) {
        return true // Token not set, consider it expired
      }

      const expirationTimestamp = +localStorage.getItem('tokenExpiration') * 1000 // Convert seconds to milliseconds

      return Date.now() >= expirationTimestamp
    },
    isAuthenticated() {
      const token = localStorage.getItem('token')

      return !!token
    },
    async autoLogout() {
      if (this.isTokenExpired) {
        try {
          await signOut(auth)
          this.userData = null
          this.setLoggedIn(false)
          localStorage.removeItem('user')
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
})
