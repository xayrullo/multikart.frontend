<template>
<Header/>
<div>
    <WidgetsBreadcrumbs title="search" />
    <searched />
    <section class="section-b-space ratio_asos pt-0" v-if="searchItems.length">
        <div class="container">
            <div class="row search-product">
                <div class="col-xl-2 col-md-4 col-sm-6" v-for="(product, index) in searchItems" :key="index">
                    <div class="product-box">
                        {{product.title}}
                        <ProductBoxProductBox1 :product="product" :index="index" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<Footer />
</template>

<script>
import {
    mapState
} from 'pinia'
import {
    useProductStore
} from '~~/store/products'

export default {
    computed: {
        ...mapState(useProductStore, {
            searchItems: 'searchProducts'
        })
    },
}
</script>
