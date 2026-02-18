import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const n = id.replace(/\\/g, '/')
          if (n.includes('node_modules')) {
            if (n.includes('react-dom') || n.includes('/react/')) return 'vendor-react'
            if (n.includes('framer-motion') || n.includes('/motion/')) return 'vendor-motion'
            if (n.includes('react-router')) return 'vendor-router'
            return 'vendor'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: false,
  },
})
