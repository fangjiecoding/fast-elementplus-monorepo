<template>
  <section class="menu-demo">
    <header class="menu-demo__header">
      <div>
        <h1>导航菜单</h1>
      </div>
      <label class="menu-demo__toggle">
        <span>折叠菜单</span>
        <el-switch v-model="collapsed" />
      </label>
    </header>

    <div class="menu-demo__content">
      <article class="menu-demo__panel">
        <h2>基础菜单</h2>
        <MMenu
          :data="basicMenuData"
          :default-active="basicActive"
          :collapse="collapsed"
          @select="basicActive = $event"
        />
        <p class="menu-demo__active">
          当前选中：<code>{{ basicActive }}</code>
        </p>
      </article>

      <article class="menu-demo__panel">
        <h2>无限层级菜单</h2>
        <MInfiniteMenu
          :data="infiniteMenuData"
          :default-active="infiniteActive"
          :collapse="collapsed"
          @select="infiniteActive = $event"
        />
        <p class="menu-demo__active">
          当前选中：<code>{{ infiniteActive }}</code>
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  MInfiniteMenu,
  MMenu,
  type MenuItem
} from 'fast-elementplus-components'

const collapsed = ref(false)
const basicActive = ref('/menu')
const infiniteActive = ref('/components/menu/infinite')

const basicMenuData: MenuItem[] = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Grid',
    name: '组件示例',
    index: '/components',
    children: [
      {
        icon: 'Menu',
        name: '导航菜单',
        index: '/menu'
      },
      {
        icon: 'Document',
        name: '表单组件',
        index: '/form'
      }
    ]
  },
  {
    icon: 'Setting',
    name: '系统设置',
    index: '/settings'
  }
]

const infiniteMenuData: MenuItem[] = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Grid',
    name: '组件示例',
    index: '/components',
    children: [
      {
        icon: 'Menu',
        name: '导航菜单',
        index: '/components/menu',
        children: [
          {
            icon: 'Document',
            name: '基础用法',
            index: '/components/menu/basic'
          },
          {
            icon: 'FolderOpened',
            name: '无限层级',
            index: '/components/menu/infinite',
            children: [
              {
                icon: 'ArrowRight',
                name: '第三级菜单',
                index: '/components/menu/infinite/third'
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.menu-demo {
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;

    h1 {
      margin: 0 0 8px;
      font-size: 24px;
    }

    p {
      margin: 0;
      color: var(--el-text-color-secondary);
    }
  }

  &__toggle {
    display: flex;
    flex: none;
    align-items: center;
    gap: 8px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 24px;
  }

  &__panel {
    flex: 1;
    min-width: 240px;
    padding: 20px;
    border: 1px solid var(--el-border-color);
    border-radius: 8px;

    h2 {
      margin: 0 0 16px;
      font-size: 18px;
    }

    :deep(.el-menu) {
      border-right: none;
    }
  }

  &__active {
    margin: 16px 0 0;
    color: var(--el-text-color-secondary);
    overflow-wrap: anywhere;
  }
}
</style>
