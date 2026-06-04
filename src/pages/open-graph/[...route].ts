// src/pages/open-graph/[...route].ts
// Generates 1200x630 Open Graph images for every content page plus a site default.
// Route keys are `<collection>/<slug>`, so the output URL `/open-graph/<collection>/<slug>.png`
// matches each page's pathname (see DocLayout.astro and BaseHead.astro).

import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const SITE_NAME = 'Agentic AI Öğrenme Merkezi';

const collections = [
  'kavramlar',
  'araclar',
  'karsilastirmalar',
  'entegrasyonlar',
  'workflow',
  'senaryolar',
  'modul',
  'projeler',
  'baslangic',
  'haberler',
] as const;

const pages: Record<string, { title: string; description: string }> = {
  // Fallback image for the homepage, index pages and standalone pages.
  site: {
    title: SITE_NAME,
    description: 'Türkçe Agentic AI öğrenme merkezi — kavramlar, araçlar, iş akışları ve projeler.',
  },
};

for (const name of collections) {
  // Cast: getCollection is generic per-collection; we iterate a union here.
  const entries = await getCollection(name as 'kavramlar', (e) => !e.data.draft);
  for (const entry of entries) {
    pages[`${name}/${entry.slug}`] = {
      title: entry.data.title,
      description: entry.data.summary,
    };
  }
}

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [15, 23, 42],
      [49, 46, 129],
    ],
    border: { color: [99, 102, 241], width: 18, side: 'inline-start' },
    padding: 64,
    // Bundled locally (src/fonts) so OG generation needs no network at build
    // time and renders Turkish glyphs (ş, ğ, İ, ı, ç, ö, ü) correctly.
    fonts: ['./src/fonts/NotoSans-Regular.ttf', './src/fonts/NotoSans-Bold.ttf'],
    font: {
      title: { color: [255, 255, 255], size: 62, weight: 'Bold', lineHeight: 1.2, families: ['Noto Sans'] },
      description: { color: [203, 213, 225], size: 30, lineHeight: 1.4, families: ['Noto Sans'] },
    },
  }),
});
