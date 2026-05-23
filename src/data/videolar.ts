export interface Video {
  title: string;
  channel: string;
  url: string;
  published?: string;
  duration?: string;
  language: "tr" | "en";
  level: "giris" | "orta" | "ileri";
  categories: string[];
  tools: string[];
  why_watch: string;
  key_takeaways?: string[];
  prerequisites?: string[];
}

export const videolar: Video[] = [
  // --- GİRİŞ SEVİYESİ ---
  {
    title: "AI Agents Explained: What They Are and How They Work",
    channel: "Matt Wolfe",
    url: "https://www.youtube.com/@mreflow",
    published: "2025-11-10",
    duration: "18:32",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi", "mimari"],
    tools: [],
    why_watch: "Ajan kavramını sıfırdan, teknik terimler olmadan açıklayan en iyi giriş videolarından biri.",
    key_takeaways: [
      "Agent nedir ve klasik LLM'den farkı",
      "Tool use ve planning kavramları",
      "Gerçek dünya ajan örnekleri"
    ],
    prerequisites: []
  },
  {
    title: "What are AI Agents? (Short explainer)",
    channel: "Fireship",
    url: "https://www.youtube.com/@Fireship",
    published: "2025-10-05",
    duration: "06:12",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi"],
    tools: [],
    why_watch: "6 dakikada ajan kavramını netleştiren Fireship'in yoğun formatı; genel tabloya hızla hakim olmak isteyenler için.",
    key_takeaways: [
      "Agent döngüsü: plan, act, observe, reflect",
      "Popüler çerçevelere bakış"
    ],
    prerequisites: []
  },
  {
    title: "Claude Code Full Tutorial for Beginners",
    channel: "Cole Medin",
    url: "https://www.youtube.com/@ColeMedin",
    published: "2025-12-01",
    duration: "42:18",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi", "demo"],
    tools: ["claude-code"],
    why_watch: "Claude Code'un kurulumundan ilk gerçek görevlere kadar adım adım rehber; başlangıç için en eksiksiz kaynak.",
    key_takeaways: [
      "Claude Code kurulumu ve yapılandırma",
      "İlk agentic kod görevi",
      "MCP sunucu bağlama"
    ],
    prerequisites: ["Temel terminal kullanımı"]
  },
  {
    title: "n8n AI Agent Tutorial: Build Your First Automation",
    channel: "Liam Ottley",
    url: "https://www.youtube.com/@LiamOttley",
    published: "2025-11-20",
    duration: "35:45",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi", "entegrasyon", "demo"],
    tools: ["n8n"],
    why_watch: "n8n ile kodsuz ajan kurulumu; iş otomasyonu başlangıcı için pratik ve hızlı.",
    key_takeaways: [
      "n8n kurulumu (self-host)",
      "AI Agent node kullanımı",
      "Webhook + LLM + Slack entegrasyonu"
    ],
    prerequisites: []
  },
  {
    title: "MCP Explained: The Standard Changing AI Agents",
    channel: "Matt Wolfe",
    url: "https://www.youtube.com/@mreflow",
    published: "2026-01-15",
    duration: "22:10",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi", "mimari"],
    tools: [],
    why_watch: "MCP protokolünün neden önemli olduğunu ve hangi araçların desteklediğini açıklayan güncel bir bakış.",
    key_takeaways: [
      "MCP nedir ve function calling'den farkı",
      "Popüler MCP sunucuları",
      "Claude Code ile MCP kullanımı"
    ],
    prerequisites: ["Agent kavramı"]
  },
  {
    title: "Google Antigravity 2.0 First Look",
    channel: "Matthew Berman",
    url: "https://www.youtube.com/@matthew_berman",
    published: "2026-05-20",
    duration: "28:44",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi", "demo"],
    tools: ["google-antigravity"],
    why_watch: "Antigravity 2.0'ın yeni Agent Manager ve Plan Mode özelliklerini canlı demo ile gösteren ilk kapsamlı inceleme.",
    key_takeaways: [
      "Agent Manager arayüzü turu",
      "Plan Mode vs Fast Mode farkı",
      "Gemini CLI'dan geçiş"
    ],
    prerequisites: []
  },
  {
    title: "RAG Pipeline from Scratch in Python",
    channel: "Mervin Praison",
    url: "https://www.youtube.com/@MervinPraison",
    published: "2025-10-22",
    duration: "31:55",
    language: "en",
    level: "giris",
    categories: ["arac-tanitimi", "entegrasyon"],
    tools: [],
    why_watch: "Sıfırdan RAG pipeline'ı kurmak için en temiz ve anlaşılır Python rehberlerinden biri.",
    key_takeaways: [
      "Vektör deposu kurulumu (Chroma)",
      "Embedding ve retrieval adımları",
      "LLM ile entegrasyon"
    ],
    prerequisites: ["Temel Python"]
  },
  {
    title: "Sabrina Ramonov: n8n ile Gerçek Ajan İş Akışları",
    channel: "Sabrina Ramonov",
    url: "https://www.youtube.com/@SabrinaRamonov",
    published: "2026-02-08",
    duration: "38:20",
    language: "en",
    level: "giris",
    categories: ["entegrasyon", "demo"],
    tools: ["n8n"],
    why_watch: "Sabrina Ramonov'un gerçek iş senaryolarına dayanan n8n workflow demoları; pratik ve uygulanabilir.",
    key_takeaways: [
      "E-posta triajı otomasyonu",
      "CRM entegrasyonu",
      "Hata yönetimi ve retry"
    ],
    prerequisites: []
  },

  // --- ORTA SEVİYE ---
  {
    title: "LangGraph Full Course: Build Production-Ready Agents",
    channel: "LangChain",
    url: "https://www.youtube.com/@LangChain",
    published: "2025-12-15",
    duration: "1:52:30",
    language: "en",
    level: "orta",
    categories: ["arac-tanitimi", "mimari", "demo"],
    tools: ["langgraph"],
    why_watch: "LangChain ekibinin resmi LangGraph eğitimi; stateful graph, checkpoint ve LangSmith entegrasyonunu kapsıyor.",
    key_takeaways: [
      "StateGraph ve node tanımlama",
      "Conditional edge kullanımı",
      "SqliteSaver ile checkpoint",
      "LangSmith tracing kurulumu"
    ],
    prerequisites: ["Temel Python", "LangChain temelleri"]
  },
  {
    title: "CrewAI Multi-Agent System: Complete Guide",
    channel: "Mervin Praison",
    url: "https://www.youtube.com/@MervinPraison",
    published: "2026-01-08",
    duration: "55:12",
    language: "en",
    level: "orta",
    categories: ["multi-agent", "demo"],
    tools: ["crewai"],
    why_watch: "CrewAI ile araştırmacı-yazar-editör çok ajanlı pipeline'ı sıfırdan kuruyor; sequential ve hierarchical process karşılaştırması içeriyor.",
    key_takeaways: [
      "Agent, Task ve Crew yapıları",
      "Process.sequential vs hierarchical",
      "Custom tool ekleme"
    ],
    prerequisites: ["Temel Python", "Agent kavramı"]
  },
  {
    title: "OpenAI Agents SDK Deep Dive",
    channel: "Cole Medin",
    url: "https://www.youtube.com/@ColeMedin",
    published: "2026-02-20",
    duration: "48:33",
    language: "en",
    level: "orta",
    categories: ["arac-tanitimi", "multi-agent"],
    tools: ["openai-agents-sdk"],
    why_watch: "OpenAI Agents SDK'nın handoff, guardrail ve tracing özelliklerini kapsamlı şekilde inceleyen güncel rehber.",
    key_takeaways: [
      "Agent ve handoff yapılandırması",
      "Guardrail ile güvenlik sınırları",
      "Runner.run_sync vs async kullanımı"
    ],
    prerequisites: ["Temel Python", "OpenAI API"]
  },
  {
    title: "Build an Agentic RAG System with LangGraph",
    channel: "LangChain",
    url: "https://www.youtube.com/@LangChain",
    published: "2026-03-10",
    duration: "1:08:45",
    language: "en",
    level: "orta",
    categories: ["mimari", "entegrasyon"],
    tools: ["langgraph"],
    why_watch: "Agentic RAG'ın klasik RAG'dan neden daha güçlü olduğunu gösteren, çalışan kod ile tam bir LangGraph uygulaması.",
    key_takeaways: [
      "Dinamik retrieval karar mekanizması",
      "Chroma + LangGraph entegrasyonu",
      "Self-correcting RAG döngüsü"
    ],
    prerequisites: ["LangGraph temelleri", "RAG kavramı"]
  },
  {
    title: "MCP Server Development: Build Your Own",
    channel: "Anthropic",
    url: "https://www.youtube.com/@anthropic-ai",
    published: "2026-01-25",
    duration: "44:18",
    language: "en",
    level: "orta",
    categories: ["entegrasyon", "mimari"],
    tools: ["claude-code"],
    why_watch: "Anthropic ekibinin resmi MCP sunucu geliştirme rehberi; kendi araçlarınızı MCP ile nasıl sunacağınızı öğretin.",
    key_takeaways: [
      "MCP sunucu mimarisi",
      "Tool ve resource tanımlama",
      "Claude Code ile test etme"
    ],
    prerequisites: ["MCP kavramı", "TypeScript veya Python temelleri"]
  },
  {
    title: "Claude Code Advanced: Subagents and Parallel Tasks",
    channel: "Anthropic",
    url: "https://www.youtube.com/@anthropic-ai",
    published: "2026-03-05",
    duration: "39:22",
    language: "en",
    level: "orta",
    categories: ["multi-agent", "demo"],
    tools: ["claude-code", "claude-agent-sdk"],
    why_watch: "Claude Code'un subagent özelliğini ve paralel görev çalıştırma mimarisini derinlemesine açıklıyor.",
    key_takeaways: [
      "Subagent tanımlama ve yapılandırma",
      "Her subagent için ayrı model atama",
      "Paralel çalışma ve sonuçları birleştirme"
    ],
    prerequisites: ["Claude Code temelleri"]
  },
  {
    title: "Semantic Kernel: Enterprise AI Agents with Microsoft",
    channel: "Matthew Berman",
    url: "https://www.youtube.com/@matthew_berman",
    published: "2026-02-14",
    duration: "52:07",
    language: "en",
    level: "orta",
    categories: ["arac-tanitimi", "entegrasyon"],
    tools: ["semantic-kernel"],
    why_watch: "Kurumsal .NET ve Python projelerinde Semantic Kernel ile ajan entegrasyonu; AutoGen alternatifleri tartışılıyor.",
    key_takeaways: [
      "Semantic Kernel plugin mimarisi",
      "Memory ve planning entegrasyonu",
      "Azure AI entegrasyonu"
    ],
    prerequisites: ["C# veya Python temelleri"]
  },
  {
    title: "Multi-Agent Systems: Patterns and Anti-Patterns",
    channel: "Sebastian Raschka",
    url: "https://www.youtube.com/@SebastianRaschka",
    published: "2026-01-30",
    duration: "58:44",
    language: "en",
    level: "orta",
    categories: ["mimari", "multi-agent"],
    tools: [],
    why_watch: "Akademik titizlikle multi-agent desenleri, ne zaman işe yaradığı ve ne zaman tek agent'ın daha iyi olduğunu açıklıyor.",
    key_takeaways: [
      "Manager-Worker, Group Chat, Router desenleri",
      "Multi-agent anti-pattern'leri",
      "Maliyet-performans dengesi"
    ],
    prerequisites: ["Agent kavramı", "Temel Python"]
  },
  {
    title: "How Large Language Models Work (Deep Dive)",
    channel: "Andrej Karpathy",
    url: "https://www.youtube.com/@AndrejKarpathy",
    published: "2025-09-18",
    duration: "3:22:15",
    language: "en",
    level: "orta",
    categories: ["mimari"],
    tools: [],
    why_watch: "LLM'lerin içini anlamak için Karpathy'nin efsanevi derin dalışı; ajan sistemlerini gerçekten kavramak için temel.",
    key_takeaways: [
      "Transformer mimarisi",
      "Tokenizasyon ve embedding",
      "RLHF ve ince ayar (fine-tuning)"
    ],
    prerequisites: ["Temel makine öğrenmesi kavramları"]
  },

  // --- İLERİ SEVİYE ---
  {
    title: "LangGraph in Production: State Persistence and Observability",
    channel: "LangChain",
    url: "https://www.youtube.com/@LangChain",
    published: "2026-04-02",
    duration: "1:24:10",
    language: "en",
    level: "ileri",
    categories: ["mimari", "entegrasyon"],
    tools: ["langgraph"],
    why_watch: "LangGraph'ı gerçek üretim ortamına taşıma: Redis checkpoint, dağıtık state ve LangSmith ile tam gözlemlenebilirlik.",
    key_takeaways: [
      "Redis tabanlı checkpoint kurulumu",
      "Dağıtık LangGraph mimarisi",
      "Üretim monitoring ve alerting"
    ],
    prerequisites: ["LangGraph orta düzey", "Redis temelleri", "Docker"]
  },
  {
    title: "Building a Multi-Model Router Agent System",
    channel: "Cole Medin",
    url: "https://www.youtube.com/@ColeMedin",
    published: "2026-03-25",
    duration: "1:02:18",
    language: "en",
    level: "ileri",
    categories: ["mimari", "multi-agent"],
    tools: ["langgraph", "claude-code"],
    why_watch: "Görev türüne göre otomatik model seçimi yapan router sistemi; maliyet optimizasyonu için vazgeçilmez.",
    key_takeaways: [
      "LLM tabanlı görev sınıflandırıcı",
      "Cascading model stratejisi",
      "Token maliyet takibi ve optimizasyon"
    ],
    prerequisites: ["LangGraph orta düzey", "Anthropic ve OpenAI API"]
  },
  {
    title: "Computer Use Agents: Browser Automation Deep Dive",
    channel: "Liam Ottley",
    url: "https://www.youtube.com/@LiamOttley",
    published: "2026-04-15",
    duration: "47:30",
    language: "en",
    level: "ileri",
    categories: ["demo", "entegrasyon"],
    tools: ["openai-codex", "google-antigravity"],
    why_watch: "Ekran okuma tabanlı otomasyon: Playwright, Anthropic Computer Use ve Antigravity Browser Tool karşılaştırması.",
    key_takeaways: [
      "Headless browser kontrol teknikleri",
      "Ekran görüntüsü analizi döngüsü",
      "Güvenlik ve güvenilirlik tuzakları"
    ],
    prerequisites: ["Python orta düzey", "Playwright temelleri"]
  },
  {
    title: "Attention is All You Need — Paper Explained",
    channel: "Two Minute Papers",
    url: "https://www.youtube.com/@TwoMinutePapers",
    published: "2023-06-14",
    duration: "12:48",
    language: "en",
    level: "ileri",
    categories: ["mimari"],
    tools: [],
    why_watch: "Transformer mimarisinin temel makalesini anlaşılır biçimde sunan klasik video; LLM'i derinlemesine kavramak isteyenler için.",
    key_takeaways: [
      "Self-attention mekanizması",
      "Multi-head attention",
      "Encoder-decoder mimarisi"
    ],
    prerequisites: ["Derin öğrenme temelleri", "Lineer cebir"]
  },
  {
    title: "Eval and Testing AI Agent Systems at Scale",
    channel: "Anthropic",
    url: "https://www.youtube.com/@anthropic-ai",
    published: "2026-04-28",
    duration: "53:44",
    language: "en",
    level: "ileri",
    categories: ["mimari"],
    tools: ["claude-agent-sdk"],
    why_watch: "Ajan sistemlerini üretimde nasıl değerlendireceğinizi anlatan; eval frameworkleri ve regresyon testi stratejileri.",
    key_takeaways: [
      "Eval seti tasarımı",
      "Otomatik kalite puanlama",
      "A/B test ve canary deployment"
    ],
    prerequisites: ["Agent geliştirme deneyimi", "pytest temelleri"]
  },
  {
    title: "A2A Protocol: The Next Standard for Multi-Agent Communication",
    channel: "Google Developers",
    url: "https://www.youtube.com/@googledevelopers",
    published: "2026-05-10",
    duration: "41:05",
    language: "en",
    level: "ileri",
    categories: ["mimari", "multi-agent"],
    tools: ["google-antigravity"],
    why_watch: "A2A protokolünün teknik detayları ve MCP ile birlikte nasıl kullanılacağını açıklayan resmi Google sunumu.",
    key_takeaways: [
      "A2A mesaj formatı ve handshake",
      "Agent discovery mekanizması",
      "MCP + A2A birlikte kullanımı"
    ],
    prerequisites: ["MCP kavramı", "Multi-agent mimari deneyimi"]
  },
  {
    title: "Scaling LLM Applications: Latency, Cost, and Reliability",
    channel: "Sebastian Raschka",
    url: "https://www.youtube.com/@SebastianRaschka",
    published: "2026-03-18",
    duration: "1:12:33",
    language: "en",
    level: "ileri",
    categories: ["mimari"],
    tools: [],
    why_watch: "Büyük ölçekli LLM uygulamalarında gecikme, maliyet ve güvenilirlik dengesini kurmayı sistematik biçimde ele alıyor.",
    key_takeaways: [
      "Caching stratejileri (semantic cache)",
      "Speculative decoding",
      "Maliyet-gecikme dengesi hesabı"
    ],
    prerequisites: ["LLM API deneyimi", "Temel distributed systems"]
  },
  {
    title: "OpenAI Agents SDK: Production Architecture",
    channel: "OpenAI",
    url: "https://www.youtube.com/@OpenAI",
    published: "2026-05-12",
    duration: "48:22",
    language: "en",
    level: "ileri",
    categories: ["mimari", "multi-agent"],
    tools: ["openai-agents-sdk", "openai-codex"],
    why_watch: "OpenAI Agents SDK ile kurumsal ölçekte çok ajanlı sistem tasarımı; tracing, guardrail ve handoff mimarisi.",
    key_takeaways: [
      "Karmaşık handoff senaryoları",
      "Yerleşik guardrail tasarımı",
      "Assistants v2 ile entegrasyon"
    ],
    prerequisites: ["OpenAI Agents SDK temelleri", "Async Python"]
  },
  {
    title: "Claude Agent SDK: Advanced Memory and Subagent Patterns",
    channel: "Anthropic",
    url: "https://www.youtube.com/@anthropic-ai",
    published: "2026-05-18",
    duration: "56:11",
    language: "en",
    level: "ileri",
    categories: ["mimari", "multi-agent"],
    tools: ["claude-agent-sdk", "claude-code"],
    why_watch: "Claude Agent SDK'nın subagent hiyerarşisi, oturum hafızası ve MCP entegrasyonunu üretim senaryolarıyla açıklıyor.",
    key_takeaways: [
      "SubAgent sınıfı ve hiyerarşi",
      "Oturum bazlı hafıza yönetimi",
      "MCP sunucu bağlantısı ileri düzey"
    ],
    prerequisites: ["Claude Agent SDK temelleri", "MCP kavramı"]
  },
  {
    title: "Agentic Workflow Patterns: When They Work and When They Fail",
    channel: "Andrej Karpathy",
    url: "https://www.youtube.com/@AndrejKarpathy",
    published: "2026-02-28",
    duration: "2:14:08",
    language: "en",
    level: "ileri",
    categories: ["mimari", "multi-agent"],
    tools: [],
    why_watch: "Karpathy'nin ajan mimarisi üzerine nadir kapsamlı tartışması; neyin işe yarayıp neyin yaramadığını dürüstçe ele alıyor.",
    key_takeaways: [
      "Ajan güvenilirliği ve hata analizi",
      "Sınırlı otonom çalışma senaryoları",
      "Gelecekteki ajan mimarisi yönelimi"
    ],
    prerequisites: ["LLM ve ajan geliştirme deneyimi"]
  },
  {
    title: "LLM Agents Research: Reflexion, ReAct, and Beyond",
    channel: "Two Minute Papers",
    url: "https://www.youtube.com/@TwoMinutePapers",
    published: "2025-12-20",
    duration: "14:55",
    language: "en",
    level: "ileri",
    categories: ["mimari"],
    tools: [],
    why_watch: "Akademik ajan araştırmalarını (Reflexion, ReAct, Tree-of-Thoughts) 15 dakikada sindirilebilir biçimde özetliyor.",
    key_takeaways: [
      "Reflexion ve self-critique döngüsü",
      "ReAct makalesi katkısı",
      "Güncel araştırma eğilimleri"
    ],
    prerequisites: ["Agent kavramı", "Akademik okuma alışkanlığı"]
  }
];
