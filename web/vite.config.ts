import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// Set SINGLE=1 to inline the whole app into one self-contained index.html
// (useful for a shareable, host-anywhere preview build).
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.SINGLE ? [viteSingleFile()] : []),
  ],
})
