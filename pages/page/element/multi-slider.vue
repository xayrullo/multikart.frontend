<template>
    <div>
        <WidgetsBreadcrumbs title="Slider Element" />
        <!-- product slider -->
        <section>
            <div class="container">
                <div class="row multiple-slider">
                    <div class="col-lg-3 col-sm-6" v-for="(collection, index) in category" :key="index">
                        <div class="theme-card">
                            <h5 class="title-border">{{ collection }}</h5>
                            <div class="offer-slider slide-1">
                                <swiper  :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
                                    <swiper-slide class="swiper-slide">
                                        <div>
                                            <div class="media"
                                                v-for="(product, index) in getCategoryProduct(collection).splice(0, 3)"
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
                                                    <h4>{{ product.price || currency }}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide"
                                        v-if="getCategoryProduct(collection).length >= 4">
                                        <div>
                                            <div class="media"
                                                v-for="(product, index) in getCategoryProduct(collection).splice(3, 3)"
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
                                                    <h4>{{ product.price || currency }}</h4>
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
        <section class="ratio_square section-b-space">
            <div class="container">
                <div class="row partition3 partition_3">
                    <div class="col-lg-4">
                        <div class="theme-card card-border">
                            <h5 class="title-border">{{ category[0] }}</h5>
                            <div class="offer-slider slide-1">
                                <swiper  :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
                                    <swiper-slide class="swiper-slide">
                                        <div>
                                            <div class="media"
                                                v-for="(product, index) in getCategoryProduct(category[0]).splice(0, 4)"
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
                                                    <h4 v-else>{{ curr.symbol }}{{ (product.price *
        curr.curr).toFixed(2)
}}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide"
                                        v-if="getCategoryProduct(category[0]).length >= 5">
                                        <div>
                                            <div class="media"
                                                v-for="(product, index) in getCategoryProduct(category[0]).splice(4, 4)"
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
                                                    <h4 v-else>{{ curr.symbol }}{{ (product.price *
        curr.curr).toFixed(2)
}}</h4>
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

                                <swiper  :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">

                                    <swiper-slide class="swiper-slide"
                                        v-for="(product, index) in getCategoryProduct(category[1]).splice(0, 4)"
                                        :key="index">
                                        <div>
                                            <div class="product-box product-wrap">
                                                <div class="img-wrapper">
                                                    <div class="lable-block">
                                                        <span class="lable3" v-if="product.new">new</span>
                                                    </div>
                                                    <div class="front">
                                                        <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                                                            <img :src="getImgUrl( product.images[0].src)"
                                                                :id="product.id" class="img-fluid bg-img"
                                                                :alt="product.title" :key="index" />
                                                        </nuxt-link>
                                                    </div>
                                                    <ul class="product-thumb-list">
                                                        <li class="grid_thumb_img active"
                                                            v-for="(image, index) in product.images" :key="index">
                                                            <a href="javascript:void(0);">
                                                                <img :src="getImgUrl(image.src)" alt="'image.alt'" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div class="cart-detail">
                                                        <a href="javascript:void(0)" title="Wishlist">
                                                            <i class="ti-heart" aria-hidden="true"></i>
                                                        </a>
                                                        <a href="javascript:void(0)" title="Quick View">
                                                            <i class="ti-search" aria-hidden="true"></i>
                                                        </a>
                                                        <a href="javascript:void(0)" title="Comapre">
                                                            <i class="ti-reload" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="product-info">
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
                                                    <p>{{ product.description }}</p>
                                                    <h4 v-if="product.sale">
                                                        {{ curr.symbol }}{{ discountedPrice(product) }}
                                                        <del>{{ (product.price * curr.curr).toFixed(2) }}</del>
                                                    </h4>
                                                    <h4 v-else>{{ curr.symbol }}{{ (product.price *
        curr.curr).toFixed(2)
}}</h4>
                                                    <div class="add-btn">
                                                        <button data-toggle="modal" data-target="#addtocart"
                                                            title="Add to cart" class="btn btn-outline">
                                                            <i class="ti-shopping-cart"></i> add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="theme-card card-border">
                            <h5 class="title-border">{{ category[2] }}</h5>
                            <div class="offer-slider slide-1">
                                <swiper   :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
                                    <swiper-slide class="swiper-slide">
                                        <div>
                                            <div class="media"
                                                v-for="(product, index) in getCategoryProduct(category[2]).splice(0, 4)"
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
                                                    <h4 v-else>{{ curr.symbol }}{{ (product.price *
        curr.curr).toFixed(2)
}}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="swiper-slide"
                                        v-if="getCategoryProduct(category[2]).length >= 5">
                                        <div>
                                            <div class="media"
                                                v-for="(product, index) in getCategoryProduct(category[2]).splice(4, 5)"
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
                                                    <h4 v-else>{{ curr.symbol }}{{ (product.price *
        curr.curr).toFixed(2)
                                                        }}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </swiper-slide>

                                </swiper>
                                <div class="swiper-button-prev">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="swiper-button-next">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
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
import {
    mapState,
} from 'pinia'
import { useProductStore } from '~~/store/products'
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
      setup() {
        return {
            modules: [Navigation],
        };
    },
    components: {
        Swiper, SwiperSlide,
    },
    data() {
        return {
            products: [],
            category: [],
        }
    },
    computed: {
        ...mapState(useProductStore, {
            productslist: 'productslist'
        }),

        curr() {
            return useProductStore().changeCurrency
        }
    },
  
    methods: {
        getImgUrl(path) {
            return ('/images/' + path)
        },
        productsArray: function () {
            this.productslist.map((item) => {
                if (item.type === 'fashion') {
                    this.products.push(item)
                    item.collection.map((i) => {
                        const index = this.category.indexOf(i)
                        if (index === -1) this.category.push(i)
                    })
                }
            })
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
  
      mounted() {
        this.productsArray()
    },
}
</script>
