# Agentic AI Öğrenme Merkezi

Türkçe agentic AI öğrenme merkezi: kavramlar, araçlar, iş akışları ve gerçek projelerle sıfırdan ileri seviyeye kadar kapsamlı bir rehber. MCP, A2A protokolleri, LangGraph, CrewAI, Claude Code, Google Antigravity ve daha fazlasını Türkçe kaynaklarla öğren. Site adresi: [agenticai.tr](https://agenticai.tr).

---

## Yerel Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Astro build + pagefind index
npm run preview  # Build çıktısını önizle
npm run check    # TypeScript & Astro kontrol
```

Node.js 20+ gereklidir.

---

## Cloudflare Pages Deploy

| Ayar | Değer |
|---|---|
| Build komutu | `npm run build` |
| Çıktı dizini | `dist` |
| Node.js sürümü | `20` (Environment Variables: `NODE_VERSION=20`) |

Cloudflare Pages otomatik olarak `public/_headers` dosyasını okur.

---

## Vercel Deploy

Framework preset olarak **Astro** seç — sıfır yapılandırma gerekir. Vercel Astro adapter'ı otomatik algılar, `dist` klasörünü çıktı olarak kullanır.

Opsiyonel `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

---

## İçerik Ekleme

Her koleksiyon `src/content/<koleksiyon-adı>/` altındaki `.mdx` dosyalarıyla beslenir. Aşağıdaki frontmatter şeması tüm koleksiyonlar için **zorunlu ortak alanlardır**:

```yaml
---
title: "Sayfa Başlığı"
slug: sayfa-slug
category: kavramlar          # koleksiyon adıyla eşleşmeli
level: giris                 # giris | orta | ileri
summary: "Kısa açıklama (meta description olarak kullanılır)."
updated: 2026-05-23
tags: [tag1, tag2]
related: [ilgili-slug-1]
draft: false
---
```

Koleksiyona özgü ek alanlar için `src/content/config.ts` dosyasını incele.

---

## Katkı

Katkıda bulunmak için fork et, yeni bir branch aç, değişiklikleri yap ve PR gönder. Her sayfa "edit this page" linki taşıyacak (Wave 2A).

Lisans: İçerik **CC BY-SA 4.0**, kod **MIT**.
