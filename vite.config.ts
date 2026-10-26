import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so assets load correctly from the Android WebView (https://localhost)
// and from any static host (Lovable hosting, custom domain, etc.).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
