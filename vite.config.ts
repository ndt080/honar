import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Honar Club',
        short_name: 'Honar Club',
        description:
          'Вместе со спортивным клубом каратэ "Гонар" Вашего ребенка ждут увлекательные ' +
          'тренировки, адаптированные к его возрасту, аттестации на ученические квалификационные степени ' +
          '(пояса), участие в республиканских и международных соревнованиях, факультативные занятия с' +
          ' юристом и психологом, возможность попробовать себя в спортивной карьере или получить ' +
          'полезное хобби на всю жизнь.',
        display: 'standalone',
        icons: [
          {
            src: 'app-icons/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'maskable any',
          },
          {
            src: 'app-icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable any',
          },
        ],
      },
      manifestFilename: 'manifest.json',
      includeAssets: ['images/*', 'docs/*', 'docs/*.pdf'],
      includeManifestIcons: false,
      workbox: {
        navigateFallbackDenylist: [/^\/uploads/, /^\/api/],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@processes': path.resolve(__dirname, './src/processes'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@styles': path.resolve(__dirname, './src/shared/styles'),
    },
  },
});
