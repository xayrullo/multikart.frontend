<template>
<Header/>
  <div>
    <WidgetsBreadcrumbs title="collection"/>
    <section class="section-b-space ratio_asos">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <WidgetsCollectionSidebar @allFilters="allfilter" @priceVal="pricefilterArray" @categoryfilter="getCategoryFilter" />
            </div>
            <div class="collection-content col">
              <div class="page-main-content">
                <div class="row">
                  <div class="col-12">
                    <div class="top-banner-wrapper">
                      <a href="#">
                        <img src='/images/mega-menu/2.jpg' class="img-fluid" alt />
                      </a>
                      <div class="top-banner-content small-section">
                        <h4>BIGGEST DEALS ON TOP BRANDS</h4>
                        <!-- <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5> -->
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled it to make a type specimen book. It has survived not only five
                          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                          was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.</p>
                      </div>
                    </div>
                    <ul class="product-filter-tags">
                      <li class="me-1" v-for="(tag, index) in allfilters" :key="index">
                        <a href="javascript:void(0)" class="filter_tag">{{ tag }}<i class="ti-close"
                            @click="removeTags(tag)"></i></a>
                      </li>
                      <li class="clear_filter" v-if="allfilters.length > 0"><a href="javascript:void(0)"
                          class="clear_filter" @click="removeAllTags()">Clear all</a></li>
                    </ul>
                    <div class="collection-product-wrapper">
                      <div class="product-top-filter">
                        <div class="row">
                          <div class="col-12">
                            <div class="product-filter-content">
                              <div class="search-count">
                                <h5>Showing Products 1-12 of {{ filterProduct.length }} Result</h5>
                              </div>
                              <div class="collection-view">
                                <ul>
                                  <li @click="gridView()">
                                    <i class="fa fa-th grid-layout-view"></i>
                                  </li>
                                  <li @click="listView()">
                                    <i class="fa fa-list-ul list-layout-view"></i>
                                  </li>
                                </ul>
                              </div>
                              <div class="collection-grid-view">
                                <ul>
                                  <li>
                                    <img src='/images/icon/2.png' @click="grid2()" class="product-2-layout-view" />
                                  </li>
                                  <li>
                                    <img src='/images/icon/3.png' @click="grid3()" class="product-3-layout-view" />
                                  </li>
                                  <li>
                                    <img src='/images/icon/4.png' @click="grid4()" class="product-4-layout-view" />
                                  </li>
                                  <li>
                                    <img src='/images/icon/6.png' @click="grid6()" class="product-6-layout-view" />
                                  </li>
                                </ul>
                              </div>
                              <div class="product-page-filter">
                                <select @change="onChangeSort($event)">
                                  <option value="all">Sorting Items</option>
                                  <option value="a-z">Alphabetically, A-Z</option>
                                  <option value="z-a">Alphabetically, Z-A</option>
                                  <option value="low">price, low to high</option>
                                  <option value="high">price, high to low</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-wrapper-grid" :class="{ 'list-view': listview == true }">
                        <div class="row">
                          <div class="col-12">
                            <div class="text-center section-t-space section-b-space" v-if="filterProduct.length == 0">
                              <img src='/images/empty-search.jpg' class="img-fluid" alt />
                              <h3 class="mt-3">Sorry! Couldn't find the product you were looking For!!!</h3>
                              <div class="col-12 mt-3">
                                <nuxt-link :to="{ path: '/' }" class="btn btn-solid">continue shopping</nuxt-link>
                              </div>
                            </div>
                          </div>
                          <div class="col-grid-box"
                            :class="{ 'col-xl-3 col-md-4 col-6': col4 == true, 'col-md-4 col-6': col3 == true, 'col-6': col2 == true, 'col-xxl-2 col-xl-3 col-md-4 col-6': col6 == true, 'col-12': listview == true }"
                            v-for="(product, index) in filterProduct" :key="index" v-show="setPaginate(index)">
                            <div class="product-box">
                              <ProductBoxProductBox1 @opencartmodel="showCart" @showCompareModal="showCoampre"
                                @openquickview="showQuickview" @alertseconds="alert" :product="product"
                                :index="index" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-pagination mb-0" v-if="filterProduct.length > paginate">
                        <div class="theme-paggination-block">
                          <div class="row">
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <nav aria-label="Page navigation">
                                <ul class="pagination">
                                  <li class="page-item" :class="{ 'disable': current == 1 }">
                                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current - 1)">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                  </li>
                                  <li class="page-item" v-for="(page_index, index) in this.pages" :key="index"
                                    :class="{ 'active': page_index == current }">
                                    <a class="page-link" href="javascrip:void(0)"
                                      @click.prevent="updatePaginate(page_index)">{{ page_index }}</a>
                                  </li>
                                  <li class="page-item" :class="{ 'disable': current == this.paginates }">
                                    <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current + 1)">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <div class="product-search-count-bottom">
                                <h5>Showing Products 1-12 of {{ filterProduct.length }} Result</h5>
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
        </div>
      </div>
    </section>
    <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal" />
    <WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct" @closeCompare="closeCompareModal" />
    <cart-modal-popup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal"
      :products="filterProduct" />
  </div>
  <Footer />
</template>
<script>
import { useProductStore } from '~~/store/products'
import { useFilterStore } from '~~/store/filter'
export default {
  data() {
    return {

      bannerimagepath: '/images/side-banner.png',
      col2: false,
      col3: false,
      col4: true,
      col6: false,
      listview: false,
      priceArray: [],
      allfilters: [],
      items: [],
      current: 1,
      paginate: 12,
      paginateRange: 3,
      pages: [],
      paginates: '',
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,

    }
  },
  computed: {

    filterProduct() {
      return useFilterStore().filterProducts
    },
    tags() {
      return useFilterStore().setTags
    },
    curr() { return useProductStore().changeCurrency }
  },
 
  methods: {
    onChangeSort(event) {
      useFilterStore().sortProducts(event.target.value)
    },
    gridView() {
      this.col4 = true
      this.col2 = false
      this.col3 = false
      this.col6 = false
      this.listview = false
    },
    listView() {
      this.listview = true
      this.col4 = false
      this.col2 = false
      this.col3 = false
      this.col6 = false
    },
    grid2() {
      this.col2 = true
      this.col3 = false
      this.col4 = false
      this.col6 = false
      this.listview = false
    },
    grid3() {
      this.col3 = true
      this.col2 = false
      this.col4 = false
      this.col6 = false
      this.listview = false
    },
    grid4() {
      this.col4 = true
      this.col2 = false
      this.col3 = false
      this.col6 = false
      this.listview = false
    },
    grid6() {
      this.col6 = true
      this.col2 = false
      this.col3 = false
      this.col4 = false
      this.listview = false
    },
    removeTags(val) {
      this.allfilters.splice(this.allfilters.indexOf(val), 1)
    },
    removeAllTags() {
      this.allfilters.splice(0, this.allfilters.length)
    },
    getCategoryFilter() {
      this.updatePaginate(1)
      useFilterStore().getCategoryFilter(this.$route.params.id)
    },
    allfilter(selectedVal) {
      this.allfilters = selectedVal
      useFilterStore().setTags(selectedVal)
      this.getPaginate()
      this.updatePaginate(1)
    },
    pricefilterArray(item) {
      this.getCategoryFilter()
      useFilterStore().priceFilter(item)
      this.getPaginate()
      this.updatePaginate(1)
    },
    getPaginate() {
      this.paginates = Math.round(this.filterProduct.length / this.paginate)
      this.pages = []
      for (let i = 0; i < this.paginates; i++) {
        this.pages.push(i + 1)
      }
    },
    setPaginate(i) {
      if (this.current === 1) {
        return i < this.paginate
      } else {
        return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate))
      }
    },
    updatePaginate(i) {
      this.current = i
      let start = 0
      let end = 0
      if (this.current < this.paginateRange - 1) {
        start = 1
        end = start + this.paginateRange - 1
      } else {
        start = this.current - 1
        end = this.current + 1
      }
      if (start < 1) {
        start = 1
      }
      if (end > this.paginates) {
        end = this.paginates
      }
      this.pages = []
      for (let i = start; i <= end; i++) {
        this.pages.push(i)
      }
      return this.pages
    },
    alert(item) {
      this.dismissCountDown = item
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
    closeViewModal(item) {
      this.showquickviewmodel = item
    }
  },
   mounted() {
    this.updatePaginate(1)
  },

}
</script>
