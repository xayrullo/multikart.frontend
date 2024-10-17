<template>
<Header/>
  <div>
    <WidgetsBreadcrumbs title="mesonary 4 grid" />
    <section class="filter-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title1">
              <h2 class="title-inner1">portfolio</h2>
            </div>
            <div class="filter-container isotopeFilters">
              <ul class="list-inline filter">
                <li :class="{ active: isActive('all') }">
                  <a href="javascript:void(0)"  @click="updateFilter('all')">All</a>
                </li>
                <li :class="{ active: isActive('fashion') }">
                  <a href="javascript:void(0)" @click="updateFilter('fashion')">Fashion</a>
                </li>
                <li :class="{ active: isActive('bags') }">
                  <a href="javascript:void(0)" @click="updateFilter('bags')">Bags</a>
                </li>
                <li :class="{ active: isActive('shoes') }">
                  <a href="javascript:void(0)" @click="updateFilter('shoes')">Shoes</a>
                </li>
                <li :class="{ active: isActive('watch') }">
                  <a href="javascript:void(0)" @click="updateFilter('watch')">Watch</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio-section portfolio-padding pt-0 port-col zoom-gallery">
      <div class="container">
          <div class="masonry-container isotopeContainer">
          <MasonryWall :items="filteredImages" :ssr-columns="1" :padding="16"  :column-width="300" :gap="15" class="row">
            <template #default="{item}" >
<div class="col m-0 isotopeSelector item">
              <div class="overlay">
                <div class="border-portfolio">
                  <a href="javascript:void(0)">
                    <div class="overlay-background">
                    </div>
                    <img :src="item.imagepath" class="img-fluid" />
                  </a>
                </div>
              </div>
              </div>
              </template>
            </MasonryWall>
          </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import MasonryWall from '@yeger/vue-masonry-wall'
export default {
  components: {
    MasonryWall,
  },
  data() {
    return {
      galleryFilter: 'all',
      imagearray: [
        {
          id: 1,
          title: 'Slim Fit Cotton Shirt',
          alt: 'established',
          filter: 'fashion',
          imagepath: '/images/portfolio/metro/1.jpg'
        },
        {
          id: 2,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          imagepath: '/images/portfolio/metro/2.jpg'
        },
        {
          id: 3,
          title: 'trim dress',
          alt: 'readable',
          filter: 'shoes',
          imagepath: '/images/portfolio/metro/3.jpg'
        },
        {
          id: 4,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: '/images/portfolio/metro/4.jpg'
        },
        {
          id: 5,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: '/images/portfolio/metro/5.jpg'
        },
        {
          id: 6,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: '/images/portfolio/metro/6.jpg'
        },
        {
          id: 7,
          title: 'trim dress',
          alt: 'readable',
          filter: 'bags',
          imagepath: '/images/portfolio/metro/7.jpg'
        },
        {
          id: 8,
          title: 'trim dress',
          alt: 'readable',
          filter: 'watch',
          imagepath: '/images/portfolio/metro/8.jpg'
        }
      ]
    }
  },
  computed: {
    filteredImages: function () {
      if (this.galleryFilter === 'all') {
        return this.imagearray
      } else {
        return this.imagearray.filter(
          data => data.filter === this.galleryFilter
        )
      }
    }
  },

  methods: {
    isActive: function (menuItem) {
      return this.galleryFilter === menuItem
    },
    updateFilter(filterName) {
      this.galleryFilter = filterName
    }
  }
}
</script>
