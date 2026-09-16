import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import  tailwindcss  from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  oxc: {
    include: /\.(m?ts|[jt]sx|js)$/,
    exclude: [],
    lang: 'jsx',
  },
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
      transform: {
        lang: 'jsx',
      },
    },
  },
  server: {
    host: true,
    allowedHosts: [
      '58da-102-202-74-143.ngrok-free.app',
    ]
  }
})

