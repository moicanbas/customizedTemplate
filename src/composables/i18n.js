import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import es from '@/locales/es.json'

const messages = {
  en: en,
  es: es
}

// Obtener el idioma del navegador
const userLocale = navigator.language.split('-')[0]

// Configurar el i18n
const i18n = createI18n({
  locale: userLocale || 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
