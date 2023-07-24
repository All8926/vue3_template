import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    host: '0.0.0.0',
    // port: viteEnv.VITE_PORT,
    // open: viteEnv.VITE_OPEN,
    cors: true,
    // 跨域代理配置
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:11400',
        // target: 'http://192.168.100.161:30000',
        target: 'http://192.168.28.28:11500',
        // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
