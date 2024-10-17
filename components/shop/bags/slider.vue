<template>
  <!-- Home slider -->
  <section class="p-0">
    <div class="slide-1 home-slider">
      <swiper  :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">
        <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
          <div class="home text-center p-center" :class="item.alignclass"
            v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="slider-contain">
                    <div>
                      <h4>{{ item.title }}</h4>
                      <h1>{{ item.subtitle }}</h1>
                      <nuxt-link :to="'/collection/leftsidebar/all'" class="btn btn-solid">Save up to 50%
                        off</nuxt-link>
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
components: { Swiper, SwiperSlide },

  setup() {

    return {
      modules: [Navigation]
    }
  },
  data() {
    return {

      items: [
        {
          imagepath: ('/images/home-banner/1.jpg'),
          title: 'summer sale',
          subtitle: 'the bag',
          alignclass: 'p-center'
        },
        {
          imagepath: ('/images/home-banner/1.jpg'),
          title: 'summer sale',
          subtitle: 'the bag',
          alignclass: 'p-center'
        },
     
      ]
    }
  },
}
</script>
