<template>
  <div>
    <section class="full-banner parallax small-slider tools-parallax-product"
      v-bind:style="{ 'background-image': `url(${imagepath})` }">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="tools-description">
              <div>
                <h3>{{ title }}</h3>
                <div class="tools-form">
                  <div class="search-box">
                    <select class="form-control">
                      <option value>Select Make</option>
                      <option value="1">Audi</option>
                      <option value="2">BMW</option>
                      <option value="3">Fiat</option>
                      <option value="4">Hyndai</option>
                      <option value="5">Skoda</option>
                    </select>
                  </div>
                  <div class="search-box">
                    <select name="model" class="form-control">
                      <option value>Select Model</option>
                    </select>
                  </div>
                  <div class="search-box">
                    <select name="engine" class="form-control">
                      <option value>Select category</option>
                    </select>
                  </div>
                  <div class="search-box">
                    <select name="year" class="form-control">
                      <option value>Select Year</option>
                    </select>
                  </div>
                  <div class="search-button">
                    <a href="#" class="btn btn-solid btn-find">find my part</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-12 tools-grey ratio_square">
            <swiper  :loop="true" :breakpoints="swiperOption.breakpoints" :slidesPerView="4" :spaceBetween="20"
              class="swiper-wrapper" >
              <swiper-slide class="swiper-slide" v-for="(product, index) in products" :key="index">
                <div class="product-box">
                  <ProductBoxProductBox7 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
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
      imagepath: '/images/parallax/21.jpg',
      title: 'select your vehical',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          767: {
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
