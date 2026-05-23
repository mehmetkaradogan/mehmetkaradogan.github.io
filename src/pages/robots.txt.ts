// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.href ?? 'https://agenticai.tr';
  // Ensure trailing slash removed for the sitemap line
  const base = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
