import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    watch: {
      // Bind mounts do Docker Desktop no Windows não propagam eventos de
      // inotify para o container, então o watcher precisa fazer polling.
      usePolling: true,
    },
  },
})
