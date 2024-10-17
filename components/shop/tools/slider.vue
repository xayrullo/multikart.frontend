<template>
  <div>
    <section id="tool-bg" class="p-0 height-85 tools_slider">
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
                        <h4>{{ item.subtitle }}</h4>
                        <h1>{{ item.title }}</h1>
                        <a href="#" class="btn btn-solid">shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tools-parts" id="tool-1">
                  <img :src="item.imagetool1" class="img-fluid" alt />
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
import { Navigation } from "swiper";
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {

      items: [
        {
          imagepath: '/images/home-banner/49.jpg',
          imagetool1: '/images/tools/1.png',
          title: 'Auto parts',
          subtitle: 'welcome to tools',
          alignclass: 'p-left'
        },
        {
          imagepath: '/images/home-banner/50.jpg',
          imagetool1: '/images/tools/3.png',
          title: 'car body parts',
          subtitle: 'save 15% off',
          alignclass: 'p-left'
        }
      ]
    }
  },
  
}
</script>
