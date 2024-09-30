import './assets/index.css'
import '@mdi/font/css/materialdesignicons.css'
import 'flag-icons/css/flag-icons.min.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/composables/i18n'

import App from './App.vue'
import router from './router'
import Aura from '@primevue/themes/aura'

// Import components
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Tooltip from 'primevue/tooltip'
import Menu from 'primevue/menu'
import Popover from 'primevue/popover'
import Dropdown from 'primevue/dropdown'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

// Declare components
app.component('Button', Button)
app.component('Avatar', Avatar)
app.component('Menu', Menu)
app.component('Popover', Popover)
app.component('Dropdown', Dropdown)

// Declare directives
app.directive('tooltip', Tooltip)

app.mount('#app')
