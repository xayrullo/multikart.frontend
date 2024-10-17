import products from '../data/products.json'

import { defineStore } from 'pinia'
export const useProductStore = defineStore({
    id: 'product-store',
    state: () => {
      return {
        
        productslist: products.data,
  products: products.data,
  wishlist: [],
  compare: [],
  currency: {
    value:'usd',
    curr: 1,
    symbol: '$'
  },
  order: [],
  locale: 'en',
  searchProducts: []
      }
    },
    actions: { 
      changeCurrency2(payload) {
      this.currency = payload
      if (this.currency.value === 'eur') {
        this.currency.curr = 0.90
       
      } else if (this.currency.value === 'inr') {
        this.currency.curr = 70.93
      } else if (this.currency.value === 'gbp') {
        this.currency.curr = 0.78
       
      } else if (this.currency.value === 'usd') {
        this.currency.curr = 1
      
      }
    },
    addToWishlist(payload) {
      const product = this.products.find(item => item.id === payload.id)
      const wishlistItems = this.wishlist.find(item => item.id === payload.id)
      if (wishlistItems) {
      } else {
        this.wishlist.push({
          ...product
        })
      }
    },
    setInitialWhishlist(payload){
      this.wishlist = payload
    },
    removeWishlistItem(payload) {
      const index = this.wishlist.indexOf(payload)
      this.wishlist.splice(index, 1)
    },
    addToCompare( payload) {

      const product = this.products.find(item => item.id === payload.id)
      const compareItems = this.compare.find(item => item.id === payload.id)
      if (compareItems) {
      } else {
        this.compare.push({
          ...product
        })
      }
    },
    setInitialCompare(payload){
      this.compare = payload
    },
    removeCompareItem(payload){
      const index = this.compare.indexOf(payload)
      this.compare.splice(index, 1)
    },
    searchProduct(payload)  {
      payload = payload.toLowerCase()
      this.searchProducts = []
      if (payload.length) {
        this.products.filter((product) => {
          if (product.title.toLowerCase().includes(payload)) {
            this.searchProducts.push(product)
          }
        })
      }
    },
    createOrder( payload){
      this.order = payload
    }
  },
    getters: {
      price:(state)=>{
        return state.products.map((product) => {
          if(product.price){
            return product.price
          }
        })
        
      },
      getcollectionProduct: (state) => {
        return collection => state.products.filter((product) => {
          return collection === product.collection
        })
      },
      getProductById: (state) => {
        return id => state.products.find((product) => {
           return product.id ===+id
        })
      },
      compareItems: (state) => {
        return state.compare
      },
      wishlistItems: (state) => {
        return state.wishlist
      },
      changeCurrency: (state) => {
       
        return state.currency
       
      },
      getOrder: (state) => {
        return state.order
      }    },
  })