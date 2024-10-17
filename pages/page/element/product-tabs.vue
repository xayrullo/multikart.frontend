<template>
    <div>
        <WidgetsBreadcrumbs title="Slider Element" />
        <div class="title1 section-t-space">
            <h4>{{ subtitle }}</h4>
            <h2 class="title-inner1">{{ title }}</h2>
        </div>
        <section class="section-b-space pt-0 ratio_asos">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="theme-tab">
                            <div class="tabs">
                                <div class>
                                    <ul class="nav nav-tabs" id="top-tab" role="tablist">
                                        <li class="nav-items">
                                            <a class="nav-link" href="#new" data-bs-toggle="tab">
                                                NEW PRODUCT</a>
                                        </li>
                                        <li class="nav-items">
                                            <a class="nav-link" href="#best" data-bs-toggle="tab">
                                                BEST SELLERS</a>
                                        </li>
                                        <li class="nav-items">
                                            <a class="nav-link" href="#feature" data-bs-toggle="tab">
                                                FEATURED PRODUCT</a>
                                        </li>
                                        <li class="nav-items">
                                            <a class="nav-link" href="#sale" data-bs-toggle="tab">
                                                ON SALE</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-content" id="top-tabContent">
                                    <div id="new" class="tab-pane fade active show">
                                        <div class="no-slider">
                                            <div class="row g-sm-4 g-3">
                                                <div class="col-xxl-3 col-md-4 col-6"
                                                    v-for="(product, index) in getCategoryProduct(category[0])"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox1 @opencartmodel="showCart"
                                                            @showCompareModal="showCoampre"
                                                            @openquickview="showQuickview"  
                                                            @alertseconds="alert" :product="product" :index="index" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="best" class="tab-pane fade">
                                        <div class="no-slider">
                                            <div class="row g-sm-4 g-3">
                                                <div class="col-xxl-3 col-md-4 col-6"
                                                    v-for="(product, index) in getCategoryProduct(category[1])"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox1 @opencartmodel="showCart"
                                                            @showCompareModal="showCoampre"
                                                            @openquickview="showQuickview"  
                                                            @alertseconds="alert" :product="product" :index="index" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="feature" class="tab-pane fade">
                                        <div class="no-slider">
                                            <div class="row g-sm-4 g-3">
                                                <div class="col-xxl-3 col-md-4 col-6"
                                                    v-for="(product, index) in getCategoryProduct(category[2])"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox1 @opencartmodel="showCart"
                                                            @showCompareModal="showCoampre"
                                                            @openquickview="showQuickview"  
                                                            @alertseconds="alert" :product="product" :index="index" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sale" class="tab-pane fade">
                                        <div class="no-slider">
                                            <div class="row g-sm-4 g-3">
                                                <div class="col-xxl-3 col-md-4 col-6"
                                                    v-for="(product, index) in getCategoryProduct(category[3])"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox1 @opencartmodel="showCart"
                                                            @showCompareModal="showCoampre"
                                                            @openquickview="showQuickview"  
                                                            @alertseconds="alert" :product="product" :index="index" />
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

        <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal" />
        <WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
        <cart-modal-popup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal"
            :products="productslist" />
    </div>
</template>

<script>
import {
    mapState
} from 'pinia'
import { useProductStore } from '~~/store/products'

export default {
   
    data() {
        return {
            products: [],
            category: [],
            title: 'top collection',
            subtitle: 'special offer',
            showquickviewmodel: false,
            showcomparemodal: false,
            showcartmodal: false,
            quickviewproduct: {},
            comapreproduct: {},
            cartproduct: {},
            dismissSecs: 5,
            dismissCountDown: 0,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
        }
    },
    computed: {
        ...mapState(useProductStore, {
            productslist: 'productslist'
        })
    },
 
    methods: {
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
        alert(item) {
            this.dismissCountDown = item
        },
        showQuickview(item, productData) {
            this.showquickviewmodel = item
            this.quickviewproduct = productData
        },
        showCoampre(item, productData) {
            this.showcomparemodal = item
            this.comapreproduct = productData
        },
        closeCompareModal(item) {
            this.showcomparemodal = item
        },
        showCart(item, productData) {
            this.showcartmodal = item
            this.cartproduct = productData
        },
        closeCartModal(item) {
            this.showcartmodal = item
        },
        closeViewModal(item) {
            this.showquickviewmodel = item
        }
    },
       mounted() {
        this.productsArray()
    },
}
</script>
