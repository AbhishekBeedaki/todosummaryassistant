import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/todosummaryassistant/', // your GitHub repo name
  plugins: [react()],
})
