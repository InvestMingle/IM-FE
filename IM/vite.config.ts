import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/chat/info': {
        target: 'http://localhost:8080',
        ws: true,  // WebSocket 프록시 활성화
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
