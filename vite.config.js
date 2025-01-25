import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  const isProd = process.env.VITE_APP_ENV === 'production';

  return {
    root: path.resolve(__dirname, 'src'),

    build: {
      outDir: path.resolve(__dirname, 'dist'),
      sourcemap: !isProd,
      terserOptions: isProd
        ? {
            compress: {
              drop_console: true,
            },
          }
        : {},
    },

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    server: {
      port: 9000,
      open: true,
      historyApiFallback: true,
    },
  };
});
