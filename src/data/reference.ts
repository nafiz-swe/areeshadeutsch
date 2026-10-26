import type { Table } from './types';

export { verbs, pronouns } from './verbs';
export type { VerbConj } from './verbs';

export const prepositions: Table[] = [
  { title: 'Akkusativ prepositions', head: ['German', 'English', 'Example'], rows: [
    ['durch', 'through', 'Ich gehe durch den Park.'], ['für', 'for', 'Das Geschenk ist für dich.'], ['gegen', 'against', 'Er spielt gegen mich.'],
    ['ohne', 'without', 'Ich trinke Tee ohne Zucker.'], ['um', 'around / at (time)', 'Um acht Uhr.'] ] },
  { title: 'Dativ prepositions', head: ['German', 'English', 'Example'], rows: [
    ['aus', 'out of / from', 'Ich komme aus Pakistan.'], ['bei', 'at / near / with', 'Ich wohne bei meiner Familie.'], ['mit', 'with', 'Ich fahre mit dem Bus.'],
    ['nach', 'after / to (city)', 'Nach der Schule gehe ich nach Hause.'], ['seit', 'since / for', 'Ich lerne seit einem Jahr Deutsch.'],
    ['von', 'from / of', 'Das Buch ist von meinem Bruder.'], ['zu', 'to', 'Ich gehe zum Arzt.'] ] },
  { title: 'Wechselpräpositionen (Akk. = Wohin? / Dat. = Wo?)', head: ['German', 'English', 'Wo? (Dat.)', 'Wohin? (Akk.)'], rows: [
    ['in', 'in / into', 'in der Stadt', 'in die Stadt'], ['auf', 'on / onto', 'auf dem Tisch', 'auf den Tisch'], ['an', 'at / on (vertical)', 'an der Wand', 'an die Wand'],
    ['vor', 'in front of', 'vor dem Haus', 'vor das Haus'], ['hinter', 'behind', 'hinter dem Haus', 'hinter das Haus'], ['neben', 'next to', 'neben dem Bett', 'neben das Bett'],
    ['über', 'above / over', 'über dem Tisch', 'über den Tisch'], ['unter', 'under', 'unter dem Stuhl', 'unter den Stuhl'], ['zwischen', 'between', 'zwischen den Stühlen', 'zwischen die Stühle'] ] },
];

export interface Goethe { title: string; titleUr: string; tips: string[]; tipsUr: string[] }
export const goethe: Goethe[] = [
  { title: 'Goethe-Zertifikat A1: Start Deutsch 1', titleUr: 'گوئٹے A1 امتحان',
    tips: ['Lesen (reading): short notices, emails, signs. About 20 minutes.', 'Hören (listening): short announcements and dialogues, played twice.',
      'Schreiben (writing): fill in a form and write a short message of 20–30 words.', 'Sprechen (speaking): introduce yourself, ask and answer simple questions, make requests.',
      'Learn the 12 key question words and practise spelling your name aloud.'],
    tipsUr: ['Lesen: مختصر نوٹس، ای میلز اور نشانات پڑھنا۔', 'Hören: مختصر اعلانات اور مکالمے جو دو بار سنائے جاتے ہیں۔',
      'Schreiben: فارم بھرنا اور 20 سے 30 الفاظ کا مختصر پیغام لکھنا۔', 'Sprechen: اپنا تعارف، سادہ سوال و جواب اور درخواست کرنا۔', 'سوالیہ الفاظ یاد کریں اور اپنے نام کے ہجے بولنے کی مشق کریں۔'] },
  { title: 'Goethe-Zertifikat A2', titleUr: 'گوئٹے A2 امتحان',
    tips: ['Lesen: longer texts, ads, and short articles on everyday topics.', 'Hören: announcements, interviews and conversations.',
      'Schreiben: write a short informal email (about 30 words) and a formal message (about 30 words).', 'Sprechen: speak about yourself, plan something together, and ask for information.',
      'Use Perfekt, modal verbs, weil/dass clauses and simple Dativ confidently.'],
    tipsUr: ['Lesen: روزمرہ موضوعات پر طویل متن اور اشتہارات۔', 'Hören: اعلانات، انٹرویوز اور گفتگو۔', 'Schreiben: غیر رسمی اور رسمی ای میل لکھنا۔',
      'Sprechen: اپنے بارے میں بتانا، مل کر منصوبہ بنانا اور معلومات پوچھنا۔', 'Perfekt، modal verbs، weil/dass جملے اور سادہ Dativ پر عبور حاصل کریں۔'] },
];
