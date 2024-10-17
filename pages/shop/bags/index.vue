<template>
<div>
  
    <HeaderHeader3 />
    <ShopBagsSlider />
    <ShopBagsCategorytab :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopBagsCategory />
    <ShopBagsBanner />
    <ShopBagsProductcategoryslider :products="products" :category="category" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopBagsServices />
    <ShopBagsCategory2 />
    <ShopBagsProductslider :products="products" @openQuickview="showQuickview" @openCompare="showCoampre" @openCart="showCart" />
    <ShopBagsBlog :blog="blog" />
    <ShopBagsInstagram />
    <FooterFooter3 />
    <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal"/>
    <WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <CartModalCartLeftModel :openCart="showcartmodal" @closeCart="closeCart" />
    <WidgetsNewsletterPopup />
</div>
</template>

<script >
import { mapState } from 'pinia'
import { useProductStore } from '~~/store/products'
import {
    useBlogStore
} from '~~/store/blog'

export default {

  data() {
    return {
      blog:[],
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
        productslist: 'productslist'
      }),
      ...mapState(useBlogStore,{
          bloglist: 'bloglist'
        }),
    },
 
  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === 'bags') {
          this.products.push(item)
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
    },
    blogArray: function () {
      this.bloglist.map((item) => {
        if (item.type === 'bags') {
          this.blog.push(item)
          
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
    showCart(item) {
      this.showcartmodal = item
    },
    closeCart(item) {
      this.showcartmodal = item
    },
    closeViewModal(item){
        this.showquickviewmodel= item
      }
  },
   mounted() {
    this.productsArray()
    this.blogArray()
  },
}
</script>
