<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-search">
          <div>
            <img
              alt
              src="/images/icon/layout4/search.png"
              @click="openSearch()"
              class="img-fluid"
            >
            <i class="ti-search" @click="openSearch()"></i>
          </div>
          <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
            <div>
              <span class="closebtn" @click="closeSearch()" title="Close Overlay">x</span>
              <div class="overlay-content">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12">
                      <form>
                        <div class="form-group mb-0">
                          <input
                            type="text"
                            class="form-control"
                            v-model="searchString"
                           
                            placeholder="Search a Product"
                          >
                        </div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button>
                      </form>
                      <ul class="search-results" v-if="searchItems.length">
                        <li v-for="(product,index) in searchItems" :key="index" class="product-box">
                          <div class="img-wrapper">
                            <img
                              :src='getImgUrl(product.images[0].src)'
                              class="img-fluid bg-img"
                              :key="index"
                            />
                          </div>
                          <div class="product-detail">
                            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                              <h6>{{ product.title }}</h6>
                            </nuxt-link>
                            <h4>{{curr.symbol}}{{ (product.price * curr.curr).toFixed(2) }}</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="onhover-div mobile-setting">
          <div>
            <img alt src="/images/icon/layout4/setting.png" class="img-fluid">
            <i class="ti-settings"></i>
          </div>
          <div class="show-div setting">
            <h6>Language</h6>
            <ul class="list-inline">
              <li>
                <Nuxt-link v-for="locale in language" :key="locale.code" @click="setlang(locale.code)" to="javascript:void(0)">
                     {{ locale.name }} 
                </Nuxt-link>
              </li>
             
            </ul>
            <h6>currency</h6>
            <ul class="list-inline">
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('eur', '€')">eur</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('inr', '₹')">inr</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('gbp', '£')">gbp</a>
              </li>
              <li>
                <a href="javascript:void(0)" @click="updateCurrency('usd', '$')">usd</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="onhover-div mobile-cart">
          <div>
            <img alt src="/images/icon/layout4/cart.png" class="img-fluid">
            <i class="ti-shopping-cart"></i>
            <span class="cart_qty_cls">{{cart.length}}</span>
          </div>
          <ul class="show-div shopping-cart" v-if="!cart.length">
            <li>Your cart is currently empty.</li>
          </ul>
          <ul class="show-div shopping-cart" v-if="cart.length">
            <li v-for="(item,index) in cart" :key="index">
              <div class="media">
                <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                  <img alt class="mr-3" :src='getImgUrl(item.images[0].src)'>
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                    <h4>{{item.title}}</h4>
                  </nuxt-link>
                  <h4>
                    <span>{{item.quantity}} x {{ item.price || currency }}</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="#" @click='removeCartItem(item)'>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h5>
                  subtotal :
                  <span>{{ cartTotal || currency }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link :to="{ path: '/page/account/cart'}" :class="'view-cart'">
                  view cart
                </nuxt-link>
                <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'checkout'">
                  checkout
                </nuxt-link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useProductStore } from '~/store/products'
import {useCartStore} from '~/store/cart'
import { mapState } from 'pinia'
export default {
  data() {
    return {
      currencyChange: {},
      search: false,
      searchString: '',
      lang:[
        {
          code:'en',
          name:'English'
        },
        {
          code:'fr',
          name:'French'
        }
      ]
    }
  },
  computed: {
    ...mapState(useProductStore,{
      searchItems: 'searchProducts',      
    }),
    language(){
      return this.lang.filter((lang) => lang.code != this.$i18n.locale)
    },
    ...mapState(useCartStore,{
      // cart:(store)=> store.cartItems,
      cartTotal:(store)=> store.cartTotalAmount,
    }),
    cart(){
      return useCartStore().cartItems
    },
    curr(){  
      return useProductStore().changeCurrency
    }
   
  },
  watch:{
    searchString(){
      useProductStore().searchProduct(this.searchString)
    },
    cart(){
      useCartStore().cartItems
    },
  },
  methods: {
    getImgUrl(path) {
      return ('/images/' + path)
    },
    openSearch() {
      this.search = true
    },
    closeSearch() {
      this.search = false
    },
    searchProduct() {
    },
    removeCartItem: function (product) {
      useCartStore().removeCartItem(product)
      if(this.cart.length==0 && this.$route.name=== 'page-account-checkout'){
        this.$router.replace('/page/account/cart')
      }
    },
    setlang(name){
      this.$i18n.locale = name
    },
    updateCurrency: function (currency, currSymbol) {
      this.currencyChange = { value: currency, symbol: currSymbol }
      useProductStore().changeCurrency2(this.currencyChange)
    }
  },
}
</script>
