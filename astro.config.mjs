// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.creceser.com',
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
