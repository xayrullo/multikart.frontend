<template>
  <div>
    <div class="title1">
      <h4>{{ subtitle }}</h4>
      <h2 class="title-inner1">{{ title }}</h2>
    </div>
    <section class="pt-0 ratio_asos">
      <div class="container">
        <div class="row">
          <swiper  :breakpoints="swiperOption.breakpoints" :slidesPerView="3" :spaceBetween="20"
            class="swiper-wrapper col">
            <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
              <div class="product-box">
                <ProductBoxProductBox1 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                  @openquickview="showquickview" @alertseconds="alert" :product="product" :index="index" />
              </div>
            </swiper-slide>
          </swiper>
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
      title: 'new products',
      subtitle: 'special offer',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        breakpoints: {
          1367: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1024: {
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
