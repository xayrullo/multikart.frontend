<template>
  <div>
    <section class="p-0 gym-slider">
      <div class="slide-1 home-slider">
        <swiper  :loop="true" :navigation="true" :modules="modules"  class="swiper-wrapper">
          <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
            <div class="home text-end" :class="item.alignclass"
              v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4>{{ item.title }}</h4>
                        <h1>{{ item.subtitle }}</h1>
                        <a href="javascript:void(0)" class="btn btn-solid btn-gradient">shop now</a>
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
      modules: [Navigation],
    };
  },
  data() {
    return {

      items: [
        {
          imagepath: '/images/home-banner/43.jpg',
          title: 'summer sale',
          subtitle: 'protein powder',
          alignclass: 'p-right'
        },
        {
          imagepath: '/images/home-banner/44.jpg',
          title: 'save 20% on',
          subtitle: 'protein shake',
          alignclass: 'p-right'
        }
      ]
    }
  },
  
}
</script>
