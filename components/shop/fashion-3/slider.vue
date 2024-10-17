<template>
  <div>
    <section class="p-0">
      <div class="slide-1 home-slider">
        <swiper 
        :loop="true" :navigation="true" :modules="modules"
         class="swiper-wrapper"
        >  
            <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4>{{ item.title }}</h4>
                          <h1>{{ item.subtitle }}</h1>
                          <a href class="btn btn-solid">shop now</a>
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
          imagepath: '/images/home-banner/36.jpg',
          title: 'welcome to fashion',
          subtitle: 'women fashion',
          alignclass: 'p-left'
        },
        {
          imagepath: '/images/home-banner/37.jpg',
          title: 'welcome to fashion',
          subtitle: 'top fashion',
          alignclass: 'p-right'
        }
      ]
    }
  },
}
</script>
