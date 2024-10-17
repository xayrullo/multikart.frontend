<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="slide-6 no-arrow">
              <swiper :breakpoints="swiperOption.breakpoints" :slidesPerView="6" :spaceBetween="0" :loop="true"  class="swiper-wrapper" >
                  <swiper-slide class="swiper-slide" v-for="(item, index) in  items" :key="index">
                    <!-- <div> -->
                      <div class="logo-block text-center">
                        <a href="#">
                          <img :src="item.imagepath" alt />
                        </a>
                      <!-- </div> -->
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

<script>
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import 'swiper/css';
export default {
   components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
       
        breakpoints: {
          1199: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 4
          },
          420: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2
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
