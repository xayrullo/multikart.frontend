<template>
  <div>
    <div class="title1 section-t-space">
      <h4>{{ subtitle }}</h4>
      <h2 class="title-inner1">{{ title }}</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="product-para">
            <p class="text-center">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="section-b-space pt-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <swiper  :breakpoints="swiperOption.breakpoints" :slidesPerView="4" :spaceBetween="20"
              class="swiper-wrapper">

              <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
                <div class="product-box">
                  <ProductBoxProductBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                    @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
                </div>
              </swiper-slide>
            </swiper>
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


import 'swiper/css/free-mode';
export default {
  components: {
  Swiper, SwiperSlide,

  },
  props: ['products'],
  data() {
    return {
      title: 'top collection',
      subtitle: 'special offer',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      swiperOption: {
        freeMode: false,
        breakpoints: {
          1200: {
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
      }
    }
  },
  emits:['openCart','openQuickview','openCompare'],
  methods: {
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.cartproduct = productData
      this.$emit('openCart', this.showCart, this.cartproduct)
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
