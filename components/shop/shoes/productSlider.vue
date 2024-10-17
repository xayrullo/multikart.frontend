<template>
  <div>
    <section class="section-b-space pt-0 ratio_asos">
      <div class="container">
        <div class="title3">
          <h4>{{ subtitle }}</h4>
          <h2 class="title-inner3">{{ title }}</h2>
          <div class="line"></div>
        </div>
        <div class="row">
          <div class="col">
            <div class="product-4 product-m no-arrow">
              <swiper  :breakpoints="swiperOption.breakpoints" :slidesPerView="4" :spaceBetween="20"
                class="swiper-wrapper">
                <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
                  <div class="product-box">
                    <ProductBoxProductBox2 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"   @alertseconds="alert" :product="product"
                      :index="index" />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
export default {
  props: ['products'],
  components: {
     Swiper, SwiperSlide
  },
  data() {
    return {
      title: 'special Products',
      subtitle: 'Our collection',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 2,
          }
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  },
  methods: {
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.$emit('openCart', this.showCart)
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
      this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    }
  }
}
</script>
