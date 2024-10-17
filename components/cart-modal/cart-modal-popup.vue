<template>
    <div></div>
    <div>

        <div class="modal-backdrop fade show" v-if="openCart"></div>

        <div class="modal fade show d-block bd-example-modal-lg theme-modal cart-modal" id="modal-cart"
            aria-hidden="true" tabindex="-1" role="dialog" aria-labelledby="modal-cartLabel" v-if="openCart">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body modal1">
                        <div class="container-fluid p-0">
                            <div class="row cart-modal">
                                <div class="col-lg-12 position-relative">
                                    <div class="modal-bg addtocart">
                                        <div class="modal-header"><h5 class="modal-title">Sheer Straight Kurta</h5><button type="button" class="btn-close" aria-label="Close"></button></div>trim dress
                                        <button class="close btn-close" type="button" @click="closeCart(openCart)">
                                            <span>x</span>
                                        </button>
                                        <div class="media">
                                            <a href="#">
                                                <img :src="getImgUrl(productData.images[0].src)" class="img-fluid"
                                                    :alt="productData.images[0].alt" />
                                            </a>
                                            <div class="media-body align-self-center text-center">
                                                <a href="#">
                                                    <h6>
                                                        <i class="fa fa-check"></i>Item
                                                        <span>{{ productData.title }}</span>
                                                        <span> successfully added to your Cart.</span>
                                                    </h6>
                                                </a>
                                                <div class="buttons d-flex justify-content-center">
                                                    <nuxt-link :to="{ path: '/page/account/cart' }"
                                                        class="btn-sm btn-solid mr-2">View Cart</nuxt-link>
                                                    <nuxt-link :to="{ path: '/page/account/checkout' }"
                                                        class="btn-sm btn-solid mr-2">Checkout</nuxt-link>
                                                    <nuxt-link :to="{ path: '/' }" class="btn-sm btn-solid">Continue
                                                        Shopping</nuxt-link>
                                                </div>
                                                <div class="upsell_payment">
                                                    <img alt="" class="img-fluid w-auto mt-3"
                                                        src="/images/payment_cart.png">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-section">
                                            <div class="col-12 product-upsell text-center">
                                                <h4>Customers who bought this item also.</h4>
                                            </div>
                                            <div class="row upsell_product">
                                                <div v-for="(product, index) in cartRelatedProducts(productData.collection[0], productData.id).slice(0, 4)"
                                                    :key="index" class="product-box col-sm-3 col-6">
                                                    <div class="img-wrapper">
                                                        <div class="front">
                                                            <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                                                                <img :src='getImgUrl(product.images[0].src)'
                                                                    class="img-fluid" :alt="product.title" />
                                                            </nuxt-link>
                                                        </div>
                                                        <div class="product-detail">

                                                            <h6>
                                                                <nuxt-link
                                                                    :to="{ path: '/product/sidebar/' + product.id }">
                                                                    <span>{{ product.title }}</span>
                                                                </nuxt-link>
                                                            </h6>
                                                            <h4 v-if="product.sale">{{ curr.symbol }}{{
                                                                discountedPrice(product)
                                                            }}
                                                                <del>{{ (product.price * curr.curr).toFixed(2) }}</del>
                                                            </h4>
                                                            <h4 v-else>{{ curr.symbol }}{{ (product.price *
                                                                curr.curr).toFixed(2)
                                                            }}</h4>
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
    </div>
</template>

<script>
import {
    mapState,

} from 'pinia'
import { useProductStore } from '~~/store/products'
export default {
    props: ['openCart', 'productData', 'products', 'category'],
    emits:['closeCart'],
    computed: {
        ...mapState(useProductStore, {
            currency: 'currency'
        }),
        curr() {
            return useProductStore().changeCurrency
        }
    },
    watch: {
        openCart: {
            handler(newValue, oldValue) {
            },
            deep: true
        }
    },
    methods: {
        // Get Image Url
        getImgUrl(path) {
            return ('/images/' + path)
        },
        closeCart(val) {
            val = false
            this.$emit('closeCart', val)
        },
        cartRelatedProducts(collection, id) {
            return this.products.filter((item) => {
                if (item.collection.find(i => i === collection)) {
                    if (item.id !== id) {
                        return item
                    }
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
