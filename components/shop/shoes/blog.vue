<template>
  <!-- blog section -->
  <section class="blog blog-bg section-b-space ratio2_3">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title3">
            <h4>our collection</h4>
            <h2 class="title-inner3">special products</h2>
            <div class="line"></div>
          </div>
          <div class="slide-3 no-arrow">
            <div class="col-md-12">
              <swiper  :breakpoints="swiperOption.breakpoints" :slidesPerView="3" :spaceBetween="20" class="swiper-wrapper">

                  <swiper-slide class="swiper-slide" v-for="(blog,index) in blog" :key="index">
                    <a href="#">
                      <div class="classic-effect">
                        <div>
                          <img :src="getImgUrl(blog.img)" class="img-fluid" alt>
                        </div>
                        <span></span>
                      </div>
                    </a>
                    <div class="blog-details">
                      <h4>{{blog.date}}</h4>
                      <a href="#">
                        <p>{{blog.title}}</p>
                      </a>
                      <hr class="style1">
                      <h6>by: {{blog.author}} , 2 Comment</h6>
                    </div>
                  </swiper-slide>
                  </swiper>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- blog section end -->
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import { mapState } from 'pinia'
import { useBlogStore } from '~~/store/blog';
export default {
   components:{Swiper, SwiperSlide},
  props:['blog'],
  data() {
    return {
      title: 'from the blog',
      subtitle: 'recent story',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          } 
        }
      }
    }
  },
 
  computed: mapState(useBlogStore,{
    bloglist: 'bloglist'
  }),
  methods: {
    getImgUrl(path) {
      return (path)
    }
  }
}
</script>
