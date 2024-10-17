<template>
  <div>
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="slide-6 no-arrow">
              <swiper 
                :breakpoints="swiperOption.breakpoints"
                :slidesPerView="3"
                
                :freeMode="true"
                
                :modules="modules"
                class="swiper-wrapper"
                >
                  <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <div>
                      <div class="logo-block text-center">
                        <a href="#">
                          <nuxt-img :src="item.imagepath" alt="" sizes="sm:50vw md:50vw lg:400px"/>
                        </a>
                      </div>
                    </div>
                  </swiper-slide>
                  </swiper>
            </div>
          </div>
        </div>
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

      
import 'swiper/css/free-mode';

import { FreeMode } from "swiper"
export default {
    components: { Swiper, SwiperSlide },
  
  setup(){
    
    return{
      modules: [FreeMode]
    }
  },
  data() {
    return {
      swiperOption: {
       
        breakpoints: {
          1199: {
            slidesPerView: 6
          },
          768: {
            slidesPerView: 4
          },
          420: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2,
          }
        }
      },
      items: [
        {
          imagepath: '/images/logos/1.png'
        },
        {
          imagepath: '/images/logos/2.png'
        },
        {
          imagepath: '/images/logos/3.png'
        },
        {
          imagepath: '/images/logos/4.png'
        },
        {
          imagepath: '/images/logos/5.png'
        },
        {
          imagepath: '/images/logos/6.png'
        },
        {
          imagepath: '/images/logos/7.png'
        },
        {
          imagepath: '/images/logos/8.png'
        }
      ]
    }
  },

}
</script>
