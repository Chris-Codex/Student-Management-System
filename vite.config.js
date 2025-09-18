import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
   theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],   // default body
        poppins: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [react(), tailwindcss(),],
})
