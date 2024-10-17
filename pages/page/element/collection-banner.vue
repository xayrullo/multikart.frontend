<template>
<Header/> 
  <div>
    <WidgetsBreadcrumbs title="Collection Element" />
    <section class="pb-0 ratio2_1">
      <div class="container">
        <div class="row partition2">
          <div class="col-md-6" v-for="(item, index) in items" :key="index">
            <nuxt-link :to="'/collection/leftsidebar/all'">
              <div class="collection-banner p-right text-center">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt />
                </div>
                <div class="contain-banner">
                  <div>
                    <h4>{{ item.subtitle }}</h4>
                    <h2>{{ item.title }}</h2>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="banner-goggles ratio2_3">
      <div class="container">
        <div class="row g-sm-4 g-2 partition3">
          <div class="col-md-4" v-for="(item, index) in items2" :key="index">
            <a href="#">
              <div class="collection-banner p-right text-center">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt />
                </div>
                <div class="contain-banner banner-3">
                  <div>
                    <h4>{{ item.subtitle }}</h4>
                    <h2>{{ item.title }}</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <h5 class="card-header">Classes</h5>
              <div class="card-body">
                <h5>Add class with collection-banner</h5>
                <h5>contain-align - .text-left, .text-center, .text-end</h5>
                <h5>contain-position - .p-left, .p-center, .p-right</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>
<script type="text/javascript">

export default {
  data() {
    return {
      items: [
        {
          imagepath: '/images/sub-banner1.jpg',
          title: 'men',
          subtitle: 'save 30%'
        },
        {
          imagepath: '/images/sub-banner2.jpg',
          title: 'women',
          subtitle: 'save 60%'
        }
      ],
      items2: [
        {
          imagepath: '/images/electronics/5.jpg',
          title: 'speaker',
          subtitle: '30% off'
        },
        {
          imagepath: '/images/electronics/6.jpg',
          title: 'earplug',
          subtitle: 'save 60%'
        },
        {
          imagepath: '/images/electronics/7.jpg',
          title: 'best deal',
          subtitle: 'save 55%'
        }
      ]
    }
  }
}
</script>
