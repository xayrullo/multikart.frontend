<template>
    <div>
        <!-- slider tab  -->
        <section class="section-b-space ratio_square">
            <div class="container">
                <div class="title2">
                    <h4>{{ subtitle }}</h4>
                    <h2 class="title-inner2">{{ title }}</h2>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="theme-tab">
                            <div class="tabs">
                                <div class>
                                    <ul class="nav nav-tabs" id="top-tab" role="tablist">
                                        <li class="nav-items">
                                            <a class="nav-link active" href="#new" data-bs-toggle="tab">
                                                NEW ARRIVAL</a>
                                        </li>
                                        <li class="nav-items">
                                            <a class="nav-link" href="#best" data-bs-toggle="tab">
                                                TRENDING PRODUCT</a>
                                        </li>
                                        <li class="nav-items">
                                            <a class="nav-link" href="#feature" data-bs-toggle="tab">
                                                BEST SELLERS</a>
                                        </li>

                                    </ul>

                                </div>
                                <div class="tab-content" id="top-tabContent">
                                    <div id="new" class="tab-pane fade show active">
                                        <div class="no-slider">
                                            <div class="row g-sm-4 g-3">
                                                <div class="col-xxl-3 col-md-4 col-6"
                                                    v-for="(product, index) in getCategoryProduct(category[0]).splice(0, 4)"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox3 @opencartmodel="showCartModal"
                                                            @showCompareModal="showcomparemodal"
                                                            @openquickview="showquickview"  
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
                                                    v-for="(product, index) in getCategoryProduct(category[1]).splice(0, 4)"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox3 @opencartmodel="showCartModal"
                                                            @showCompareModal="showcomparemodal"
                                                            @openquickview="showquickview"  
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
                                                    v-for="(product, index) in getCategoryProduct(category[2]).splice(0, 4)"
                                                    :key="index">
                                                    <div class="product-box">
                                                        <ProductBoxProductBox3 @opencartmodel="showCartModal"
                                                            @showCompareModal="showcomparemodal"
                                                            @openquickview="showquickview"  
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
        <!-- slider tab end -->
    </div>
</template>

<script>
export default {
    props: ['products', 'category'],
    components: {
        
    },
    data() {
        return {
            title: 'our collection',
            subtitle: 'special products',
            showCart: false,
            showquickviewmodel: false,
            showcomapreModal: false,
            quickviewproduct: {},
            comapreproduct: {},
            cartproduct: {},
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },

    methods: {
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
        showCartModal(item) {
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
