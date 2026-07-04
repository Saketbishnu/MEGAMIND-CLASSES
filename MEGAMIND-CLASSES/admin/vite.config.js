import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@hooks': path.resolve(process.cwd(), 'src/hooks'),
      '@pages': path.resolve(process.cwd(), 'src/pages'),
      '@services': path.resolve(process.cwd(), 'src/services'),
    },
  },
});
