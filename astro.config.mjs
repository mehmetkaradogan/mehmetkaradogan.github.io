// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';
import mermaid from 'astro-mermaid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mehmetkaradogan.github.io',
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
    preact({ compat: true }),
    mermaid({
      theme: 'default',
      autoTheme: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
});
