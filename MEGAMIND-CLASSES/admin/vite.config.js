import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@assets': path.resolve(process.cwd(), 'src/assets'),
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@features': path.resolve(process.cwd(), 'src/features'),
      '@hooks': path.resolve(process.cwd(), 'src/hooks'),
      '@pages': path.resolve(process.cwd(), 'src/pages'),
      '@services': path.resolve(process.cwd(), 'src/services'),
      '@utils': path.resolve(process.cwd(), 'src/utils'),
    },
  },
});
