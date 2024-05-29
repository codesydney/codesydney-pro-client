import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    'process.env': {
      VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
    },
  },
})
