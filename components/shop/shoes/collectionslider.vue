<template>
  <div>
    <!-- product slider -->
    <section class="section-b-space">
      <div class="container">
        <div class="row multiple-slider">
          <div class="col-xl-3 col-lg-4 col-sm-6" v-for="(collection, index) in category" :key="index">
            <div class="theme-card">
              <h5 class="title-border">{{ collection }}</h5>

              <div class="offer-slider slide-1">
                <swiper  :loop="true" :navigation="true" :modules="modules"  class="swiper-wrapper">
                  <swiper-slide class="swiper-slide">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(collection).splice(0, 3)"
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
                  <swiper-slide class="swiper-slide" v-if="getCategoryProduct(collection).length >= 4">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct(collection).splice(3, 3)"
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
        </div>
      </div>
    </section>
    <!-- product slider end -->
  </div>
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
      modules: [Navigation],
    };
  },
  props: ['products', 'category'],
  data() {
    return{}
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
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price
    }
  },
 
}
</script>
