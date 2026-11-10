## 快速上手

因为我们当前组件库是基于`element-plus`二次封装的,所以在项目当中必须确保已经安装和正确使用了`element-plus`,[element-plus 安装指南](https://element-plus.org/zh-CN/guide/installation.html)

### 使用指南

1. 在项目目录里安装`fast-elementplus-components`
   - `npm安装: npm i -S fast-elementplus-components`
   - `yarn安装: yarn i -S fast-elementplus-components`
   - `pnpm安装: pnpm i -S fast-elementplus-components`
2. 全局引入
   在`main.ts`文件中写入以下代码:

```js
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import mUI from "fast-elementplus-components";
import "fast-elementplus-components/style.css";
const app = createApp(App);
app.use(ElementPlus);
app.use(mUI);
//...
```

3. 按需引入
   在`main.ts`文件中写入以下代码:

```js
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import mMenu from "fast-elementplus-components/menu";
import "fast-elementplus-components/menu/style.css";
const app = createApp(App);
app.use(ElementPlus);
app.use(mMenu);
//...
```

4. 使用

   具体用法参照以下文档了解具体使用方式
