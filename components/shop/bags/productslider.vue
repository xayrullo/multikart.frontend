<template>
  <div>
    <div class="container ratio_square">
      <section class="section-b-space border-section border-top-0">
        <div class="row">
          <div class="col">
            <div class="title2">
              <h4>{{ subtitle }}</h4>
              <h2 class="title-inner2">{{ title }}</h2>
            </div>
            <swiper :breakpoints="swiperOption.breakpoints" :slidesPerView="4" :spaceBetween="20"
              class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
                <div class="product-box product-wrap">
                  <ProductBoxProductBox3 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                    @openquickview="showquickview"   @alertseconds="alert" :product="product"
                    :index="index" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
    </div>
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
  props: ['products'],
  components: {
    Swiper, SwiperSlide
  },
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
      }
    }
  },
  methods: {
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item) {
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
