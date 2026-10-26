import { useEffect, useMemo, useRef, useState } from 'react';
import { lessons } from './data/lessons';
import { vocab, vocabCategories } from './data/vocab';
import { verbs, pronouns, prepositions, goethe } from './data/reference';
import { questions } from './data/quiz';
import type { Lesson, Level, Table } from './data/types';
import { emptyProgress, usePersistent, type Progress } from './storage';
import { initNative, openWhatsApp, registerBackButton } from './native';

type View =
  | { name: 'home' } | { name: 'lessons'; level?: Level } | { name: 'lesson'; id: string }
  | { name: 'vocab' } | { name: 'verbs' } | { name: 'prepositions' } | { name: 'quiz' }
  | { name: 'goethe' } | { name: 'progress' } | { name: 'bookmarks' } | { name: 'about' };

const TITLES: Record<string, string> = {
  home: 'Areesha', lessons: 'Lessons', lesson: 'Lesson', vocab: 'Vocabulary', verbs: 'Verb Conjugations',
  prepositions: 'Prepositions', quiz: 'Practice Quiz', goethe: 'Goethe Preparation', progress: 'My Progress',
  bookmarks: 'Bookmarks', about: 'About Areesha',
};

export default function App() {
  const [stack, setStack] = useState<View[]>([{ name: 'home' }]);
  const [progress, setProgress] = usePersistent<Progress>('progress', emptyProgress);
  const view = stack[stack.length - 1];
  const scrollRef = useRef<HTMLDivElement>(null);

  const push = (v: View) => setStack((s) => [...s, v]);
  const goRoot = (v: View) => setStack(v.name === 'home' ? [v] : [{ name: 'home' }, v]);

  // Back handling must see the latest stack length
  const depth = useRef(stack.length);
  depth.current = stack.length;
  useEffect(() => {
    initNative();
    return registerBackButton(() => {
      if (depth.current > 1) { setStack((s) => s.slice(0, -1)); return true; }
      return false; // at home → exit app
    });
  }, []);

  useEffect(() => { scrollRef.current?.scrollTo({ top: 0 }); }, [stack.length, view.name]);

  const toggle = (key: 'completed' | 'bookmarks', id: string) =>
    setProgress((p) => ({ ...p, [key]: p[key].includes(id) ? p[key].filter((x) => x !== id) : [...p[key], id] }));

  const openLesson = (id: string) => {
    setProgress((p) => ({ ...p, recent: [id, ...p.recent.filter((x) => x !== id)].slice(0, 8) }));
    push({ name: 'lesson', id });
  };

  const back = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const title = view.name === 'lesson' ? lessons.find((l) => l.id === view.id)?.title ?? 'Lesson' : TITLES[view.name];

  return (
    <div className="flex h-full flex-col bg-sky-50">
      <header className="safe-top bg-sky-500 text-white shadow">
        <div className="flex h-14 items-center gap-2 px-3">
          {stack.length > 1 ? (
            <button aria-label="Back" onClick={back} className="rounded-full p-2 text-xl active:bg-sky-600">←</button>
          ) : (
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg font-bold text-sky-600">A</span>
          )}
          <h1 className="truncate text-lg font-semibold">{title}</h1>
        </div>
      </header>

      <main ref={scrollRef} className="flex-1 overflow-y-auto px-4 pb-6 pt-4">
        {view.name === 'home' && <Home progress={progress} push={push} openLesson={openLesson} />}
        {view.name === 'lessons' && <LessonList level={view.level} progress={progress} open={openLesson} />}
        {view.name === 'lesson' && <LessonView lesson={lessons.find((l) => l.id === view.id)!} progress={progress} toggle={toggle} />}
        {view.name === 'vocab' && <Vocab progress={progress} setProgress={setProgress} />}
        {view.name === 'verbs' && <Verbs />}
        {view.name === 'prepositions' && <Prepositions />}
        {view.name === 'quiz' && <Quiz onFinish={(r) => setProgress((p) => ({ ...p, results: [r, ...p.results].slice(0, 50) }))} />}
        {view.name === 'goethe' && <Goethe />}
        {view.name === 'progress' && <ProgressView progress={progress} reset={() => setProgress(emptyProgress)} />}
        {view.name === 'bookmarks' && <Bookmarks progress={progress} open={openLesson} />}
        {view.name === 'about' && <About />}
      </main>

      <nav className="safe-bottom grid grid-cols-5 border-t border-sky-100 bg-white text-xs">
        {([['home', '🏠', 'Home'], ['lessons', '📖', 'Lessons'], ['quiz', '✅', 'Quiz'], ['progress', '📈', 'Progress'], ['about', 'ℹ️', 'About']] as const).map(([n, icon, label]) => (
          <button key={n} onClick={() => goRoot({ name: n } as View)}
            className={`flex flex-col items-center py-2 ${view.name === n ? 'font-semibold text-sky-600' : 'text-slate-500'}`}>
            <span className="text-lg">{icon}</span>{label}
          </button>
        ))}
      </nav>
    </div>
  );
}

/* ---------- shared bits ---------- */
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) =>
  <div className={`rounded-2xl border border-sky-100 bg-white p-4 shadow-sm ${className}`}>{children}</div>;

function TableView({ t }: { t: Table }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold text-sky-700">{t.title}</h3>
      <div className="table-wrap rounded-xl border border-sky-100">
        <table className="min-w-full text-sm">
          <thead className="bg-sky-100 text-sky-800"><tr>{t.head.map((h, i) => <th key={i} className="whitespace-nowrap px-3 py-2 text-left font-semibold">{h}</th>)}</tr></thead>
          <tbody>{t.rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-sky-50' : 'bg-white'}>{r.map((c, j) => <td key={j} className="whitespace-nowrap px-3 py-2">{c}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- Home ---------- */
function Home({ progress, push, openLesson }: { progress: Progress; push: (v: View) => void; openLesson: (id: string) => void }) {
  const pct = Math.round((progress.completed.length / lessons.length) * 100);
  const tiles: [string, string, View][] = [
    ['🔤', 'German Basics', { name: 'lessons', level: 'Basics' }], ['🌱', 'A1 Grammar', { name: 'lessons', level: 'A1' }],
    ['🌳', 'A2 Grammar', { name: 'lessons', level: 'A2' }], ['📚', 'Vocabulary', { name: 'vocab' }],
    ['🔁', 'Verbs', { name: 'verbs' }], ['📍', 'Prepositions', { name: 'prepositions' }],
    ['✅', 'Practice Quiz', { name: 'quiz' }], ['🎓', 'Goethe Prep', { name: 'goethe' }],
  ];
  const recent = progress.recent.map((id) => lessons.find((l) => l.id === id)).filter(Boolean) as Lesson[];
  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-400 p-5 text-white shadow">
        <p className="text-sm opacity-90">Willkommen! · خوش آمدید</p>
        <h2 className="mt-1 text-2xl font-bold">Learn German from zero to A2</h2>
        <p className="urdu mt-1 text-sm">جرمن زبان صفر سے A2 تک سیکھیں</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/30"><div className="h-full bg-white" style={{ width: `${pct}%` }} /></div>
        <p className="mt-1 text-xs">{progress.completed.length} / {lessons.length} lessons completed ({pct}%)</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {tiles.map(([icon, label, v]) => (
          <button key={label} onClick={() => push(v)} className="rounded-2xl border border-sky-100 bg-white p-4 text-left shadow-sm active:bg-sky-100">
            <div className="text-2xl">{icon}</div><div className="mt-1 font-semibold">{label}</div>
          </button>
        ))}
      </div>
      <button onClick={() => push({ name: 'bookmarks' })} className="w-full rounded-2xl border border-sky-100 bg-white p-3 text-left font-semibold shadow-sm">🔖 Bookmarks ({progress.bookmarks.length})</button>
      {recent.length > 0 && (
        <Card>
          <h3 className="mb-2 font-semibold">Recently viewed</h3>
          {recent.slice(0, 4).map((l) => (
            <button key={l.id} onClick={() => openLesson(l.id)} className="block w-full border-t border-sky-50 py-2 text-left first:border-0">{l.title} <span className="text-xs text-slate-400">· {l.level}</span></button>
          ))}
        </Card>
      )}
    </div>
  );
}

/* ---------- Lessons ---------- */
function LessonList({ level, progress, open }: { level?: Level; progress: Progress; open: (id: string) => void }) {
  const [filter, setFilter] = useState<Level | 'All'>(level ?? 'All');
  const list = lessons.filter((l) => filter === 'All' || l.level === filter);
  return (
    <div className="space-y-3">
      <div className="flex gap-2 overflow-x-auto">
        {(['All', 'Basics', 'A1', 'A2'] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-1.5 text-sm ${filter === f ? 'bg-sky-500 text-white' : 'bg-white text-sky-700 border border-sky-200'}`}>{f}</button>
        ))}
      </div>
      {list.map((l) => (
        <button key={l.id} onClick={() => open(l.id)} className="flex w-full items-center justify-between rounded-2xl border border-sky-100 bg-white p-4 text-left shadow-sm active:bg-sky-100">
          <div><div className="font-semibold">{l.title}</div><div className="urdu text-sm text-slate-500">{l.titleUr}</div></div>
          <div className="flex flex-col items-end gap-1 text-xs"><span className="rounded-full bg-sky-100 px-2 py-0.5 text-sky-700">{l.level}</span>{progress.completed.includes(l.id) && <span className="text-green-600">✓ Done</span>}</div>
        </button>
      ))}
    </div>
  );
}

function LessonView({ lesson, progress, toggle }: { lesson: Lesson; progress: Progress; toggle: (k: 'completed' | 'bookmarks', id: string) => void }) {
  const done = progress.completed.includes(lesson.id);
  const marked = progress.bookmarks.includes(lesson.id);
  return (
    <div className="space-y-4">
      <Card>
        <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-700">{lesson.level}</span>
        <h2 className="mt-2 text-xl font-bold">{lesson.title}</h2>
        <p className="urdu text-base text-sky-700">{lesson.titleUr}</p>
      </Card>
      <Card><h3 className="mb-1 font-semibold">English</h3><p className="leading-relaxed">{lesson.en}</p></Card>
      <Card><h3 className="mb-1 font-semibold">اردو</h3><p className="urdu">{lesson.ur}</p></Card>
      {lesson.tables?.map((t, i) => <Card key={i}><TableView t={t} /></Card>)}
      <Card>
        <h3 className="mb-2 font-semibold">Examples · مثالیں</h3>
        <div className="space-y-3">{lesson.examples.map((e, i) => (
          <div key={i} className="rounded-xl bg-sky-50 p-3">
            <p className="font-semibold text-sky-800">{e.de}</p><p className="text-sm">{e.en}</p><p className="urdu text-sm">{e.ur}</p>
          </div>))}</div>
      </Card>
      <div className="flex gap-3">
        <button onClick={() => toggle('completed', lesson.id)} className={`flex-1 rounded-xl py-3 font-semibold ${done ? 'bg-green-100 text-green-700' : 'bg-sky-500 text-white'}`}>{done ? '✓ Completed' : 'Mark as complete'}</button>
        <button onClick={() => toggle('bookmarks', lesson.id)} className={`rounded-xl px-4 py-3 ${marked ? 'bg-amber-100' : 'bg-white border border-sky-200'}`} aria-label="Bookmark">{marked ? '🔖' : '🏷️'}</button>
      </div>
    </div>
  );
}

function Bookmarks({ progress, open }: { progress: Progress; open: (id: string) => void }) {
  const list = progress.bookmarks.map((id) => lessons.find((l) => l.id === id)).filter(Boolean) as Lesson[];
  if (!list.length) return <Card>No bookmarks yet. Open a lesson and tap the bookmark button.</Card>;
  return <div className="space-y-3">{list.map((l) => <button key={l.id} onClick={() => open(l.id)} className="block w-full rounded-2xl border border-sky-100 bg-white p-4 text-left shadow-sm">{l.title}<span className="ml-2 text-xs text-slate-400">{l.level}</span></button>)}</div>;
}

/* ---------- Vocabulary ---------- */
function Vocab({ progress, setProgress }: { progress: Progress; setProgress: (v: Progress | ((p: Progress) => Progress)) => void }) {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const list = useMemo(() => vocab.filter((w) => (cat === 'All' || w.cat === cat) &&
    (!q || (w.de + w.en + w.ur).toLowerCase().includes(q.toLowerCase()))), [cat, q]);
  const toggle = (de: string) => setProgress((p) => ({ ...p, learnedWords: p.learnedWords.includes(de) ? p.learnedWords.filter((x) => x !== de) : [...p.learnedWords, de] }));
  return (
    <div className="space-y-3">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search German, English or اردو" className="w-full rounded-xl border border-sky-200 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-sky-300" />
      <div className="flex gap-2 overflow-x-auto pb-1">
        {['All', ...vocabCategories].map((c) => <button key={c} onClick={() => setCat(c)} className={`whitespace-nowrap rounded-full px-3 py-1 text-sm ${cat === c ? 'bg-sky-500 text-white' : 'border border-sky-200 bg-white text-sky-700'}`}>{c}</button>)}
      </div>
      <p className="text-xs text-slate-500">{list.length} words · {progress.learnedWords.length} learned</p>
      {list.map((w) => (
        <div key={w.de} className="flex items-center justify-between rounded-2xl border border-sky-100 bg-white p-3 shadow-sm">
          <div><div className="font-semibold text-sky-800">{w.de}</div><div className="text-sm">{w.en}</div><div className="urdu text-sm text-slate-600">{w.ur}</div></div>
          <button onClick={() => toggle(w.de)} className={`rounded-full px-3 py-1 text-xs ${progress.learnedWords.includes(w.de) ? 'bg-green-100 text-green-700' : 'bg-sky-100 text-sky-700'}`}>{progress.learnedWords.includes(w.de) ? '✓ Learned' : `${w.level}`}</button>
        </div>
      ))}
    </div>
  );
}

/* ---------- Verbs ---------- */
function Verbs() {
  const [open, setOpen] = useState<string | null>('sein');
  return (
    <div className="space-y-3">
      {verbs.map((v) => (
        <Card key={v.inf} className="!p-0">
          <button onClick={() => setOpen(open === v.inf ? null : v.inf)} className="flex w-full items-center justify-between p-4 text-left">
            <div><span className="font-bold">{v.inf}</span> <span className="text-sm text-slate-500">· {v.en}</span><div className="urdu text-sm">{v.ur}</div></div>
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs text-sky-700">{v.type}</span>
          </button>
          {open === v.inf && (
            <div className="px-4 pb-4">
              <TableView t={{ title: 'Präsens', head: ['Pronoun', 'Form'], rows: pronouns.map((p, i) => [p, v.present[i]]) }} />
              <p className="mt-3 text-sm"><b>Perfekt:</b> {v.perfekt}</p><p className="text-sm"><b>Präteritum (ich):</b> {v.praeteritum}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

function Prepositions() {
  return <div className="space-y-4">{prepositions.map((t) => <Card key={t.title}><TableView t={t} /></Card>)}</div>;
}

/* ---------- Quiz ---------- */
function shuffle<T>(a: T[]): T[] { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

function Quiz({ onFinish }: { onFinish: (r: { date: string; level: string; score: number; total: number }) => void }) {
  const [level, setLevel] = useState<Level | 'Mixed' | null>(null);
  const [qs, setQs] = useState(questions);
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const start = (l: Level | 'Mixed') => {
    const pool = l === 'Mixed' ? questions : questions.filter((x) => x.level === l);
    setQs(shuffle(pool).slice(0, 10)); setLevel(l); setI(0); setSel(null); setScore(0); setFinished(false);
  };

  if (!level) {
    return (
      <div className="space-y-3">
        <Card>Choose a level to practise. Each quiz has up to 10 questions with explanations in English and Urdu.</Card>
        {(['Basics', 'A1', 'A2', 'Mixed'] as const).map((l) => <button key={l} onClick={() => start(l)} className="w-full rounded-2xl bg-sky-500 py-3 font-semibold text-white shadow">{l}</button>)}
      </div>
    );
  }
  if (finished) {
    return (
      <Card className="text-center">
        <div className="text-5xl">{score / qs.length >= 0.7 ? '🎉' : '💪'}</div>
        <h2 className="mt-2 text-2xl font-bold">{score} / {qs.length}</h2>
        <p className="mt-1 text-slate-600">{score / qs.length >= 0.7 ? 'Sehr gut! Great job.' : 'Keep practising — you will get there.'}</p>
        <button onClick={() => start(level)} className="mt-4 w-full rounded-xl bg-sky-500 py-3 font-semibold text-white">Try again</button>
        <button onClick={() => setLevel(null)} className="mt-2 w-full rounded-xl border border-sky-200 py-3 font-semibold text-sky-700">Choose level</button>
      </Card>
    );
  }
  const cur = qs[i];
  const answered = sel !== null;
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">Question {i + 1} / {qs.length} · {cur.topic}</p>
      <Card><p className="text-lg font-semibold">{cur.q}</p></Card>
      {cur.options.map((o, idx) => {
        const style = !answered ? 'bg-white border-sky-200' : idx === cur.answer ? 'bg-green-100 border-green-400' : idx === sel ? 'bg-red-100 border-red-400' : 'bg-white border-sky-100 opacity-70';
        return <button key={idx} disabled={answered} onClick={() => { setSel(idx); if (idx === cur.answer) setScore((s) => s + 1); }} className={`w-full rounded-xl border p-3 text-left ${style}`}>{o}</button>;
      })}
      {answered && (
        <Card><p className="font-semibold">{sel === cur.answer ? '✓ Correct!' : '✗ Not quite.'}</p><p className="text-sm">{cur.explanation}</p><p className="urdu text-sm">{cur.explanationUr}</p></Card>
      )}
      {answered && (
        <button onClick={() => {
          if (i + 1 >= qs.length) { onFinish({ date: new Date().toISOString(), level, score, total: qs.length }); setFinished(true); }
          else { setI(i + 1); setSel(null); }
        }} className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white">{i + 1 >= qs.length ? 'Finish' : 'Next →'}</button>
      )}
    </div>
  );
}

/* ---------- Goethe / Progress / About ---------- */
function Goethe() {
  return (
    <div className="space-y-4">
      {goethe.map((g) => (
        <Card key={g.title}>
          <h2 className="text-lg font-bold">{g.title}</h2><p className="urdu text-sky-700">{g.titleUr}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{g.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
          <ul className="urdu mt-3 list-disc space-y-1 pr-5 text-sm">{g.tipsUr.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </Card>
      ))}
      <Card>Tip: This app is a study aid. Check the official Goethe-Institut website for current exam formats and dates.</Card>
    </div>
  );
}

function ProgressView({ progress, reset }: { progress: Progress; reset: () => void }) {
  const byLevel = (['Basics', 'A1', 'A2'] as const).map((l) => {
    const all = lessons.filter((x) => x.level === l); const done = all.filter((x) => progress.completed.includes(x.id));
    return { l, done: done.length, total: all.length };
  });
  const avg = progress.results.length ? Math.round(progress.results.reduce((a, r) => a + (r.score / r.total) * 100, 0) / progress.results.length) : 0;
  return (
    <div className="space-y-4">
      <Card>
        <h3 className="mb-3 font-semibold">Lessons</h3>
        {byLevel.map(({ l, done, total }) => (
          <div key={l} className="mb-3"><div className="flex justify-between text-sm"><span>{l}</span><span>{done}/{total}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-sky-100"><div className="h-full bg-sky-500" style={{ width: `${(done / total) * 100}%` }} /></div></div>
        ))}
        <p className="text-sm">Words learned: <b>{progress.learnedWords.length}</b> / {vocab.length}</p>
      </Card>
      <Card>
        <h3 className="mb-2 font-semibold">Quiz results</h3>
        <p className="text-sm">Quizzes taken: <b>{progress.results.length}</b> · Average: <b>{avg}%</b></p>
        {progress.results.slice(0, 8).map((r, i) => <p key={i} className="mt-1 text-sm text-slate-600">{new Date(r.date).toLocaleDateString()} · {r.level} · {r.score}/{r.total}</p>)}
      </Card>
      <button onClick={() => { if (confirm('Reset all progress on this device?')) reset(); }} className="w-full rounded-xl border border-red-200 py-3 text-red-600">Reset progress</button>
    </div>
  );
}

function About() {
  return (
    <div className="space-y-4">
      <Card className="text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-sky-500 text-4xl font-bold text-white">A</div>
        <h2 className="mt-3 text-2xl font-bold">Areesha</h2>
        <p className="text-slate-600">Complete German learning · Beginner to A1 &amp; A2</p>
        <p className="urdu mt-1 text-sm">مکمل جرمن سیکھنے کی ایپ — ابتدائی سے A1 اور A2 تک</p>
        <p className="mt-3 text-sm">Brand credit: <b>EuroZoom-Nafiz</b></p>
        <p className="mt-1 text-xs text-slate-400">Version 1.0.0 · Works offline</p>
      </Card>
      <button onClick={openWhatsApp} className="w-full rounded-2xl bg-green-500 py-3 font-semibold text-white shadow">💬 Contact on WhatsApp (+880 1737-226404)</button>
      <p className="text-center text-xs text-slate-500">WhatsApp needs internet and the WhatsApp app. All lessons work offline.</p>
    </div>
  );
}
