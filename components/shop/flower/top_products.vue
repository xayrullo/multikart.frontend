<template>
  <div>
    <section class="section-b-space">
      <div class="full-box">
        <div class="container">
          <div class="title4">
            <h2 class="title-inner4">
              {{ title }}
            </h2>
            <div class="line">
              <span></span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="theme-card center-align">
                <div class="offer-slider">
                  <div class="sec-1">
                    <div v-for="(product, index) in products.slice(0, 2)" :key="index" class="product-box2">
                      <div class="media">
                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                          <img :id="product.id"
                            :src="getImgUrl(product.vImage ? product.vImage : product.images[0].src)"
                            class="img-fluid bg-img" :alt="product.title" />
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
                          <ul class="color-variant">
                            <li v-for="(variant, index) in Color(product.variants)" :key="index">
                              <a :class="[variant]" v-bind:style="{ 'background-color': variant }"
                                @click="productColorchange(variant, product)"></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 center-slider">
              <div>
                <div class="offer-slider">
                  <div>
                    <div class="product-box product-wrap" v-for="(product, index) in products.slice(2, 3)" :key="index">
                      <ProductBoxProductBox4 @opencartmodel="showCartModal" @showCompareModal="showcomparemodal"
                        @openquickview="showquickview"   @alertseconds="alert" :product="product"
                        :index="index" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="theme-card center-align">
                <div class="offer-slider">
                  <div class="sec-1">
                    <div class="product-box2" v-for="(product, index) in products.slice(3, 5)" :key="index">
                      <div class="media">
                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                          <img :src="getImgUrl(product.vImage ? product.vImage : product.images[0].src)"
                            :id="product.id" class="img-fluid bg-img" alt="product.title" />
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
                          <ul class="color-variant">
                            <li v-for="(variant, index) in Color(product.variants)" :key="index">
                              <a @click="productColorchange(variant, product)" :class="[variant]"
                                v-bind:style="{ 'background-color': variant }"></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { useProductStore } from '~~/store/products'
export default {
  props: ['products'],
  components: {
  },
  data() {
    return {
      title: 'Fresh Flowers For your love',
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
        freeMode: true
      }
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
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    productColorchange(color, product, index) {
      product.variants.map((item) => {
        if (item.color === color) {
          product.images.map((img) => {
            if (img.image_id === item.image_id) {
              this.productslist[index].vImage = img.src
            }
          })
        }
      })
    },
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price
    },
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
