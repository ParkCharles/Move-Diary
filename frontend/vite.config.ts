import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT || '3000')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  define: {
    'process.env': {} // 일부 라이브러리 호환용
  }
})