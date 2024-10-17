<template>
  <div>
    <div class="row blog-media" v-for="(blog, index) in bloglist" :key="index" v-show="setPaginate(index)">
      <div class="col-xl-6">
        <div class="blog-left">
          <nuxt-link :to="{ path: '/blog/blog-detail' }">
            <img :src="getImgUrl(blog.img)" class="img-fluid" alt />
          </nuxt-link>
        </div>
      </div>
      <div class="col-xl-6">
        <div class="blog-right">
          <div>
            <h6>{{ blog.date }}</h6>
            <nuxt-link :to="{ path: '/blog/blog-detail' }">
              <h4>{{ blog.title }}</h4>
            </nuxt-link>
            <ul class="post-social">
              <li>Posted By : {{ blog.author }}</li>
              <li>
                <i class="fa fa-heart"></i> 5 Hits
              </li>
              <li>
                <i class="fa fa-comments"></i> 10 Comment
              </li>
            </ul>
            <p>{{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="product-pagination border-cls-blog mb-0" v-if="(bloglist.length > paginate)">
      <div class="theme-paggination-block">
        <div class="row">
          <div class="col-12">
            <nav aria-label="Page navigation">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current - 1)">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li class="page-item" v-for="(page_index, index) in pages" :key="index"
                  :class="{ 'active': page_index == current }">
                  <a class="page-link" href="javascrip:void(0)" @click.prevent="updatePaginate(page_index)">{{
                    page_index
                  }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)" @click="updatePaginate(current + 1)">
                    <span aria-hidden="true">
                      <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { storeToRefs } from "pinia"
import { useBlogStore } from "~~/store/blog"

let { bloglist } = storeToRefs(useBlogStore())
let current = ref(1),
  paginate = ref(6),
  paginateRange = ref(3),
  pages = ref([]),
  paginates = ref('')
  getPaginate();
  updatePaginate(1);
function getImgUrl(path) {
  return (path)
}
function getPaginate() {
  paginates.value = Math.round(bloglist.value.length / paginate.value)
  pages.value = []
  for (let i = 0; i < paginates.value; i++) {
    pages.value.push(i + 1)
  }
}
function setPaginate(i) {
  if (current.value === 1) {
    return i < paginate.value
  } else {
    return (
      i >= paginate.value * (current.value - 1) &&
      i < current.value * paginate.value
    )
  }
}
function updatePaginate(i) {
  current.value = i
  let start = ref(0)
  let end = ref(0)
  if (current.value < paginateRange.value - 1) {
    start.value = 1
    end.value = start.value + paginateRange.value - 1
  } else {
    start.value = current.value - 1
    end.value = current.value + 1
  }
  if (start.value < 1) {
    start.value = 1
  }
  if (end.value > paginates.value) {
    end.value = paginates.value
  }
  pages.value = []
  for (let i = start.value; i <= end.value; i++) {
    pages.value.push(i)
  }
  return pages.value
}


</script>
