<template>
  <div>
    <section class="section-b-space j-box pets-box ratio_square">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="title1 title5">
              <h4>{{ subtitle }}</h4>
              <h2 class="title-inner1">{{ title }}</h2>
              <hr role="tournament6" />
            </div>
            <swiper  :breakpoints="swiperOption.breakpoints" :slidesPerView="4" :spaceBetween="20"
              class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(product, index) in getCategoryProduct(category[0])"
                :key="index">
                <div class="product-box">
                  <ProductBoxProductBox5 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
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
  props: ['products', 'category'],
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
            slidesPerView: 2,
          }
        }
      }
    }
  },
  methods: {
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    },
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
