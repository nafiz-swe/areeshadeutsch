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
  deep?: Deep;
}
export interface DeepSection { en: string; ur: string }
/** Detailed teaching text: paragraphs separated by blank lines (\n\n). */
export interface Deep {
  why: DeepSection;      // what it is / why it is used
  how: DeepSection;      // how to form / use it
  when: DeepSection;     // when to use it
  mistakes: DeepSection; // common mistakes
  tips: DeepSection;     // memory tips / practice
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
