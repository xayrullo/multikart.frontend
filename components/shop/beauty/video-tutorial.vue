<template>
  <div>
    <section class="video-section section-b-space">
      <div class="title1">
        <h4>{{ subtitle }}</h4>
        <h2 class="title-inner1">{{ title }}</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div class="video-img">
              <img :src="imagepath" alt class="img-fluid" />
              <div class="play-btn" data-bs-toggle="modal" data-bs-target="#modal-1">
                <span>
                  <i class="fa fa-play" aria-hidden="true"></i>
                </span>
              </div>
              <div class="modal fade " id="modal-1" aria-hidden="true" tabindex="-1" role="dialog"
                aria-labelledby="modal-cartLabel">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                  <div class="modal-content">

                    <iframe src="https://www.youtube.com/embed/FRIDLxM8Roc" allowfullscreen width="100%"
                      height="400"></iframe>

                  </div>
                </div>
              </div>
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
      title: 'Product tutorial',
      subtitle: 'special offer',
      imagepath: '/images/beauty/video_1.jpg',
      videolink: 'https://www.youtube.com/embed/FRIDLxM8Roc'
    }
  }
}
</script>
