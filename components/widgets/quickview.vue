<template>
  <div>
    <div class="modal-backdrop fade show" v-if="openModal"></div>

    <div class="modal fade show d-block bd-example-modal-lg theme-modal" id="quick-view" aria-hidden="true"
      tabindex="-1" role="dialog" aria-labelledby="modal-cartLabel" v-if="openModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content quick-view-modal">
          <div class="modal-body">
            <button class="close btn-close" type="button" @click="closeCompare(false)">
              <span>×</span>
            </button>
            <div class="row quickview-modal">
              <div class="col-lg-6 col-12">
                <div class="quick-view-img">
                  <swiper   class="swiper-wrapper">
                    <swiper-slide class="swiper-slide" v-for="(imag, index) in productData.images" :key="index">
                      <img :src="getImgUrl(imag.src)" :id="imag.image_id" class="img-fluid bg-img" alt="imag.alt" />
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
              <div class="col-lg-6 rtl-text">
                <div class="product-right">
                  <h2>{{ productData.title }}</h2>
                  <h3 v-if="productData.sale">
                    {{ curr.symbol }}{{ discountedPrice(productData) }}
                    <del>{{ (productData.price * curr.curr).toFixed(2) }}</del>
                  </h3>
                  <h3 v-else>{{ (productData.price * curr.curr).toFixed(2) }}</h3>
                  <ul class="color-variant" v-if="productData.variants[0].color">
                    <li v-for="(variant, variantIndex) in Color(productData.variants)" :key="variantIndex">
                      <a :class="[variant]" v-bind:style="{ 'background-color': variant }"></a>
                    </li>
                  </ul>
                  <div class="product-description border-product" v-if="productData.variants[0].size">
                    <h6 class="product-title">select size</h6>
                    <div class="size-box">
                      <ul>
                        <li v-for="(variant, variantIndex) in Size(productData.variants)" :key="variantIndex">
                          <a href="javascript:void(0)">{{ variant }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="border-product">
                    <h6 class="product-title">product details</h6>
                    <p>{{ productData.description.substring(0, 250) + "...." }}</p>
                  </div>
                  <div class="product-buttons">
                    <a href="javascript:void(0)" @click="addToCart(product)" class="btn btn-solid">add to cart</a>
                    <nuxt-link :to="{ path: '/product/sidebar/' + productData.id }" class="btn btn-solid">view
                      detail</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';

import { useProductStore } from '~~/store/products'
import { useCartStore } from '~~/store/cart'
export default {
   components: {
    SwiperSlide, Swiper
  },
  props: ['openModal', 'productData'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      }
    }
  },
 
  computed: {
    curr() {
      return useProductStore().currency
    }
  },
  methods: {
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    closeCompare(val) {

      this.$emit('closeView', val)


    },
    // Display Unique Size
    Size(variants) {
      const uniqSize = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqSize.indexOf(variants[i].size) === -1) {
          uniqSize.push(variants[i].size)
        }
      }
      return uniqSize
    },
    // add to cart
    addToCart: function (product) {
      useCartStore().addToCart(product)
    },
    // Get Image Url
    getImgUrl(path) {
      return ('/images/' + path)
    },
    // Display Sale Price Discount
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price
    }
  }
}
</script>
