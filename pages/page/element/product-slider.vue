<template>
<div>
    <WidgetsBreadcrumbs title="Slider Element" />
    <section class="section-b-space ratio_asos">
        <div class="container">
            <div class="row">
                <div class="col">
                    <swiper  :slidesPerView="4" :spaceBetween="20" :breakpoints="swiperOption.breakpoints" class="swiper-wrapper">
                        <swiper-slide class="swiper-slide" v-for="(product,index) in productslist" :key="index">
                            <div class="product-box">
                                <ProductBoxProductBox1 @opencartmodel="showCart" @showCompareModal="showCoampre" @openquickview="showQuickview"   @alertseconds="alert" :product="product" :index="index" />
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>



</section>

<WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal" />
<WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
<cart-modal-popup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="productslist" />
</div>
</template>

<script>
import {
    mapState
} from 'pinia'
import { useProductStore } from '~~/store/products'
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import 'swiper/css';
export default {
    props: ['products'],
    components: {
      Swiper, SwiperSlide,
    },
    data() {
        return {
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
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            swiperOption: {
             
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    420: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }
            }
        }
    },
    computed: {
        ...mapState(useProductStore,{
            productslist: 'productslist'
        })
    },
    methods: {
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
        closeViewModal(item){
        this.showquickviewmodel= item
      }
    }
}
</script>
