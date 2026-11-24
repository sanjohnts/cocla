import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' keeps asset paths relative, so dist/ also works from a sub-folder.
export default defineConfig({
  plugins: [react()],
  base: './',
})
