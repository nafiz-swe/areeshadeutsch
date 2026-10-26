import { useMemo, useState } from 'react';
import { verbs, pronouns, verbLibraryGuide, type VerbConj } from './data/reference';

const sky = { color: '#075985', pale: '#e0f2fe', border: '#bae6fd' };

export default function VerbsPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selected, setSelected] = useState<VerbConj | null>(null);
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const filtered = useMemo(() => {
    const q = search.trim().toLocaleLowerCase();
    return verbs.filter(v => {
      const matchesText = !q || [v.inf, v.en, v.ur, v.type].some(x => x.toLocaleLowerCase().includes(q));
      const matchesType = typeFilter === 'all' || v.type.toLowerCase().includes(typeFilter);
      return matchesText && matchesType;
    }).sort((a,b) => a.inf.localeCompare(b.inf));
  }, [search, typeFilter]);

  const labels = language === 'en'
    ? ['Subject', 'Present tense (Präsens)', 'Perfekt', 'Präteritum', 'Verb type', 'Meaning']
    : ['فاعل / ضمیر', 'حال زمانہ (Präsens)', 'Perfekt', 'Präteritum', 'فعل کی قسم', 'معنی'];

  return <main style={{ maxWidth: 980, margin: '0 auto', padding: 18, color: '#0f172a' }}>
    <header style={{ background: 'linear-gradient(135deg,#e0f2fe,#f0f9ff)', border: `1px solid ${sky.border}`, borderRadius: 22, padding: 22, marginBottom: 18 }}>
      <div style={{ fontSize: 12, letterSpacing: 2, color: sky.color, fontWeight: 800 }}>AREESHA · DEUTSCH</div>
      <h1 style={{ margin: '8px 0', fontSize: 28, color: '#0c4a6e' }}>German Verb Conjugation</h1>
      <p style={{ margin: '0 0 12px', lineHeight: 1.65 }}>{verbLibraryGuide.en}</p>
      <p dir="rtl" style={{ margin: 0, lineHeight: 2, fontFamily: 'Noto Nastaliq Urdu, serif' }}>{verbLibraryGuide.ur}</p>
      <div style={{ marginTop: 12, fontSize: 12, color: '#0369a1' }}>EuroZoom-Nafiz</div>
    </header>

    <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 10, marginBottom: 10 }}>
      <input value={search} onChange={e => setSearch(e.target.value)}
        placeholder="Search German verb, English or Urdu meaning…"
        aria-label="Search verbs"
        style={{ minWidth: 0, padding: '13px 15px', border: `1px solid ${sky.border}`, borderRadius: 13, fontSize: 16, outlineColor: '#0284c7' }} />
      <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} aria-label="Filter by verb type"
        style={{ padding: '10px 12px', border: `1px solid ${sky.border}`, borderRadius: 13, background: 'white', maxWidth: 155 }}>
        <option value="all">All types</option><option value="regular">Regular</option><option value="strong">Strong</option>
        <option value="mixed">Mixed</option><option value="modal">Modal</option><option value="separable">Separable</option><option value="irregular">Irregular</option>
      </select>
    </section>
    <p style={{ color: '#475569', fontSize: 13, margin: '8px 2px 14px' }}>{filtered.length} verbs · Tap any verb to view conjugation</p>

    {selected && <section style={{ border: `1px solid ${sky.border}`, background: '#f0f9ff', borderRadius: 18, padding: 18, marginBottom: 16 }}>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: 12, color: '#0369a1', fontWeight: 800 }}>SELECTED VERB</div>
          <h2 style={{ margin: '3px 0', fontSize: 30 }}>{selected.inf}</h2>
          <div>{selected.en}</div>
          <div dir="rtl" style={{ fontSize: 19, marginTop: 4, fontFamily: 'Noto Nastaliq Urdu, serif' }}>{selected.ur}</div>
        </div>
        <button onClick={() => setSelected(null)} aria-label="Close conjugation" style={{ border: 0, borderRadius: 10, padding: '8px 12px', background: '#dbeafe', color: '#075985', cursor: 'pointer' }}>Close ✕</button>
      </div>
      <div style={{ overflowX: 'auto', marginTop: 16 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: 10, overflow: 'hidden' }}>
          <thead><tr>{labels.slice(0,2).map(x => <th key={x} style={{ textAlign: 'left', background: '#bae6fd', padding: 11 }}>{x}</th>)}</tr></thead>
          <tbody>{pronouns.map((p,i) => <tr key={p}><td style={{ padding: 11, borderBottom: '1px solid #e2e8f0', fontWeight: 700 }}>{p}</td><td style={{ padding: 11, borderBottom: '1px solid #e2e8f0', fontSize: 17 }}>{selected.present[i]}</td></tr>)}</tbody>
        </table>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 10, marginTop: 12 }}>
        <div style={{ background: 'white', border: `1px solid ${sky.border}`, borderRadius: 12, padding: 12 }}><div style={{ color: '#0369a1', fontSize: 12, fontWeight: 700 }}>{labels[2]}</div><strong>{selected.perfekt}</strong><div style={{ fontSize: 12, color: '#475569' }}>Common past-tense form</div></div>
        <div style={{ background: 'white', border: `1px solid ${sky.border}`, borderRadius: 12, padding: 12 }}><div style={{ color: '#0369a1', fontSize: 12, fontWeight: 700 }}>{labels[3]}</div><strong>{selected.praeteritum}</strong><div style={{ fontSize: 12, color: '#475569' }}>Simple past form</div></div>
        <div style={{ background: 'white', border: `1px solid ${sky.border}`, borderRadius: 12, padding: 12 }}><div style={{ color: '#0369a1', fontSize: 12, fontWeight: 700 }}>{labels[4]}</div><strong>{selected.type}</strong></div>
      </div>
      <div style={{ marginTop: 12, fontSize: 13, lineHeight: 1.6, color: '#334155' }}>
        <strong>Example:</strong> Ich {selected.inf === 'sein' ? 'bin' : selected.inf === 'haben' ? 'habe' : selected.present[0]} … 
        <br/>Note: use the complete verb form above in a sentence. Separable verbs place their prefix at the end of a main clause.
      </div>
    </section>}

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 10 }}>
      {filtered.map(v => <button key={v.inf} onClick={() => setSelected(v)}
        style={{ textAlign: 'left', border: `1px solid ${selected?.inf === v.inf ? '#0284c7' : '#dbeafe'}`, background: selected?.inf === v.inf ? '#e0f2fe' : 'white', borderRadius: 15, padding: 15, cursor: 'pointer', boxShadow: '0 2px 7px #0c4a6e0a' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <strong style={{ fontSize: 20, color: '#075985' }}>{v.inf}</strong><span style={{ fontSize: 10, background: '#e0f2fe', color: '#075985', padding: '4px 7px', borderRadius: 20 }}>{v.type}</span>
        </div>
        <div style={{ marginTop: 5, color: '#334155' }}>{v.en}</div>
        <div dir="rtl" style={{ marginTop: 4, fontFamily: 'Noto Nastaliq Urdu, serif', fontSize: 16 }}>{v.ur}</div>
        <div style={{ marginTop: 10, fontSize: 12, color: '#0284c7' }}>View conjugation →</div>
      </button>)}
      {filtered.length === 0 && <p>No verbs found. Try another spelling or meaning.</p>}
    </section>
    <footer style={{ textAlign: 'center', marginTop: 26, padding: 14, color: '#64748b', fontSize: 12 }}>Areesha · German learning offline · EuroZoom-Nafiz · WhatsApp +8801737226404</footer>
  </main>;
}
