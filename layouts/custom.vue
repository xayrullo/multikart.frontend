<template>
  <div>
    <div id="body-content" />
    <WidgetsLayoutSetting />
    <ClientOnly>
      <div class="tap-top top-cls"  :class="top?'d-block':'d-none'" @click="totop">
        <div>
          <i class="fa fa-angle-double-up"></i>
        </div>
      </div>
    </ClientOnly>
    <slot />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'MultiKart Ecommerce | Vuejs Shopping Theme'
    }
  },
 data(){
    return{
      top:false
    }
  },
  methods:{
    totop(){
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handelscroll(){
      if (window.scrollY > 600) {
        this.top = true
  }
  else {
    this.top = false
  }
    }
  },
    mounted(){
       window.addEventListener('scroll', this.handelscroll)
    },
}
</script>