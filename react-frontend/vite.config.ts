import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
   build: { outDir: 'build' },
   // Amikor Dockert használok OPEN: FALSE -> nincs hiba
   server: {
      port: 3000,
      open: true,
      // DOCKER-hez
      watch: {
         usePolling: false,
      },
      // host: true, // needed for the Docker Container port mapping to work
      // strictPort: true,
   },
})
