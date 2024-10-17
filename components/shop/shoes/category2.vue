<template>
  <!-- category 2 -->
  <section class="p-0 ratio2_1">
    <div class="container-fluid">
      <div class="row g-sm-4 g-3 category-border">
        <div class="col-sm-4 border-padding" v-for="(item, index) in items" :key="index">
          <div class="category-banner">
            <div>
              <img :src="item.imagepath" class="img-fluid bg-img" alt="">
            </div>
            <div class="category-box">
              <a href="#">
                <h2>{{ item.title }}</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- category 2 end -->
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imagepath: '/images/cat1.png',
          title: 'men'
        },
        {
          imagepath: '/images/cat2.png',
          title: 'women'
        },
        {
          imagepath: '/images/cat3.png',
          title: 'kids'
        }
      ]
    }
  }
}
</script>
