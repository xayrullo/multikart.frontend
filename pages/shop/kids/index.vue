<template>
<div>
    <Header/>
    <ShopKidsSlider />
    <ShopKidsCollection_banner />
    <ShopKidsProduct_slider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopKidsParallax_banner />
    <ShopKidsCollection_slider :products="products" :category="category" />
    <ShopKidsInstagram />
    <ShopKidsLogo_slider />
    <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal"/>
    <WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <CartModalPopup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products=products :category=category />
    <WidgetsNewsletterPopup />
    <Footer />
</div>
</template>

<script>
import { mapState } from 'pinia'
import { useProductStore } from '~~/store/products'
export default {
  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {}
    }
  },
  computed: {
    ...mapState(useProductStore,{
      productslist:'productslist'
    }),

  },

  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'kids') {
          this.products.push(item)
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
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
  },
    mounted() {
    this.productsArray()

  },
}
</script>
