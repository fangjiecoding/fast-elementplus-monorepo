import type { App, Plugin } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import menu from './menu'
import './styles/index.scss'

const components: Plugin[] = [menu]

const installer = {
  install(app: App) {
    components.forEach((item) => {
      app.use(item)
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
} satisfies Plugin

export * from './menu'
export default installer
