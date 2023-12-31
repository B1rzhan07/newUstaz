import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: process.env.VITE_PUBLIC_URL,
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_PROXY_URL,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
};
