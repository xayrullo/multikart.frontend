<template>
    <!-- product slider -->
    <section>
        <div class="container">
            <div class="row multiple-slider">
                <div class="col-lg-3 col-sm-6" v-for="(collection, index) in category" :key="index">
                    <div class="theme-card">
                        <h5 class="title-border">{{ collection }}</h5>
                        <div class="offer-slider slide-1">
                            <swiper  :navigation="true" :modules="modules" class="swiper-wrapper">
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
                                <swiper-slide class="swiper-slide" v-if="getCategoryProduct(collection).length >= 4">
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
                                <!-- <div class="swiper-button-prev">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                </div>
                                <div class="swiper-button-next">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div> -->
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- product slider end -->
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
    props: ['products', 'category'],

    components: {
        Swiper, SwiperSlide,
    },
      setup() {
        return {
            modules: [Navigation],
        };
    },
    methods: {
        getImgUrl(path) {
            return '/images/' + path
        },
        getCategoryProduct(collection) {
            return this.products.filter((item) => {
                if (item.collection.find(i => i === collection)) {
                    return item
                }
            })
        }
    },
  
}
</script>
