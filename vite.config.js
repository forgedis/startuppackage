import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
	sveltekit(),
    tailwindcss(),
],
  server: {
    host: true,        // binds to 0.0.0.0 and makes localhost work
    port: 5173,
    strictPort: true,  // fail fast if the port is taken
    hmr: {
      host: '127.0.0.1', // keeps HMR happy on Windows setups
      port: 5173
    }
  }
});