// src/components/islands/VideoFilter.tsx
// Preact island — filters the video list by level/category/tool/language.

import { useState, useMemo } from 'preact/hooks';

// Mirrors src/data/videolar.ts shape exactly
export interface Video {
  title: string;
  channel: string;
  url: string;
  published?: string;
  duration?: string;
  language: 'tr' | 'en';
  level: 'giris' | 'orta' | 'ileri';
  categories: string[];
  tools: string[];
  why_watch: string;
  key_takeaways?: string[];
  prerequisites?: string[];
}

interface Props {
  videos: Video[];
}

const levelLabels: Record<string, string> = {
  giris: 'Giriş',
  orta:  'Orta',
  ileri: 'İleri',
};

function Badge({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: active ? 600 : 400,
        border: `1px solid ${active ? 'var(--brand)' : 'var(--border-color)'}`,
        background: active ? 'var(--color-primary-50)' : 'var(--bg-subtle)',
        color: active ? 'var(--color-primary-700)' : 'var(--text-secondary)',
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  );
}

function VideoCardMini({ video }: { video: Video }) {
  // Extract YouTube thumbnail
  let thumb = '';
  try {
    const u = new URL(video.url);
    const vid = u.searchParams.get('v') ?? u.pathname.split('/').pop() ?? '';
    if (vid) thumb = `https://img.youtube.com/vi/${vid}/mqdefault.jpg`;
  } catch { /* noop */ }

  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0.75rem',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        background: 'var(--bg-surface)',
        transition: 'box-shadow 0.15s',
      }}
    >
      {/* Thumbnail */}
      <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', position: 'relative', aspectRatio: '16/9', background: 'var(--bg-subtle)' }}>
        {thumb ? (
          <img src={thumb} alt={video.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-muted)' }}>
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        )}
        {video.duration && (
          <span style={{ position: 'absolute', bottom: 6, right: 6, background: 'rgba(0,0,0,0.75)', color: 'white', fontSize: '0.7rem', fontFamily: 'monospace', padding: '1px 5px', borderRadius: 4 }}>
            {video.duration}
          </span>
        )}
      </a>

      {/* Body */}
      <div style={{ padding: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', textDecoration: 'none', lineHeight: 1.4 }}>
          {video.title}
        </a>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{video.channel}</span>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{video.why_watch}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 'auto', paddingTop: 4 }}>
          <span style={{ fontSize: '0.7rem', padding: '2px 7px', borderRadius: 9999, background: video.level === 'giris' ? '#d1fae5' : video.level === 'orta' ? '#fef3c7' : '#fee2e2', color: video.level === 'giris' ? '#065f46' : video.level === 'orta' ? '#92400e' : '#991b1b', fontWeight: 600 }}>
            {levelLabels[video.level] ?? video.level}
          </span>
          <span style={{ fontSize: '0.7rem', padding: '2px 7px', borderRadius: 9999, background: 'var(--bg-subtle)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}>
            {video.language === 'tr' ? 'TR' : 'EN'}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function VideoFilter({ videos }: Props) {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedLang, setSelectedLang] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<string>('all');
  const [query, setQuery] = useState('');

  // Derive unique filter values from data
  const allCategories = useMemo(() => {
    const s = new Set<string>();
    videos.forEach((v) => v.categories.forEach((c) => s.add(c)));
    return Array.from(s).sort();
  }, [videos]);

  const allTools = useMemo(() => {
    const s = new Set<string>();
    videos.forEach((v) => v.tools.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [videos]);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      if (selectedLevel !== 'all' && v.level !== selectedLevel) return false;
      if (selectedLang !== 'all' && v.language !== selectedLang) return false;
      if (selectedCategory !== 'all' && !v.categories.includes(selectedCategory)) return false;
      if (selectedTool !== 'all' && !v.tools.includes(selectedTool)) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        return (
          v.title.toLowerCase().includes(q) ||
          v.channel.toLowerCase().includes(q) ||
          v.why_watch.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [videos, selectedLevel, selectedLang, selectedCategory, selectedTool, query]);

  function reset() {
    setSelectedLevel('all');
    setSelectedLang('all');
    setSelectedCategory('all');
    setSelectedTool('all');
    setQuery('');
  }

  const hasFilters = selectedLevel !== 'all' || selectedLang !== 'all' || selectedCategory !== 'all' || selectedTool !== 'all' || query.trim() !== '';

  return (
    <div>
      {/* Filter controls */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Search */}
        <input
          type="search"
          placeholder="Video, kanal veya anahtar kelime ara..."
          value={query}
          onInput={(e: Event) => setQuery((e.target as HTMLInputElement).value)}
          style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-base)',
            color: 'var(--text-primary)',
            fontSize: '0.875rem',
          }}
          aria-label="Video ara"
        />

        {/* Level */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: 4 }}>Seviye:</span>
          {['all', 'giris', 'orta', 'ileri'].map((l) => (
            <Badge key={l} label={l === 'all' ? 'Tümü' : (levelLabels[l] ?? l)} active={selectedLevel === l} onClick={() => setSelectedLevel(l)} />
          ))}
        </div>

        {/* Language */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: 4 }}>Dil:</span>
          {['all', 'tr', 'en'].map((l) => (
            <Badge key={l} label={l === 'all' ? 'Tümü' : l.toUpperCase()} active={selectedLang === l} onClick={() => setSelectedLang(l)} />
          ))}
        </div>

        {/* Category */}
        {allCategories.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: 4 }}>Kategori:</span>
            <Badge label="Tümü" active={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')} />
            {allCategories.map((c) => (
              <Badge key={c} label={c} active={selectedCategory === c} onClick={() => setSelectedCategory(c)} />
            ))}
          </div>
        )}

        {/* Tool */}
        {allTools.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: 4 }}>Araç:</span>
            <Badge label="Tümü" active={selectedTool === 'all'} onClick={() => setSelectedTool('all')} />
            {allTools.map((t) => (
              <Badge key={t} label={t} active={selectedTool === t} onClick={() => setSelectedTool(t)} />
            ))}
          </div>
        )}

        {/* Reset */}
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            style={{ alignSelf: 'flex-start', fontSize: '0.75rem', color: 'var(--brand)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}
          >
            Filtreleri temizle
          </button>
        )}
      </div>

      {/* Results count */}
      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
        {filtered.length} video gösteriliyor{videos.length !== filtered.length ? ` (toplam ${videos.length})` : ''}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {filtered.map((v, i) => (
            <VideoCardMini key={`${v.url}-${i}`} video={v} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '1rem', fontWeight: 600 }}>Sonuç bulunamadı</p>
          <p style={{ fontSize: '0.875rem', marginTop: 4 }}>Farklı filtre seçenekleri deneyin.</p>
        </div>
      )}
    </div>
  );
}
