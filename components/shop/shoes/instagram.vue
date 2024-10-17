<template>
  <!-- instagram section -->
  <section class="instagram section-b-space ratio_square">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h2 class="title-borderless"># instagram</h2>
          <div class="slide-5 no-arrow slick-instagram">
            <swiper :breakpoints="swiperOption.breakpoints" :slidesPerView="7" :spaceBetween="0" :loop="true" class="swiper-wrapper">
              <swiper-slide v-for="(item, index) in image" :key="index">
                <!-- <div> -->
                <a href="#">
                  <div class="instagram-box">
                    <img :src="getImgUrl(item.img)" alt="Avatar" class="bg-img" style="width:100%">
                    <div class="overlay">
                      <i class="fa fa-instagram"></i>
                    </div>
                  </div>
                </a>
                <!-- </div> -->
              </swiper-slide>

            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- instagram section end -->
</template>

<script>
import images from '@/data/instagram.json'
import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
export default {
  components: {
    Swiper, SwiperSlide,
  },
  data() {
    return {
      image: images.fashion,
      swiperOption: {

        breakpoints: {
          1367: {
            slidesPerView: 7
          },
          1024: {
            slidesPerView: 5
          },
          600: {
            slidesPerView: 4
          },
          0: {
            slidesPerView: 3
          }
        }
      },
      instagram: []
    }
  },
  methods: {
    getImgUrl(path) {
      return ('/images/slider/' + path)
    }
  }
}
</script>