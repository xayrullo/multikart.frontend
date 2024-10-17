
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/xjaloldinov/Documents/works/Samples/multikart.frontend/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "ec7c1548-fe1d-49e7-845c-cc642b858163"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
