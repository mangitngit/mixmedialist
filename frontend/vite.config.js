import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['appserver.home'], // allow your hostname
    host: true,                       // listen on all interfaces (optional)
    port: 5173                        // or your custom port
  }
})
