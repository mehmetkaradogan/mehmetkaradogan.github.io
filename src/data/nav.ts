// src/data/nav.ts
// Single source of truth for the site information architecture.
// Used by BaseLayout (header nav + footer columns) and index page (category grid).

export interface NavChild {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  children?: NavChild[];
}

export const nav: NavSection[] = [
  {
    label: 'Ana Sayfa',
    href: '/',
  },
  {
    label: 'Başlangıç',
    href: '/baslangic',
    children: [
      { label: 'Agentic AI Nedir?', href: '/baslangic/agentic-ai-nedir' },
      { label: 'Temel Kavramlar', href: '/baslangic/temel-kavramlar' },
      { label: 'İlk Agent', href: '/baslangic/ilk-agent' },
      { label: 'Öğrenme Yolu', href: '/baslangic/ogrenme-yolu' },
    ],
  },
  {
    label: 'Kavramlar',
    href: '/kavramlar',
    children: [
      { label: 'Tool Use', href: '/kavramlar/tool-use' },
      { label: 'Planning', href: '/kavramlar/planning' },
      { label: 'Memory', href: '/kavramlar/memory' },
      { label: 'Reflection', href: '/kavramlar/reflection' },
      { label: 'Multi-Agent Systems', href: '/kavramlar/multi-agent-systems' },
      { label: 'Agent Orchestration', href: '/kavramlar/agent-orchestration' },
      { label: 'Human-in-the-Loop', href: '/kavramlar/human-in-the-loop' },
      { label: 'RAG ve Agentic RAG', href: '/kavramlar/rag-ve-agentic-rag' },
      { label: 'Model Context Management', href: '/kavramlar/model-context-management' },
      { label: 'Function Calling', href: '/kavramlar/function-calling' },
      { label: 'MCP Protokol', href: '/kavramlar/mcp-protokol' },
      { label: 'A2A Protokol', href: '/kavramlar/a2a-protokol' },
    ],
  },
  {
    label: 'Araçlar',
    href: '/araclar',
    children: [
      { label: 'Claude Code', href: '/araclar/claude-code' },
      { label: 'OpenAI Codex', href: '/araclar/openai-codex' },
      { label: 'Google Antigravity', href: '/araclar/google-antigravity' },
      { label: 'Cursor', href: '/araclar/cursor' },
      { label: 'LangGraph', href: '/araclar/langgraph' },
      { label: 'CrewAI', href: '/araclar/crewai' },
      { label: 'AutoGen', href: '/araclar/autogen' },
      { label: 'Semantic Kernel', href: '/araclar/semantic-kernel' },
      { label: 'OpenAI Agents SDK', href: '/araclar/openai-agents-sdk' },
      { label: 'Claude Agent SDK', href: '/araclar/claude-agent-sdk' },
      { label: 'n8n', href: '/araclar/n8n' },
      { label: 'Make', href: '/araclar/make' },
      { label: 'Zapier', href: '/araclar/zapier' },
      { label: 'Obsidian AI', href: '/araclar/obsidian-ai' },
    ],
  },
  {
    label: 'Karşılaştırmalar',
    href: '/karsilastirmalar',
    children: [
      { label: 'LangGraph vs CrewAI vs AutoGen', href: '/karsilastirmalar/langgraph-vs-crewai-vs-autogen' },
      { label: 'Claude Code vs Codex vs Antigravity', href: '/karsilastirmalar/claude-code-vs-codex-vs-antigravity' },
      { label: 'n8n vs Make vs Zapier', href: '/karsilastirmalar/n8n-vs-make-vs-zapier' },
      { label: 'Hangi Araç Ne Zaman?', href: '/karsilastirmalar/hangi-arac-ne-zaman' },
      { label: 'Framework Seçim Rehberi', href: '/karsilastirmalar/framework-secim-rehberi' },
    ],
  },
  {
    label: 'Entegrasyonlar',
    href: '/entegrasyonlar',
    children: [
      { label: 'Obsidian', href: '/entegrasyonlar/obsidian' },
      { label: 'Notion', href: '/entegrasyonlar/notion' },
      { label: 'Airtable', href: '/entegrasyonlar/airtable' },
      { label: 'Google Drive', href: '/entegrasyonlar/google-drive' },
      { label: 'GitHub', href: '/entegrasyonlar/github' },
      { label: 'Slack', href: '/entegrasyonlar/slack' },
      { label: 'MCP Sunucu Listesi', href: '/entegrasyonlar/mcp-sunucu-listesi' },
    ],
  },
  {
    label: 'Workflow',
    href: '/workflow',
    children: [
      { label: 'Desenler', href: '/workflow/desenler' },
      { label: 'Multi-Model Stratejileri', href: '/workflow/multi-model-stratejileri' },
      { label: 'Örnekler', href: '/workflow/ornekler' },
      { label: 'Anti-Pattern\'ler', href: '/workflow/anti-patternler' },
      { label: 'Claude Code En İyi Pratikler', href: '/workflow/claude-code-en-iyi-pratikler' },
      { label: 'Karpathy Kodlama İlkeleri', href: '/workflow/karpathy-kodlama-ilkeleri' },
    ],
  },
  {
    label: 'Senaryolar',
    href: '/senaryolar',
    children: [
      { label: 'Araştırma', href: '/senaryolar/arastirma' },
      { label: 'Kod Yazma', href: '/senaryolar/kod-yazma' },
      { label: 'İçerik Üretimi', href: '/senaryolar/icerik-uretimi' },
      { label: 'Otomasyon', href: '/senaryolar/otomasyon' },
      { label: 'Kişisel Bilgi Yönetimi', href: '/senaryolar/kisisel-bilgi-yonetimi' },
      { label: 'Dokümantasyon', href: '/senaryolar/dokumantasyon' },
      { label: 'Veri Toplama', href: '/senaryolar/veri-toplama' },
    ],
  },
  {
    label: 'Modül',
    href: '/modul',
    children: [
      { label: '01 · Temeller', href: '/modul/01-temeller' },
      { label: '02 · İlk Tool Calling', href: '/modul/02-ilk-tool-calling' },
      { label: '03 · RAG Kurulumu', href: '/modul/03-rag-kurulumu' },
      { label: '04 · LangGraph Başlangıç', href: '/modul/04-langgraph-baslangic' },
      { label: '05 · CrewAI Multi-Agent', href: '/modul/05-crewai-multi-agent' },
      { label: '06 · MCP Sunucu Yazma', href: '/modul/06-mcp-sunucu-yazma' },
      { label: '07 · Claude Code Üretim', href: '/modul/07-claude-code-uretim' },
      { label: '08 · Antigravity ile Build', href: '/modul/08-antigravity-ile-build' },
      { label: '09 · Multi-Model Orkestrasyon', href: '/modul/09-multi-model-orkestrasyon' },
    ],
  },
  {
    label: 'Projeler',
    href: '/projeler',
    children: [
      { label: 'Başlangıç Projeleri', href: '/projeler/baslangic' },
      { label: 'Orta Seviye', href: '/projeler/orta' },
      { label: 'İleri Seviye', href: '/projeler/ileri' },
      { label: 'Gemini ile Projeler', href: '/projeler/gemini-projeleri' },
      { label: 'Claude Code ile Projeler', href: '/projeler/claude-code-projeleri' },
      { label: 'Gemini + Claude Code Birlikte', href: '/projeler/gemini-claude-code-birlikte' },
      { label: 'Fikir Bankası', href: '/projeler/fikir-bankasi' },
    ],
  },
  {
    label: 'Videolar',
    href: '/videolar',
  },
  {
    label: 'Sözlük',
    href: '/sozluk',
  },
  {
    label: 'SSS',
    href: '/sss',
  },
  {
    label: 'Haberler',
    href: '/haberler',
  },
  {
    label: 'Roadmap',
    href: '/roadmap',
  },
  {
    label: 'Hakkında',
    href: '/hakkinda',
  },
];

// Top-level sections for header nav (those with children or standalone pages)
export const topLevelNav = nav.filter((s) => s.href !== '/');

// Footer columns — group into 3 sets
export const footerColumns: NavSection[][] = [
  nav.slice(1, 5),   // Başlangıç, Kavramlar, Araçlar, Karşılaştırmalar
  nav.slice(5, 9),   // Entegrasyonlar, Workflow, Senaryolar, Modül
  nav.slice(9),      // Projeler, Videolar, Sözlük, SSS, Haberler, Roadmap, Hakkında
];
