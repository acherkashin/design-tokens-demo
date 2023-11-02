import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true,
    })
  ],
})
