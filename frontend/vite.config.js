// File: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    /* Dev-only proxy so you can keep writing /api/... */
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});

