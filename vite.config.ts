import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base './' makes asset paths relative, so the built site works on GitHub Pages
// (fransixgram.github.io/francis-portfolio/) as well as on Vercel or Netlify.
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
