import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),

  build: {
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: true,
  },

  plugins: [react()],

  server: {
    port: 9000,
    open: true,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
