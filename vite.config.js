import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Remove console logs in production
    esbuild: {
      drop: ['console', 'debugger'],
      legalComments: 'none',
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Smart chunking based on module ID
        manualChunks(id) {
          // Vendor chunk for React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // Separate chunk for animation library
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          // Combine icon libraries
          if (id.includes('react-icons') || id.includes('@remixicon') || id.includes('lucide-react')) {
            return 'icons';
          }
        },
        // Optimize chunk file names for long-term caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Disable source maps for production (smaller bundles)
    sourcemap: false,
    // Inline small assets (under 4KB)
    assetsInlineLimit: 4096,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify CSS
    cssMinify: true,
  },
  // Optimize dependencies for faster dev server
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
  // Performance optimizations
  server: {
    strictPort: true,
  },
})
