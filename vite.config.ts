import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import ViteProxyServer from './viteUtil/viteProxyServer/vite-plugin-proxy-server';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        VueHooksPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    }),
    // 本地代理服务
    ViteProxyServer()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      pages: path.resolve(__dirname, './src/pages')
    }
  },
  server: {
    proxy: {
      // 使用正则表达式匹配需要代理的路径
      '/api': {
        target: 'http://16.162.117.255:3003',
        changeOrigin: true, // 需要虚拟主机站点
        rewrite: urlpath => urlpath.replace(/^\/api/, '') // 重写路径：移除路径中的 /api
      }
    }
  }
});
