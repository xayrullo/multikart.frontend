<template>
<Header/> 
  <div>
    <WidgetsBreadcrumbs title="Slider Element" />
    <!-- Home slider -->
    <section>
      <div class="slide-1 home-slider">
        <swiper :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
          <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="home text-center" :class="item.alignclass"
              v-bind:style="{ 'back  ground-image': 'url(' + item.imagepath + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4>{{ item.title }}</h4>
                        <h1>{{ item.subtitle }}</h1>
                        <nuxt-link :to="{ path: '/collection/leftsidebar/all' }" class="btn btn-solid">shop
                          now</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

        </swiper>
      </div>
    </section>
    <!-- Home slider end -->
    <div class="container section-b-space section-t-space">
      <div class="row">
        <div class="col">
          <div class="card">
            <h5 class="card-header">Classes</h5>
            <div class="card-body">
              <h5 class="card-title">For Parallax Image - .parallax</h5>
              <h5>contain-align - .text-left, .text-center, .text-end</h5>
              <h5>contain-position - .p-left, .p-center, .p-right</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script type="text/javascript">
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
   setup() {
    return {
      modules: [Navigation],
    };
  },
  components: {
    Swiper, SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: '/images/home-banner/1.jpg',
          title: 'welcome to fashion',
          subtitle: 'women fashion',
          alignclass: 'p-left'
        },
        {
          imagepath: '/images/home-banner/1.jpg',
          title: 'welcome to fashion',
          subtitle: 'men fashion',
          alignclass: 'p-left'
        }
      ]
    }
  },
 
}
</script>
