import type { VocabItem } from './types';

const v = (cat: string, level: 'A1' | 'A2', rows: [string, string, string][]): VocabItem[] =>
  rows.map(([de, en, ur]) => ({ de, en, ur, cat, level }));

export const vocab: VocabItem[] = [
  ...v('Family', 'A1', [
    ['die Mutter', 'mother', 'ماں'], ['der Vater', 'father', 'باپ'], ['der Bruder', 'brother', 'بھائی'],
    ['die Schwester', 'sister', 'بہن'], ['die Großmutter', 'grandmother', 'دادی/نانی'], ['der Großvater', 'grandfather', 'دادا/نانا'],
    ['das Kind', 'child', 'بچہ'], ['die Familie', 'family', 'خاندان'], ['der Freund', 'friend (m)', 'دوست'], ['die Freundin', 'friend (f)', 'سہیلی'],
  ]),
  ...v('Food & Drink', 'A1', [
    ['das Wasser', 'water', 'پانی'], ['das Brot', 'bread', 'روٹی'], ['der Reis', 'rice', 'چاول'], ['das Fleisch', 'meat', 'گوشت'],
    ['das Hähnchen', 'chicken', 'مرغی'], ['der Apfel', 'apple', 'سیب'], ['die Milch', 'milk', 'دودھ'], ['der Tee', 'tea', 'چائے'],
    ['der Kaffee', 'coffee', 'کافی'], ['das Ei', 'egg', 'انڈا'], ['der Käse', 'cheese', 'پنیر'], ['das Gemüse', 'vegetables', 'سبزیاں'],
  ]),
  ...v('Home', 'A1', [
    ['das Haus', 'house', 'گھر'], ['die Wohnung', 'apartment', 'اپارٹمنٹ'], ['das Zimmer', 'room', 'کمرہ'], ['die Küche', 'kitchen', 'باورچی خانہ'],
    ['das Bad', 'bathroom', 'غسل خانہ'], ['der Tisch', 'table', 'میز'], ['der Stuhl', 'chair', 'کرسی'], ['das Bett', 'bed', 'بستر'],
    ['die Tür', 'door', 'دروازہ'], ['das Fenster', 'window', 'کھڑکی'],
  ]),
  ...v('School & Work', 'A1', [
    ['die Schule', 'school', 'سکول'], ['der Lehrer', 'teacher (m)', 'استاد'], ['die Lehrerin', 'teacher (f)', 'استانی'], ['das Buch', 'book', 'کتاب'],
    ['der Stift', 'pen', 'قلم'], ['die Arbeit', 'work', 'کام'], ['das Büro', 'office', 'دفتر'], ['der Student', 'student (m)', 'طالب علم'],
  ]),
  ...v('Places & Travel', 'A1', [
    ['die Stadt', 'city', 'شہر'], ['das Land', 'country', 'ملک'], ['der Bahnhof', 'train station', 'ریلوے سٹیشن'], ['der Bus', 'bus', 'بس'],
    ['das Krankenhaus', 'hospital', 'ہسپتال'], ['der Supermarkt', 'supermarket', 'سپرمارکیٹ'], ['die Straße', 'street', 'سڑک'], ['der Flughafen', 'airport', 'ہوائی اڈہ'],
  ]),
  ...v('Common Verbs', 'A1', [
    ['gehen', 'to go', 'جانا'], ['kommen', 'to come', 'آنا'], ['machen', 'to do/make', 'کرنا/بنانا'], ['essen', 'to eat', 'کھانا'],
    ['trinken', 'to drink', 'پینا'], ['sprechen', 'to speak', 'بولنا'], ['lernen', 'to learn', 'سیکھنا'], ['wohnen', 'to live', 'رہنا'],
    ['sehen', 'to see', 'دیکھنا'], ['lesen', 'to read', 'پڑھنا'], ['schreiben', 'to write', 'لکھنا'], ['kaufen', 'to buy', 'خریدنا'],
  ]),
  ...v('Adjectives', 'A1', [
    ['groß', 'big', 'بڑا'], ['klein', 'small', 'چھوٹا'], ['gut', 'good', 'اچھا'], ['schlecht', 'bad', 'برا'], ['neu', 'new', 'نیا'], ['alt', 'old', 'پرانا'],
    ['schön', 'beautiful', 'خوبصورت'], ['teuer', 'expensive', 'مہنگا'], ['billig', 'cheap', 'سستا'], ['müde', 'tired', 'تھکا ہوا'],
  ]),
  ...v('Health', 'A2', [
    ['der Arzt', 'doctor', 'ڈاکٹر'], ['die Apotheke', 'pharmacy', 'دواخانہ'], ['das Fieber', 'fever', 'بخار'], ['die Kopfschmerzen', 'headache', 'سر درد'],
    ['der Termin', 'appointment', 'وقت/اپائنٹمنٹ'], ['das Medikament', 'medicine', 'دوا'], ['krank', 'sick', 'بیمار'], ['gesund', 'healthy', 'صحت مند'],
  ]),
  ...v('Travel & Transport', 'A2', [
    ['die Fahrkarte', 'ticket', 'ٹکٹ'], ['der Zug', 'train', 'ٹرین'], ['das Gleis', 'platform/track', 'پلیٹ فارم'], ['die Verspätung', 'delay', 'تاخیر'],
    ['umsteigen', 'to change (trains)', 'گاڑی بدلنا'], ['abfahren', 'to depart', 'روانہ ہونا'], ['ankommen', 'to arrive', 'پہنچنا'], ['der Reisepass', 'passport', 'پاسپورٹ'],
  ]),
  ...v('Work & Society', 'A2', [
    ['der Beruf', 'profession', 'پیشہ'], ['die Bewerbung', 'job application', 'ملازمت کی درخواست'], ['der Lebenslauf', 'CV', 'سی وی'], ['das Gehalt', 'salary', 'تنخواہ'],
    ['der Kollege', 'colleague', 'ساتھی کارکن'], ['die Erfahrung', 'experience', 'تجربہ'], ['der Vertrag', 'contract', 'معاہدہ'], ['die Prüfung', 'exam', 'امتحان'],
  ]),
  ...v('Feelings & Opinions', 'A2', [
    ['sich freuen', 'to be glad', 'خوش ہونا'], ['sich ärgern', 'to be annoyed', 'ناراض ہونا'], ['glücklich', 'happy', 'خوش'], ['traurig', 'sad', 'اداس'],
    ['wichtig', 'important', 'اہم'], ['meiner Meinung nach', 'in my opinion', 'میری رائے میں'], ['vielleicht', 'maybe', 'شاید'], ['natürlich', 'of course', 'یقیناً'],
  ]),
];

export const vocabCategories = Array.from(new Set(vocab.map((x) => x.cat)));
