<template>
  <div>
    <section class="pt-0 padding-bottom-cls">
      <div class="slide-1 home-slider">
        <swiper :loop="true" :navigation="true" :modules="modules"  class="swiper-wrapper">
          <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="home text-center" :class="item.alignclass"
              v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4>{{ item.title }}</h4>
                        <h1>{{ item.subtitle }}</h1>
                        <nuxt-link :to="'/collection/leftsidebar/all'" class="btn btn-solid">shop now</nuxt-link>
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
  </div>
</template>

<script>
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import {
  Navigation
} from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {

      items: [{
        imagepath: ('/images/home-banner/1.jpg'),
        title: 'electronic',
        subtitle: 'flat 40% off',
        alignclass: 'p-left'
      },
      {
        imagepath: ('/images/home-banner/1.jpg'),
        title: 'headphone',
        subtitle: 'save 55% on',
        alignclass: 'p-left'
      }
      ]
    }
  },
  
}
</script>
