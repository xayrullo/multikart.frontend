<template>
<NuxtLayout >

    <Head>

    </Head>
    <NuxtPage />
</NuxtLayout>
</template>

<script>
import {
    useCartStore
} from '~~/store/cart'
import {
    useProductStore
} from './store/products'
export default {
    mounted() {
        let localstorageCompare = JSON.parse(localStorage.getItem('compare'))
        if (localstorageCompare ?.length) {
            useProductStore().setInitialCompare(localstorageCompare)
        }

        let localstorageWhishlist = JSON.parse(localStorage.getItem('whish'))
        if (localstorageWhishlist ?.length) {
            useProductStore().setInitialWhishlist(localstorageWhishlist)
        }
        let localStorageProducts = JSON.parse(localStorage.getItem('product'))
        if (localStorageProducts ?.length) {
            useCartStore().setInitialCart(localStorageProducts)
        }
        window.addEventListener('beforeunload', (event) => {
            localStorage.setItem('product', JSON.stringify(useCartStore().cart))
            localStorage.setItem('whish', JSON.stringify(useProductStore().wishlist))
            localStorage.setItem('compare', JSON.stringify(useProductStore().compare))

        });

    },
}
</script>
