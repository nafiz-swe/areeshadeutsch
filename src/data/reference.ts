import type { Table } from './types';

export interface VerbConj { inf: string; en: string; ur: string; type: string; present: string[]; perfekt: string; praeteritum: string }

export const verbs: VerbConj[] = [
  { inf: 'sein', en: 'to be', ur: 'ہونا', type: 'irregular', present: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'], perfekt: 'ist gewesen', praeteritum: 'war' },
  { inf: 'haben', en: 'to have', ur: 'رکھنا', type: 'irregular', present: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben'], perfekt: 'hat gehabt', praeteritum: 'hatte' },
  { inf: 'werden', en: 'to become', ur: 'بننا', type: 'irregular', present: ['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'], perfekt: 'ist geworden', praeteritum: 'wurde' },
  { inf: 'gehen', en: 'to go', ur: 'جانا', type: 'strong', present: ['gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'], perfekt: 'ist gegangen', praeteritum: 'ging' },
  { inf: 'kommen', en: 'to come', ur: 'آنا', type: 'strong', present: ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'], perfekt: 'ist gekommen', praeteritum: 'kam' },
  { inf: 'machen', en: 'to make/do', ur: 'کرنا', type: 'regular', present: ['mache', 'machst', 'macht', 'machen', 'macht', 'machen'], perfekt: 'hat gemacht', praeteritum: 'machte' },
  { inf: 'lernen', en: 'to learn', ur: 'سیکھنا', type: 'regular', present: ['lerne', 'lernst', 'lernt', 'lernen', 'lernt', 'lernen'], perfekt: 'hat gelernt', praeteritum: 'lernte' },
  { inf: 'essen', en: 'to eat', ur: 'کھانا', type: 'strong', present: ['esse', 'isst', 'isst', 'essen', 'esst', 'essen'], perfekt: 'hat gegessen', praeteritum: 'aß' },
  { inf: 'sprechen', en: 'to speak', ur: 'بولنا', type: 'strong', present: ['spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'], perfekt: 'hat gesprochen', praeteritum: 'sprach' },
  { inf: 'fahren', en: 'to drive/travel', ur: 'سفر کرنا', type: 'strong', present: ['fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren'], perfekt: 'ist gefahren', praeteritum: 'fuhr' },
  { inf: 'sehen', en: 'to see', ur: 'دیکھنا', type: 'strong', present: ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen'], perfekt: 'hat gesehen', praeteritum: 'sah' },
  { inf: 'lesen', en: 'to read', ur: 'پڑھنا', type: 'strong', present: ['lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'], perfekt: 'hat gelesen', praeteritum: 'las' },
  { inf: 'nehmen', en: 'to take', ur: 'لینا', type: 'strong', present: ['nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen'], perfekt: 'hat genommen', praeteritum: 'nahm' },
  { inf: 'wohnen', en: 'to live', ur: 'رہنا', type: 'regular', present: ['wohne', 'wohnst', 'wohnt', 'wohnen', 'wohnt', 'wohnen'], perfekt: 'hat gewohnt', praeteritum: 'wohnte' },
  { inf: 'arbeiten', en: 'to work', ur: 'کام کرنا', type: 'regular', present: ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten'], perfekt: 'hat gearbeitet', praeteritum: 'arbeitete' },
];

export const pronouns = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];

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
