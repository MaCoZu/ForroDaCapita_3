import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.forrodacapita.de',
  output: 'static',

  integrations: [mdx(), sitemap(), react(), alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  }
});