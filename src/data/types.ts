export type Level = 'Basics' | 'A1' | 'A2';

export interface Example { de: string; en: string; ur: string }
export interface Table { title: string; head: string[]; rows: string[][] }
export interface Lesson {
  id: string;
  level: Level;
  title: string;
  titleUr: string;
  en: string;
  ur: string;
  examples: Example[];
  tables?: Table[];
}
export interface VocabItem { de: string; en: string; ur: string; cat: string; level: 'A1' | 'A2' }
export interface Question {
  id: string;
  level: Level;
  topic: string;
  q: string;
  options: string[];
  answer: number;
  explanation: string;
  explanationUr: string;
}
