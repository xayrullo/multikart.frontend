<template>
<div class="tools-bg">
    <HeaderHeader5 />
    <ShopToolsSlider />
    <ShopToolsService />
    <ShopToolsAbout />
    <ShopToolsCategory />
    <ShopToolsProductSlider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopToolsSelectVehical :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopToolsProductTabSlider :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopToolsLogo_slider />
    <FooterFooter5 />
    <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal"/>
    <WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <CartModalPopup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="products" />
    <WidgetsNewsletterPopup />
</div>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "~~/store/products";

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
      productslist: 'productslist',
    }),
   
  },

  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'tools') {
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
