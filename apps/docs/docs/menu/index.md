## 导航菜单

侧边栏菜单,支持无限层级

### 按需引入

```js
// main.ts
import mMenu from "fast-elementplus-components/menu";
import "fast-elementplus-components/menu/style.css";

app.use(mMenu);
```

### 基本用法

<div style='display:flex'>
<m-menu  style='flex:1' :data="data1" defaultActive="/"></m-menu>
<m-infinite-menu  style='flex:1' :data="data2" defaultActive="/"></m-infinite-menu>
</div>

<script  setup>

let data1 = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon',
    children:[
      {
        icon: 'Check',
        name: '图标选择器1',
        index: '/chooseIcon1'
    }
    ]
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend',

  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]

let data2 = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon',
    children:[
      {
        icon: 'Check',
        name: '图标选择器1',
        index: '/chooseIcon1',
         children:[
         {
          icon: 'Check',
          name: '图标选择器2',
          index: '/chooseIcon2',
        }
    ]
      }
    ]
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend',

  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

### 示例代码

```js
<div style='display:flex'>
<m-menu  style='flex:1' :data="data1" defaultActive="/"></m-menu>
<m-infinite-menu  style='flex:1' :data="data2" defaultActive="/"></m-infinite-menu>
</div>

<script  setup>

let data1 = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon',
    children:[
      {
        icon: 'Check',
        name: '图标选择器1',
        index: '/chooseIcon1'
    }
    ]
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend',

  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]

let data2 = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Check',
    name: '图标选择器',
    index: '/chooseIcon',
    children:[
      {
        icon: 'Check',
        name: '图标选择器1',
        index: '/chooseIcon1',
         children:[
         {
          icon: 'Check',
          name: '图标选择器2',
          index: '/chooseIcon2',
        }
    ]
      }
    ]
  },
  {
    icon: 'Location',
    name: '省市区选择',
    index: '/chooseArea'
  },
  {
    icon: 'Sort',
    name: '趋势标记',
    index: '/trend',

  },
  {
    icon: 'Timer',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'TurnOff',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'DArrowRight',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'ScaleToOriginal',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'Setting',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Setting',
    name: '弹出框表单',
    index: '/modalForm'
  },
  {
    icon: 'ShoppingBag',
    name: '表格',
    index: '/table'
  }
]
</script>

```

### Api

#### Props

| 属性          | 说明                    | 类型    | 可选值     | 默认值   |
| :------------ | ----------------------- | ------- | ---------- | -------- |
| data          | 导航菜单数据            | any[]   | 必填项     | -        |
| defaultActive | 默认选中的菜单 index 值 | string  | -          | -        |
| router        | 是否是路由模式          | boolean | true/false | false    |
| name          | 菜单标题的键名          | string  | -          | name     |
| index         | 菜单标识的键名          | string  | -          | index    |
| icon          | 菜单图标的键名          | string  | -          | icon     |
| children      | 菜单子菜单的键名        | string  | -          | children |

继承`element-plus` `menu`组件的所有属性.
