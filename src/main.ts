import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

// Vuetify
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import { VTreeview } from 'vuetify/labs/VTreeview'

import router from '@/router'
import App from '@/app.vue'

const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
  console.error('ERR: ', err)
  console.log('INSTANCE: ', instance)
  console.info('INFO: ', info)
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  components: {
    ...components,
    VTreeview,
  },
  directives,
})

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
