import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      react({
        fastRefresh: !isProduction
      })
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: isProduction ? {
            vendor: ['react', 'react-dom'],
            utils: ['prop-types'],
            cloudinary: ['@cloudinary/react', '@cloudinary/url-gen'],
            csv: ['papaparse']
          } : undefined
        }
      },
      chunkSizeWarningLimit: 1000,
      minify: isProduction ? 'terser' : 'esbuild',
      terserOptions: isProduction ? {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      } : undefined,
      assetsInlineLimit: 4096,
      target: 'es2015',
      cssCodeSplit: true,
      sourcemap: !isProduction
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
    },
    server: {
      hmr: !isProduction,
      host: true,
      port: 5173
    }
  }
})
