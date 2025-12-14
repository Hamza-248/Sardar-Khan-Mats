import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'Sardar-Khan-Mats' with your exact repository name if different.
export default defineConfig({
  base: '/Sardar-Khan-Mats/',
  plugins: [react()],
  // other existing config stays the same
})
