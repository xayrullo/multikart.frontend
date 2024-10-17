<template>
  <div>
    <section class="tools_product">
      <div class="container">
        <div class="row multiple-slider">
          <div class="col-xl-3 col-lg-4 col-md-12">
            <div class="theme-card">
              <h5 class="title-border">{{ category[1] }}</h5>
              <div class="offer-slider slide-1 tools-slider">
                <swiper  :loop="true" :navigation="true"   class="swiper-wrapper" >
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
                </swiper>
              </div>
            </div>
          </div>

          <div class="col-xl-9 col-lg-8 col-md-12 tools-grey">
            <div class="theme-tab">
              <div class="tabs">
                <div class>
                  <ul class="nav nav-tabs" id="top-tab" role="tablist">
                    <li class="nav-items">
                      <a class="nav-link" data-bs-toggle="tab" href="#new">
                        ON SALE</a>
                    </li>
                    <li class="nav-items">
                      <a class="nav-link" href="#best" data-bs-toggle="tab">
                        NEW PRODUCT</a>
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="top-tabContent">
                  <div id="new" class="tab-pane fade show active">
                    <div class="no-slider">
                      <div class="row g-sm-4 g-3">
                        <div class="col-xxl-3 col-md-4 col-6"
                          v-for="(product, index) in getCategoryProduct(category[0]).splice(0, 4)" :key="index">
                          <div class="product-box">
                            <ProductBoxProductBox7 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                              @openquickview="showquickview"   @alertseconds="alert" :product="product"
                              :index="index" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="best" class="tab-pane fade">
                    <div class="no-slider">
                      <div class="row g-sm-4 g-3">
                        <div class="col-xxl-3 col-md-4 col-6"
                          v-for="(product, index) in getCategoryProduct(category[1]).splice(0, 4)" :key="index">
                          <div class="product-box">
                            <ProductBoxProductBox7 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                              @openquickview="showquickview"   @alertseconds="alert" :product="product"
                              :index="index" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="banner-tools">
              <img :src="imagepath" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useProductStore } from '~~/store/products';
export default {
  props: ['products', 'category'],
  components: {
     Swiper, SwiperSlide
  },
  data() {
    return {
      imagepath: '/images/tools/banner.jpg',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,

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
    },
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price
    }
  }
}
</script>
