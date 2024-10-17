// // import bootstrap from '../bootstrap/dist/js/bootstrap.bundle'
import bootstrap from '@/node_modules/bootstrap/dist/js/bootstrap.bundle'
// import Toaster from "@meforma/vue-toaster";
// import globalMixin from '~~/composables/functions.js'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap)
    // nuxtApp.provide('globalMixin',globalMixin)
   
})