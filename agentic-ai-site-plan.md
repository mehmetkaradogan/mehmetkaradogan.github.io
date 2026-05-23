# Agentic AI Öğrenme Merkezi — Site Planı (2026)

> Tarih: Mayıs 2026 · Hedef: Türkçe, sıfırdan ileri seviyeye, tek kaynak.

---

## 1) ARAŞTIRMA ÖZETİ — 2026'DA DURUM

### 1.1 Tanım
**Agentic AI**, bir LLM'i pasif bir cevap üreticisinden çıkarıp; **planlayan, araç kullanan, hafıza tutan, doğrulayan ve yeniden deneyen** bir otonom sisteme dönüştüren mimaridir. Temel bileşenler: **plan + tool use + memory + reflection + verification loop**.

### 1.2 Pazarın bugünkü durumu (Mayıs 2026)
- **Üretim kullanımı yaygınlaştı:** Organizasyonların büyük çoğunluğu agent'ları pilot veya canlı kullanıyor.
- **MCP (Model Context Protocol) fiili standart oldu:** Anthropic'in 2024 sonunda açtığı protokol; OpenAI, Google ve 200+ topluluk MCP sunucusu tarafından destekleniyor (GitHub, Slack, Postgres, Stripe, Figma, Docker vs.).
- **A2A (Agent-to-Agent) Protocol** ikinci standart olarak yükseliyor.
- **AutoGen bakım moduna alındı** (Microsoft, "Microsoft Agent Framework"e yöneldi). Yeni projeler için önerilmiyor.
- **LangGraph** üretim için fiili kazanan (state persistence, LangSmith ile gözlemlenebilirlik, BlackRock/JPMorgan kullanımı).
- **CrewAI** hızlı prototipleme için en kolayı.
- **OpenAI Agents SDK** ve **Claude Agent SDK** birinci taraf yaklaşım olarak güçlendi.

### 1.3 "Antigravity" nedir? (Belirsizlik çözüldü)
**Google Antigravity** = Google'ın Kasım 2025'te çıkardığı, **Gemini 3 Pro** ile çalışan **agentic IDE**. Mayıs 2026'da Antigravity 2.0 ile bağımsız bir agent orchestration desktop uygulamasına genişledi. Özellikleri:
- VS Code fork tabanlı editor + ayrı **Agent Manager** uygulaması + **CLI** + **SDK**.
- **Plan Mode / Fast Mode**, browser control, Artifacts paneli, terminal entegrasyonu.
- Bilgi tabanı (knowledge base) yerleşik — agent öğrendiklerini geri yazıyor.
- Model seçimi: Gemini 3 Pro (öncelik), Claude Sonnet 4.5, GPT-OSS desteği.
- MacOS / Windows / Linux. Bireyler için ücretsiz public preview.
- Eski **Gemini CLI**'yı resmi olarak değiştirdi.

### 1.4 Üç ana ekosistem
| Ekosistem | Ana ürünler | Güçlü yönü |
|---|---|---|
| **Anthropic** | Claude Code, Claude Agent SDK, MCP, Agent View, Subagents, Agent Teams | Terminal-first agentic coding, güvenlik, 1M token bağlam |
| **OpenAI** | Codex (computer use), OpenAI Agents SDK, Assistants v2 | Computer use, yapılandırılmış araç çağırma, geniş ekosistem |
| **Google** | Antigravity 2.0, Gemini 3 Pro, AI Studio entegrasyonu | Multi-agent IDE, browser control, ücretsiz erişim |

### 1.5 Önemli kavramlar (haritalandırma)
- **Tool use / Function calling:** LLM'in JSON şeması ile harici fonksiyon çağırması.
- **Planning:** Görevi alt adımlara bölme (ReAct, Plan-and-Execute, Tree of Thoughts).
- **Memory:** Kısa vadeli (context window), uzun vadeli (vector store), epizodik (oturum özetleri), prosedürel (öğrenilen beceriler).
- **Reflection:** Agent'ın kendi çıktısını eleştirip düzeltmesi (Reflexion pattern).
- **Multi-Agent Systems (MAS):** Manager-worker, group chat, hiyerarşik, peer-to-peer.
- **Human-in-the-loop (HITL):** Kritik adımlarda onay/müdahale; Antigravity'nin "Co-Pilot" modu örnek.
- **RAG ↔ Agent ilişkisi:** RAG agent'ın bir aracıdır; "agentic RAG" = agent'ın retrieval'ı dinamik kararlaştırdığı yapı.
- **Model Context Management:** Pencere yönetimi, sıkıştırma (compaction), referans/pointer index'ler (memory.md), checkpoint.

### 1.6 Notable ortaya çıkan pattern'ler
- **Subagents:** Tek bir parent agent'ın altında özelleşmiş worker'lar (Claude Code).
- **Agent Teams:** Orchestrator + paralel worker'lar mesajlaşır.
- **Dreaming / Cross-session learning:** Agent oturumlar arası deneyim biriktirir.
- **Scheduled agents:** Cron benzeri otonom çalışma (Hermes, Claude Code).
- **Browser-based agent'lar:** OpenAI Operator, Anthropic Computer Use, Antigravity browser tool.

### 1.7 Maliyet uyarısı (sık atlanan)
Multi-agent sistemler **her agent-arası mesajda model çağrısı** yapar. Yanlış model seçimi (her şeyi Opus/Gemini 3 Pro'da çalıştırmak) haftalık 3 haneli Euro faturalar yaratıyor. Subagent başına model atama (review = Sonnet, lint = Haiku) zorunlu disiplin oldu.

---

## 2) SİTE HARİTASI

```
agenticai.tr/
├── /                                  → Ana sayfa (hub)
├── /baslangic                         → Yeni başlayanlar için
│   ├── /baslangic/agentic-ai-nedir
│   ├── /baslangic/temel-kavramlar
│   ├── /baslangic/ilk-agent
│   └── /baslangic/ogrenme-yolu
│
├── /kavramlar                         → Konsept ansiklopedisi
│   ├── /kavramlar/tool-use
│   ├── /kavramlar/planning
│   ├── /kavramlar/memory
│   ├── /kavramlar/reflection
│   ├── /kavramlar/multi-agent-systems
│   ├── /kavramlar/agent-orchestration
│   ├── /kavramlar/human-in-the-loop
│   ├── /kavramlar/rag-ve-agentic-rag
│   ├── /kavramlar/model-context-management
│   ├── /kavramlar/function-calling
│   ├── /kavramlar/mcp-protokol
│   └── /kavramlar/a2a-protokol
│
├── /araclar                           → Tek tek araç sayfaları
│   ├── /araclar/claude-code
│   ├── /araclar/openai-codex
│   ├── /araclar/google-antigravity
│   ├── /araclar/cursor
│   ├── /araclar/langgraph
│   ├── /araclar/crewai
│   ├── /araclar/autogen
│   ├── /araclar/semantic-kernel
│   ├── /araclar/openai-agents-sdk
│   ├── /araclar/claude-agent-sdk
│   ├── /araclar/n8n
│   ├── /araclar/make
│   ├── /araclar/zapier
│   ├── /araclar/obsidian-ai
│   └── /araclar/...
│
├── /karsilastirmalar                  → Decision rehberleri
│   ├── /karsilastirmalar/langgraph-vs-crewai-vs-autogen
│   ├── /karsilastirmalar/claude-code-vs-codex-vs-antigravity
│   ├── /karsilastirmalar/n8n-vs-make-vs-zapier
│   ├── /karsilastirmalar/hangi-arac-ne-zaman
│   └── /karsilastirmalar/framework-secim-rehberi
│
├── /entegrasyonlar                    → Servis-spesifik rehberler
│   ├── /entegrasyonlar/obsidian
│   ├── /entegrasyonlar/notion
│   ├── /entegrasyonlar/airtable
│   ├── /entegrasyonlar/google-drive
│   ├── /entegrasyonlar/github
│   ├── /entegrasyonlar/slack
│   └── /entegrasyonlar/mcp-sunucu-listesi
│
├── /workflow                          → İş akışı tasarımları
│   ├── /workflow/desenler              (Plan-Execute, ReAct, Reflexion, Manager-Worker…)
│   ├── /workflow/multi-model-stratejileri
│   ├── /workflow/ornekler
│   └── /workflow/anti-patternler
│
├── /senaryolar                        → Kullanım senaryoları (kategorize)
│   ├── /senaryolar/arastirma
│   ├── /senaryolar/kod-yazma
│   ├── /senaryolar/icerik-uretimi
│   ├── /senaryolar/otomasyon
│   ├── /senaryolar/kisisel-bilgi-yonetimi
│   ├── /senaryolar/dokumantasyon
│   └── /senaryolar/veri-toplama
│
├── /modul                             → Adım adım eğitim modülleri
│   ├── /modul/01-temeller
│   ├── /modul/02-ilk-tool-calling
│   ├── /modul/03-rag-kurulumu
│   ├── /modul/04-langgraph-baslangic
│   ├── /modul/05-crewai-multi-agent
│   ├── /modul/06-mcp-sunucu-yazma
│   ├── /modul/07-claude-code-uretim
│   ├── /modul/08-antigravity-ile-build
│   └── /modul/09-multi-model-orkestrasyon
│
├── /projeler                          → Bitirme projeleri & fikir bankası
│   ├── /projeler/baslangic
│   ├── /projeler/orta
│   ├── /projeler/ileri
│   └── /projeler/fikir-bankasi
│
├── /videolar                          → YouTube küratasyonu
│   ├── /videolar/seviye/giris
│   ├── /videolar/seviye/orta
│   ├── /videolar/seviye/ileri
│   ├── /videolar/kategori/arac-tanitimi
│   ├── /videolar/kategori/entegrasyon
│   ├── /videolar/kategori/multi-agent
│   ├── /videolar/kategori/demo
│   ├── /videolar/kategori/mimari
│   └── /videolar/kanal/[kanal-adi]
│
├── /sozluk                            → Terimler sözlüğü (A-Z)
├── /sss                               → Sık sorulan sorular
├── /haberler                          → Güncel gelişmeler (changelog)
├── /roadmap                           → Öğrenme yolu görselleştirmesi
├── /arama                             → Site içi arama
└── /hakkinda                          → Site amacı, katkı rehberi
```

---

## 3) BÖLÜM BÖLÜM SAYFA İÇERİĞİ

### 3.1 Ana sayfa (`/`)
**Amaç:** Knowledge hub. Ziyaretçi 5 saniyede ne yapacağını bilsin.

**Bölümler (yukarıdan aşağıya):**
1. **Hero:** Tek cümle pozisyon — "Türkçe agentic AI öğrenme merkezi: kavramlar, araçlar, projeler." + iki CTA: "Öğrenmeye başla" / "Roadmap'i gör"
2. **Hızlı giriş kartları (4 adet):**
   - "Sıfırdan başla" → /baslangic
   - "Aracımı seç" → /karsilastirmalar/hangi-arac-ne-zaman
   - "Proje yap" → /projeler
   - "Video izle" → /videolar
3. **Roadmap mini-görsel:** Başlangıç → Orta → İleri ana basamaklar, tıklanabilir.
4. **Bu hafta öne çıkanlar:** Güncel haber/changelog'dan otomatik (3 kart).
5. **Popüler karşılaştırmalar:** LangGraph vs CrewAI vs AutoGen / Claude Code vs Codex vs Antigravity.
6. **Kategori grid'i:** Kavramlar · Araçlar · Workflow · Entegrasyonlar · Videolar · Sözlük.
7. **Newsletter / RSS kaydı.**
8. **Footer:** Site haritası, GitHub repo (katkı), lisans.

### 3.2 `/baslangic/agentic-ai-nedir`
- Tek paragraf tanım
- "LLM vs Agent" karşılaştırma tablosu
- Minimal agent diyagramı (Plan → Tool → Observe → Reflect loop)
- 3 somut "öncesi-sonrası" örnek
- 5 dakikada anlama testi (5 soruluk quiz)
- Sonraki adım kartı → `/baslangic/temel-kavramlar`

### 3.3 `/kavramlar/*` (şablon)
Her kavram sayfası aynı iskelet:
1. **TL;DR** (2-3 cümle)
2. **Detaylı açıklama**
3. **Görsel/diyagram**
4. **Örnek kod** (Python, minimal)
5. **Gerçek dünya örneği**
6. **Avantajlar / Sınırlamalar**
7. **Ne zaman kullanılır / kullanılmaz**
8. **İlişkili kavramlar** (chip'ler)
9. **Önerilen videolar** (1-3 küratel)
10. **Daha derine:** Kaynakça (paper, doc, blog)

### 3.4 `/araclar/*` (şablon)
1. **Künye kutusu:** Üretici, lisans, fiyat, OS desteği, ana model, son güncelleme.
2. **Tek paragraf "nedir"**
3. **Ne için iyi / Ne için kötü**
4. **5 dakikada kurulum**
5. **İlk çalıştırma (hello-world)**
6. **3 gerçek senaryo + kod**
7. **Diğer araçlarla entegrasyon**
8. **Yaygın hatalar ve çözümleri**
9. **Maliyet/limit notları**
10. **Karşılaştırma linki** (bu aracı içeren karşılaştırma sayfasına)
11. **Resmi dokümantasyon + topluluk linkleri**
12. **Önerilen videolar**

### 3.5 `/karsilastirmalar/hangi-arac-ne-zaman` (kritik sayfa)
- **Karar ağacı görseli** (interactive): "Ne yapacaksın?" → soru zinciri → öneri.
- **Hızlı tablo:** Senaryo × Önerilen araç × Neden × Alternatif.
- Örnek satırlar:
  - "Tek geliştirici, terminal seviyor, kod yazıyor" → **Claude Code**.
  - "Multi-agent prototip 1 günde" → **CrewAI**.
  - "Üretim, regülasyonlu sektör, denetlenebilir state" → **LangGraph + LangSmith**.
  - "Gemini ekosisteminde IDE içinde otonom agent" → **Antigravity 2.0**.
  - "Kodsuz iş akışı, SaaS entegrasyonu" → **n8n** (self-host) / **Make** (cloud).
  - "Browser otomasyonu odaklı" → **OpenAI Computer Use** veya **Claude Computer Use**.

### 3.6 `/workflow/desenler`
Her desen için: diyagram + ne zaman kullanılır + pseudocode + canlı örnek + anti-pattern uyarısı.
- ReAct (Reason + Act)
- Plan-and-Execute
- Reflexion (self-critique loop)
- Manager-Worker (orchestrator + subagents)
- Group Chat / Debate
- Hierarchical (manager → middle → worker)
- Router (LLM ilk olarak hangi alt-agent'a yönlendireceğine karar verir)
- Agentic RAG (retrieval'ı agent kararlaştırır)
- Human-in-the-loop checkpoint
- Scheduled / Cron agent

### 3.7 `/workflow/multi-model-stratejileri`
- "Hangi model neyi iyi yapar" tablosu (kod, yazı, planning, vision, hız, fiyat).
- **Router pattern:** ucuz model → görev sınıflandırması → pahalı modele yönlendirme.
- **Cascading:** önce Haiku, başarısızsa Sonnet, hâlâ değilse Opus.
- **Ensemble / Debate:** 2-3 model + jüri.
- **Speculative agent execution:** ucuz model taslak, pahalı model doğrulama.
- Gerçek maliyet hesabı: aynı görev × 4 strateji.

### 3.8 `/modul/01..09` (eğitim modülleri)
Her modülde:
- Süre tahmini
- Önkoşullar
- Öğrenme çıktıları (madde madde)
- Adım adım uygulama (kod ve ekran görüntüsü)
- Bitirme egzersizi
- Çözüm referansı (gizli)
- Sonraki modüle geçiş kartı

### 3.9 `/projeler/*` (proje fikirleri — örnekler)

**Başlangıç:**
- Obsidian vault'tan günlük özet çıkaran agent
- RSS okuyup haftalık bülten üreten agent
- GitHub issue triage botu
- PDF set → soru-cevap agent (basit RAG)

**Orta:**
- Multi-agent içerik üretim hattı (araştırmacı + yazar + editör)
- Calendar + email + Notion entegre kişisel asistan
- Müşteri destek triajı + Slack handoff
- Veri kazıma + sınıflandırma + Airtable doldurma pipeline

**İleri:**
- LangGraph ile durable, kesintiye dayanıklı uzun süreli görev
- Claude Code subagent ekibi + CI/CD entegrasyonu
- Antigravity SDK ile özel agent + kendi MCP sunucusu
- Multi-model router + maliyet optimizasyonu olan üretim sistemi

### 3.10 `/videolar/*` (YouTube küratasyonu)

**Veri modeli (her video kaydı):**
```yaml
title: ""
channel: ""
url: ""
published: YYYY-MM-DD
duration: "MM:SS"
language: "tr" | "en"
level: "giris" | "orta" | "ileri"
categories: ["arac-tanitimi", "entegrasyon", "multi-agent", "demo", "mimari"]
tools: ["claude-code", "langgraph", ...]
why_watch: "Kısa neden cümlesi"
key_takeaways: ["...", "..."]
prerequisites: ["..."]
```

**Önerilen kanal kataloğu (araştırma sonucu):**
- *Yapım/uygulama:* Matthew Berman, Cole Medin, Mervin Praison, Liam Ottley, Sabrina Ramonov (n8n).
- *Konsept/araştırma:* Andrej Karpathy, Two Minute Papers, Sebastian Raschka.
- *Haber/landscape:* Matt Wolfe, Fireship (kısa formatta).
- *Resmi:* Anthropic, OpenAI, Google Developers, LangChain.

**Filtreleme UI'sı:** seviye, kategori, araç, dil, tarih aralığı, süre. Boş işaretle → tümü.

### 3.11 `/sozluk`
A-Z liste + arama. Her terim: 1 cümle tanım + uzun açıklama linki + ilişkili terimler. Örnek terimler: Agent, Autonomous Agent, Tool Use, Function Calling, MCP, A2A, RAG, Agentic RAG, Embeddings, Vector Store, Reflexion, ReAct, Subagent, Orchestrator, Checkpoint, Computer Use, Browser Tool, Artifact, HITL, Compaction, Pointer Index, Skill, Memory, Episodic Memory, Procedural Memory, Token, Context Window, Streaming, Tracing, Eval.

### 3.12 `/roadmap` (öğrenme yolu)
Görsel akış (mermaid veya React komponenti):

```
[Python temelleri]
        ↓
[LLM nedir, API kullanımı] ── (1 hafta)
        ↓
[Prompting + Tool calling] ── (1 hafta)
        ↓
[RAG temelleri + vector store] ── (1 hafta)
        ↓
[İlk agent — tek araçlı, ReAct] ── (1 hafta)
        ↓
[Framework seç: CrewAI veya LangGraph] ── (2 hafta)
        ↓
[Multi-agent + orchestration] ── (1 hafta)
        ↓
[MCP sunucu yazma] ── (1 hafta)
        ↓
[Üretim: gözlemlenebilirlik, eval, maliyet] ── (1 hafta)
        ↓
[Bitirme projesi]
```
Her düğüm tıklanır → ilgili modül/araç sayfasına.

### 3.13 `/sss`
- "Agent vs. workflow farkı nedir?"
- "RAG agent mı değil mi?"
- "MCP mi function calling mi kullanayım?"
- "AutoGen ölü mü?"
- "Antigravity Cursor'dan farkı ne?"
- "Hangi modelle başlamalıyım?"
- "Multi-agent gerçekten gerekli mi?"
- "Maliyetimi nasıl kontrol ederim?"
- "Türkçe destek hangi modelde en iyi?"
- "Production'a nasıl çıkarım?"

---

## 4) İÇERİK ÜRETİM ŞABLONLARI

### 4.1 Kavram sayfası şablonu (markdown front-matter dahil)

```markdown
---
title: "Tool Use (Araç Kullanımı)"
slug: tool-use
category: kavramlar
level: baslangic
related: [function-calling, mcp-protokol, agent-orchestration]
updated: 2026-05-23
canonical: https://agenticai.tr/kavramlar/tool-use
---

## TL;DR
Bir agent'ın LLM dışı dünyada eylem yapabilmesi için harici fonksiyon
veya servis çağırma yeteneği. Function calling tool use'un teknik adıdır.

## Detaylı açıklama
...

## Diyagram
![Tool use loop](/img/tool-use-loop.svg)

## Minimal örnek
```python
# 20 satır altı tam çalışan örnek
```

## Gerçek dünya örneği
...

## Avantajlar / Sınırlamalar
| Avantaj | Sınırlama |
|---|---|

## Ne zaman kullanılır?
- ...
## Ne zaman kullanılmaz?
- ...

## İlişkili kavramlar
- [Function calling](/kavramlar/function-calling)
- [MCP](/kavramlar/mcp-protokol)

## Önerilen videolar
- ...

## Daha derine
- Anthropic docs · OpenAI docs · İlgili paper'lar
```

### 4.2 Araç sayfası şablonu

```markdown
---
title: "Claude Code"
slug: claude-code
category: araclar
type: agentic-cli
vendor: Anthropic
license: Proprietary (free tier var)
os: [macOS, Linux, Windows]
primary_model: Claude Sonnet 4.5 / Opus 4
last_review: 2026-05-23
related: [openai-codex, google-antigravity, claude-agent-sdk]
---

## Künye
- **Üretici:** Anthropic
- **Çıkış:** 2025
- **Son sürüm (incelendi):** 2026-05
- **Bağlam:** 1M token
- **Maliyet modeli:** Token başı API + Pro plan
- **MCP desteği:** Native

## Nedir?
Terminal'de çalışan, tüm kod tabanını okuyan, çok dosyalı değişiklik
yapan, test koşan ve commit atan otonom agent.

## Ne için iyi
...
## Ne için kötü
...

## Kurulum
```bash
npm install -g @anthropic-ai/claude-code
```

## İlk çalıştırma
...

## Senaryolar
### 1) ...
### 2) ...
### 3) ...

## Diğer araçlarla
- **MCP sunucularıyla:** ...
- **GitHub Actions ile:** ...

## Yaygın hatalar
- ...

## Maliyet/limit
- Idle session token harcar → `/stop`.
- Default Opus pahalı → subagent YAML ile model sabitle.

## Daha fazla
- Resmi doc · Cookbook · Topluluk Discord
```

### 4.3 Karşılaştırma sayfası şablonu
- Üst: tek paragraf "kime hangisi"
- Tablo: 10-15 boyut (otonomi, state, observability, ekosistem, fiyat, öğrenme eğrisi, çıkış engeli, MCP desteği, A2A desteği, üretim olgunluğu, topluluk, dokümantasyon, multi-model, debugging, deployment).
- 3 mini case study
- Karar ağacı görseli
- "Yanlış seçimin maliyeti" bölümü

### 4.4 Modül/ders şablonu

```markdown
---
modul: 04
title: "LangGraph ile İlk Agent"
sure: "90 dakika"
level: orta
onkosul: [01-temeller, 02-ilk-tool-calling]
ciktilar:
  - "Stateful graph kurabilme"
  - "Conditional edge yazabilme"
  - "Checkpoint kullanabilme"
---

## Hedef
...

## 1. Adım — Ortam kurulumu
...

## 2. Adım — Minimal graph
...

## 3. Adım — Tool ekleme
...

## 4. Adım — Memory & checkpoint
...

## Egzersiz
"GitHub issue'larını okuyup öncelik etiketleyen bir agent yaz."

## Çözüm (gizli — tıkla)
...

## Sonraki: Modül 05
```

### 4.5 Video kayıt şablonu (CMS girişi)
Bölüm 3.10'daki YAML. Yeni video eklerken zorunlu alanlar: title, channel, url, level, en az 1 kategori, why_watch.

### 4.6 Haber/changelog kart şablonu

```markdown
---
date: 2026-05-19
source: 9to5google
type: launch | update | deprecation | research
tools: [antigravity]
---

### Google Antigravity 2.0 yayında
**Ne değişti:** Standalone desktop agent manager, CLI, SDK ve AI Studio
bağlantısı eklendi. Gemini CLI tamamen değiştirildi.
**Etkisi:** Mevcut Gemini CLI kullananların migrasyonu gerekli.
**Detay:** [/araclar/google-antigravity](...)
```

---

## 5) TEKNİK GELİŞTİRME ÖNERİLERİ

### 5.1 Teknoloji yığını (önerilen)

| Katman | Seçim | Gerekçe |
|---|---|---|
| Framework | **Astro** veya **Next.js (App Router)** | İçerik ağırlıklı, MDX, SSG + ISR, mükemmel SEO |
| İçerik | **MDX** + dosya tabanlı (Git) | Versiyon kontrolü, PR ile katkı, kod blokları zengin |
| Stil | **Tailwind CSS** + **shadcn/ui** | Hızlı, tutarlı, dark mode kolay |
| Arama | **Pagefind** (statik) veya **MeiliSearch** (self-host) | Sunucusuz veya hafif, Türkçe stemming OK |
| Diyagram | **Mermaid** + **Excalidraw** dışa aktarımı | Kod gibi versiyonlanır |
| Video gömme | YouTube lite-embed (lazy) | Performans |
| Yorum/topluluk | **giscus** (GitHub Discussions tabanlı) | Bedava, spam-az |
| Analytics | **Plausible** veya **Umami** (self-host) | GDPR-uyumlu, hafif |
| Deployment | **Cloudflare Pages** veya **Vercel** | Edge cache, ücretsiz kademe |
| RSS / Newsletter | Astro RSS + **Buttondown** veya **Listmonk** | Düşük maliyet |

**Alternatif tamamen statik:** Docusaurus veya VitePress. İçeriği ön planda tutarsan Docusaurus de yeterli ama özelleştirme Astro/Next kadar esnek değil.

### 5.2 Bilgi mimarisi & gezinme
- **Sol kenar:** kategori ağaç menüsü (her sayfada).
- **Üst:** arama (Cmd/Ctrl+K), seviye filtresi, dil.
- **Sağ kenar (uzun sayfalarda):** sayfa içi ToC.
- **Etiket/tag sistemi:** her sayfada `tools`, `level`, `topic` etiketleri → tag sayfaları otomatik üretilir.
- **Önceki/Sonraki** navigasyon modüller arasında.
- **Mobil:** alt navigasyon barı (Ana / Ara / Roadmap / Videolar / Sözlük).

### 5.3 İçerik veri modeli (özet)
Her sayfa için zorunlu front-matter alanları:
```
title, slug, category, level, tags[], related[], updated, summary, canonical
```
İsteğe bağlı: `video_refs[]`, `tools[]`, `prerequisites[]`, `outcomes[]`.

Bu alanlar üzerinden otomatik üretilebilir sayfalar:
- "Bu araçla ilgili tüm içerikler" (`tools` ile filtre)
- "Bu seviyedeki tüm modüller"
- "Bu kavramı kullanan tüm sayfalar" (geri-bağlantı / backlink)

### 5.4 SEO
- Her sayfada: unique `<title>`, meta description, Open Graph görseli (otomatik üretim — Vercel OG veya satori).
- Yapısal veri: `Article`, `HowTo` (modüller), `VideoObject` (video sayfaları), `FAQPage` (/sss).
- `sitemap.xml` ve `robots.txt` otomatik.
- Kanonik URL'ler.
- Türkçe ana, ileride `en` alt-yol için hreflang hazır.
- Performans bütçesi: LCP < 2s, CLS < 0.1, JS payload < 100KB sayfa başı.

### 5.5 Veri toplama yöntemi (içerik için)
**YouTube küratasyonu:**
1. Editör manuel inceleyip seçer (kalite kontrol kritik).
2. YouTube Data API ile metadata otomatik çekilir (başlık, kanal, süre, yayın tarihi).
3. Video kaydı MDX olarak repo'ya eklenir.
4. Aylık script: silinmiş/private olan videoları işaretle (build-time check).

**Araç/framework versiyon takibi:**
1. Her araç sayfası `last_review` alanı taşır.
2. Aylık script: ChangeLog/Releases sayfalarını fetch et, diff varsa issue aç.
3. Editör manuel günceller.

**Haber akışı:**
- RSS toplayıcı (Anthropic blog, OpenAI blog, Google Developers, LangChain, ArXiv "agentic" etiketi) → editörün incelediği taslak kuyruğu.

### 5.6 İçerik güncelleme stratejisi
- **3 aylık döngü:** her araç ve karşılaştırma sayfası tam revizyon.
- **Aylık döngü:** sözlük, SSS, roadmap quick-pass.
- **Olay tetikli:** major sürüm (Antigravity 2.0, Claude X.X) → ilgili sayfalar 1 hafta içinde.
- **Geri-bağlantı uyarısı:** bir kavram güncellenince ona link veren tüm sayfalar `needs-review` etiketi alır.
- **"Updated" rozeti:** son 30 gün içinde değişen sayfalarda görünür.
- **Deprecation banner:** AutoGen gibi bakım modundaki araç sayfalarında uyarı kutusu.

### 5.7 Entegrasyon önerileri
- **GitHub repo (public):** içerik MDX, PR ile katkı, "edit this page" linki her sayfada.
- **Discord/Telegram:** topluluk sorularını site'ye geri besleme (haftalık öne çıkan sorular → SSS).
- **MCP sunucu örnekleri:** site kendi MCP sunucusunu da yayınlayabilir (siteyi sorgulayan agent için demo).
- **Obsidian publish-uyumlu export:** isteyen vault'ında offline okuyabilir.
- **API uç noktası (opsiyonel):** `/api/search`, `/api/videos?level=...` — başka uygulamalar tüketebilir.

### 5.8 Ölçeklenebilirlik notları
- İçerik sayısı 500+ olduğunda Pagefind index boyutu artar → MeiliSearch'e geçiş hazır olsun.
- MDX build süresi uzayınca **incremental static regeneration** (Next) veya Astro content collections + island.
- Görseller `next/image` veya Astro `<Image>` ile otomatik optimize (AVIF/WebP).
- Çoklu dil için içerik klasör yapısı: `content/tr/...`, `content/en/...` — başlangıçta sadece `tr`.
- CDN cache: 1 yıl varlıklar, kısa HTML (ISR ile).
- Build farm gerekirse: Cloudflare Pages parallel build / GitHub Actions matrix.

### 5.9 Kalite kontrol checklist (her yeni sayfa için)
- [ ] TL;DR maksimum 3 cümle
- [ ] En az 1 görsel/diyagram veya kod örneği
- [ ] `related` en az 3 link
- [ ] `level` doğru atanmış
- [ ] Resmi kaynak referansı var
- [ ] Son inceleme tarihi `updated` alanında
- [ ] Mobilde okunabilir (column genişliği test)
- [ ] Link kontrolü (otomatik linkcheck CI)

### 5.10 Ölçüm (başarı KPI)
- Sayfa başı ortalama okuma süresi
- Modül tamamlama oranı (modül-sonu egzersize tıklama)
- Karşılaştırma sayfalarında karar ağacı tıklama oranı
- Arama sorgularının "no result" yüzdesi (içerik boşluğu sinyali)
- GitHub'da issue/PR sayısı (topluluk sağlığı)

---

## 6) ÖNEMLİ VARSAYIMLAR (açıkça belirtilen)

1. **Dil:** Site Türkçe; ikinci dil olarak İngilizce sonradan açılabilir. Teknik terimler İngilizce orijinaliyle parantez içinde verilir (örn. "araç kullanımı (tool use)").
2. **Hedef kitle:** Yazılım geliştiriciler ve yapay zekayla yeni tanışan teknik okuryazar bireyler. Saf no-code kullanıcılar için ikincil bir "no-code yol" /senaryolar altında.
3. **Bütçe:** Tek geliştirici + yarı zamanlı editör varsayımıyla yığın seçimi (Cloudflare Pages + Buttondown ücretsiz/düşük kademede).
4. **Lisans:** İçerik **CC BY-SA 4.0**, kod **MIT** önerilir. GitHub'da public repo.
5. **Etik:** Affiliate link kullanılırsa açıkça etiketlenir; tarafsız karşılaştırma korunur.
6. **"Antigravity" yorumu:** Brief'teki "antigravity" terimi Google Antigravity IDE olarak yorumlandı (Kasım 2025 lansmanı + Mayıs 2026 2.0 sürümü). Başka bir araç kastediliyorsa kapsam tek sayfa eklemesiyle düzeltilebilir.
7. **AutoGen:** Bakım modu olduğu için "tarihsel + ne yerine kullanılır" perspektifiyle ele alınır; yeni proje önerisi yapılmaz.
8. **Codex:** OpenAI Codex'in 2026'daki computer-use'lu sürümü kastedilmektedir (eski 2021 Codex değil).

---

## 7) UYGULAMA SIRASI (6 haftalık MVP)

| Hafta | Çıktı |
|---|---|
| 1 | Astro/Next iskelet, tasarım sistemi, ana sayfa, /baslangic 4 sayfası |
| 2 | /kavramlar 10 temel sayfa + sözlük temeli |
| 3 | /araclar 5 ana araç sayfası (Claude Code, Codex, Antigravity, LangGraph, CrewAI) |
| 4 | /karsilastirmalar 3 ana karşılaştırma + karar ağacı |
| 5 | /modul 1-4 + /videolar 30 küratel video + arama |
| 6 | /roadmap görseli, /sss, SEO finishing, beta lansman |

---

**Bu plan doğrudan uygulanabilir.** Boşluk gördüğüm yerlere varsayımları açıkça belirttim. Eksik bulduğun ya da daraltmak/genişletmek istediğin bölüm söyle, ilgili kısmı detaylandırırım.
