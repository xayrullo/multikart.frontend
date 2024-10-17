<template>
  <client-only>
    <Lightbox :imgs="image" :visible="visible" :index="index" @hide="handleHide">
    </Lightbox>
  </client-only>


</template>
<script>
import Lightbox from 'vue-easy-lightbox'

export default {
  props: ['index', 'image', 'visible'],
  components: {
    Lightbox
  },

  methods: {
    handleHide() {
      this.$emit('close')
    },
  }
}
</script> 