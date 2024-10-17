import products from '../data/products.json'
import { useStorage } from '@vueuse/core'

import {defineStore} from 'pinia'
export const useCartStore =defineStore({
    id: 'cart-store',
    state:()=>{
        return{
            products: products.data,
            cart:[],
            abc:{}
        }
    },
    actions:{
        addToCart(payload) {
          console.log('jemin')
            const product = this.products.find(item => item.id === payload.id)
            const cartItems = this.cart.find(item => item.id === payload.id)
            const qty = payload.quantity ? payload.quantity : 1
            if (cartItems) {
              cartItems.quantity = qty
            } else {
              this.cart.push({
                ...product,
                quantity: qty
              })
            }
            product.stock--
          },
          updateCartQuantity( payload)  {
            function calculateStockCounts(product, quantity) {
              const qty = product.quantity + quantity
              const stock = product.stock
              if (stock < qty) {
                return false
              }
              return true
            }
            this.cart.find((items, index) => {
              if (items.id === payload.product.id) {
                const qty = this.cart[index].quantity + payload.qty
                const stock = calculateStockCounts(this.cart[index], payload.qty)
                if (qty !== 0 && stock) {
                  this.cart[index].quantity = qty
                } else {
                  // state.cart.push({
                  //   ...product,
                  //   quantity: qty
                  // })
                }
                return true
              }
            })
          },
          removeCartItem(payload) {
            this.cart = this.cart.filter((item)=>item.id!=payload.id)


          },
          setInitialCart(payload){
            this.cart = payload
          }
    },
    getters:{
        cartItems: (state) => {
            return state.cart
          },
          cartTotalAmount: (state) => {
            return state.cart.reduce((total, product) => {
              return total + (product.price * product.quantity)
            }, 0)
          }
    }
})















