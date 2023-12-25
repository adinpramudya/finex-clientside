import axios from 'axios'
import { defineStore } from 'pinia'
const BASE_API = 'https://api.finexkomoditi.id/v1'
export const useDataStore = defineStore('dataStore', {
  state: () => ({
    products: [],
    posts: [],
    contact: null,
    galeries: [],
    isFetchingData: false
  }),

  actions: {
    async retrieveAllProduct(params = null) {
      this.isFetchingData = true
      await axios
        .get(`${BASE_API}/products/${params ? params : ''}`)
        .then(async (res) => {
          this.products = await res.data.data
        })
        .catch((err) => {
          console.log('error', err)
        })
    },
    async retrieveContact() {
      this.isFetchingData = true
      await axios
        .get(`${BASE_API}/contacts`)
        .then(async (res) => {
          this.contact = await res.data.data[0]
        })
        .catch((err) => {
          console.log('error', err)
        })
    },
    async retrieveGalleries() {
      this.isFetchingData = true
      await axios
        .get(`${BASE_API}/galleries`)
        .then(async (res) => {
          this.galeries = await res.data.data
        })
        .catch((err) => {
          console.log('error', err)
        })
    },
    async retrieveAPosts(params = null) {
      this.isFetchingData = true
      await axios
        .get(`${BASE_API}/posts?status=publish${params ? params : ''}`)
        .then(async (res) => {
          this.posts = await res.data.data
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
  },

  getters: {
    getProduct(state) {
      return state.products
    }
  }
})
