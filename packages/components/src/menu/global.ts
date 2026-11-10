import type Menu from './src/index.vue'
import type InfiniteMenu from './src/menu'

declare module 'vue' {
  export interface GlobalComponents {
    MMenu: typeof Menu
    MInfiniteMenu: typeof InfiniteMenu
    'm-menu': typeof Menu
    'm-infinite-menu': typeof InfiniteMenu
  }
}

export {}
