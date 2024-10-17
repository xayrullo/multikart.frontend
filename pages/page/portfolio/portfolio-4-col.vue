<template>
<Header/>
  <div>
    <WidgetsBreadcrumbs title="Portfolio gallery" />
    <section class="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
      <div class="container">
        <div align="center" id="form1">
          <button class="filter-button project_button" :class="{ active: isActive('all') }" data-filter="all"
            @click="updateFilter('all')">All</button>
          <button class="filter-button project_button" :class="{ active: isActive('fashion') }" data-filter="fashion"
            @click="updateFilter('fashion')">Fashion</button>
          <button class="filter-button project_button" :class="{ active: isActive('bags') }" data-filter="bags"
            @click="updateFilter('bags')">Bags</button>
          <button class="filter-button project_button" :class="{ active: isActive('shoes') }" data-filter="shoes"
            @click="updateFilter('shoes')">Shoes</button>
          <button class="filter-button project_button" :class="{ active: isActive('watch') }" data-filter="watch"
            @click="updateFilter('watch')">Watch</button>
        </div>
        <div class="row zoom-gallery">
          <div class="isotopeSelector filter fashion col-lg-3 col-sm-6" v-for="(item, index) in filteredImages"
            :key="index">
            <div class="overlay">
              <div class="border-portfolio">
                <a href="javascript:void(0)" @click="openGallery(index)">
                  <div class="overlay-background">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                  <img :src="item.src" class="img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <lightBox :index="index" :visible="visible" :image="filteredImages" @closeView="close" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import lightBox from '~~/components/lightBox.vue'
export default {
  components: {
    lightBox
  },
  data() {
    return {
      galleryFilter: 'all',
      visible: false,
      index: 0,
      images: [
        {
          id: 1,
          title: 'Slim Fit Cotton Shirt',
          alt: 'established',
          filter: 'fashion',
          thumb: '/images/portfolio/grid/1.jpg',
          src: '/images/portfolio/grid/1.jpg'
        },
        {
          id: 2,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          thumb: '/images/portfolio/grid/2.jpg',
          src: '/images/portfolio/grid/2.jpg'
        },
        {
          id: 3,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          thumb: '/images/portfolio/grid/3.jpg',
          src: '/images/portfolio/grid/3.jpg'
        },
        {
          id: 4,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: '/images/portfolio/grid/4.jpg',
          src: '/images/portfolio/grid/4.jpg'
        },
        {
          id: 5,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: '/images/portfolio/grid/5.jpg',
          src: '/images/portfolio/grid/5.jpg'
        },
        {
          id: 6,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: '/images/portfolio/grid/6.jpg',
          src: '/images/portfolio/grid/6.jpg'
        },
        {
          id: 7,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          thumb: '/images/portfolio/grid/7.jpg',
          src: '/images/portfolio/grid/7.jpg'
        },
        {
          id: 8,
          title: 'trim dress',
          alt: 'readable',
          filter: 'watch',
          thumb: '/images/portfolio/grid/8.jpg',
          src: '/images/portfolio/grid/8.jpg'
        }
      ]
    }
  },
  computed: {
    filteredImages: function () {
      if (this.galleryFilter === 'all') {
        return this.images
      } else {
        return this.images.filter(data => data.filter === this.galleryFilter)
      }
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.galleryFilter === menuItem
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName
    },
    openGallery(index) {
      this.index = index
      this.visible = true
    },
    close() {
      this.visible = false
    }
  }
}
</script>
