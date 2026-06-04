// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // Guard: getCollection returns [] for an empty collection, so this is always safe.
  let items: {
    title: string;
    pubDate: Date;
    description: string;
    link: string;
  }[] = [];

  try {
    const haberler = await getCollection('haberler');
    items = haberler
      .filter((entry) => !entry.data.draft)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        pubDate: entry.data.date,
        description: entry.data.summary,
        link: `/haberler/${entry.slug}/`,
      }));
  } catch {
    // Collection empty or not yet populated — emit empty feed.
    items = [];
  }

  return rss({
    title: 'Agentic AI Öğrenme Merkezi — Haberler',
    description:
      'Türkçe Agentic AI öğrenme merkezi: en güncel haberler, araç güncellemeleri ve araştırmalar.',
    site: context.site ?? 'https://mehmetkaradogan.github.io',
    items,
    customData: `<language>tr</language>`,
    stylesheet: false,
  });
}
