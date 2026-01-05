import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <--- ESTO ES VITAL: Asegura que las rutas sean relativas
})
