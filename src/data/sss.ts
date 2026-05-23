export interface SSSItem {
  q: string;
  a: string;
  category?: string;
}

export const sss: SSSItem[] = [
  {
    q: "Agent (ajan) ile workflow (iş akışı) arasındaki fark nedir?",
    a: "Workflow, önceden belirlenmiş adımların sırayla veya koşullu olarak yürütüldüğü sabit bir akıştır; her karar noktası insan tarafından tasarlanmıştır. Agent ise hedef verildiğinde hangi adımları atacağına, hangi araçları kullanacağına ve ne zaman duracağına kendi karar verir. Basit otomasyon için workflow yeterlidir; belirsiz veya değişken görevler için agent gereklidir.",
    category: "temel-kavramlar"
  },
  {
    q: "RAG bir agent midir, yoksa agent olmadan da kullanılabilir mi?",
    a: "RAG (Retrieval-Augmented Generation) kendi başına bir agent değildir; bir LLM'in yanıt üretmeden önce bilgi tabanında arama yapmasını sağlayan bir mimari desendir. Agent olmadan da klasik soru-cevap sistemlerinde kullanılabilir. 'Agentic RAG' ise retrieval kararlarının bir agent tarafından dinamik olarak yönetildiği, hangi kaynaklara ne zaman bakılacağının LLM tarafından belirlendiği ileri düzey yapıdır.",
    category: "temel-kavramlar"
  },
  {
    q: "MCP mi, function calling mi kullanayım?",
    a: "Function calling, tek bir uygulama içinde araçları LLM'e sunmanın doğrudan yöntemidir; kurulumu kolaydır ve küçük projeler için idealdir. MCP ise araçları ağ üzerinde keşfedilebilir ve farklı LLM sağlayıcılarıyla uyumlu hale getiren bir standart katmandır. Paylaşılabilir, yeniden kullanılabilir araçlar geliştiriyorsanız veya büyük bir ekosistem kuruyorsanız MCP tercih edin; hızlı prototip veya tek uygulamalı projeler için function calling yeterlidir.",
    category: "teknik"
  },
  {
    q: "AutoGen artık geliştirilmiyor mu, projem tehlikede mi?",
    a: "Microsoft, AutoGen'i Mayıs 2026'da bakım moduna aldı; bu, yeni özellik geliştirmesinin durduğu ancak kritik güvenlik yamalarının süreceği anlamına geliyor. Mevcut AutoGen projeleri kısa vadede çalışmaya devam eder. Yeni projeler için LangGraph (üretim ve denetlenebilirlik öncelikliyse) veya CrewAI (hızlı prototip öncelikliyse) geçişi önerilir; mevcut projeler için 6-12 ay içinde geçiş planlaması başlatın.",
    category: "araclar"
  },
  {
    q: "Google Antigravity ile Cursor arasındaki temel fark nedir?",
    a: "Cursor, bir kod editörü olup AI yardımcı pilot (copilot) özelliklerine odaklanır; ajan modunda çalışabilir ancak birincil işlevi editör yardımcılığıdır. Antigravity 2.0 ise tamamen ajan odaklıdır: bağımsız Agent Manager uygulaması, plan modu, browser kontrolü ve bilgi tabanı yönetimi sunar. Cursor Vim/VS Code alışkanlıklarını korumak isteyenler için uygunken, Antigravity ajan orkestrasyon ve masaüstü otomasyon görevlerinde öne çıkar.",
    category: "araclar"
  },
  {
    q: "Hangi modelle başlamalıyım?",
    a: "Başlangıç için Claude Haiku 3.5 veya GPT-4o mini önerilir; düşük maliyetleri sayesinde bol bol deneme yapabilirsiniz. Daha karmaşık akıl yürütme gerektiren görevlerde Claude Sonnet 4.5 veya GPT-4o'ya geçin. Üretim sistemlerinde maliyet optimizasyonu için görev türüne göre model seçimi (routing) yapın: basit sınıflandırma için Haiku, yaratıcı ve karmaşık görevler için Sonnet, kritik karar noktaları için Opus 4.",
    category: "baslangic"
  },
  {
    q: "Multi-agent sistem kurmak gerçekten gerekli mi?",
    a: "Tek bir agent veya basit bir LLM çağrısı çoğu zaman yeterlidir; gereksiz karmaşıklıktan kaçının. Multi-agent sistemi şu durumlarda tercih edin: görev çok büyük olup tek bir bağlam penceresine sığmıyorsa, farklı uzmanlık gerektiren paralel alt-görevler varsa veya hata toleransı ve denetlenebilirlik kritikse. Aksi hâlde tek agent daha hızlı, daha ucuz ve daha kolay hata ayıklanabilir.",
    category: "mimari"
  },
  {
    q: "Agent maliyetimi nasıl kontrol edebilirim?",
    a: "İlk kural: her şey için en pahalı modeli kullanmayın. Görev türüne göre model atayın (Haiku triaj ve sınıflandırma için, Sonnet karmaşık akıl yürütme için). Token kullanımını izlemek için LangSmith veya Langfuse tracing kurun. Bağlam penceresini temizlemek için compaction ve pointer index kullanın. Üretim öncesi token bütçesi belirleyin ve her agent çağrısına `max_tokens` sınırı ekleyin.",
    category: "maliyet"
  },
  {
    q: "Türkçe desteği hangi modelde en iyi?",
    a: "2026 itibarıyla Claude Sonnet 4.5 ve GPT-4o, Türkçe'yi çok iyi düzeyde destekliyor; doğal, akıcı metin üretimi ve anlama konusunda güçlüler. Gemini 3 Pro da Türkçe'de tatmin edici sonuçlar veriyor. Yerel ve ücretsiz alternatif olarak Llama 3.1 ve Mistral modelleri Türkçe'yi makul düzeyde destekler, ancak kalite ticari modellerin gerisinde kalır. Teknik doküman veya kod yorumu gibi karma Türkçe-İngilizce içerik için Claude veya GPT-4o tercih edin.",
    category: "modeller"
  },
  {
    q: "Agent sistemimi production'a nasıl çıkarabilirim?",
    a: "Üretim öncesi şu adımları tamamlayın: 1) Tracing kurarak her çalıştırmanın izini kayıt altına alın (LangSmith, Langfuse). 2) Eval seti oluşturun ve yeni sürümlerde regresyon testi uygulayın. 3) Kritik adımlara HITL checkpoint ekleyin. 4) Hata yönetimi ve yeniden deneme (retry) mantığı yazın. 5) Token ve maliyet bütçesi belirleyip aşımlarda uyarı kurun. 6) Aşamalı yayın yapın: önce %5, sonra %100 trafik.",
    category: "uretim"
  }
];
