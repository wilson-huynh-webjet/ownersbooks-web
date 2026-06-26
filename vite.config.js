import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 9010,
    // Proxy requests to avoid CORS issues
    proxy: {
      '/books': 'http://localhost:9000',
    },
  },
});
