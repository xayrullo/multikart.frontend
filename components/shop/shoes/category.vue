<template>
  <!-- category -->
  <div class="container" v-cloak>
    <section class="section-b-space border-section border-top-0">
      <div class="row">
        <div class="col">
          <div class="slide-6 no-arrow">
            <clientOnly>
              <swiper v-bind="swiperOption" class="swiper-wrapper">
              <swiper-slide class="swiper-slide" v-for="(item, index) in items" :key="index">
                <div class="category-block">
                  <a href="#">
                    <h5 v-text="item.title"></h5>
                  </a>
                </div>
              </swiper-slide>
            </swiper>
            </clientOnly>

          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- category end -->
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
      items: [
        {
          img: '/images/icon/cat1.png',
          title: 'sport shoes'
        },
        {
          img: '/images/icon/cat2.png',
          title: 'casual shoes'
        },
        {
          img: '/images/icon/cat3.png',
          title: 'formal shoes'
        },
        {
          img: '/images/icon/cat4.png',
          title: 'flat'
        },
        {
          img: '/images/icon/cat5.png',
          title: 'heels'
        },
        {
          img: '/images/icon/cat6.png',
          title: 'boots'
        },
        {
          img: '/images/icon/cat2.png',
          title: 'casual shoes'
        },
        {
          img: '/images/icon/cat3.png',
          title: 'casual shoes'
        }
      ],
      swiperOption: {
        loop: true,
        slideSpeed: 300,
        slidesPerView: 7,
        spaceBetween:10,
        breakpoints: {
          1367: {
            slidesPerView: 5,
            loop: true
          },
          1024: {
            slidesPerView: 4,
            loop: true
          },
          767: {
            slidesPerView: 3,
            loop: true
          },
          480: {
            slidesPerView: 2,
            loop:true
          },
          0: {
            slidesPerView: 2,
            loop:true
          },
        }
      }
    }
  }
}
</script>
