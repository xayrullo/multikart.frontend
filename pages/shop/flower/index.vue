<template>
  <div>
    <HeaderHeader2 />
    <ShopFlowerSlider />
    <ShopFlowerCollection_banner />
    <ShopFlowerTop_products
      :products="products"
      :category="category"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />
    <ShopFlowerCategory_tab :products="products" :category="category" />
    <ShopFlowerProduct_slider
      :products="products"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
     
    />
    <ShopFlowerBlog :blog="blog" />

    <ShopFlowerServices />
    <ShopFlowerInstagram />
    <Footer />
    <WidgetsQuickview
      :openModal="showquickviewmodel"
      :productData="quickviewproduct"
      @closeView="closeViewModal"
    />
    <WidgetsComparePopup
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    />
    <CartModalCartBottomModel :openCart="showcartmodal" @closeCart="closeCart" />
    <WidgetsNewsletterPopup />
  </div>
</template>
<script>

import { mapState } from "pinia";
import { useProductStore } from "~~/store/products";
import { useBlogStore } from "~~/store/blog";

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
      cartproduct: {},
    };
  },
  computed: {
    ...mapState(useProductStore,{
      productslist: 'productslist',
    }),
    ...mapState(useBlogStore,{
          bloglist: 'bloglist'
        }),
  },

  methods: {
    productsArray: function() {
      this.productslist.map((item) => {
        if (item.type === "flower") {
          this.products.push(item);
          item.collection.map((i) => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    blogArray: function () {
      this.bloglist.map((item) => {
        if (item.type === 'watch') {
          this.blog.push(item)
          
        }
      })
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item) {
      this.showcartmodal = item;
    },
    closeCart(item) {
      this.showcartmodal = item;
    },
    closeViewModal(item){
        this.showquickviewmodel= item
      }
    
  },
    mounted() {
    this.productsArray();
    this.blogArray()

  },
};
</script>
