# fast-elementplus-components

基于 Vue 3 和 Element Plus 的组件库。本目录是 Monorepo 中的 `fast-elementplus-components` Workspace 包。

## 开发

在仓库根目录启动 playground：

```sh
pnpm dev
```

开发环境通过包的 `development` export 条件直接加载 `src/index.ts`，无需在每次修改后重新构建。

## 构建

```sh
pnpm build:components
```

产物位于 `dist`，包含全量及菜单组件的 ES Module、UMD 和 CSS 文件。

## 使用

```ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import FastElementPlusComponents from 'fast-elementplus-components'
import 'element-plus/dist/index.css'
import 'fast-elementplus-components/style.css'
import App from './App.vue'

createApp(App).use(ElementPlus).use(FastElementPlusComponents).mount('#app')
```

也可以按需引入菜单模块及其样式：

```ts
import Menu from 'fast-elementplus-components/menu'
import 'fast-elementplus-components/menu/style.css'
```

## 类型提示

构建时会通过 `vue-tsc` 从组件源码生成声明文件，包含组件 Props、`MenuItem` 数据类型和 Volar 全局组件类型。正常引入插件后，模板中的 `<m-menu>`、`<m-infinite-menu>` 及其 PascalCase 写法均可获得属性提示和校验。

也可以直接使用具名组件及公开的 Props 类型：

```ts
import {
  MInfiniteMenu,
  MMenu,
  type InfiniteMenuProps,
  type MenuItem,
  type MenuProps
} from 'fast-elementplus-components'

const items: MenuItem[] = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  }
]

const menuProps: MenuProps = {
  data: items,
  defaultActive: '/',
  router: true,
  collapse: false
}
```
