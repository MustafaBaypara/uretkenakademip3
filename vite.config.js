import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/uretkenakademip3/",
  server: {
    port: 5500, // Bu portu istediğiniz portla değiştirebilirsiniz
  },
})
