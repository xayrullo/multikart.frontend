<template>
  <div>
    <HeaderHeader8 />
    <ShopPetsSlider />
    <ShopPetsLogoSlider />
    <ShopPetsCollectionBanner />
    <ShopPetsTopCollection
      :products="products"
      :category="category"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />
    <ShopPetsParallaxBanner />
    <ShopPetsProductSlider
      :products="products"
      @openQuickview="showQuickview"
      @openCompare="showCoampre"
      @openCart="showCart"
    />
    <ShopPetsBlog :blog="blog" />
    <FooterFooter7 />
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
    <CartModalCartRightModel :openCart="showcartmodal" @closeCart="closeCart" />
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

  beforeMount() {
    if (process.client) {
      document.documentElement.style.setProperty("--theme-deafult", "#ff9944");
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.documentElement.style.removeProperty("--theme-deafult");
    }
  },
  methods: {
    productsArray: function() {
      this.productslist.map((item) => {
        if (item.type === "pets") {
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
        if (item.type === 'pets') {
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
