import products from '../data/products.json'
import { defineStore } from "pinia";
export const useFilterStore = defineStore({
    id: 'filter-store',
    state:()=>{
        return{
            productslist: products.data,
            products: products.data,
            tagItems: [],
            filteredProduct: [],
            paginate: 12,
            pages: [],
            priceArray: []
        }
    },
    getters:{
        filterbyCategory: (state) => {
            const category = [...new Set(state.products.map(product => product.type))]
            return category
          },
          filterbyBrand: (state) => {
            const brands = [...new Set(state.filteredProduct.map(product => product.brand))]
            return brands
          },
          filterbycolor: (state) => {
            const uniqueColors = []
            state.filteredProduct.filter((product) => {
              product.variants.filter((variant) => {
                if (variant.color) {
                  const index = uniqueColors.indexOf(variant.color)
                  if (index === -1) uniqueColors.push(variant.color)
                }
              })
            })
            return uniqueColors
          },
          filterbysize: (state) => {
            const uniqueSize = []
            state.filteredProduct.filter((product) => {
              product.variants.filter((variant) => {
                if (variant.size) {
                  const index = uniqueSize.indexOf(variant.size)
                  if (index === -1) uniqueSize.push(variant.size)
                }
              })
            })
            return uniqueSize
          },
          filterProducts: (state) => {
            return state.filteredProduct.filter((product) => {
              if (!state.tagItems.length) return true
              const Tags = state.tagItems.some((prev) => { // Match Tags
                if (product.tags) {
                  if (product.tags.includes(prev)) {
                    return prev
                  }
                }
              })
              return Tags
            })
          }
    },
    actions:{
        getCategoryFilter(payload){
            this.filteredProduct = []
            this.tagItems = []
            this.products.filter((product) => {
              if (payload === product.type) {
                this.filteredProduct.push(product)
                this.priceArray = this.filteredProduct
              }
              if (payload === 'all' || payload === undefined) {
                this.filteredProduct.push(product)
                this.priceArray = this.filteredProduct
              }
            })
          },
          priceFilter(payload){
            this.filteredProduct = []
            this.priceArray.find((product) => {
              if (product.price >= payload[0] && product.price <= payload[1]) {
                this.filteredProduct.push(product)
              }
            })
          },
          setTags(payload)  {
            this.tagItems = payload
          },
          sortProducts(payload)  {
            if (payload === 'a-z') {
              this.filteredProduct.sort(function (a, b) {
                if (a.title < b.title) {
                  return -1
                } else if (a.title > b.title) {
                  return 1
                }
                return 0
              })
            } else if (payload === 'z-a') {
              this.filteredProduct.sort(function (a, b) {
                if (a.title > b.title) {
                  return -1
                } else if (a.title < b.title) {
                  return 1
                }
                return 0
              })
            } else if (payload === 'low') {
              this.filteredProduct.sort(function (a, b) {
                if (a.price < b.price) {
                  return -1
                } else if (a.price > b.price) {
                  return 1
                }
                return 0
              })
            } else if (payload === 'high') {
              this.filteredProduct.sort(function (a, b) {
                if (a.price > b.price) {
                  return -1
                } else if (a.price < b.price) {
                  return 1
                }
                return 0
              })
            }
          }
    }
}) 