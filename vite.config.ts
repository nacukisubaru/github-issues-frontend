import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      features: '/src/features',
      widgets: '/src/widgets',
      pages: '/src/pages',
      shared: '/src/shared',
      entities: '/src/entities',
      app: '/src/app',
      assets: '/src/shared/assets',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          if (id.includes('src/pages/issues/issues')) {
            return 'issues';
          }

          if (id.includes('src/pages/issue-detail/issueDetail')) {
            return 'issues-detail';
          }

          if (id.includes('src/pages/logger/logs')) {
            return 'logs';
          }

          return null;
        },
      },
    },
  },
});
