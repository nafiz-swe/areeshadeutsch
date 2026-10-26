import { useCallback, useEffect, useState } from 'react';

// Local persistent storage (WebView localStorage persists across app restarts on Android).
const PREFIX = 'areesha:v1:';

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(key: string, value: T) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* storage unavailable or full – app keeps working in memory */
  }
}

export function usePersistent<T>(key: string, initial: T): [T, (v: T | ((p: T) => T)) => void] {
  const [state, setState] = useState<T>(() => load(key, initial));
  useEffect(() => save(key, state), [key, state]);
  const set = useCallback((v: T | ((p: T) => T)) => setState(v), []);
  return [state, set];
}

export interface QuizResult { date: string; level: string; score: number; total: number }
export interface Progress {
  completed: string[];
  bookmarks: string[];
  recent: string[];
  results: QuizResult[];
  learnedWords: string[];
}
export const emptyProgress: Progress = { completed: [], bookmarks: [], recent: [], results: [], learnedWords: [] };
