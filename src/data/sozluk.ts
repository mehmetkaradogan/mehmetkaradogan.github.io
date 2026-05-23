export interface SozlukTerm {
  term: string;
  short: string;
  long?: string;
  related?: string[];
  link?: string;
}

export const sozluk: SozlukTerm[] = [
  {
    term: "A2A",
    short: "Agent-to-Agent protokolü; farklı sağlayıcıların ajanlarının birbirleriyle standart mesaj formatında iletişim kurmasını sağlayan açık protokol.",
    long: "A2A, MCP'nin araç erişimini standartlaştırması gibi, ajan-ajan iletişimini standartlaştırır. Görev devri (handoff), durum senkronizasyonu ve ajan keşfi (agent discovery) işlevlerini tanımlar.",
    related: ["MCP", "Orchestrator", "Subagent"],
    link: "/kavramlar/a2a-protokol"
  },
  {
    term: "Agentic RAG",
    short: "Retrieval-Augmented Generation'ın ajan tarafından dinamik olarak yönetildiği yapı; ajan hangi kaynaklara bakacağına, ne zaman arama yapacağına kendi karar verir.",
    long: "Klasik RAG'da retrieval adımı sabittir. Agentic RAG'da ajan soruya göre farklı vektör depolarını, web aramalarını veya API çağrılarını dinamik olarak seçer ve gerekirse çoklu retrieval döngüsü çalıştırır.",
    related: ["RAG", "Vector Store", "Tool Use", "ReAct"],
    link: "/kavramlar/rag-ve-agentic-rag"
  },
  {
    term: "Agent",
    short: "Bir LLM'in çevresini algılayıp, araç kullanarak eylem gerçekleştirebildiği ve hedef odaklı şekilde çalışan özerk yazılım sistemi.",
    long: "Pasif bir soru-cevap sisteminden farklı olarak agent; planlama, araç çağırma, sonucu gözlemleme ve gerekirse tekrarlama döngüsünü kendi yürütür. Temel bileşenler: LLM + araçlar + hafıza + yansıma döngüsü.",
    related: ["Autonomous Agent", "Orchestrator", "Subagent", "Tool Use"],
    link: "/baslangic/agentic-ai-nedir"
  },
  {
    term: "Artifact",
    short: "Bir ajanın ürettiği ve dışa aktarılabilen somut çıktı; kod dosyası, rapor, görsel veya yapılandırılmış veri olabilir.",
    long: "Antigravity IDE'de Artifact paneli, ajanın ürettiği tüm çıktıları sürüm geçmişiyle saklar. Genel anlamda artifact, ajan çalışmasının sonucunda oluşan ve kullanılabilir hale gelen her türlü dosya veya veridir.",
    related: ["Checkpoint", "Memory"],
  },
  {
    term: "Autonomous Agent",
    short: "İnsan müdahalesi olmaksızın uzun süreli görevleri planlayan, yürüten ve tamamlayan yapay zeka sistemi.",
    long: "Otonom ajan (autonomous agent), başlangıçta bir hedef verildiğinde alt-görevleri kendisi belirler, araç çağrılarını sıralar ve hataları kendi düzeltir. İnsan onayı (HITL) isteğe bağlıdır.",
    related: ["Agent", "HITL", "Planning", "Reflexion"],
    link: "/baslangic/agentic-ai-nedir"
  },
  {
    term: "Browser Tool",
    short: "Bir ajanın gerçek bir web tarayıcısını programatik olarak kontrol edebildiği araç; sayfa gezme, form doldurma ve ekran görüntüsü alma işlevlerini kapsar.",
    long: "Browser tool, computer use'un özel bir biçimidir. Anthropic Computer Use, OpenAI Operator ve Antigravity Browser Tool bu kategoridedir. Headless Chromium veya gerçek bir tarayıcı üzerinden çalışabilir.",
    related: ["Computer Use", "Tool Use"],
  },
  {
    term: "Checkpoint",
    short: "Bir ajanın o anki durumunu (state) kaydeden anlık görüntü; kesinti durumunda kaldığı yerden devam etmeye olanak tanır.",
    long: "Uzun süreli görevlerde checkpoint kritiktir. LangGraph'ta SqliteSaver veya MemorySaver ile checkpoint alınır. Checkpoint; mesaj geçmişi, değişken değerleri ve grafik düğüm konumunu içerir.",
    related: ["Memory", "LangGraph", "Compaction"],
    link: "/kavramlar/model-context-management"
  },
  {
    term: "Compaction",
    short: "Uzayan konuşma geçmişini veya bağlamı sıkıştırıp özetleyerek token penceresini verimli kullanan teknik.",
    long: "Uzun oturumlarda bağlam penceresi (context window) dolduğunda compaction devreye girer. Eski mesajlar özetlenerek sıkıştırılır; önemli bilgiler korunur, tekrarlayan içerikler atılır. Claude Code'un 'compaction' özelliği buna örnektir.",
    related: ["Context Window", "Memory", "Checkpoint", "Pointer Index"],
    link: "/kavramlar/model-context-management"
  },
  {
    term: "Computer Use",
    short: "Bir ajanın gerçek bir bilgisayar ekranını görerek fare tıklama, klavye yazma ve uygulama açma gibi GUI eylemlerini gerçekleştirebildiği yetenek.",
    long: "Anthropic Computer Use, OpenAI Operator/Codex ve Antigravity Browser Tool bu kategoridedir. Ekran görüntüsü alır, pikselleri analiz eder ve uygun UI elementlerine tıklar. API tabanlı bir çözüm olmadığında GUI otomasyon alternatifi sunar.",
    related: ["Browser Tool", "Tool Use"],
  },
  {
    term: "Context Window",
    short: "Bir LLM'in tek seferinde işleyebildiği maksimum token (kelime parçası) sayısı; ajanın 'çalışma belleği' olarak düşünülebilir.",
    long: "2026 itibarıyla Claude modelleri 1 milyon token bağlam destekliyor. Büyük bağlam, uzun belgeleri parçalamadan işlemeye olanak tanır. Ancak büyük bağlam her zaman daha iyi sonuç vermez; dikkat mekanizması zayıflayabilir.",
    related: ["Token", "Compaction", "Memory", "Checkpoint"],
    link: "/kavramlar/model-context-management"
  },
  {
    term: "Embeddings",
    short: "Metin, görsel veya diğer verilerin matematiksel vektörlere dönüştürülmesi; anlamsal benzerlik hesaplamak için kullanılır.",
    long: "Embeddings, RAG sistemlerinin temelidir. 'Merhaba' ve 'Selam' gibi anlam olarak yakın ifadeler vektör uzayında birbirine yakın temsil edilir. Embedding modelleri: text-embedding-3-small (OpenAI), nomic-embed-text (yerel) veya çok dilli modeller.",
    related: ["Vector Store", "RAG", "Agentic RAG"],
  },
  {
    term: "Episodic Memory",
    short: "Bir ajanın geçmiş oturumlardan veya etkileşimlerden edindiği deneyimi sakladığı hafıza türü; 'ne olduğunu hatırlar'.",
    long: "Epizodik hafıza (episodic memory), kullanıcıyla önceki konuşmaların özetlerini, tamamlanan görev geçmişini ve öğrenilen bağlamı içerir. Genellikle vektör deposunda saklanır ve semantik arama ile erişilir.",
    related: ["Memory", "Procedural Memory", "Vector Store"],
    link: "/kavramlar/memory"
  },
  {
    term: "Eval",
    short: "Ajan veya LLM çıktılarının kalitesini otomatik veya insan değerlendirmesiyle ölçen test süreci.",
    long: "Eval (evaluation), üretim öncesi ve sonrası ajan sisteminin ne kadar iyi çalıştığını ölçer. Doğruluk, güvenlik, tutarlılık ve gecikme metrikleri değerlendirilir. LangSmith, Braintrust ve Ragas popüler eval çerçeveleridir.",
    related: ["Tracing", "HITL"],
  },
  {
    term: "Function Calling",
    short: "LLM'in önceden tanımlanmış bir JSON şemasına göre harici fonksiyonları çağırmasını sağlayan düşük seviyeli mekanizma.",
    long: "Function calling, tool use'un teknik uygulamasıdır. Model, hangi fonksiyonun hangi parametrelerle çağrılacağını JSON olarak üretir; uygulama bu JSON'u gerçek fonksiyon çağrısına dönüştürür. MCP, function calling'in üzerine inşa edilmiş bir standart katmandır.",
    related: ["Tool Use", "MCP"],
    link: "/kavramlar/function-calling"
  },
  {
    term: "HITL",
    short: "Human-in-the-Loop; kritik ajan kararlarında veya yüksek riskli eylemlerde insan onayı veya müdahalesi gerektiren tasarım deseni.",
    long: "HITL, tam otonom çalışma ile insan kontrolü arasındaki dengeyi sağlar. Antigravity'nin Co-Pilot modu, LangGraph'ın interrupt özelliği ve n8n'in onay adımları HITL'e örnektir. Finansal işlemler, kritik dosya silme ve hassas veri erişimi için önerilir.",
    related: ["Autonomous Agent", "Checkpoint"],
    link: "/kavramlar/human-in-the-loop"
  },
  {
    term: "MCP",
    short: "Model Context Protocol; bir ajanın araçlara, kaynaklara ve istemcilere standart bir arayüzle bağlanmasını sağlayan Anthropic kaynaklı açık protokol.",
    long: "MCP, sunucu (araç sağlayıcı) - istemci (ajan) mimarisini tanımlar. GitHub, Slack, PostgreSQL gibi 200+ topluluk MCP sunucusu mevcut. OpenAI ve Google 2026'da resmi MCP desteğini duyurdu; bu protokol ajan ekosisteminin fiili standardı haline geldi.",
    related: ["A2A", "Function Calling", "Tool Use"],
    link: "/kavramlar/mcp-protokol"
  },
  {
    term: "Memory",
    short: "Bir ajanın bilgiyi saklama ve sonraki adımlarda erişme yeteneği; kısa vadeli (bağlam), uzun vadeli (vektör deposu), epizodik ve prosedürel olmak üzere dört türü vardır.",
    long: "Hafıza türleri: 1) Kısa vadeli (context window içinde), 2) Uzun vadeli (vector store ile semantik arama), 3) Epizodik (geçmiş oturum özetleri), 4) Prosedürel (öğrenilmiş beceriler). İyi hafıza mimarisi, ajan etkinliğinin temel belirleyicisidir.",
    related: ["Episodic Memory", "Procedural Memory", "Context Window", "Vector Store"],
    link: "/kavramlar/memory"
  },
  {
    term: "Orchestrator",
    short: "Çok ajanlı sistemlerde görevleri planlayan, dağıtan ve alt-ajanları (subagent) koordine eden üst düzey ajan.",
    long: "Orkestratör (orchestrator), Manager-Worker deseninin yönetici tarafıdır. Görevi alt-görevlere böler, her alt-görevi uygun worker'a atar, sonuçları toplar ve bütünleştirir. Claude Code'un parent agent'ı ve CrewAI'nin manager agent'ı bu rolü üstlenir.",
    related: ["Subagent", "Agent", "Multi-Agent Systems"],
    link: "/kavramlar/agent-orchestration"
  },
  {
    term: "Pointer Index",
    short: "Uzun belge veya hafıza arşivlerinde ajanın ilgili bölümlere hızlıca ulaşmasını sağlayan referans yapısı; 'memory.md' dosyaları buna örnektir.",
    long: "Büyük vault veya belge koleksiyonlarında tüm içeriği her seferinde bağlama yüklemek pratik değildir. Pointer index, özet başlıklar ve konumlar içerir; ajan bu indekse bakarak hangi tam belgeye ihtiyaç duyduğuna karar verir.",
    related: ["Compaction", "Memory", "Context Window"],
    link: "/kavramlar/model-context-management"
  },
  {
    term: "Procedural Memory",
    short: "Bir ajanın nasıl yapılacağını öğrendiği becerileri ve prosedürleri sakladığı hafıza türü; 'nasıl yapılır' bilgisini içerir.",
    long: "Prosedürel hafıza (procedural memory), ajanın geçmiş başarılı eylem dizilerini öğrenerek gelecekte benzer görevleri daha verimli yapmasını sağlar. Skill modülleri, öğrenilmiş prompt şablonları ve iş akışı tarifleri bu kategoridedir.",
    related: ["Memory", "Episodic Memory", "Skill"],
    link: "/kavramlar/memory"
  },
  {
    term: "RAG",
    short: "Retrieval-Augmented Generation; LLM'in bilgi tabanında arama yaparak yanıtını dış kaynakla desteklediği mimari.",
    long: "RAG, LLM'in eğitim kesim tarihini (knowledge cutoff) aşmasını sağlar. Kullanıcı sorusu vektör benzerliğiyle ilgili belge parçalarını bulur, bu parçalar bağlam olarak modele verilir. Agentic RAG'da ise retrieval adımı ajan tarafından dinamik yönetilir.",
    related: ["Agentic RAG", "Vector Store", "Embeddings"],
    link: "/kavramlar/rag-ve-agentic-rag"
  },
  {
    term: "ReAct",
    short: "Reason + Act; ajanın her adımda önce akıl yürüttüğü, ardından bir araç çağırdığı ve sonucu gözlemlediği temel döngüsel strateji.",
    long: "ReAct (Reasoning + Acting), 2022'de önerilen ve bugün hâlâ en yaygın ajan döngüsüdür. Model adım adım düşünür (chain-of-thought), araç çağırır, sonucu gözler ve duruma göre devam eder veya durur. Çoğu framework bu temel üzerine inşa edilmiştir.",
    related: ["Reflexion", "Tool Use", "Planning"],
    link: "/kavramlar/planning"
  },
  {
    term: "Reflexion",
    short: "Bir ajanın kendi ürettiği çıktıyı eleştirip revize ettiği öz-değerlendirme döngüsü; kalite artırımı için kullanılır.",
    long: "Reflexion deseninde ajan ilk yanıtı ürettikten sonra bir 'eleştirmen' rolüne geçer ve ürettiği çıktının eksiklerini, hatalarını listeler. Ardından bu eleştiriyi kullanarak revize edilmiş bir yanıt üretir. Döngü belirli bir kalite eşiğine ulaşana kadar tekrar edebilir.",
    related: ["ReAct", "Planning", "Autonomous Agent"],
    link: "/kavramlar/reflection"
  },
  {
    term: "Skill",
    short: "Bir ajanın tekrarlayan görevleri daha verimli yapabilmesi için önceden öğrenilmiş veya tanımlanmış yetenek paketi.",
    long: "Skill (beceri), ajanın kütüphanesinde sakladığı fonksiyon, prompt şablonu veya prosedür topluluğudur. Claude Code'daki 'skills' özelliği, kullanıcının SKILL.md dosyalarıyla ajana özel yetenekler tanımlamasını sağlar.",
    related: ["Procedural Memory", "Tool Use", "Subagent"],
  },
  {
    term: "Streaming",
    short: "LLM yanıtının tamamlanmayı beklemeden, üretildikçe parça parça kullanıcıya iletilmesi; daha düşük algılanan gecikme sağlar.",
    long: "Streaming, özellikle uzun yanıtlarda kullanıcı deneyimini iyileştirir. Anthropic ve OpenAI API'leri server-sent events (SSE) ile akış desteği sunar. Ajan sistemlerinde her araç sonucu da akışla iletilebilir.",
    related: ["Token", "Context Window"],
  },
  {
    term: "Subagent",
    short: "Bir orkestratör ajanın altında çalışan, belirli bir göreve özelleşmiş alt-ajan.",
    long: "Subagent, Manager-Worker deseninin worker tarafıdır. Tek bir göreve odaklanır (örneğin: yalnızca kod gözden geçirme, yalnızca web araması). Claude Code'da subagent'lar paralel çalışabilir ve her birine farklı model atanabilir (maliyet optimizasyonu).",
    related: ["Orchestrator", "Agent", "Multi-Agent Systems"],
    link: "/kavramlar/agent-orchestration"
  },
  {
    term: "Token",
    short: "LLM'in metni işlediği en küçük anlam birimi; yaklaşık olarak 3/4 İngilizce kelimeye veya 1-2 Türkçe hece/harfe karşılık gelir.",
    long: "Tokenizasyon (tokenization), metni LLM'in işleyebileceği sayısal parçalara böler. Fiyatlandırma token başı yapılır. Türkçe, Latince alfabeyle yazdığından İngilizce'ye yakın token verimliliği sunar; Arapça veya Çince'ye kıyasla daha ekonomiktir.",
    related: ["Context Window", "Streaming"],
  },
  {
    term: "Tool Use",
    short: "Bir LLM'in JSON şemasıyla tanımlanmış harici fonksiyonları veya servisleri çağırarak gerçek dünyada eylem yapabilmesi.",
    long: "Tool use (araç kullanımı), ajanın temel yeteneğidir. Araçlar: web arama, kod çalıştırma, dosya okuma/yazma, API çağrısı, veritabanı sorgusu olabilir. Function calling, tool use'un düşük seviyeli teknik adıdır; MCP ise araçları standart şekilde keşfedilir yapar.",
    related: ["Function Calling", "MCP", "ReAct"],
    link: "/kavramlar/tool-use"
  },
  {
    term: "Tracing",
    short: "Bir ajan çalışmasının her adımını — araç çağrılarını, model yanıtlarını ve hataları — kayıt altına alan gözlemlenebilirlik mekanizması.",
    long: "Tracing (iz kaydı), ajan sistemlerini hata ayıklamak ve optimize etmek için zorunludur. LangSmith, Langfuse ve Helicone popüler tracing araçlarıdır. Bir trace; her düğümde geçen süreyi, token kullanımını ve ara sonuçları gösterir.",
    related: ["Eval", "HITL"],
  },
  {
    term: "Vector Store",
    short: "Vektör gömmelerini (embeddings) saklayan ve semantik benzerlik araması yapılabilen özel veritabanı.",
    long: "Vektör deposu (vector store), RAG sistemlerinin uzun vadeli hafızasıdır. Popüler seçenekler: Chroma (yerel/hafif), Pinecone (bulut/yönetilen), pgvector (PostgreSQL eklentisi), Weaviate. Sorgu geldiğinde cosine similarity ile en yakın vektörler bulunur.",
    related: ["Embeddings", "RAG", "Memory"],
  }
];
