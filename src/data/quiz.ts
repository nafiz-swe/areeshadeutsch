import type { Question, Level } from './types';

const q = (id: string, level: Level, topic: string, text: string, options: string[], answer: number, explanation: string, explanationUr: string): Question =>
  ({ id, level, topic, q: text, options, answer, explanation, explanationUr });

export const questions: Question[] = [
  q('q1', 'Basics', 'Greetings', 'How do you say "Good morning"?', ['Guten Abend', 'Guten Morgen', 'Gute Nacht', 'Tschüss'], 1, '"Guten Morgen" means good morning.', '"Guten Morgen" کا مطلب صبح بخیر ہے۔'),
  q('q2', 'Basics', 'Numbers', 'What is "sieben"?', ['6', '7', '8', '9'], 1, 'sieben = 7.', 'sieben کا مطلب 7 ہے۔'),
  q('q3', 'Basics', 'Numbers', 'Which number is "einundzwanzig"?', ['12', '21', '20', '121'], 1, 'The unit comes first: ein-und-zwanzig = 21.', 'پہلے اکائی آتی ہے: ein-und-zwanzig = 21۔'),
  q('q4', 'Basics', 'Days', 'Which day is "Freitag"?', ['Thursday', 'Friday', 'Saturday', 'Sunday'], 1, 'Freitag = Friday.', 'Freitag کا مطلب جمعہ ہے۔'),
  q('q5', 'Basics', 'Pronunciation', 'The German "w" is pronounced like English…', ['w', 'v', 'f', 'y'], 1, '"w" sounds like English "v" (Wasser = VAH-ser).', '"w" کی آواز انگریزی "v" جیسی ہے۔'),
  q('q6', 'A1', 'sein', 'Ich ___ Studentin.', ['bin', 'bist', 'ist', 'sind'], 0, 'With "ich" we use "bin".', '"ich" کے ساتھ "bin" آتا ہے۔'),
  q('q7', 'A1', 'haben', 'Du ___ ein Buch.', ['habe', 'hast', 'hat', 'haben'], 1, 'With "du" we use "hast".', '"du" کے ساتھ "hast" آتا ہے۔'),
  q('q8', 'A1', 'Articles', '___ Frau ist nett. (the woman)', ['Der', 'Die', 'Das', 'Den'], 1, 'Frau is feminine → die.', 'Frau مؤنث ہے → die۔'),
  q('q9', 'A1', 'Akkusativ', 'Ich sehe ___ Hund.', ['der', 'den', 'dem', 'das'], 1, 'Masculine accusative: der → den.', 'مذکر Akkusativ میں der → den۔'),
  q('q10', 'A1', 'Word order', 'Which sentence is correct?', ['Heute ich gehe in die Schule.', 'Heute gehe ich in die Schule.', 'Ich heute gehe in die Schule.', 'Gehe heute ich in die Schule.'], 1, 'The verb is always in position 2.', 'فعل ہمیشہ دوسری جگہ آتا ہے۔'),
  q('q11', 'A1', 'Verbs', 'Er ___ in Berlin. (wohnen)', ['wohne', 'wohnst', 'wohnt', 'wohnen'], 2, 'er/sie/es → -t.', 'er/sie/es کے ساتھ -t آتا ہے۔'),
  q('q12', 'A1', 'Modal verbs', 'Ich ___ gut schwimmen. (können)', ['kann', 'kannst', 'können', 'könnt'], 0, 'ich kann.', 'ich کے ساتھ kann۔'),
  q('q13', 'A1', 'Separable verbs', 'Ich ___ um 6 Uhr ___. (aufstehen)', ['stehe … auf', 'aufstehe … -', 'stehen … auf', 'stehe … aufzu'], 0, 'The prefix goes to the end: Ich stehe um 6 Uhr auf.', 'سابقہ آخر میں جاتا ہے۔'),
  q('q14', 'A1', 'Negation', 'Ich habe ___ Auto.', ['nicht', 'kein', 'keine', 'nichts'], 1, 'Auto is neuter and used with ein → kein.', 'Auto کے ساتھ ein ہوتا ہے اس لیے kein۔'),
  q('q15', 'A1', 'Questions', '___ wohnst du? — In Dhaka.', ['Wer', 'Wo', 'Wann', 'Was'], 1, '"Wo" asks for a place.', '"Wo" جگہ پوچھتا ہے۔'),
  q('q16', 'A1', 'Plural', 'The plural of "das Buch" is…', ['die Buchs', 'die Bücher', 'die Buchen', 'die Buche'], 1, 'das Buch → die Bücher.', 'das Buch کی جمع die Bücher ہے۔'),
  q('q17', 'A2', 'Perfekt', 'Ich habe Deutsch ___.', ['lernen', 'gelernt', 'gelernen', 'lernt'], 1, 'Regular verb: ge- + stem + -t.', 'باقاعدہ فعل: ge + جڑ + t۔'),
  q('q18', 'A2', 'Perfekt', 'Wir ___ nach Berlin gefahren.', ['haben', 'sind', 'waren', 'werden'], 1, 'Verbs of movement use "sein".', 'حرکت والے افعال "sein" لیتے ہیں۔'),
  q('q19', 'A2', 'Dativ', 'Ich gebe ___ Kind einen Apfel.', ['das', 'dem', 'den', 'der'], 1, 'Neuter dative: dem.', 'نیوٹر Dativ میں dem۔'),
  q('q20', 'A2', 'Dativ', 'Das Buch gehört ___ Schwester. (meine)', ['meine', 'meiner', 'meinen', 'meinem'], 1, 'Feminine dative: meiner.', 'مؤنث Dativ میں meiner۔'),
  q('q21', 'A2', 'Wechselpräposition', 'Ich bin ___ Küche. (location)', ['in die', 'in der', 'in den', 'in das'], 1, 'Wo? → Dativ: in der Küche.', 'Wo؟ کے لیے Dativ: in der Küche۔'),
  q('q22', 'A2', 'Wechselpräposition', 'Ich gehe ___ Küche. (movement)', ['in die', 'in der', 'in dem', 'in den'], 0, 'Wohin? → Akkusativ: in die Küche.', 'Wohin؟ کے لیے Akkusativ: in die Küche۔'),
  q('q23', 'A2', 'Subordinate clause', 'Ich lerne Deutsch, weil ich in Deutschland ___.', ['arbeiten möchte', 'möchte arbeiten', 'möchte', 'arbeiten'], 0, 'In "weil" clauses the conjugated verb goes last.', '"weil" والے جملے میں تصریف شدہ فعل آخر میں آتا ہے۔'),
  q('q24', 'A2', 'Präteritum', 'Gestern ___ ich krank.', ['bin', 'war', 'wurde', 'hatte'], 1, 'Präteritum of sein (ich): war.', 'sein کا Präteritum: war۔'),
  q('q25', 'A2', 'Comparison', 'Berlin ist ___ als Bonn.', ['groß', 'größer', 'am größten', 'großer'], 1, 'Comparative: groß → größer (+ umlaut).', 'تقابلی: groß → größer۔'),
  q('q26', 'A2', 'Reflexive', 'Ich freue ___ auf das Wochenende.', ['mich', 'mir', 'sich', 'dich'], 0, 'ich → mich.', 'ich کے ساتھ mich۔'),
  q('q27', 'A2', 'Prepositions', 'Ich fahre ___ dem Bus.', ['mit', 'für', 'ohne', 'durch'], 0, '"mit" + Dativ.', '"mit" کے بعد Dativ۔'),
  q('q28', 'A2', 'Future', 'Ich ___ morgen nach Hause fahren.', ['werde', 'wirst', 'wird', 'werden'], 0, 'ich werde + infinitive.', 'ich werde + مصدر۔'),
];
