<template>
  <div>
    <!-- product slider-->
    <section class="ratio_square">
      <div class="container">
        <div class="row partition3 partition_3">
          <div class="col-lg-4">
            <div class="theme-card card-border">
              <h5 class="title-border">{{ category[0] }}</h5>
              <div class="offer-slider slide-1">
                <swiper :loop="true" :navigation="true" :modules="modules" :slidesPerView="1" class="swiper-wrapper">
                  <swiper-slide class="swiper-slide">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(category[0]).splice(0, 4)"
                        :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                            <h6>{{ product.title }}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ curr.symbol }}{{ discountedPrice(product) }}
                            <del>{{ (product.price * curr.curr).toFixed(2) }}</del>
                          </h4>
                          <h4 v-else>{{ curr.symbol }}{{ (product.price * curr.curr).toFixed(2) }}</h4>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide" v-if="getCategoryProduct(category[0]).length >= 5">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(category[0]).splice(4, 4)"
                        :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                            <h6>{{ product.title }}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ curr.symbol }}{{ discountedPrice(product) }}
                            <del>{{ (product.price * curr.curr).toFixed(2) }}</del>
                          </h4>
                          <h4 v-else>{{ curr.symbol }}{{ (product.price * curr.curr).toFixed(2) }}</h4>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </div>
                  <div class="swiper-button-next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </swiper>
              </div>
            </div>
          </div>
          <div class="col-lg-4 center-slider border-0">
            <div>
              <div class="title2">
                <h4>on sale</h4>
                <h2 class="title-inner2">{{ category[1] }}</h2>
              </div>
              <div class="offer-slider slide-1">
                <swiper :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
                  <swiper-slide class="swiper-slide"
                    v-for="(product, index) in getCategoryProduct(category[1]).splice(0, 4)" :key="index">
                    <div>
                      <div class="product-box product-wrap">
                        <ProductBoxProductBox3 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                          @openquickview="showquickview"   @alertseconds="alert" :product="product"
                          :index="index" />
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-prev">
                  </div>
                  <div class="swiper-button-next">
                  </div>
                </swiper>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="theme-card card-border">
              <h5 class="title-border">{{ category[2] }}</h5>
              <div class="offer-slider slide-1">
                <swiper :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
                  <swiper-slide class="swiper-slide">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(category[2]).splice(0, 4)"
                        :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                            <h6>{{ product.title }}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ curr.symbol }}{{ discountedPrice(product) }}
                            <del>{{ (product.price * curr.curr).toFixed(2) }}</del>
                          </h4>
                          <h4 v-else>{{ curr.symbol }}{{ (product.price * curr.curr).toFixed(2) }}</h4>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide class="swiper-slide" v-if="getCategoryProduct(category[2]).length >= 5">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(category[2]).splice(4, 5)"
                        :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                            <h6>{{ product.title }}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ curr.symbol }}{{ discountedPrice(product) }}
                            <del>{{ (product.price * curr.curr).toFixed(2) }}</del>
                          </h4>
                          <h4 v-else>{{ curr.symbol }}{{ (product.price * curr.curr).toFixed(2) }}</h4>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-button-prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </div>
                  <div class="swiper-button-next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- product slider end-->
</template>

<script>
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useProductStore } from "~~/store/products";
export default {
  components: { Swiper, SwiperSlide },

  setup() {

    return {
      modules: [Navigation]
    }
  },
  props: ['products', 'category'],
 
  data() {
    return {
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  computed: {

    curr() {
      return useProductStore().changeCurrency
    }
  },
  methods: {
    getImgUrl(path) {
      return ('/images/' + path)
    },
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
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      this.$emit('alertseconds', this.dismissCountDown)
    },
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price
    }
  },
}
</script>
