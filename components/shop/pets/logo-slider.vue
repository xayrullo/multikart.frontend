<template>
    <div>
        <section class="section-b-space">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="slide-6 no-arrow">
                  <clientOnly>
                    <swiper 
                  :loop="true"
                  :breakpoints="swiperOption.breakpoints" 
                  :slidesPerView="6"
                   class="swiper-wrapper"
                  >  
                  <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <div>
                      <div class="logo-block text-center">
                        <a href="#">
                          <img :src="item.imagepath" alt />
                        </a>
                      </div>
                    </div>
                  </swiper-slide>
</swiper>
                  </clientOnly>
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
export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          420: {
            slidesPerView: 2
          },
          0: {
            slidesPerView: 2
          }
        }
      },
      items: [
        {
          imagepath: '/images/logos/9.png'
        },
        {
          imagepath: '/images/logos/10.png'
        },
        {
          imagepath: '/images/logos/11.png'
        },
        {
          imagepath: '/images/logos/12.png'
        },
        {
          imagepath: '/images/logos/13.png'
        },
        {
          imagepath: '/images/logos/14.png'
        },
        {
          imagepath: '/images/logos/15.png'
        },
        {
          imagepath: '/images/logos/16.png'
        }
      ]
    }
  }
}
</script>
