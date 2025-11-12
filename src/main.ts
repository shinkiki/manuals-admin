import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ko from 'element-plus/es/locale/lang/ko'

createApp(App)
  .use(ElementPlus, { locale: ko }) // 👈 Element Plus + 한국어 적용
  .mount('#app')