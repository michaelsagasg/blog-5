import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  server: { host: '127.0.0.1', port: 4325 },
  site: 'https://retadiary.co.uk',
  integrations: [sitemap()],
});
