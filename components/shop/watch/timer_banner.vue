<template>
  <div>
    <section>
      <div class="container">
        <div class="row banner-timer" v-bind:style="{ 'background-image': 'url(' + imagepath + ')' }">
          <div class="col-md-6">
            <div class="banner-text">
              <h2 v-html="offer_text"></h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="timer-box">
              <WidgetsTimer date="December 20, 2023"></WidgetsTimer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagepath: '/images/offer-banner.jpg',
      offer_text: 'Save <span>30% off</span> Digital Watch'
    }
  },
  components: {
    
  }
}
</script>
