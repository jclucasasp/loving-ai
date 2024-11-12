import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'LovingAI',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    }
  }
})
