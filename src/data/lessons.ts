import type { Lesson } from './types';

export const lessons: Lesson[] = [
  // ---------------- BASICS ----------------
  {
    id: 'b1', level: 'Basics', title: 'The German Alphabet & Sounds', titleUr: 'جرمن حروفِ تہجی اور آوازیں',
    en: 'German uses the same 26 letters as English plus ä, ö, ü and ß. Most words are pronounced as they are written. Key sounds: "ch" is soft (ich) or throaty (Bach); "w" sounds like English "v"; "v" sounds like "f"; "z" sounds like "ts"; "j" sounds like "y"; "s" before a vowel sounds like "z"; "sch" sounds like "sh". ß is a double s.',
    ur: 'جرمن میں انگریزی کے 26 حروف کے ساتھ ä, ö, ü اور ß بھی ہیں۔ زیادہ تر الفاظ جیسے لکھے جاتے ہیں ویسے ہی پڑھے جاتے ہیں۔ "w" کی آواز "و/v" جیسی، "v" کی آواز "ف" جیسی، "z" کی آواز "ts" جیسی، "j" کی آواز "y" جیسی اور "sch" کی آواز "ش" جیسی ہے۔',
    examples: [
      { de: 'Ich heiße Areesha.', en: 'My name is Areesha.', ur: 'میرا نام عریشہ ہے۔' },
      { de: 'Wasser', en: 'water (pronounced VAH-ser)', ur: 'پانی (واسر)' },
      { de: 'Schule', en: 'school (SHOO-leh)', ur: 'سکول (شولے)' },
      { de: 'Zeit', en: 'time (TSAIT)', ur: 'وقت (تسائٹ)' },
    ],
    tables: [{ title: 'Special letters', head: ['Letter', 'Sound', 'Example'], rows: [
      ['ä', 'like "e" in bed', 'Mädchen'], ['ö', 'like "ur" with rounded lips', 'schön'],
      ['ü', 'say "ee" with rounded lips', 'Tür'], ['ß', 'sharp "ss"', 'Straße'],
      ['ei', 'like "eye"', 'nein'], ['ie', 'like "ee"', 'Liebe'], ['eu / äu', 'like "oy"', 'Euro'],
    ] }],
  },
  {
    id: 'b2', level: 'Basics', title: 'Greetings & Introductions', titleUr: 'سلام دعا اور تعارف',
    en: 'Learn how to greet people at different times of day and introduce yourself. Use "du" with friends and family, "Sie" (capital S) with strangers and in formal situations.',
    ur: 'دن کے مختلف اوقات میں سلام کرنا اور اپنا تعارف کروانا سیکھیں۔ دوستوں اور گھر والوں کے لیے "du" اور اجنبیوں یا رسمی موقع پر "Sie" استعمال کریں۔',
    examples: [
      { de: 'Hallo! Wie geht es dir?', en: 'Hello! How are you? (informal)', ur: 'ہیلو! آپ کیسے ہیں؟ (غیر رسمی)' },
      { de: 'Guten Morgen, wie geht es Ihnen?', en: 'Good morning, how are you? (formal)', ur: 'صبح بخیر، آپ کیسے ہیں؟ (رسمی)' },
      { de: 'Mir geht es gut, danke.', en: 'I am fine, thank you.', ur: 'میں ٹھیک ہوں، شکریہ۔' },
      { de: 'Ich komme aus Pakistan.', en: 'I come from Pakistan.', ur: 'میں پاکستان سے ہوں۔' },
      { de: 'Freut mich!', en: 'Nice to meet you!', ur: 'آپ سے مل کر خوشی ہوئی!' },
    ],
    tables: [{ title: 'Greetings', head: ['German', 'English', 'اردو'], rows: [
      ['Guten Morgen', 'Good morning', 'صبح بخیر'], ['Guten Tag', 'Good day', 'السلام علیکم / دن بخیر'],
      ['Guten Abend', 'Good evening', 'شام بخیر'], ['Gute Nacht', 'Good night', 'شب بخیر'],
      ['Tschüss', 'Bye', 'خدا حافظ'], ['Auf Wiedersehen', 'Goodbye (formal)', 'الوداع'],
      ['Bitte', 'Please / You\'re welcome', 'مہربانی / خوش آمدید'], ['Danke', 'Thanks', 'شکریہ'],
    ] }],
  },
  {
    id: 'b3', level: 'Basics', title: 'Numbers 0–100', titleUr: 'گنتی 0 سے 100',
    en: 'German numbers 13–19 end in "-zehn". Tens end in "-zig". For numbers above 20 the units come first: 21 = einundzwanzig ("one and twenty"), just like old English "one-and-twenty".',
    ur: 'جرمن میں 13 سے 19 تک "-zehn" پر ختم ہوتے ہیں۔ دہائیاں "-zig" پر ختم ہوتی ہیں۔ 20 کے بعد پہلے اکائی آتی ہے: 21 = einundzwanzig یعنی "ایک اور بیس"، اردو کی طرح "اکیس"۔',
    examples: [
      { de: 'Ich bin zwanzig Jahre alt.', en: 'I am twenty years old.', ur: 'میں بیس سال کا/کی ہوں۔' },
      { de: 'Meine Nummer ist null eins sieben drei sieben.', en: 'My number is 0 1 7 3 7.', ur: 'میرا نمبر 0 1 7 3 7 ہے۔' },
      { de: 'Das kostet fünfundzwanzig Euro.', en: 'That costs twenty-five euros.', ur: 'اس کی قیمت پچیس یورو ہے۔' },
    ],
    tables: [{ title: 'Numbers', head: ['#', 'German', '#', 'German'], rows: [
      ['0', 'null', '11', 'elf'], ['1', 'eins', '12', 'zwölf'], ['2', 'zwei', '13', 'dreizehn'],
      ['3', 'drei', '14', 'vierzehn'], ['4', 'vier', '15', 'fünfzehn'], ['5', 'fünf', '16', 'sechzehn'],
      ['6', 'sechs', '17', 'siebzehn'], ['7', 'sieben', '18', 'achtzehn'], ['8', 'acht', '19', 'neunzehn'],
      ['9', 'neun', '20', 'zwanzig'], ['10', 'zehn', '30 / 40 / 50', 'dreißig / vierzig / fünfzig'],
      ['60 / 70', 'sechzig / siebzig', '80 / 90 / 100', 'achtzig / neunzig / hundert'],
    ] }],
  },
  {
    id: 'b4', level: 'Basics', title: 'Days, Months & Time', titleUr: 'دن، مہینے اور وقت',
    en: 'All days and months are masculine (der). Use "am" with days (am Montag), "im" with months (im Januar). Time: "Wie spät ist es?" — "Es ist drei Uhr."',
    ur: 'تمام دن اور مہینے مذکر (der) ہیں۔ دنوں کے ساتھ "am" (am Montag) اور مہینوں کے ساتھ "im" (im Januar) استعمال ہوتا ہے۔ وقت پوچھنے کے لیے: "Wie spät ist es؟"',
    examples: [
      { de: 'Heute ist Montag.', en: 'Today is Monday.', ur: 'آج پیر ہے۔' },
      { de: 'Am Freitag habe ich Unterricht.', en: 'On Friday I have class.', ur: 'جمعہ کو میری کلاس ہے۔' },
      { de: 'Es ist halb vier.', en: 'It is half past three (3:30).', ur: 'ساڑھے تین بجے ہیں۔' },
      { de: 'Im Dezember ist es kalt.', en: 'In December it is cold.', ur: 'دسمبر میں سردی ہوتی ہے۔' },
    ],
    tables: [
      { title: 'Days', head: ['German', 'English', 'اردو'], rows: [
        ['Montag', 'Monday', 'پیر'], ['Dienstag', 'Tuesday', 'منگل'], ['Mittwoch', 'Wednesday', 'بدھ'],
        ['Donnerstag', 'Thursday', 'جمعرات'], ['Freitag', 'Friday', 'جمعہ'], ['Samstag', 'Saturday', 'ہفتہ'], ['Sonntag', 'Sunday', 'اتوار'] ] },
      { title: 'Months', head: ['German', 'English', 'German', 'English'], rows: [
        ['Januar', 'January', 'Juli', 'July'], ['Februar', 'February', 'August', 'August'],
        ['März', 'March', 'September', 'September'], ['April', 'April', 'Oktober', 'October'],
        ['Mai', 'May', 'November', 'November'], ['Juni', 'June', 'Dezember', 'December'] ] },
    ],
  },
  {
    id: 'b5', level: 'Basics', title: 'Colours, Family & Everyday Words', titleUr: 'رنگ، خاندان اور روزمرہ الفاظ',
    en: 'Build your first vocabulary with colours and family members. Remember to learn every noun with its article (der, die, das).',
    ur: 'رنگوں اور رشتہ داروں کے الفاظ سے اپنا ابتدائی ذخیرہ بنائیں۔ ہر اسم کو اس کے article (der, die, das) کے ساتھ یاد کریں۔',
    examples: [
      { de: 'Der Himmel ist blau.', en: 'The sky is blue.', ur: 'آسمان نیلا ہے۔' },
      { de: 'Meine Mutter ist Lehrerin.', en: 'My mother is a teacher.', ur: 'میری امی استانی ہیں۔' },
      { de: 'Ich habe zwei Brüder und eine Schwester.', en: 'I have two brothers and a sister.', ur: 'میرے دو بھائی اور ایک بہن ہیں۔' },
    ],
    tables: [{ title: 'Colours', head: ['German', 'English', 'اردو'], rows: [
      ['rot', 'red', 'سرخ'], ['blau', 'blue', 'نیلا'], ['grün', 'green', 'سبز'], ['gelb', 'yellow', 'پیلا'],
      ['schwarz', 'black', 'کالا'], ['weiß', 'white', 'سفید'], ['braun', 'brown', 'بھورا'], ['rosa', 'pink', 'گلابی'] ] }],
  },

  // ---------------- A1 ----------------
  {
    id: 'a1-1', level: 'A1', title: 'Personal Pronouns & sein / haben', titleUr: 'ضمائر اور sein / haben',
    en: '"sein" (to be) and "haben" (to have) are the two most important verbs in German. They are irregular, so learn them by heart. Pronouns: ich, du, er/sie/es, wir, ihr, sie, Sie.',
    ur: '"sein" (ہونا) اور "haben" (رکھنا) جرمن کے دو اہم ترین افعال ہیں۔ یہ بے قاعدہ ہیں اس لیے انہیں رٹ لیں۔',
    examples: [
      { de: 'Ich bin Studentin.', en: 'I am a student (female).', ur: 'میں طالبہ ہوں۔' },
      { de: 'Du hast ein Buch.', en: 'You have a book.', ur: 'تمہارے پاس کتاب ہے۔' },
      { de: 'Wir sind müde.', en: 'We are tired.', ur: 'ہم تھکے ہوئے ہیں۔' },
      { de: 'Sie haben ein Auto.', en: 'You (formal) have a car.', ur: 'آپ کے پاس گاڑی ہے۔' },
    ],
    tables: [{ title: 'sein & haben (present)', head: ['Pronoun', 'sein', 'haben'], rows: [
      ['ich', 'bin', 'habe'], ['du', 'bist', 'hast'], ['er/sie/es', 'ist', 'hat'],
      ['wir', 'sind', 'haben'], ['ihr', 'seid', 'habt'], ['sie / Sie', 'sind', 'haben'] ] }],
  },
  {
    id: 'a1-2', level: 'A1', title: 'Noun Gender & Articles', titleUr: 'اسم کی جنس اور articles',
    en: 'Every German noun has a gender: masculine (der), feminine (die) or neuter (das). Plural always uses "die". Indefinite articles: ein (m/n), eine (f). Negative: kein / keine. All nouns are written with a capital letter.',
    ur: 'ہر جرمن اسم کی جنس ہوتی ہے: مذکر (der)، مؤنث (die) یا غیر جاندار/نیوٹر (das)۔ جمع میں ہمیشہ "die" آتا ہے۔ تمام اسماء کا پہلا حرف بڑا لکھا جاتا ہے۔',
    examples: [
      { de: 'Der Mann liest die Zeitung.', en: 'The man reads the newspaper.', ur: 'آدمی اخبار پڑھتا ہے۔' },
      { de: 'Das Kind hat einen Ball.', en: 'The child has a ball.', ur: 'بچے کے پاس گیند ہے۔' },
      { de: 'Ich habe keine Zeit.', en: 'I have no time.', ur: 'میرے پاس وقت نہیں ہے۔' },
    ],
    tables: [{ title: 'Articles (Nominative)', head: ['', 'Masc.', 'Fem.', 'Neut.', 'Plural'], rows: [
      ['definite', 'der', 'die', 'das', 'die'], ['indefinite', 'ein', 'eine', 'ein', '—'], ['negative', 'kein', 'keine', 'kein', 'keine'] ] }],
  },
  {
    id: 'a1-3', level: 'A1', title: 'Regular Verbs in the Present Tense', titleUr: 'حالِ حاضر کے باقاعدہ افعال',
    en: 'Remove "-en" from the infinitive and add the ending: -e, -st, -t, -en, -t, -en. Verbs with stems ending in -t or -d add an extra "e" (arbeiten → du arbeitest).',
    ur: 'مصدر سے "-en" ہٹائیں اور مناسب اختتام لگائیں: -e, -st, -t, -en, -t, -en۔ جن افعال کی جڑ -t یا -d پر ختم ہو ان میں اضافی "e" آتا ہے۔',
    examples: [
      { de: 'Ich lerne Deutsch.', en: 'I learn German.', ur: 'میں جرمن سیکھتی ہوں۔' },
      { de: 'Er wohnt in Berlin.', en: 'He lives in Berlin.', ur: 'وہ برلن میں رہتا ہے۔' },
      { de: 'Du arbeitest viel.', en: 'You work a lot.', ur: 'تم بہت کام کرتے ہو۔' },
    ],
    tables: [{ title: 'lernen (to learn)', head: ['Pronoun', 'Form'], rows: [
      ['ich', 'lerne'], ['du', 'lernst'], ['er/sie/es', 'lernt'], ['wir', 'lernen'], ['ihr', 'lernt'], ['sie/Sie', 'lernen'] ] }],
  },
  {
    id: 'a1-4', level: 'A1', title: 'Word Order & Questions', titleUr: 'جملے کی ترتیب اور سوالات',
    en: 'In a main clause the verb is always in position 2. In yes/no questions the verb is first. W-questions start with a question word and the verb follows immediately.',
    ur: 'مرکزی جملے میں فعل ہمیشہ دوسری جگہ آتا ہے۔ ہاں/نہیں والے سوال میں فعل پہلے آتا ہے۔ W-سوالات میں سوالیہ لفظ کے فوراً بعد فعل آتا ہے۔',
    examples: [
      { de: 'Heute gehe ich in die Schule.', en: 'Today I go to school.', ur: 'آج میں سکول جاتی ہوں۔' },
      { de: 'Kommst du aus Indien?', en: 'Do you come from India?', ur: 'کیا تم انڈیا سے ہو؟' },
      { de: 'Wo wohnst du?', en: 'Where do you live?', ur: 'تم کہاں رہتے ہو؟' },
    ],
    tables: [{ title: 'Question words', head: ['German', 'English', 'اردو'], rows: [
      ['Wer?', 'Who?', 'کون؟'], ['Was?', 'What?', 'کیا؟'], ['Wo?', 'Where?', 'کہاں؟'], ['Woher?', 'From where?', 'کہاں سے؟'],
      ['Wohin?', 'To where?', 'کہاں کی طرف؟'], ['Wann?', 'When?', 'کب؟'], ['Warum?', 'Why?', 'کیوں؟'],
      ['Wie?', 'How?', 'کیسے؟'], ['Wie viel?', 'How much?', 'کتنا؟'] ] }],
  },
  {
    id: 'a1-5', level: 'A1', title: 'Nominative & Accusative Cases', titleUr: 'Nominativ اور Akkusativ',
    en: 'Nominative is the subject. Accusative is the direct object (what/whom is acted on). Only the masculine article changes: der → den, ein → einen.',
    ur: 'Nominativ فاعل ہے۔ Akkusativ مفعول ہے (جس پر کام ہو)۔ صرف مذکر article بدلتا ہے: der → den، ein → einen۔',
    examples: [
      { de: 'Ich sehe den Hund.', en: 'I see the dog.', ur: 'میں کتے کو دیکھتی ہوں۔' },
      { de: 'Er kauft einen Apfel.', en: 'He buys an apple.', ur: 'وہ ایک سیب خریدتا ہے۔' },
      { de: 'Sie liest die Zeitung.', en: 'She reads the newspaper.', ur: 'وہ اخبار پڑھتی ہے۔' },
    ],
    tables: [{ title: 'Cases', head: ['Case', 'Masc.', 'Fem.', 'Neut.', 'Plural'], rows: [
      ['Nominativ', 'der / ein', 'die / eine', 'das / ein', 'die'], ['Akkusativ', 'den / einen', 'die / eine', 'das / ein', 'die'] ] }],
  },
  {
    id: 'a1-6', level: 'A1', title: 'Separable Verbs', titleUr: 'الگ ہونے والے افعال',
    en: 'Some verbs have a prefix that separates and goes to the end of the sentence: aufstehen → Ich stehe um 6 Uhr auf. Common prefixes: an-, auf-, aus-, ein-, mit-, zu-.',
    ur: 'کچھ افعال کا سابقہ جملے کے آخر میں چلا جاتا ہے: aufstehen → Ich stehe um 6 Uhr auf (میں 6 بجے اٹھتی ہوں)۔',
    examples: [
      { de: 'Ich stehe um sieben Uhr auf.', en: 'I get up at seven o\'clock.', ur: 'میں سات بجے اٹھتی ہوں۔' },
      { de: 'Wir kaufen im Supermarkt ein.', en: 'We shop at the supermarket.', ur: 'ہم سپرمارکیٹ میں خریداری کرتے ہیں۔' },
      { de: 'Der Zug kommt um acht Uhr an.', en: 'The train arrives at eight.', ur: 'ٹرین آٹھ بجے پہنچتی ہے۔' },
    ],
    tables: [{ title: 'Common separable verbs', head: ['Infinitive', 'English', 'Example'], rows: [
      ['aufstehen', 'get up', 'Ich stehe auf.'], ['einkaufen', 'shop', 'Er kauft ein.'], ['anrufen', 'call', 'Sie ruft mich an.'],
      ['mitkommen', 'come along', 'Kommst du mit?'], ['fernsehen', 'watch TV', 'Wir sehen fern.'] ] }],
  },
  {
    id: 'a1-7', level: 'A1', title: 'Modal Verbs', titleUr: 'معاون افعال (Modalverben)',
    en: 'Modal verbs (können, müssen, wollen, dürfen, sollen, mögen/möchten) go in position 2; the main verb goes to the end in infinitive form.',
    ur: 'Modalverben دوسری جگہ آتے ہیں اور اصل فعل مصدر کی شکل میں جملے کے آخر میں جاتا ہے۔',
    examples: [
      { de: 'Ich kann gut schwimmen.', en: 'I can swim well.', ur: 'میں اچھا تیر سکتی ہوں۔' },
      { de: 'Du musst Deutsch lernen.', en: 'You must learn German.', ur: 'تمہیں جرمن سیکھنی ہوگی۔' },
      { de: 'Ich möchte einen Kaffee, bitte.', en: 'I would like a coffee, please.', ur: 'میں ایک کافی لینا چاہوں گی۔' },
    ],
    tables: [{ title: 'Modal verbs (present)', head: ['', 'können', 'müssen', 'wollen', 'dürfen', 'möchten'], rows: [
      ['ich', 'kann', 'muss', 'will', 'darf', 'möchte'], ['du', 'kannst', 'musst', 'willst', 'darfst', 'möchtest'],
      ['er/sie/es', 'kann', 'muss', 'will', 'darf', 'möchte'], ['wir', 'können', 'müssen', 'wollen', 'dürfen', 'möchten'],
      ['ihr', 'könnt', 'müsst', 'wollt', 'dürft', 'möchtet'], ['sie/Sie', 'können', 'müssen', 'wollen', 'dürfen', 'möchten'] ] }],
  },
  {
    id: 'a1-8', level: 'A1', title: 'Plural of Nouns', titleUr: 'اسماء کی جمع',
    en: 'German plurals are irregular, so learn the plural with each noun. Common patterns: -e, -er, -n/-en, -s, umlaut, or no change.',
    ur: 'جرمن میں جمع بنانے کے کئی طریقے ہیں، اس لیے ہر اسم کے ساتھ اس کی جمع بھی یاد کریں۔',
    examples: [
      { de: 'das Buch → die Bücher', en: 'book → books', ur: 'کتاب → کتابیں' },
      { de: 'die Frau → die Frauen', en: 'woman → women', ur: 'عورت → عورتیں' },
      { de: 'das Auto → die Autos', en: 'car → cars', ur: 'گاڑی → گاڑیاں' },
    ],
    tables: [{ title: 'Plural patterns', head: ['Pattern', 'Singular', 'Plural'], rows: [
      ['-e', 'der Tag', 'die Tage'], ['¨-e', 'der Stuhl', 'die Stühle'], ['-er', 'das Kind', 'die Kinder'],
      ['-(e)n', 'die Blume', 'die Blumen'], ['-s', 'das Hotel', 'die Hotels'], ['no change', 'der Lehrer', 'die Lehrer'] ] }],
  },
  {
    id: 'a1-9', level: 'A1', title: 'Possessive Articles & Negation', titleUr: 'ملکیتی articles اور نفی',
    en: 'Possessives (mein, dein, sein, ihr, unser, euer, ihr) take the same endings as "ein". Use "nicht" to negate verbs/adjectives and "kein" to negate nouns with ein/no article.',
    ur: 'ملکیتی الفاظ (mein, dein, sein, ihr ...) "ein" کی طرح بدلتے ہیں۔ فعل/صفت کی نفی کے لیے "nicht" اور اسم کی نفی کے لیے "kein" استعمال کریں۔',
    examples: [
      { de: 'Das ist meine Tasche.', en: 'That is my bag.', ur: 'یہ میرا بیگ ہے۔' },
      { de: 'Ich habe kein Auto.', en: 'I do not have a car.', ur: 'میرے پاس گاڑی نہیں ہے۔' },
      { de: 'Er kommt nicht heute.', en: 'He is not coming today.', ur: 'وہ آج نہیں آ رہا۔' },
    ],
    tables: [{ title: 'Possessives', head: ['Pronoun', 'Masc./Neut.', 'Fem./Plural'], rows: [
      ['ich', 'mein', 'meine'], ['du', 'dein', 'deine'], ['er/es', 'sein', 'seine'], ['sie', 'ihr', 'ihre'],
      ['wir', 'unser', 'unsere'], ['ihr', 'euer', 'eure'], ['Sie', 'Ihr', 'Ihre'] ] }],
  },
  {
    id: 'a1-10', level: 'A1', title: 'Daily Routine & Time Expressions', titleUr: 'روزمرہ معمول اور وقت کے الفاظ',
    en: 'Describe your day using time phrases: um (at), von…bis (from…to), am Morgen, am Abend. Time can be placed first and the verb then follows in position 2.',
    ur: 'اپنے دن کو بیان کرنے کے لیے وقت کے الفاظ: um (پر)، von…bis (سے…تک)، am Morgen (صبح)، am Abend (شام)۔',
    examples: [
      { de: 'Um acht Uhr frühstücke ich.', en: 'At eight I have breakfast.', ur: 'آٹھ بجے میں ناشتہ کرتی ہوں۔' },
      { de: 'Von neun bis zwölf habe ich Unterricht.', en: 'From nine to twelve I have class.', ur: 'نو سے بارہ بجے تک میری کلاس ہوتی ہے۔' },
      { de: 'Am Abend sehe ich fern.', en: 'In the evening I watch TV.', ur: 'شام کو میں ٹی وی دیکھتی ہوں۔' },
    ],
  },

  // ---------------- A2 ----------------
  {
    id: 'a2-1', level: 'A2', title: 'Perfekt (Present Perfect)', titleUr: 'ماضی — Perfekt',
    en: 'The Perfekt is the main spoken past tense. Form: haben/sein (position 2) + Partizip II (end). Regular: ge-…-t (gemacht). Irregular: ge-…-en (gegangen). Verbs of movement/change of state use "sein".',
    ur: 'Perfekt بول چال کا بنیادی ماضی ہے۔ ساخت: haben/sein (دوسری جگہ) + Partizip II (آخر میں)۔ حرکت یا حالت بدلنے والے افعال "sein" کے ساتھ آتے ہیں۔',
    examples: [
      { de: 'Ich habe gestern Deutsch gelernt.', en: 'I learned German yesterday.', ur: 'میں نے کل جرمن سیکھی۔' },
      { de: 'Wir sind nach Berlin gefahren.', en: 'We drove to Berlin.', ur: 'ہم برلن گئے۔' },
      { de: 'Er hat einen Kuchen gebacken.', en: 'He baked a cake.', ur: 'اس نے کیک بنایا۔' },
    ],
    tables: [{ title: 'Partizip II', head: ['Infinitive', 'Partizip II', 'Aux.'], rows: [
      ['machen', 'gemacht', 'haben'], ['lernen', 'gelernt', 'haben'], ['essen', 'gegessen', 'haben'],
      ['gehen', 'gegangen', 'sein'], ['fahren', 'gefahren', 'sein'], ['kommen', 'gekommen', 'sein'], ['aufstehen', 'aufgestanden', 'sein'] ] }],
  },
  {
    id: 'a2-2', level: 'A2', title: 'Dative Case', titleUr: 'Dativ',
    en: 'The Dative marks the indirect object (to whom). Articles: dem (m/n), der (f), den + -n (plural). Common dative verbs: helfen, gefallen, gehören, danken.',
    ur: 'Dativ بالواسطہ مفعول (کس کو) ظاہر کرتا ہے۔ Articles: dem (مذکر/نیوٹر)، der (مؤنث)، den + n (جمع)۔ عام Dativ افعال: helfen, gefallen, gehören, danken۔',
    examples: [
      { de: 'Ich gebe dem Kind einen Apfel.', en: 'I give the child an apple.', ur: 'میں بچے کو سیب دیتی ہوں۔' },
      { de: 'Das Buch gehört meiner Schwester.', en: 'The book belongs to my sister.', ur: 'یہ کتاب میری بہن کی ہے۔' },
      { de: 'Wie gefällt dir die Stadt?', en: 'How do you like the city?', ur: 'تمہیں شہر کیسا لگا؟' },
    ],
    tables: [{ title: 'Four cases', head: ['Case', 'Masc.', 'Fem.', 'Neut.', 'Plural'], rows: [
      ['Nominativ', 'der', 'die', 'das', 'die'], ['Akkusativ', 'den', 'die', 'das', 'die'],
      ['Dativ', 'dem', 'der', 'dem', 'den (+n)'], ['Genitiv', 'des (+s)', 'der', 'des (+s)', 'der'] ] },
      { title: 'Personal pronouns', head: ['Nom.', 'Akk.', 'Dat.'], rows: [
        ['ich', 'mich', 'mir'], ['du', 'dich', 'dir'], ['er', 'ihn', 'ihm'], ['sie', 'sie', 'ihr'], ['es', 'es', 'ihm'],
        ['wir', 'uns', 'uns'], ['ihr', 'euch', 'euch'], ['sie/Sie', 'sie/Sie', 'ihnen/Ihnen'] ] }],
  },
  {
    id: 'a2-3', level: 'A2', title: 'Two-way Prepositions (Wechselpräpositionen)', titleUr: 'دو طرفہ حروفِ جار',
    en: 'These 9 prepositions take Akkusativ for movement (Wohin?) and Dativ for location (Wo?): an, auf, hinter, in, neben, über, unter, vor, zwischen.',
    ur: 'یہ 9 حروفِ جار حرکت (Wohin؟) کے لیے Akkusativ اور مقام (Wo؟) کے لیے Dativ لیتے ہیں۔',
    examples: [
      { de: 'Ich gehe in die Küche.', en: 'I go into the kitchen. (movement → Akk.)', ur: 'میں باورچی خانے میں جاتی ہوں۔' },
      { de: 'Ich bin in der Küche.', en: 'I am in the kitchen. (location → Dat.)', ur: 'میں باورچی خانے میں ہوں۔' },
      { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall.', ur: 'تصویر دیوار پر لگی ہے۔' },
    ],
  },
  {
    id: 'a2-4', level: 'A2', title: 'Subordinate Clauses: weil, dass, wenn', titleUr: 'ماتحت جملے',
    en: 'In subordinate clauses the conjugated verb goes to the END. Common conjunctions: weil (because), dass (that), wenn (if/when), ob (whether), obwohl (although).',
    ur: 'ماتحت جملوں میں تصریف شدہ فعل جملے کے آخر میں آتا ہے۔ عام حروفِ ربط: weil (کیونکہ)، dass (کہ)، wenn (اگر/جب)، ob (آیا)، obwohl (اگرچہ)۔',
    examples: [
      { de: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', en: 'I learn German because I want to work in Germany.', ur: 'میں جرمن سیکھتی ہوں کیونکہ میں جرمنی میں کام کرنا چاہتی ہوں۔' },
      { de: 'Ich weiß, dass du müde bist.', en: 'I know that you are tired.', ur: 'میں جانتی ہوں کہ تم تھکے ہوئے ہو۔' },
      { de: 'Wenn es regnet, bleibe ich zu Hause.', en: 'If it rains, I stay at home.', ur: 'اگر بارش ہو تو میں گھر پر رہتی ہوں۔' },
    ],
  },
  {
    id: 'a2-5', level: 'A2', title: 'Reflexive Verbs', titleUr: 'انعکاسی افعال',
    en: 'Reflexive verbs use a reflexive pronoun: mich, dich, sich, uns, euch, sich. Examples: sich freuen, sich waschen, sich treffen, sich interessieren für.',
    ur: 'انعکاسی افعال کے ساتھ انعکاسی ضمیر آتا ہے: mich, dich, sich, uns, euch, sich۔',
    examples: [
      { de: 'Ich freue mich auf das Wochenende.', en: 'I look forward to the weekend.', ur: 'مجھے ہفتہ وار چھٹی کا انتظار ہے۔' },
      { de: 'Er wäscht sich die Hände.', en: 'He washes his hands.', ur: 'وہ اپنے ہاتھ دھوتا ہے۔' },
      { de: 'Wir treffen uns um drei Uhr.', en: 'We meet at three.', ur: 'ہم تین بجے ملتے ہیں۔' },
    ],
  },
  {
    id: 'a2-6', level: 'A2', title: 'Präteritum of sein, haben & Modals', titleUr: 'Präteritum',
    en: 'In speech the simple past (Präteritum) is mostly used for sein, haben and modal verbs. war, hatte, konnte, musste, wollte.',
    ur: 'بول چال میں Präteritum زیادہ تر sein, haben اور modal افعال کے لیے استعمال ہوتا ہے۔',
    examples: [
      { de: 'Gestern war ich krank.', en: 'Yesterday I was sick.', ur: 'کل میں بیمار تھی۔' },
      { de: 'Wir hatten keine Zeit.', en: 'We had no time.', ur: 'ہمارے پاس وقت نہیں تھا۔' },
      { de: 'Ich konnte nicht kommen.', en: 'I could not come.', ur: 'میں نہیں آ سکی۔' },
    ],
    tables: [{ title: 'Präteritum', head: ['', 'sein', 'haben', 'können', 'müssen', 'wollen'], rows: [
      ['ich', 'war', 'hatte', 'konnte', 'musste', 'wollte'], ['du', 'warst', 'hattest', 'konntest', 'musstest', 'wolltest'],
      ['er/sie/es', 'war', 'hatte', 'konnte', 'musste', 'wollte'], ['wir', 'waren', 'hatten', 'konnten', 'mussten', 'wollten'],
      ['ihr', 'wart', 'hattet', 'konntet', 'musstet', 'wolltet'], ['sie/Sie', 'waren', 'hatten', 'konnten', 'mussten', 'wollten'] ] }],
  },
  {
    id: 'a2-7', level: 'A2', title: 'Adjective Endings', titleUr: 'صفت کے اختتام',
    en: 'Adjectives before a noun take endings. After der/die/das (Nominative): -e. After ein (Nominative): -er (m), -e (f), -es (n). Akkusativ masculine: -en.',
    ur: 'اسم سے پہلے آنے والی صفت کے آخر میں اختتام لگتا ہے۔ مثلاً der/die/das کے بعد Nominativ میں -e۔',
    examples: [
      { de: 'Der große Hund schläft.', en: 'The big dog sleeps.', ur: 'بڑا کتا سو رہا ہے۔' },
      { de: 'Ich habe einen neuen Freund.', en: 'I have a new friend.', ur: 'میرا ایک نیا دوست ہے۔' },
      { de: 'Sie trägt ein rotes Kleid.', en: 'She wears a red dress.', ur: 'وہ سرخ لباس پہنتی ہے۔' },
    ],
  },
  {
    id: 'a2-8', level: 'A2', title: 'Comparison: Comparative & Superlative', titleUr: 'موازنہ',
    en: 'Comparative: adjective + -er (+ als). Superlative: am + adjective + -sten. Irregular: gut – besser – am besten; viel – mehr – am meisten; gern – lieber – am liebsten.',
    ur: 'تقابلی: صفت + er (+ als)۔ تفضیلِ کل: am + صفت + sten۔ بے قاعدہ: gut – besser – am besten۔',
    examples: [
      { de: 'Berlin ist größer als Bonn.', en: 'Berlin is bigger than Bonn.', ur: 'برلن بون سے بڑا ہے۔' },
      { de: 'Ich trinke lieber Tee als Kaffee.', en: 'I prefer tea to coffee.', ur: 'مجھے کافی کے بجائے چائے پسند ہے۔' },
      { de: 'Sie ist am schnellsten.', en: 'She is the fastest.', ur: 'وہ سب سے تیز ہے۔' },
    ],
  },
  {
    id: 'a2-9', level: 'A2', title: 'Future with werden & Imperative', titleUr: 'مستقبل اور حکمیہ',
    en: 'Future: werden + infinitive at the end. Imperative: du-form without "du" (Komm!), ihr-form (Kommt!), Sie-form (Kommen Sie!).',
    ur: 'مستقبل: werden + مصدر (آخر میں)۔ حکمیہ: Komm! (تم)، Kommt! (تم سب)، Kommen Sie! (آپ)۔',
    examples: [
      { de: 'Ich werde morgen nach Hause fahren.', en: 'I will drive home tomorrow.', ur: 'میں کل گھر جاؤں گی۔' },
      { de: 'Mach bitte die Tür zu!', en: 'Please close the door!', ur: 'براہ مہربانی دروازہ بند کرو!' },
      { de: 'Sprechen Sie bitte langsamer.', en: 'Please speak more slowly.', ur: 'براہ کرم آہستہ بولیں۔' },
    ],
  },
  {
    id: 'a2-10', level: 'A2', title: 'Everyday Situations: Doctor, Shopping, Travel', titleUr: 'روزمرہ حالات',
    en: 'Useful phrases for appointments, shops and public transport.',
    ur: 'ڈاکٹر، خریداری اور سفر کے لیے مفید جملے۔',
    examples: [
      { de: 'Ich habe Kopfschmerzen und Fieber.', en: 'I have a headache and fever.', ur: 'مجھے سر درد اور بخار ہے۔' },
      { de: 'Was kostet das?', en: 'How much is that?', ur: 'یہ کتنے کا ہے؟' },
      { de: 'Wann fährt der nächste Zug nach München?', en: 'When does the next train to Munich leave?', ur: 'میونخ کی اگلی ٹرین کب جاتی ہے؟' },
      { de: 'Ich möchte einen Termin vereinbaren.', en: 'I would like to make an appointment.', ur: 'میں وقت لینا چاہتی ہوں۔' },
    ],
  },
];
