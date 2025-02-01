import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  
  base: '/'

  const isProd = process.env.VITE_APP_ENV === 'prod';

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
      chunkSizeWarningLimit: 500, 
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

    optimizeDeps: {
      include: isProd ? ['react', 'react-dom'] : [], 
    },

    css: {
      postcss: {
        plugins: [
        ],
      },
    },
  };
});
