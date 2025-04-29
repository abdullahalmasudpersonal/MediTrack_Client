import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
 server: {
  host: true, // এইভাবে LAN IP-তে bind করবে
  port: 5173, // চাইলে port-ও নির্ধারণ করতে পারেন
 },
 plugins: [vue(), vueJsx(), vueDevTools()],
 resolve: {
  alias: {
   '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
 },
})
