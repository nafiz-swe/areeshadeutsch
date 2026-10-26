export type VerbKind = 'regular' | 'strong' | 'mixed' | 'modal' | 'irregular' | 'separable' | 'reflexive';

export interface VerbConj {
  inf: string; en: string; ur: string; type: VerbKind;
  present: string[]; perfekt: string; praeteritum: string;
}

/** Extra options: du/er = irregular present forms of the BASE verb, full = all 6 forms,
 *  pre = separable prefix, refl = reflexive verb. */
export interface VX { du?: string; er?: string; full?: string[]; pre?: string; refl?: boolean }

export const pronouns = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const REFL = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];

function stemOf(base: string) {
  const stem = base.endsWith('en') ? base.slice(0, -2) : base.slice(0, -1);
  // extra "e" for stems ending in t/d or consonant+n/m (arbeiten, finden, öffnen, atmen)
  const needE = /(t|d|[bcdfgkpt]n|[bcdfgkpt]m)$/.test(stem);
  return { stem, needE };
}

function regularPresent(base: string): string[] {
  const { stem, needE } = stemOf(base);
  const du = /[sßxz]$/.test(stem) ? stem + 't' : stem + (needE ? 'est' : 'st');
  const er = stem + (needE ? 'et' : 't');
  return [stem + 'e', du, er, base, er, base];
}

/** Build one verb entry. pp/pret may be '' to auto-generate (regular verbs only). */
export function V(
  inf: string, en: string, ur: string, type: VerbKind,
  aux: 'h' | 's', pp: string, pret: string, x: VX = {},
): VerbConj {
  let base = x.refl ? inf.replace(/^sich /, '') : inf;
  if (x.pre) base = base.slice(x.pre.length);
  const { stem, needE } = stemOf(base);
  let f = x.full ? [...x.full] : regularPresent(base);
  if (!x.full) { if (x.du) f[1] = x.du; if (x.er) f[2] = x.er; }
  if (x.refl) f = f.map((s, i) => `${s} ${REFL[i]}`);
  if (x.pre) f = f.map((s) => `${s} ${x.pre}`);
  const part = pp || 'ge' + stem + (needE ? 'et' : 't');
  const past = pret || stem + (needE ? 'ete' : 'te');
  return {
    inf, en, ur, type, present: f,
    perfekt: `${aux === 's' ? 'ist' : 'hat'} ${x.refl ? 'sich ' : ''}${part}`,
    praeteritum: `${past}${x.refl ? ' sich' : ''}${x.pre ? ' ' + x.pre : ''}`,
  };
}

/** Accent/case-insensitive normalisation so "fur" finds "für", "strasse" finds "Straße". */
export function norm(s: string): string {
  return s.toLowerCase().replace(/ß/g, 'ss').normalize('NFD').replace(/[̀-ًͯ-ٰٟ]/g, '');
}
