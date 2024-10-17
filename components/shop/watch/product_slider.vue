<template>
  <div>
    <section class="ratio_square">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="title4">
              <h2 class="title-inner4">{{ title }}</h2>
              <div class="line">
                <span></span>
              </div>
            </div>
            <swiper  :loop="true" :breakpoints="swiperOption.breakpoints" :slidesPerView="5" :spaceBetween="20"
              class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
                <div class="product-box product-wrap">
                  <ProductBoxProductBox4 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                    @openquickview="showquickview"   @alertseconds="alert" :product="product"
                    :index="index" />
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
export default {
  props: ['products'],
  components: {
     Swiper, SwiperSlide
  },
  data() {
    return {
      title: 'trending products',
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
        freeMode: true,
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
            slidesPerView: 2
          },
        }
      }
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
