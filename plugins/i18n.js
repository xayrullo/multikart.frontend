import { createI18n } from 'vue-i18n'
import en from '@/data/en.json'
import fr from '@/data/fr.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en:en,
      fr:fr
    }
  })
  vueApp.use(i18n)
})