import type { App, Plugin } from 'vue'
import Menu from './src/index.vue'
import InfiniteMenu from './src/menu'
import './global'

// 同时支持 app.use()、具名导入和全局组件类型提示。
const installer = {
  install(app: App) {
    app.component('m-menu', Menu)
    app.component('m-infinite-menu', InfiniteMenu)
  }
} satisfies Plugin

export { Menu, InfiniteMenu, Menu as MMenu, InfiniteMenu as MInfiniteMenu }
export type { MenuItem } from './src/types'
export type MenuProps = InstanceType<typeof Menu>['$props']
export type InfiniteMenuProps = InstanceType<typeof InfiniteMenu>['$props']

export default installer
