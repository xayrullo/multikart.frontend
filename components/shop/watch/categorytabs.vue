<template>
  <div>
    <section class="p-0">
      <div class="tab-bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="title4">
                <h2 class="title-inner4">{{ title }}</h2>
                <div class="line">
                  <span></span>
                </div>
              </div>
              <div class="theme-tab">
                <div class="tabs">
                  <div class>
                    <ul class="nav nav-tabs" id="top-tab" role="tablist">
                      <li class="nav-items">
                        <a class="nav-link" href="#best" data-bs-toggle="tab">
                          BEST SELLERS</a>
                      </li>
                      <li class="nav-items">
                        <a class="nav-link" href="#feature" data-bs-toggle="tab">
                          FEATURED PRODUCT</a>
                      </li>
                      <li class="nav-items">
                        <a class="nav-link" data-bs-toggle="tab" href="#new">
                          ON SALE</a>
                      </li>
                    </ul>
                  </div>

                  <div class="tab-content" id="top-tabContent">
                    <div id="new" class="tab-pane fade">
                      <div class="row product-tab">
                        <div class="tab-box" v-for="(product, index) in getCategoryProduct(category[0])" :key="index">
                          <div class="product-box2">
                            <div class="media">
                              <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                                <img :src="getImgUrl(product.images[0].src)" class="img-fluid bg-img" alt />
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
                                    <a :class="[variant]" v-bind:style="{ 'background-color': variant }"></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="best" class="tab-pane fade show active">
                      <div class="row product-tab">
                        <div class="tab-box" v-for="(product, index) in getCategoryProduct(category[1])" :key="index">
                          <div class="product-box2">
                            <div class="media">
                              <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                                <img :src="getImgUrl(product.images[0].src)" class="img-fluid bg-img" alt />
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
                                    <a :class="[variant]" v-bind:style="{ 'background-color': variant }"></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="feature" class="tab-pane fade">
                      <div class="row product-tab">
                        <div class="tab-box" v-for="(product, index) in getCategoryProduct(category[2])" :key="index">
                          <div class="product-box2">
                            <div class="media">
                              <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                                <img :src="getImgUrl(product.images[0].src)" class="img-fluid bg-img" alt />
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
                                    <a :class="[variant]" v-bind:style="{ 'background-color': variant }"></a>
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import { useProductStore } from '~~/store/products'
export default {
  props: ['products', 'category'],
  data() {
    return {
      title: 'trending products'
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
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price
    }
  }
}
</script>
