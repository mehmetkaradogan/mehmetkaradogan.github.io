import { z, defineCollection } from 'astro:content';

// ---------------------------------------------------------------------------
// Common base schema — shared by every collection
// ---------------------------------------------------------------------------
const baseSchema = z.object({
  title: z.string(),
  // NOTE: `slug` is a reserved field in Astro legacy content collections —
  // it is extracted from data into entry.slug, so it must NOT be in the schema.
  category: z.string(),
  level: z.enum(['giris', 'orta', 'ileri']),
  summary: z.string(),
  updated: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  draft: z.boolean().optional().default(false),
});

// ---------------------------------------------------------------------------
// Collections
// ---------------------------------------------------------------------------

const kavramlar = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    video_refs: z.array(z.string()).default([]),
  }),
});

const araclar = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    vendor: z.string(),
    toolType: z.string(),
    license: z.string(),
    os: z.array(z.string()).default([]),
    primary_model: z.string(),
    last_review: z.coerce.date(),
    status: z.enum(['active', 'maintenance', 'deprecated']).default('active'),
  }),
});

const karsilastirmalar = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    tools: z.array(z.string()).default([]),
  }),
});

const entegrasyonlar = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const workflow = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const senaryolar = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const modul = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    modul: z.string(),       // e.g. "01"
    sure: z.string(),        // e.g. "90 dakika"
    onkosul: z.array(z.string()).default([]),
    ciktilar: z.array(z.string()).default([]),
  }),
});

const projeler = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    seviye: z.enum(['baslangic', 'orta', 'ileri']),
  }),
});

const baslangic = defineCollection({
  type: 'content',
  schema: baseSchema,
});

const haberler = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    date: z.coerce.date(),
    source: z.string(),
    newsType: z.enum(['launch', 'update', 'deprecation', 'research']),
    tools: z.array(z.string()).default([]),
  }),
});

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export const collections = {
  kavramlar,
  araclar,
  karsilastirmalar,
  entegrasyonlar,
  workflow,
  senaryolar,
  modul,
  projeler,
  baslangic,
  haberler,
};
