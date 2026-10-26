import { coreVerbs } from './verbs-core';
import { regularVerbs, separableVerbs, reflexiveVerbs } from './verbs-more';
import { norm, type VerbConj } from './verbs-engine';

export { pronouns, norm } from './verbs-engine';
export type { VerbConj, VerbKind } from './verbs-engine';

export const verbs: VerbConj[] = [...coreVerbs, ...regularVerbs, ...separableVerbs, ...reflexiveVerbs]
  .sort((a, b) => a.inf.replace(/^sich /, '').localeCompare(b.inf.replace(/^sich /, ''), 'de'));

/** One lowercase, accent-free search string per verb: German, English, Urdu and all forms. */
export const verbIndex: Map<string, string> = new Map(
  verbs.map((v) => [v.inf, norm([v.inf, v.en, v.ur, v.perfekt, v.praeteritum, ...v.present].join(' | '))]),
);
