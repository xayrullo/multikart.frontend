<template>
  <div>
    <section class="section-b-space ratio_portrait">
      <div class="container">
        <div class="row">
          <div class="col">
            <swiper  :loop="true" :breakpoints="swiperOption.breakpoints" :slidesPerView="4" :slideSpeed="300"
              class="swiper-wrapper category-m">
              <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
                <div class="category-wrapper">
                  <div>
                    <div>
                      <img :src="item.imagepath" class="img-fluid bg-img" alt />
                    </div>
                    <h4>{{ item.title }}</h4>
                    <div v-html="item.description">
                    </div>
                    <a href="#" class="btn btn-outline">{{ item.button }}</a>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
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
        slidesPerView: 4,
        freeMode: true,
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 1,
          },
        }
      },
      items: [
        {
          imagepath: '/images/watch/cat1.png',
          title: 'calculator watch',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: '/images/watch/cat2.png',
          title: 'Antimagnetic watch',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: '/images/watch/cat3.png',
          title: 'History of watches',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: '/images/watch/cat4.png',
          title: 'watch models',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        },
        {
          imagepath: '/images/watch/cat1.png',
          title: 'women watch',
          description: '<ul class="category-link"><li><a href="#">Watchmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio watches</a></li><li><a href="#">Citizen Watch</a></li></ul>',
          button: 'view more'
        }
      ]
    }
  }
}
</script>
