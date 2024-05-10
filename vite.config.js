import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/@public/': path.resolve(__dirname, 'public') + '/',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-audio-player']
    }
  },
  optimizeDeps: {
    exclude: ['src/audio/*.mp3']
  }
});