import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const pagesBase =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName
    ? `/${repositoryName}/playground/`
    : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: pagesBase,
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
