import {defineNuxtPlugin} from '#app'
import Toast, {POSITION, useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";
// import Vue from 'vue'
// import {VueMasonryPlugin} from 'vue-masonry'
import VueScrollTo from 'vue-scrollto'

// import { VueMasonryPlugin } from 'vue-masonry'
// import MasonryWall from '@yeger/vue-masonry-wall'
const toast = useToast();
// import PayPal from 'vue-paypal-checkout';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast);
    // nuxtApp.vueApp.component("MasonryWall",MasonryWall) 
    nuxtApp.provide('showToast', (params) => toast[params.type||'sucsess'](params.msg||'default', {timeout: params.time||2000, position:params.position||'top-right'}))
    // nuxtApp.provide('showToast', toast)
    // nuxtApp.vueApp.use(VueMasonryPlugin)
    nuxtApp.vueApp.use(VueScrollTo)

})
