<template>
<Header/>
  <div>
   <WidgetsBreadcrumbs title="collection"/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-t-space portfolio-section portfolio-padding metro-section port-col">
              <MasonryWall :items="products"  :padding="16"  :column-width="300" :gap="15" class="row">
                <template #default="{item , index}" >
                  <div class="col m-0 isotopeSelector item">
                  <div class="product-box">
                    <div class="img-wrapper">
                      <div class="front">
                        <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                          <img
                            :src="getImgUrl(item.images[0].src)"
                            :id="item.id"
                            class="img-fluid bg-img"
                            :alt="item.title"
                            :key="index"
                          />
                        </nuxt-link>
                      </div>
                      <div class="cart-info cart-wrap">
                        <button
                          data-toggle="modal"
                          data-target="#addtocart"
                          title="Add to cart"
                          @click="addToCart(item)"
                         
                          variant="primary"
                        >
                          <i class="ti-shopping-cart"></i>
                        </button>
                        <nuxt-link :to="{ path: '/page/account/wishlist'}">
                          <i
                            class="ti-heart"
                            aria-hidden="true"
                            @click="addToWishlist(item)"
                          ></i>
                        </nuxt-link>
                        <a
                          href="javascript:void(0)"
                          title="Quick View"
                          @click="showQuickview(item)"
                         
                          variant="primary"
                        >
                          <i class="ti-search" aria-hidden="true"></i>
                        </a>
                        <a
                          href="javascript:void(0)"
                          title="Comapre"
                          @click="showCoampre(item)"
                          
                          variant="primary"
                        >
                          <i class="ti-reload" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-detail">
                      <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                        <h6>{{item.title}}</h6>
                      </nuxt-link>
                      <h4>{{currency.symbol}}{{ item.price * currency.curr  }}</h4>
                    </div>
                  </div>
                  </div>
                </template>
              </MasonryWall>
          </div>
        </div>
      </div>
    </div>
    <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal"/>
    <WidgetsComparePopup
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    />
  </div>
  <Footer />
</template>
<script setup> 
import MasonryWall from '@yeger/vue-masonry-wall'
import { useProductStore } from '~~/store/products';
import { useCartStore } from '~~/store/cart';
import { storeToRefs } from 'pinia'
 let {productslist,currency} = storeToRefs(useProductStore()) 
      let products= [],
      cartval= false,
      showquickviewmodel= ref(false),
      showcomparemodal= ref(false),
      quickviewproduct= {},
      comapreproduct= {};

    productsArray();
  
    function getImgUrl(path) {
      return ('/images/' + path)
    }
    
    function productsArray() {
      productslist.value.map((item) => {
        if (item.type === 'metro') {
          products.push(item)
        }
      })
    }

    function showQuickview(productData) {
      showquickviewmodel.value = true
      quickviewproduct = productData
    }
    function closeViewModal(){
      showquickviewmodel.value = false
    }
    function showCoampre(productData) {
      showcomparemodal.value = true
      comapreproduct = productData
    }

   function  closeCompareModal(item) {
      showcomparemodal.value = false
    }

    function addToWishlist(product) {
      useProductStore().addToWishlist(product)
    }

    function addToCart(product) {
      useCartStore().addToCart(product)
    }


</script>
