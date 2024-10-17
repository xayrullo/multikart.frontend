<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <div class="filter-main-btn" @click="filter = !filter">
                    <button class="filter-btn btn btn-theme">
                        <i class="fa fa-filter" aria-hidden="true"></i> Filter
                    </button>
                </div>
            </div>
        </div>
        <div class="collection-filter" :class="filter ? 'openFilterbar' : ''">
            <div class="collection-filter-block">
                <!-- brand filter start -->
                <div class="collection-mobile-back">
                    <span class="filter-back" @click="filter = !filter">
                        <i class="fa fa-angle-left" aria-hidden="true"></i> back
                    </span>
                </div>
                <div class="collection-collapse-block open">
                    <h3 class="collapse-block-title" @click="live = !live">Category</h3>

                    <div class="collection-collapse-block-content" :style="{ display: live ? 'block' : 'none' }">
                        <div class="collection-brand-filter">
                            <ul class="category-list">
                                <li>
                                    <nuxt-link :to="{ path: '/collection/leftsidebar/all' }">All products</nuxt-link>
                                </li>
                                <li v-for="(category, index) in filterbyCategory" :key="index">
                                    <nuxt-link :to="{ path: '/collection/leftsidebar/' + category }"
                                        @click="getCategoryFilter(category)">{{ category }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <!-- side-bar colleps block stat -->
            <div class="collection-filter-block">
                <!-- brand filter start -->
                <div class="collection-collapse-block open" v-if="filterbyBrand.length">
                    <h3 class="collapse-block-title" @click="live1 = !live1">brand</h3>
                    <div class="collection-collapse-block-content" :style="{ display: live1 ? 'block' : 'none' }">
                        <div class="collection-brand-filter">
                            <div class="form-check collection-filter-checkbox" v-for="(brand, index) in filterbyBrand"
                                :key="index">
                                <input type="checkbox" class="form-check-input" :value="brand" :id="brand"
                                    v-model="applyFilter" @change="appliedFilter(brand)">
                                <label class="form-check-label" v-bind:for="brand">{{ brand }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- color filter start here -->
                <div class="collection-collapse-block open" v-if="filterbycolor.length">
                    <h3 class="collapse-block-title" @click="live2 = !live2">colors</h3>
                    <div class="collection-collapse-block-content" :style="{ display: live2 ? 'block' : 'none' }">
                        <div class="collection-brand-filter color-filter">
                            <div class="custom-control custom-checkbox collection-filter-checkbox p-0"
                                v-for="(color, index) in filterbycolor" :key="index">
                                <input type="checkbox" class="custom-control-input form-check-input" :value="color"
                                    :id="color" v-model="applyFilter" @change="appliedFilter(color)" />
                                <span :class="color" v-bind:style="{ 'background-color': color }"></span>
                                <label class="custom-control-label p-0" :class="{ selected: isActive(color) }"
                                    v-bind:for="color">{{ color }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- size filter start here -->
                <div class="collection-collapse-block border-0 open" v-if="filterbysize.length">
                    <h3 class="collapse-block-title" @click="live3 = !live3">size</h3>
                    <div class="collection-collapse-block-content" :style="{ display: live3 ? 'block' : 'none' }">
                        <div class="color-selector">
                            <div class="collection-brand-filter">
                                <div class="custom-control p-0 custom-checkbox collection-filter-checkbox"
                                    v-for="(size, index) in filterbysize" :key="index">
                                    <input type="checkbox" class="custom-control-input form-check-input" :value="size"
                                        :id="size" v-model="applyFilter" @change="appliedFilter(size)" />
                                    <label class="custom-control-label" v-bind:for="size">{{ size }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- price filter start here -->
                <div class="collection-collapse-block border-0 open">
                    <h3 class="collapse-block-title" @click="live4 = !live4">price</h3>
                    <div class="collection-collapse-block-content" :style="{ display: live4 ? 'block' : 'none' }">
                        <div class="collection-brand-filter price-rangee-picker m-0 mt-3">
                            <input type="range" :min="min" :max="max" v-model="start" class="w-100"
                                @change="sliderChange([min, start])">
                        </div>
                    </div>
                </div>

            </div>
            <!-- side-bar single product slider start -->
            <div class="theme-card">
                <h5 class="title-border">new products
                </h5>
                <div class="offer-slider slide-1">
                    <swiper :loop="false" :navigation="true" :modules="modules" :slidesPerView="1" :spaceBetween="20"
                        @swiper="onSwiper" class="swiper-wrapper">
                        <swiper-slide class="swiper-slide">
                            <div>
                                <div class="media"
                                    v-for="(product, index) in getCategoryProduct('new products').splice(0, 3)"
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
                                            <del>{{ curr.symbol }}{{
                                                product.price * currency.curr ||
                                                    currency(currency.symbol)
                                            }}</del>
                                        </h4>
                                        <h4 v-else>{{ product.price * currency.curr || currency(currency.symbol) }}</h4>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide" v-if="getCategoryProduct('new products').length >= 4">
                            <div>
                                <div class="media"
                                    v-for="(product, index) in getCategoryProduct('new products').splice(3, 3)"
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
                                            {{ curr.symbol }}{{ discountedPrice(product) }} <del>{{
                                                product.price *
                                                    currency.curr || currency(currency.symbol)
                                            }}</del>
                                        </h4>
                                        <h4 v-else>{{ curr.symbol }}{{ (product.price * curr.curr).toFixed(2) }}</h4>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <!-- side-bar single product slider end -->
            <!-- side-bar banner start here -->
            <div class="collection-sidebar-banner">
                <a href="#">
                    <img :src="bannerimagepath" class="img-fluid" />
                </a>
            </div>
            <!-- side-bar banner end here -->
        </div>
        <!-- silde-bar colleps block end here -->
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
import {
    mapState
} from 'pinia'
import {
    useProductStore
} from '~~/store/products'
import {
    useFilterStore
} from '~~/store/filter'

export default {
     setup() {
        return {
            modules: [Navigation],
        };
    },
     components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            min: 0,
            max: 0,
            start: 0,
            bannerimagepath: '/images/side-banner.png',
            selectedcolor: [],
            selectedbrand: [],
            selectedsize: [],
            applyFilter: [],
            activeItem: 'category',
            filter: false,

            active: 'category',
            live: false,
            live1: false,
            live2: false,
            live3: false,
            live4: false
        }
    },
   
    computed: {
        ...mapState(useProductStore, {
            currency: 'currency',
            productslist: 'productslist'
        }),
        curr() {
            return useProductStore().changeCurrency
        },

        filterbyCategory() {
            return useFilterStore().filterbyCategory
        },
        filterbyBrand() {
            return useFilterStore().filterbyBrand
        },
        filterbycolor() {
            return useFilterStore().filterbycolor
        },
        filterbysize() {
            return useFilterStore().filterbysize
        },
        price() {
            return useProductStore().price
        }
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
        },
        handleSlideTo() {
            this.swiper.slideNext();
        },

        getCategoryProduct(collection) {
            return this.productslist.filter((item) => {
                if (item.collection.find(i => i === collection)) {
                    return item
                }
            })
        },

        getImgUrl(path) {
            return ('/images/' + path)
        },
        discountedPrice(product) {
            const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
            return price
        },
        isActive(filterItem) {
            return this.applyFilter.indexOf(filterItem) > -1
        },
        appliedFilter(val) {
            this.$emit('allFilters', this.applyFilter)
        },
        sliderChange(event) {
            this.$emit('priceVal', event)
        },
        toggleSidebarBlock() {
            this.openBlock = !this.openBlock
        },
        getCategoryFilter(category) {
            useFilterStore().getCategoryFilter(category)
        }
    },
   
     mounted() {

        var vm = this,
            max = Math.max(...this.price),
            min = Math.min(...this.price)
        vm.start = max
        vm.min = min,
            vm.max = max
        vm.value = [this.min, this.max]
        this.$emit('priceVal', this.value)
    },
}
</script>
