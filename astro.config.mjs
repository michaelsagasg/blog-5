import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  server: { host: '127.0.0.1', port: 4325 },
  site: 'https://michaelsagasg.github.io',
  base: '/shotdiaryuk',
  integrations: [sitemap()],
});
