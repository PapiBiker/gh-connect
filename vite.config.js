import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gh-connect/' // 👈 debe coincidir exactamente con el nombre del repo
})
