import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    portxy: {
      '/api': 'http://localhost:8000' //backend server

    }
  },
  plugins: [react()],
})
