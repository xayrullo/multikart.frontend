<template>
    <section class="authentication-page section-b-space">
        <div class="container">
            <section class="search-block">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <form class="form-header">
                                <div class="input-group">
                                    <input type="text" class="form-control" v-model="searchString"
                                        placeholder="Search Products.....">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import {
    mapState
} from 'pinia'
import {
    useProductStore
} from '~~/store/products'

export default {

    data() {
        return {
            searchString: ''
        }
    },
    watch: {
        searchString() {
            useProductStore().searchProduct(this.searchString)
        }
    },
    computed: {
        ...mapState(useProductStore, {
            searchItems: 'searchProducts'
        })
    },

}
</script>
