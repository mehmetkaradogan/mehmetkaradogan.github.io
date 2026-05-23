// src/components/islands/DecisionTree.tsx
// Preact island — "Ne yapacaksın?" interactive question-chain that recommends a tool.

import { useState } from 'preact/hooks';

interface Option {
  label: string;
  nextId?: string;
  result?: Result;
}

interface Node {
  id: string;
  question: string;
  options: Option[];
}

interface Result {
  tool: string;
  why: string;
  href: string;
  alternatives?: string[];
}

// Decision tree data — matches plan §3.5 scenarios
const TREE: Node[] = [
  {
    id: 'root',
    question: 'Ne yapmak istiyorsun?',
    options: [
      { label: 'Kod yazmak / geliştirme yapmak', nextId: 'coding' },
      { label: 'Otomatik iş akışı kurmak', nextId: 'workflow' },
      { label: 'Multi-agent sistem kurmak', nextId: 'multiagent' },
      { label: 'Araştırma / bilgi işleme', nextId: 'research' },
    ],
  },
  {
    id: 'coding',
    question: 'Nasıl bir geliştirme ortamı istiyorsun?',
    options: [
      { label: 'Terminal / CLI ağırlıklı çalışıyorum', nextId: 'coding-terminal' },
      { label: 'IDE içinde entegre agent istiyorum', nextId: 'coding-ide' },
      { label: 'VS Code tabanlı, Anthropic ekosistemi', nextId: 'coding-cursor' },
    ],
  },
  {
    id: 'coding-terminal',
    question: 'Hangi ekosistemi tercih edersin?',
    options: [
      {
        label: 'Anthropic / Claude',
        result: {
          tool: 'Claude Code',
          why: 'Terminal-first agentic coding için en güçlü seçenek. Subagents, Claude.md context ve 1M token bağlam ile uzun görevlerde rakipsiz.',
          href: '/araclar/claude-code',
          alternatives: ['Cursor'],
        },
      },
      {
        label: 'OpenAI / GPT',
        result: {
          tool: 'OpenAI Codex',
          why: 'GPT tabanlı terminal ajanı. Computer use ve yapılandırılmış araç çağırma.',
          href: '/araclar/openai-codex',
          alternatives: ['Claude Code'],
        },
      },
      {
        label: 'Google / Gemini',
        result: {
          tool: 'Google Antigravity',
          why: 'Gemini 3 Pro ile çalışan agentic IDE + CLI + SDK. Browser control ve Artifacts paneli.',
          href: '/araclar/google-antigravity',
          alternatives: ['Claude Code'],
        },
      },
    ],
  },
  {
    id: 'coding-ide',
    question: 'Hangi IDE/editör tabanlı istiyorsun?',
    options: [
      {
        label: 'Google Antigravity (VS Code fork, Gemini)',
        result: {
          tool: 'Google Antigravity',
          why: 'Gemini ekosisteminde IDE içinde otonom agent. Plan Mode, browser control, Artifacts.',
          href: '/araclar/google-antigravity',
          alternatives: ['Cursor'],
        },
      },
      {
        label: 'Cursor (VS Code fork, Claude/GPT)',
        result: {
          tool: 'Cursor',
          why: 'VS Code tabanlı, Claude ve GPT ile çalışan güçlü AI editörü.',
          href: '/araclar/cursor',
          alternatives: ['Google Antigravity'],
        },
      },
    ],
  },
  {
    id: 'coding-cursor',
    question: '',
    options: [
      {
        label: '',
        result: {
          tool: 'Cursor',
          why: 'Anthropic ekosistemi ile VS Code tabanlı AI editörü.',
          href: '/araclar/cursor',
        },
      },
    ],
  },
  {
    id: 'workflow',
    question: 'Kod yazmak istiyor musun?',
    options: [
      { label: 'Hayır, kodsuz (no-code) istiyorum', nextId: 'workflow-nocode' },
      { label: 'Evet, Python/Node ile özelleştirilmiş', nextId: 'workflow-code' },
    ],
  },
  {
    id: 'workflow-nocode',
    question: 'Self-hosted mi, cloud mu?',
    options: [
      {
        label: 'Self-hosted tercih ederim',
        result: {
          tool: 'n8n',
          why: 'Açık kaynak, self-hosted iş akışı otomasyonu. 400+ entegrasyon, güçlü node editörü.',
          href: '/araclar/n8n',
          alternatives: ['Make'],
        },
      },
      {
        label: 'Cloud SaaS daha pratik',
        result: {
          tool: 'Make (eski adı Integromat)',
          why: 'Cloud tabanlı görsel iş akışı. Hızlı prototipleme ve geniş entegrasyon kataloğu.',
          href: '/araclar/make',
          alternatives: ['Zapier', 'n8n'],
        },
      },
      {
        label: 'Basit entegrasyonlar yeterli',
        result: {
          tool: 'Zapier',
          why: 'En yaygın no-code otomasyon aracı. Basit tetikleyici→eylem yapısı.',
          href: '/araclar/zapier',
          alternatives: ['Make'],
        },
      },
    ],
  },
  {
    id: 'workflow-code',
    question: 'Ağırlıklı hedef nedir?',
    options: [
      {
        label: 'Browser otomasyonu / web scraping',
        result: {
          tool: 'Claude Computer Use veya OpenAI Computer Use',
          why: 'LLM tabanlı browser kontrolü. Claude veya OpenAI Computer Use API ile görsel UI otomasyonu.',
          href: '/karsilastirmalar/hangi-arac-ne-zaman',
          alternatives: ['n8n (headless browser node ile)'],
        },
      },
      {
        label: 'Veri pipeline + entegrasyon',
        result: {
          tool: 'n8n',
          why: 'Kod destekli iş akışı. JavaScript node\'ları ile tam kontrol, 400+ entegrasyon.',
          href: '/araclar/n8n',
          alternatives: ['LangGraph'],
        },
      },
    ],
  },
  {
    id: 'multiagent',
    question: 'Hız mı, üretim güvenilirliği mi öncelikli?',
    options: [
      { label: 'Hızlı prototip (1 günde çalışsın)', nextId: 'multi-fast' },
      { label: 'Üretim: denetlenebilir, güvenilir', nextId: 'multi-prod' },
      { label: 'Birinci taraf SDK kullanmak istiyorum', nextId: 'multi-sdk' },
    ],
  },
  {
    id: 'multi-fast',
    question: '',
    options: [
      {
        label: '',
        result: {
          tool: 'CrewAI',
          why: 'Multi-agent prototipleme için en kolay framework. Role-based agentlar, görev devri, minimum boilerplate.',
          href: '/araclar/crewai',
          alternatives: ['OpenAI Agents SDK', 'LangGraph'],
        },
      },
    ],
  },
  {
    id: 'multi-prod',
    question: 'Hangi kısıt en önemli?',
    options: [
      {
        label: 'Regüle sektör, audit trail zorunlu',
        result: {
          tool: 'LangGraph',
          why: 'Durable state persistence, LangSmith gözlemlenebilirlik, checkpoint. Finansal/sağlık/hukuk sektörleri için tercih.',
          href: '/araclar/langgraph',
          alternatives: ['Semantic Kernel (Microsoft ekosistemi)'],
        },
      },
      {
        label: 'Microsoft ekosistemi (Azure/C#)',
        result: {
          tool: 'Semantic Kernel',
          why: 'Microsoft\'un resmi agent framework. Azure AI entegrasyonu, .NET ve Python desteği.',
          href: '/araclar/semantic-kernel',
          alternatives: ['LangGraph'],
        },
      },
    ],
  },
  {
    id: 'multi-sdk',
    question: 'Hangi sağlayıcı?',
    options: [
      {
        label: 'Anthropic / Claude',
        result: {
          tool: 'Claude Agent SDK',
          why: "Anthropic'in birinci taraf agent SDK'sı. Subagentlar, Agent Teams, HITL checkpoint desteği.",
          href: '/araclar/claude-agent-sdk',
          alternatives: ['LangGraph'],
        },
      },
      {
        label: 'OpenAI / GPT',
        result: {
          tool: 'OpenAI Agents SDK',
          why: "OpenAI'nin birinci taraf agent SDK'sı. Tracing, handoffs ve guardrails yerleşik.",
          href: '/araclar/openai-agents-sdk',
          alternatives: ['CrewAI'],
        },
      },
    ],
  },
  {
    id: 'research',
    question: 'Araştırmayı nerede yapmak istiyorsun?',
    options: [
      {
        label: 'Kişisel bilgi tabanı (Obsidian / Notion)',
        result: {
          tool: 'Obsidian AI (MCP entegrasyonu)',
          why: "Obsidian vault'unuzu agent'a bağlayın: otomatik özet, bağlantı ve soru-cevap.",
          href: '/araclar/obsidian-ai',
          alternatives: ['Claude Code + MCP'],
        },
      },
      {
        label: 'Web + çoklu kaynak araştırma',
        result: {
          tool: 'Claude Code veya Antigravity',
          why: 'Web araştırma + dosya yazma + özetleme için agentic IDE veya terminal ajan.',
          href: '/araclar/claude-code',
          alternatives: ['OpenAI Codex'],
        },
      },
    ],
  },
];

const nodeMap = new Map(TREE.map((n) => [n.id, n]));

function ResultCard({ result, onReset }: { result: Result; onReset: () => void }) {
  return (
    <div
      style={{
        borderRadius: '1rem',
        border: '2px solid var(--color-primary-300)',
        background: 'var(--color-primary-50)',
        padding: '1.5rem',
        maxWidth: 480,
        margin: '0 auto',
      }}
    >
      <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
        Öneri
      </p>
      <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-800)', marginBottom: '0.5rem' }}>
        {result.tool}
      </p>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-primary-700)', lineHeight: 1.6, marginBottom: '1rem' }}>
        {result.why}
      </p>
      {result.alternatives && result.alternatives.length > 0 && (
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-primary-600)', marginBottom: '1rem' }}>
          <strong>Alternatifler:</strong> {result.alternatives.join(', ')}
        </p>
      )}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <a
          href={result.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            background: 'var(--color-primary-600)',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.875rem',
            textDecoration: 'none',
          }}
        >
          Ayrıntılı incele →
        </a>
        <button
          type="button"
          onClick={onReset}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--color-primary-300)',
            background: 'white',
            color: 'var(--color-primary-700)',
            fontWeight: 600,
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
        >
          Yeniden başla
        </button>
      </div>
    </div>
  );
}

export default function DecisionTree() {
  const [history, setHistory] = useState<string[]>(['root']);
  const [result, setResult] = useState<Result | null>(null);

  const currentId = history[history.length - 1] ?? 'root';
  const currentNode = nodeMap.get(currentId);

  function choose(option: Option) {
    if (option.result) {
      setResult(option.result);
      return;
    }
    if (option.nextId) {
      const next = nodeMap.get(option.nextId);
      // If next node has only one option with no question/label, auto-advance
      if (next && next.question === '' && next.options.length === 1 && next.options[0]?.result) {
        setResult(next.options[0].result);
        return;
      }
      setHistory([...history, option.nextId]);
    }
  }

  function back() {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setResult(null);
    }
  }

  function reset() {
    setHistory(['root']);
    setResult(null);
  }

  if (result) {
    return (
      <div style={{ padding: '1rem 0' }}>
        <ResultCard result={result} onReset={reset} />
      </div>
    );
  }

  if (!currentNode) return null;

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '1rem 0' }}>
      {/* Progress breadcrumb */}
      {history.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '1rem', flexWrap: 'wrap' }}>
          {history.map((id, i) => {
            const n = nodeMap.get(id);
            return (
              <span key={id} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {i > 0 && <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>›</span>}
                <span style={{ fontSize: '0.75rem', color: i === history.length - 1 ? 'var(--brand)' : 'var(--text-muted)' }}>
                  {i === 0 ? 'Başlangıç' : (n ? n.question.slice(0, 28) + (n.question.length > 28 ? '…' : '') : id)}
                </span>
              </span>
            );
          })}
        </div>
      )}

      {/* Question */}
      <p style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.4 }}>
        {currentNode.question}
      </p>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {currentNode.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            onClick={() => choose(opt)}
            style={{
              textAlign: 'left',
              padding: '0.75rem 1rem',
              borderRadius: '0.625rem',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.9375rem',
              fontWeight: 500,
              transition: 'all 0.15s',
              lineHeight: 1.4,
            }}
            onMouseEnter={(e: MouseEvent) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--brand)';
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary-50)';
            }}
            onMouseLeave={(e: MouseEvent) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-color)';
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg-surface)';
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Back */}
      {history.length > 1 && (
        <button
          type="button"
          onClick={back}
          style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          ← Geri
        </button>
      )}
    </div>
  );
}
