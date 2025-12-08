import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: ['src/**/*.{js,jsx,ts,tsx}'], 
      exclude: ['node_modules', 'cypress', '**/*.cy.*', '**/*.spec.*'],
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      forceInstrument: true,      
      produceSourceMap: true,     
    }),
  ],
  server: {
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  build: { sourcemap: true },
});