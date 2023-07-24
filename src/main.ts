import './assets/main.css'

import { createApp } from 'vue'

import store from '@/stores/index'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(router)
app.use(store)

app.mount('#app')
