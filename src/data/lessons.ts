import type { Lesson } from './types';

export const lessons: Lesson[] = [
  // ---------------- BASICS ----------------
  {
    id: 'b1', level: 'Basics', title: 'The German Alphabet & Sounds', titleUr: 'جرمن حروفِ تہجی اور آوازیں',
    en: "German pronunciation is easier to learn when you study spelling patterns instead of trying to pronounce every word through English. German uses the 26 basic Latin letters, plus ä, ö, ü and ß. The umlauts are separate vowel sounds, not decoration: keep your lips rounded for ö and ü. Learn common letter groups as units: sch sounds roughly like “sh”; ei sounds like “eye”; ie sounds like “ee”; eu and äu sound roughly like “oy”. German w is pronounced like English “v”, German j like English “y”, and German z like “ts”. German v is often pronounced like “f” in common native words such as Vater, although some borrowed words use a different sound. The letter ch has more than one sound: compare ich with Bach. These are useful starting approximations, not exact substitutes for listening to native pronunciation. Practise by saying a sound, then a word, then a short sentence. Capital letters and spelling matter too: nouns are capitalized, and ß is used in particular spelling patterns rather than freely replacing every ss.",
    ur: "جرمن زبان کا تلفظ سیکھنے کا بہترین طریقہ یہ ہے کہ الفاظ کے ہجے اور آوازوں کے عام نمونے ایک ساتھ یاد کیے جائیں۔ جرمن میں انگریزی کے 26 بنیادی حروف کے علاوہ ä، ö، ü اور ß بھی استعمال ہوتے ہیں۔ ä، ö اور ü الگ vowel sounds ہیں؛ یہ صرف سجاوٹ کے نشان نہیں ہیں۔ ö اور ü بولتے وقت ہونٹوں کو گول رکھیں۔ حروف کے مجموعے بھی یاد کریں: sch کی آواز تقریباً “ش”، ei کی آواز “آئی”، ie کی آواز “ای” اور eu یا äu کی آواز تقریباً “اوئے” جیسی ہوتی ہے۔ جرمن w انگریزی v، جرمن j انگریزی y اور جرمن z تقریباً “ts” کی طرح بولا جاتا ہے۔ عام جرمن الفاظ میں v اکثر “ف” کی آواز دیتا ہے، جیسے Vater، لیکن کچھ ادھار لیے گئے الفاظ میں تلفظ مختلف ہو سکتا ہے۔ ch کی آواز بھی ہر لفظ میں ایک جیسی نہیں ہوتی؛ ich اور Bach کا فرق سنیں۔ یہ ابتدائی رہنمائی ہے، اس لیے درست تلفظ کے لیے اصل جرمن آوازیں سن کر مشق کریں۔",
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
    en: "Greetings help you begin and end conversations politely. Use Hallo in many everyday situations, Guten Morgen in the morning, Guten Tag during the day, and Guten Abend in the evening. Gute Nacht is mainly said when someone is going to sleep or when you are saying goodbye late at night; it is not the usual greeting when you first meet someone in the evening. German distinguishes informal du from formal Sie. Use du with friends, family, children, and people who have agreed to use it. Use Sie with unfamiliar adults or in formal situations unless the other person suggests du. Sie is capitalized when it means the formal “you”. In Wie geht es dir?, dir is the informal dative form; in Wie geht es Ihnen?, Ihnen is the formal form. To introduce yourself, say Ich heiße … or Ich bin …; to say where you are from, use Ich komme aus … . Remember that country names and prepositions may require learning the whole phrase, not translating word by word.",
    ur: "سلام دعا گفتگو شروع کرنے اور اسے مؤدبانہ انداز میں ختم کرنے میں مدد دیتی ہے۔ روزمرہ حالات میں Hallo، صبح Guten Morgen، دن کے وقت Guten Tag اور شام کو Guten Abend کہا جا سکتا ہے۔ Gute Nacht عام طور پر اس وقت کہا جاتا ہے جب کوئی سونے جا رہا ہو یا رات کو رخصت ہو رہا ہو؛ شام میں پہلی ملاقات پر یہ عام greeting نہیں ہے۔ جرمن میں غیر رسمی “تم” کے لیے du اور رسمی “آپ” کے لیے Sie استعمال ہوتا ہے۔ دوستوں، خاندان اور بچوں کے ساتھ عموماً du استعمال کریں، جبکہ ناواقف بالغ افراد یا رسمی حالات میں Sie مناسب ہے، جب تک دوسرا شخص غیر رسمی انداز کی پیشکش نہ کرے۔ رسمی Sie ہمیشہ بڑے حرف سے لکھا جاتا ہے۔ Wie geht es dir? میں dir غیر رسمی شکل ہے، جبکہ Wie geht es Ihnen? میں Ihnen رسمی شکل ہے۔ اپنا نام بتانے کے لیے Ich heiße … اور ملک بتانے کے لیے Ich komme aus … استعمال کریں۔ جملے کو لفظ بہ لفظ ترجمہ کرنے کے بجائے پورا درست فقرہ یاد کرنا زیادہ مفید ہے۔",
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
    en: "German numbers are important for age, prices, phone numbers, addresses, dates, and quantities. Learn 0–12 individually because many forms are irregular. Numbers 13–19 are generally formed with a unit plus zehn, but remember the special forms sechzehn and siebzehn. Tens usually end in -zig, with special spellings such as dreißig. From 21 onward, German normally says the unit first, then und, then the tens: 21 is einundzwanzig, literally “one-and-twenty”; 35 is fünfunddreißig. In compound numbers, eins usually becomes ein, as in einundzwanzig. For telephone numbers, digits are commonly spoken separately rather than as one large number. To state age, use Ich bin … Jahre alt. To ask a price, use Wie viel kostet das? or Was kostet das? Practise numbers aloud and learn the spelling with the pronunciation, especially umlauts and ß.",
    ur: "جرمن اعداد عمر، قیمت، فون نمبر، پتے، تاریخ اور مقدار بتانے کے لیے ضروری ہیں۔ صفر سے بارہ تک اعداد الگ الگ یاد کریں کیونکہ ان میں کئی غیر باقاعدہ شکلیں ہیں۔ تیرہ سے انیس تک عموماً عدد کے ساتھ zehn آتا ہے، لیکن sechzehn اور siebzehn جیسی خاص شکلیں یاد رکھیں۔ دہائیاں عموماً -zig پر ختم ہوتی ہیں، جبکہ dreißig کی spelling خاص ہے۔ اکیس کے بعد جرمن میں پہلے اکائی، پھر und، پھر دہائی بولی جاتی ہے: 21 = einundzwanzig، یعنی لفظی طور پر “ایک اور بیس”؛ 35 = fünfunddreißig۔ مرکب اعداد میں eins کی جگہ اکثر ein آتا ہے، جیسے einundzwanzig۔ فون نمبر بتاتے وقت ہندسوں کو عموماً الگ الگ پڑھا جاتا ہے۔ عمر بتانے کے لیے Ich bin … Jahre alt استعمال کریں۔ قیمت پوچھنے کے لیے Wie viel kostet das? یا Was kostet das? کہیں۔ اعداد کو بلند آواز سے بولنے اور ان کی درست spelling لکھنے کی مشق کریں۔",
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
    en: "Use days, months, dates, and clock times to arrange appointments and describe routines. German days and months are nouns, so they begin with a capital letter and are grammatically masculine: der Montag, der Januar. Use am with a day or part of a day in common time expressions: am Montag, am Morgen, am Abend. Use im with months and seasons: im Januar, im Sommer. Use um for a specific clock time: um acht Uhr. Ask the time with Wie spät ist es? or Wie viel Uhr ist es? A key difference is halb vier, which means 3:30—halfway to four—not 4:30. Heute ist Montag means “Today is Monday”; Am Montag habe ich Unterricht means “I have class on Monday.” Learn dates and time expressions as complete phrases because the preposition depends on what kind of time expression follows.",
    ur: "دن، مہینے، تاریخ اور گھڑی کا وقت appointments اور روزمرہ معمول بیان کرنے کے لیے استعمال ہوتے ہیں۔ جرمن میں دنوں اور مہینوں کے نام اسم ہیں، اس لیے ان کا پہلا حرف بڑا لکھا جاتا ہے، اور ان کی grammatical gender مذکر ہوتی ہے: der Montag، der Januar۔ دن یا دن کے کسی حصے کے ساتھ عام طور پر am استعمال ہوتا ہے، جیسے am Montag، am Morgen اور am Abend۔ مہینوں اور موسموں کے ساتھ im آتا ہے، جیسے im Januar اور im Sommer۔ کسی خاص گھڑی کے وقت کے لیے um استعمال کریں، مثلاً um acht Uhr۔ وقت پوچھنے کے لیے Wie spät ist es? یا Wie viel Uhr ist es? کہیں۔ خاص طور پر یاد رکھیں کہ halb vier کا مطلب 3:30 ہے، کیونکہ یہ چار بجنے سے آدھا گھنٹہ پہلے کا وقت ہے۔ Heute ist Montag کا مطلب “آج پیر ہے”، جبکہ Am Montag habe ich Unterricht کا مطلب “پیر کو میری کلاس ہے”۔ preposition کو وقت کے پورے فقرے کے ساتھ یاد کریں۔",
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
    en: "Vocabulary becomes easier to remember when you learn words in useful groups and in short sentences. Learn every German noun together with its article and plural form: der Vater, die Mutter, das Kind; plural forms can vary, so do not assume every noun follows one pattern. Colours such as blau, rot, grün, and schwarz are usually adjectives. When a colour follows sein, it normally does not take an adjective ending: Der Himmel ist blau. When an adjective comes directly before a noun, endings may be required, for example ein blaues Auto; this is a later grammar pattern. Family words help you describe relationships and use possessives such as mein Vater and meine Schwester. Use Ich habe … to say what family members or things you have, and Meine Mutter ist … to describe someone. Practise each word with an article, plural form, translation, and one complete sentence rather than memorizing isolated translations.",
    ur: "الفاظ کو یاد کرنے کے لیے انہیں موضوعات کے لحاظ سے گروپ بنائیں اور مختصر جملوں میں استعمال کریں۔ ہر جرمن اسم کو اس کے article اور plural کے ساتھ یاد کریں: der Vater، die Mutter، das Kind۔ جمع بنانے کے طریقے مختلف ہو سکتے ہیں، اس لیے یہ فرض نہ کریں کہ ہر اسم ایک ہی اصول پر جمع بنتا ہے۔ blau، rot، grün اور schwarz جیسے رنگ عام طور پر adjectives ہیں۔ جب رنگ، sein کے بعد آئے تو عموماً اس کے آخر میں adjective ending نہیں لگتی: Der Himmel ist blau۔ لیکن جب صفت اسم سے پہلے آئے تو ending درکار ہو سکتی ہے، جیسے ein blaues Auto؛ یہ اگلے grammar topic میں سیکھا جائے گا۔ خاندان کے الفاظ رشتے بیان کرنے اور mein Vater یا meine Schwester جیسے possessive الفاظ استعمال کرنے میں مدد دیتے ہیں۔ چیز یا رشتہ بتانے کے لیے Ich habe … اور کسی کی وضاحت کے لیے Meine Mutter ist … استعمال کیا جا سکتا ہے۔ ہر لفظ کو article، plural، ترجمے اور ایک مکمل جملے کے ساتھ یاد کریں۔",
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
    en: "Personal pronouns tell us who is doing something: ich (I), du (you informal singular), er (he), sie (she/they depending on context), es (it), wir (we), ihr (you informal plural), and Sie (formal you). German verbs change form according to the subject, so pronouns and verb forms must agree. Sein means “to be” and is used for identity, profession, origin, and states or characteristics: Ich bin Studentin; Ich bin müde. Haben means “to have” and expresses possession or appears in common expressions: Ich habe ein Buch; Ich habe Zeit. Both verbs are irregular, meaning their forms cannot be made by applying the regular verb endings alone. Learn each person as a pair: ich bin / ich habe, du bist / du hast, er ist / er hat. In statements, the conjugated verb normally occupies the second position. In yes/no questions, it usually comes first: Bist du müde? Do not translate English “am/is/are” mechanically; German often uses sein where English does, but the sentence pattern still needs German word order.",
    ur: "Personal pronouns بتاتے ہیں کہ کام کون کر رہا ہے: ich یعنی میں، du یعنی تم، er یعنی وہ مرد، sie یعنی وہ عورت یا سیاق کے مطابق “وہ لوگ”، es یعنی یہ/وہ غیر جاندار یا neuter چیز، wir یعنی ہم، ihr یعنی تم سب، اور Sie رسمی “آپ”۔ جرمن میں فعل subject کے مطابق اپنی شکل بدلتا ہے، اس لیے pronoun اور verb میں مطابقت ضروری ہے۔ sein کا مطلب “ہونا” ہے اور اسے شناخت، پیشے، اصل جگہ، حالت یا صفت کے لیے استعمال کیا جاتا ہے: Ich bin Studentin، یعنی میں طالبہ ہوں؛ Ich bin müde، یعنی میں تھکی ہوئی ہوں۔ haben کا مطلب “رکھنا/پاس ہونا” ہے اور یہ ملکیت یا بعض عام فقروں میں آتا ہے: Ich habe ein Buch، یعنی میرے پاس کتاب ہے؛ Ich habe Zeit، یعنی میرے پاس وقت ہے۔ دونوں افعال irregular ہیں، اس لیے ان کی شکلیں الگ سے یاد کریں۔ ہر pronoun کے ساتھ دونوں شکلیں سیکھیں، مثلاً ich bin / ich habe اور du bist / du hast۔ عام بیان میں conjugated verb عموماً دوسرے مقام پر آتا ہے، جبکہ ہاں/نہیں والے سوال میں پہلے آتا ہے: Bist du müde? انگریزی کے am/is/are کا لفظی ترجمہ کرنے کے بجائے جرمن جملے کی ساخت بھی یاد رکھیں۔",
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
    en: "German nouns have grammatical gender: masculine, feminine, or neuter. The articles are der, die, and das in the nominative singular. Gender is a grammatical property and does not always match biological sex or an object's real-world characteristics, so learn the article with every noun. The definite article means “the”; the indefinite article ein/eine means “a/an” for singular countable nouns. In the plural, the definite article is die regardless of the noun's singular gender: der Mann → die Männer, das Kind → die Kinder. German nouns begin with capital letters, even in the middle of a sentence. Kein/keine negates a noun that would use ein/eine or has no article: Ich habe kein Auto. Article forms change in other cases, so the nominative table is only the starting point. Ask yourself: what is the noun, what is its gender, is it singular or plural, and what case does the sentence require? These questions help you choose the correct article.",
    ur: "جرمن اسموں کی grammatical gender تین طرح کی ہوتی ہے: مذکر، مؤنث اور neuter۔ nominative singular میں ان کے articles بالترتیب der، die اور das ہیں۔ grammatical gender ہمیشہ حقیقی جنس یا چیز کی نوعیت سے مطابقت نہیں رکھتی، اس لیے ہر اسم کو اس کے article کے ساتھ یاد کریں۔ definite article کا مطلب “the” ہے، جبکہ ein/eine واحد قابلِ شمار اسم کے لیے “a/an” کے معنی دیتا ہے۔ جمع میں definite article ہر جنس کے لیے die ہوتا ہے: der Mann سے die Männer اور das Kind سے die Kinder۔ جرمن اسم کا پہلا حرف جملے کے درمیان میں بھی بڑا لکھا جاتا ہے۔ kein/keine ایسے اسم کی نفی کرتا ہے جس کے ساتھ ein/eine آ سکتا ہو یا جس کے ساتھ کوئی article نہ ہو: Ich habe kein Auto، یعنی میرے پاس گاڑی نہیں ہے۔ دوسرے grammatical cases میں articles بدلتے ہیں، اس لیے یہ صرف بنیادی جدول ہے۔ درست article چننے کے لیے دیکھیں کہ اسم کون سا ہے، اس کی gender کیا ہے، واحد ہے یا جمع، اور جملے میں کون سا case درکار ہے۔",
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
    en: "The infinitive is the dictionary form of a verb, such as lernen (to learn) or wohnen (to live). For many regular present-tense verbs, remove -en to find the stem: lern-, wohn-. Add the ending that matches the subject: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. This is used for habits, facts, current actions, and planned events in the present. For example, ich lerne means “I learn/am learning”; German does not always distinguish these English forms with a separate tense. Some stems are harder to pronounce when endings are added. Verbs whose stems end in -t or -d often insert an extra e, as in du arbeitest and er arbeitet. Some verbs are irregular or change their stem vowel, so do not apply this pattern to every verb. Learn the infinitive, stem, and full conjugation together, then practise changing only the subject and the verb ending in short sentences.",
    ur: "Infinitive فعل کی بنیادی شکل ہے جو dictionary میں ملتی ہے، مثلاً lernen یعنی سیکھنا اور wohnen یعنی رہنا۔ بہت سے regular present-tense افعال میں -en ہٹا کر stem حاصل کیا جاتا ہے: lern-، wohn-۔ پھر subject کے مطابق ending لگتی ہے: ich کے ساتھ -e، du کے ساتھ -st، er/sie/es کے ساتھ -t، wir کے ساتھ -en، ihr کے ساتھ -t اور sie/Sie کے ساتھ -en۔ یہ شکل عادت، حقیقت، موجودہ کام اور بعض طے شدہ مستقبل کے کاموں کے لیے استعمال ہوتی ہے۔ ich lerne کا مطلب سیاق کے مطابق “میں سیکھتا ہوں” یا “میں سیکھ رہا ہوں” ہو سکتا ہے؛ جرمن میں انگریزی کی طرح الگ continuous tense ہمیشہ نہیں ہوتا۔ اگر stem کے آخر میں -t یا -d ہو تو تلفظ آسان بنانے کے لیے اکثر اضافی e آتا ہے، جیسے du arbeitest اور er arbeitet۔ کچھ افعال irregular ہیں یا ان کے vowel بدلتے ہیں، اس لیے یہ pattern ہر فعل پر لاگو نہ کریں۔ infinitive، stem اور conjugation کو ساتھ یاد کریں اور subject بدل کر جملے بنانے کی مشق کریں۔",
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
    en: "German main clauses usually follow the verb-second rule: the conjugated verb occupies the second sentence element, not necessarily the second individual word. The subject often comes first: Du wohnst in Dhaka. If a time or place phrase comes first, the verb remains second and the subject moves after it: Heute wohne ich in Dhaka. In a yes/no question, the conjugated verb normally comes first: Wohnst du in Dhaka? W-questions begin with a question word, followed by the conjugated verb and then the subject: Wo wohnst du? Use Wo for location, Woher for origin, Wohin for destination, Wann for time, Warum for reason, Wie for manner, Wer for a person, and Was for a thing or action. English often uses “do/does” to form questions, but German present-tense questions usually do not need a separate equivalent of “do”. Practise identifying the conjugated verb first; this makes German word order much easier to understand.",
    ur: "جرمن کے عام main clause میں conjugated verb دوسرے sentence element پر آتا ہے۔ اس کا مطلب ضروری نہیں کہ وہ دوسرا لفظ ہو، بلکہ دوسرا جملے کا حصہ ہوتا ہے۔ اکثر subject پہلے آتا ہے: Du wohnst in Dhaka۔ اگر وقت یا جگہ کا فقرہ پہلے آئے تو verb پھر بھی دوسرے مقام پر رہتا ہے اور subject اس کے بعد آتا ہے: Heute wohne ich in Dhaka۔ ہاں/نہیں والے سوال میں conjugated verb عموماً پہلے آتا ہے: Wohnst du in Dhaka? W-question میں پہلے سوالیہ لفظ، پھر conjugated verb اور اس کے بعد subject آتا ہے: Wo wohnst du? Wo جگہ، Woher اصل جگہ، Wohin منزل، Wann وقت، Warum وجہ، Wie طریقہ، Wer شخص اور Was چیز یا عمل پوچھنے کے لیے استعمال ہوتا ہے۔ انگریزی میں سوال بنانے کے لیے do/does آتا ہے، لیکن جرمن کے عام present-tense سوال میں عموماً اس کے برابر الگ فعل نہیں چاہیے۔ پہلے conjugated verb پہچاننے کی مشق کریں؛ اس سے word order سمجھنا آسان ہوگا۔",
    examples: [
      { de: 'Heute gehe ich in die Schule.', en: 'Today I go to school.', ur: 'آج میں سکول جاتی ہوں۔' },
      { de: 'Kommst du aus Bangladesch?', en: 'Do you come from Bangladesh?', ur: 'کیا تم بنگلہ دیش سے ہو؟' },
      { de: 'Wo wohnst du?', en: 'Where do you live?', ur: 'تم کہاں رہتے ہو؟' },
    ],
    tables: [{ title: 'Question words', head: ['German', 'English', 'اردو'], rows: [
      ['Wer?', 'Who?', 'کون؟'], ['Was?', 'What?', 'کیا؟'], ['Wo?', 'Where?', 'کہاں؟'], ['Woher?', 'From where?', 'کہاں سے؟'],
      ['Wohin?', 'To where?', 'کہاں کی طرف؟'], ['Wann?', 'When?', 'کب؟'], ['Warum?', 'Why?', 'کیوں؟'],
      ['Wie?', 'How?', 'کیسے؟'], ['Wie viel?', 'How much?', 'کتنا؟'] ] }],
  },
  {
    id: 'a1-5', level: 'A1', title: 'Nominative & Accusative Cases', titleUr: 'Nominativ اور Akkusativ',
    en: "German cases show the grammatical role of a noun or pronoun. The nominative usually identifies the subject—the person or thing doing the action. The accusative commonly marks the direct object—the person or thing directly affected by the action. In Ich sehe den Hund, ich is the subject and den Hund is the direct object. In the masculine singular, the definite article changes from der to den and the indefinite article from ein to einen in the accusative. Feminine die/eine and neuter das/ein look the same in nominative and accusative, as does the plural definite article die. Do not decide the case from English word order alone; identify the verb and ask who performs the action and what or whom the action affects. Some verbs and prepositions determine the case, so later lessons expand this rule. Practise with pairs such as Der Hund sieht den Mann and Der Mann sieht den Hund: the articles help show who sees whom.",
    ur: "جرمن میں cases اسم یا ضمیر کا جملے میں کردار ظاہر کرتے ہیں۔ nominative عام طور پر subject کو ظاہر کرتا ہے، یعنی وہ شخص یا چیز جو کام کرتی ہے۔ accusative اکثر direct object کے لیے آتا ہے، یعنی وہ شخص یا چیز جس پر کام براہِ راست ہوتا ہے۔ Ich sehe den Hund میں ich subject ہے اور den Hund direct object ہے۔ مذکر واحد میں accusative کے وقت definite article der سے den اور indefinite article ein سے einen بن جاتا ہے۔ مؤنث die/eine اور neuter das/ein nominative اور accusative میں ایک جیسے رہتے ہیں؛ جمع کا definite article بھی die رہتا ہے۔ صرف انگریزی word order دیکھ کر case کا فیصلہ نہ کریں۔ فعل تلاش کریں، پھر پوچھیں کہ کام کون کر رہا ہے اور کام کس پر ہو رہا ہے۔ بعض افعال اور prepositions مخصوص case لیتے ہیں، جنہیں آگے تفصیل سے سیکھا جائے گا۔ Der Hund sieht den Mann اور Der Mann sieht den Hund کا فرق دیکھیں: articles بتاتے ہیں کہ کون کس کو دیکھ رہا ہے۔",
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
    en: "A separable verb consists of a verb and a prefix that separates in many ordinary main clauses. For example, aufstehen means “to get up”: the verb stem is conjugated and the prefix auf moves to the end—Ich stehe um sieben Uhr auf. This pattern is useful for everyday actions such as getting up, shopping, calling someone, arriving, or watching television. The prefix often changes or adds to the meaning, so learn the whole infinitive and its meaning together. In a yes/no question, the prefix still goes to the end: Stehst du früh auf? In a subordinate clause, the prefix normally stays attached to the verb at the end: … weil ich früh aufstehe. With a modal verb, the separable verb usually remains as an infinitive at the end: Ich muss früh aufstehen. Not every prefix behaves identically, and some prefixes are inseparable; learn common separable verbs as vocabulary items and practise them in different sentence structures.",
    ur: "separable verb ایک ایسے فعل پر مشتمل ہوتا ہے جس میں prefix عام main clause میں الگ ہو سکتا ہے۔ مثال کے طور پر aufstehen کا مطلب “اٹھنا” ہے۔ فعل کی اصل شکل subject کے مطابق بدلتی ہے اور prefix auf جملے کے آخر میں چلا جاتا ہے: Ich stehe um sieben Uhr auf۔ یہ pattern روزمرہ کاموں جیسے اٹھنے، خریداری کرنے، فون کرنے، پہنچنے اور ٹی وی دیکھنے میں مفید ہے۔ prefix اکثر فعل کے معنی بدلتا یا اس میں اضافہ کرتا ہے، اس لیے پورا infinitive اور اس کا معنی ساتھ یاد کریں۔ سوال میں بھی prefix آخر میں رہتا ہے: Stehst du früh auf? ماتحت جملے میں prefix عموماً فعل کے ساتھ جڑا رہتا ہے اور پورا فعل آخر میں آتا ہے: … weil ich früh aufstehe۔ modal verb کے ساتھ separable verb عموماً infinitive کی شکل میں آخر میں آتا ہے: Ich muss früh aufstehen۔ ہر prefix ایک جیسا برتاؤ نہیں کرتا؛ عام separable verbs کو مثالوں کے ساتھ یاد کریں۔",
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
    en: "Modal verbs express ability, necessity, permission, advice, intention, or wishes. The modal verb is conjugated and normally occupies the second position in a main clause; the other verb stays in the infinitive at the end: Ich kann Deutsch sprechen. können means can/be able to, müssen means must/have to, dürfen means may/be allowed to, sollen often expresses advice or an obligation coming from someone else, wollen means want to, and möchten is a polite way to say would like. Their meanings overlap in some contexts, so choose the verb according to the intended meaning. The modal form changes with the subject, and several common modals have irregular singular forms: ich kann, du kannst, er kann. In yes/no questions the modal comes first: Kannst du schwimmen? In a sentence with no second verb, the modal can be used alone where the context is clear. Do not conjugate the infinitive at the end: say Ich muss lernen, not Ich muss lerne.",
    ur: "Modal verbs صلاحیت، ضرورت، اجازت، مشورہ، ارادہ یا خواہش ظاہر کرتے ہیں۔ modal verb subject کے مطابق conjugate ہوتا ہے اور عام main clause میں عموماً دوسرے مقام پر آتا ہے؛ دوسرا فعل infinitive شکل میں آخر میں رہتا ہے: Ich kann Deutsch sprechen۔ können کا مطلب “کر سکتا ہوں”، müssen کا “ضروری ہے”، dürfen کا “اجازت ہے”، sollen اکثر مشورہ یا کسی کی طرف سے ذمہ داری، wollen کا “چاہنا” اور möchten کا مؤدبانہ “چاہوں گا/گی” ہے۔ بعض حالات میں معانی قریب ہو سکتے ہیں، اس لیے اپنی مراد کے مطابق فعل منتخب کریں۔ modal کی شکل subject کے ساتھ بدلتی ہے؛ کئی عام modal verbs کی واحد شکلیں irregular ہیں، مثلاً ich kann، du kannst، er kann۔ ہاں/نہیں والے سوال میں modal پہلے آتا ہے: Kannst du schwimmen? آخر میں آنے والے infinitive کو conjugate نہ کریں؛ درست جملہ Ich muss lernen ہے، Ich muss lerne نہیں۔",
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
    en: "German plural forms cannot be predicted with one universal rule. Common patterns include -e, -er, -(e)n, -s, an umlaut change, or no visible ending change. The plural may change the noun's vowel as well as its ending: das Buch becomes die Bücher. Learn each noun together with its article and plural form, for example das Kind – die Kinder. The definite article for plural nouns is die in the nominative and accusative, but the noun itself may also change. Some plural patterns are more common for certain noun groups, yet there are enough exceptions that guessing is unreliable. When learning a new noun, record singular article, singular noun, plural article, and plural noun. Use plural forms when speaking about more than one person or object: ein Auto, zwei Autos. Numbers greater than one commonly require the plural form, but a few number and measurement expressions have special usage.",
    ur: "جرمن میں plural بنانے کا کوئی ایک اصول ہر اسم پر لاگو نہیں ہوتا۔ عام patterns میں -e، -er، -(e)n، -s، umlaut کی تبدیلی یا کوئی ظاہری ending نہ بدلنا شامل ہے۔ بعض اوقات اسم کا vowel بھی بدلتا ہے، جیسے das Buch سے die Bücher۔ ہر اسم کو article اور plural کے ساتھ یاد کریں، مثلاً das Kind – die Kinder۔ nominative اور accusative میں plural کا definite article die ہوتا ہے، لیکن خود اسم کی شکل بھی بدل سکتی ہے۔ کچھ plural patterns مخصوص اسموں میں زیادہ عام ہیں، مگر استثنا بھی بہت ہیں، اس لیے اندازہ لگانے کے بجائے plural یاد کرنا بہتر ہے۔ نیا اسم سیکھتے وقت singular article، singular word، plural article اور plural word نوٹ کریں۔ ایک سے زیادہ اشخاص یا چیزوں کے لیے plural استعمال ہوتا ہے: ein Auto، zwei Autos۔ اعداد کے بعد عموماً plural آتا ہے، اگرچہ کچھ عددی اور پیمائشی فقروں کے استعمال میں خاص صورتیں ہو سکتی ہیں۔",
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
    en: "Possessive articles show ownership or a relationship: mein (my), dein (your informal), sein (his/its), ihr (her/their), unser (our), euer (your plural), and Ihr (your formal). Their endings behave similarly to ein, so the form depends on the noun's gender, number, and case—not simply on the owner's gender. For example, mein Bruder but meine Schwester; in the accusative, Ich sehe meinen Bruder. Learn the base form first, then learn how endings change in the cases. For negation, kein denies or negates a noun phrase that uses ein or no article: Ich habe kein Auto. Nicht negates a verb, adjective, adverb, or a specific part of a sentence: Ich bin nicht müde. The position of nicht depends on what is being negated, so it is not always placed in the same position. Compare Ich komme heute nicht (I am not coming today) with Ich komme nicht heute, sondern morgen (not today, but tomorrow). Practise deciding whether you are negating a noun or another part of the sentence.",
    ur: "Possessive articles ملکیت یا تعلق ظاہر کرتے ہیں: mein یعنی میرا، dein یعنی تمہارا، sein یعنی اس مرد/چیز کا، ihr یعنی اس عورت یا ان کا، unser یعنی ہمارا، euer یعنی تم سب کا، اور Ihr رسمی “آپ کا”۔ ان کی endings ein کی طرح بدلتی ہیں، اس لیے شکل کا انحصار اسم کی gender، number اور case پر ہوتا ہے، صرف مالک کی جنس پر نہیں۔ مثال کے طور پر mein Bruder لیکن meine Schwester؛ accusative میں Ich sehe meinen Bruder ہوگا۔ پہلے بنیادی شکل یاد کریں، پھر cases کے ساتھ ending کی تبدیلی سیکھیں۔ نفی کے لیے kein ایسے noun phrase کو منفی کرتا ہے جس میں ein یا کوئی article نہ ہو: Ich habe kein Auto۔ nicht فعل، صفت، adverb یا جملے کے کسی خاص حصے کی نفی کرتا ہے: Ich bin nicht müde۔ nicht کی جگہ اس بات پر منحصر ہے کہ آپ کس چیز کی نفی کر رہے ہیں؛ یہ ہمیشہ ایک ہی جگہ نہیں آتا۔ Ich komme heute nicht اور Ich komme nicht heute, sondern morgen کا فرق دیکھیں۔ پہلے فیصلہ کریں کہ نفی اسم کی ہے یا جملے کے کسی دوسرے حصے کی۔",
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
    en: "Time expressions help describe routines, schedules, and appointments. Use um with a specific clock time: um acht Uhr. Use von … bis for a range: von neun bis zwölf. Common phrases include am Morgen, am Nachmittag, am Abend, and in der Nacht. When a time phrase begins the sentence, the conjugated verb still stays in second position, so the subject normally follows it: Um acht Uhr frühstücke ich. This is an example of the German verb-second rule; the first position is occupied by the whole time phrase. You can also say Ich frühstücke um acht Uhr, with the subject first. Both can be correct, but the first places emphasis on the time. Learn daily routine verbs such as aufstehen, frühstücken, arbeiten, lernen, and schlafen together with their conjugated forms. Separable verbs such as aufstehen split in a main clause: Ich stehe um sieben Uhr auf.",
    ur: "وقت کے فقرے روزمرہ معمول، schedule اور appointments بیان کرنے میں مدد دیتے ہیں۔ کسی خاص گھڑی کے وقت کے ساتھ um استعمال کریں: um acht Uhr۔ وقت کی مدت بتانے کے لیے von … bis استعمال کریں: von neun bis zwölf۔ عام فقرے am Morgen، am Nachmittag، am Abend اور in der Nacht ہیں۔ اگر وقت کا فقرہ جملے کے شروع میں آئے تو conjugated verb پھر بھی دوسرے مقام پر رہتا ہے، اس لیے subject عموماً verb کے بعد آتا ہے: Um acht Uhr frühstücke ich۔ یہ German verb-second rule کی مثال ہے؛ پہلا مقام پورا time phrase لیتا ہے۔ آپ Ich frühstücke um acht Uhr بھی کہہ سکتے ہیں، جس میں subject پہلے ہے۔ دونوں درست ہو سکتے ہیں، مگر پہلے جملے میں وقت پر زور ہے۔ روزمرہ افعال جیسے aufstehen، frühstücken، arbeiten، lernen اور schlafen کو conjugated forms کے ساتھ یاد کریں۔ aufstehen جیسے separable verb میں main clause کے اندر prefix الگ ہو جاتا ہے: Ich stehe um sieben Uhr auf۔",
    examples: [
      { de: 'Um acht Uhr frühstücke ich.', en: 'At eight I have breakfast.', ur: 'آٹھ بجے میں ناشتہ کرتی ہوں۔' },
      { de: 'Von neun bis zwölf habe ich Unterricht.', en: 'From nine to twelve I have class.', ur: 'نو سے بارہ بجے تک میری کلاس ہوتی ہے۔' },
      { de: 'Am Abend sehe ich fern.', en: 'In the evening I watch TV.', ur: 'شام کو میں ٹی وی دیکھتی ہوں۔' },
    ],
  },

  // ---------------- A2 ----------------
  {
    id: 'a2-1', level: 'A2', title: 'Perfekt (Present Perfect)', titleUr: 'ماضی — Perfekt',
    en: "Perfekt is widely used in spoken German to talk about completed past events. It has two parts: a conjugated auxiliary verb (haben or sein) in the normal verb position, and the past participle (Partizip II) usually at the end: Ich habe Deutsch gelernt. Many verbs form the participle with ge- plus the stem plus -t, such as machen – gemacht, while many irregular verbs have a changed stem and often end in -en, such as gehen – gegangen. Some verbs do not take ge-, including many verbs ending in -ieren and verbs with certain inseparable prefixes. Most verbs use haben. Sein is commonly used with verbs expressing a change of location or state when the subject changes location/state, and with sein, bleiben, and a few others; do not assume every verb involving movement takes sein. Learn each verb with its participle and auxiliary. In a main clause, the auxiliary is conjugated and the participle goes to the end; in a subordinate clause, the conjugated auxiliary goes to the end after the participle.",
    ur: "Perfekt بول چال کی جرمن میں ماضی کے مکمل کام بیان کرنے کے لیے بہت استعمال ہوتا ہے۔ اس کے دو حصے ہیں: conjugated auxiliary verb یعنی haben یا sein، اور past participle یعنی Partizip II جو عام main clause میں عموماً آخر میں آتا ہے: Ich habe Deutsch gelernt۔ بہت سے regular افعال میں ge-، stem اور -t مل کر participle بناتے ہیں، جیسے machen – gemacht؛ بہت سے irregular افعال میں stem بدلتا ہے اور اکثر -en آتا ہے، جیسے gehen – gegangen۔ بعض افعال میں ge- نہیں آتا، مثلاً بہت سے -ieren پر ختم ہونے والے افعال اور بعض inseparable prefixes والے افعال۔ زیادہ تر افعال haben لیتے ہیں۔ sein عموماً ایسے افعال کے ساتھ آتا ہے جن میں subject کی جگہ یا حالت بدلتی ہے، اور sein، bleiben اور کچھ دوسرے افعال کے ساتھ بھی استعمال ہوتا ہے۔ ہر حرکت والے فعل کے لیے خودکار طور پر sein نہ چنیں۔ ہر فعل کا participle اور auxiliary ساتھ یاد کریں۔ main clause میں auxiliary conjugate ہوتا ہے اور participle آخر میں آتا ہے؛ subordinate clause میں conjugated auxiliary بھی آخر میں چلا جاتا ہے۔",
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
    en: "The dative case commonly marks an indirect object—the person who receives something or benefits from an action—and is also required by certain verbs and prepositions. In Ich gebe dem Kind einen Apfel, dem Kind is the recipient (to whom?) and einen Apfel is the direct object (what?). Dative articles are dem for masculine and neuter singular, der for feminine singular, and den for plural; plural nouns often add -n if they do not already end in -n or -s. Personal pronouns also change: ich → mir, du → dir, er → ihm, sie → ihr, wir → uns, ihr → euch. Some common dative verbs are helfen, danken, gehören, and gefallen; learn these with examples because English translations may use different structures. In Wie gefällt dir die Stadt?, the city is the thing that pleases you, so dir is dative. Do not choose dative only because English uses “to”; identify the German verb or preposition and learn which case it requires.",
    ur: "Dativ case عام طور پر indirect object کو ظاہر کرتا ہے، یعنی وہ شخص جو چیز وصول کرتا ہے یا عمل سے فائدہ اٹھاتا ہے۔ یہ بعض مخصوص افعال اور prepositions کے بعد بھی لازمی ہوتا ہے۔ Ich gebe dem Kind einen Apfel میں dem Kind وصول کرنے والا ہے، یعنی “کس کو؟”، جبکہ einen Apfel direct object ہے، یعنی “کیا؟”۔ dative articles مذکر اور neuter واحد کے لیے dem، مؤنث واحد کے لیے der اور جمع کے لیے den ہیں؛ جمع کے اسم کے آخر میں اکثر -n بھی آتا ہے، اگر وہ پہلے سے -n یا -s پر ختم نہ ہو۔ personal pronouns بھی بدلتے ہیں: ich → mir، du → dir، er → ihm، sie → ihr، wir → uns، ihr → euch۔ helfen، danken، gehören اور gefallen جیسے افعال dative لیتے ہیں؛ انہیں مثالوں کے ساتھ یاد کریں کیونکہ ان کا انگریزی ترجمہ مختلف ساخت رکھ سکتا ہے۔ Wie gefällt dir die Stadt? میں شہر آپ کو پسند آتا ہے، اس لیے dir dative ہے۔ صرف انگریزی لفظ “to” کی وجہ سے dative نہ چنیں؛ جرمن فعل یا preposition کا مطلوبہ case سیکھیں۔",
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
    en: "Wechselpräpositionen are prepositions that can take either accusative or dative: an, auf, hinter, in, neben, über, unter, vor, zwischen. Use accusative when the phrase expresses a destination or change of position in answer to Wohin? (to where?): Ich gehe in die Küche. Use dative when describing an existing location in answer to Wo? (where?): Ich bin in der Küche. The key is not simply whether the person is physically moving; it is whether the sentence presents a destination/change of position or a location. For example, Ich laufe im Park describes running within the park and uses dative, while Ich laufe in den Park describes running into the park and uses accusative. The article reveals the case: die Küche becomes in die Küche for accusative, and in der Küche for dative. Learn each preposition with both questions and paired examples. These prepositions can express different spatial relationships, so context matters.",
    ur: "Wechselpräpositionen ایسے prepositions ہیں جو accusative یا dative دونوں لے سکتے ہیں: an، auf، hinter، in، neben، über، unter، vor اور zwischen۔ جب فقرہ کسی منزل یا جگہ کی طرف تبدیلی ظاہر کرے اور سوال Wohin? یعنی “کہاں کی طرف؟” ہو تو accusative استعمال کریں: Ich gehe in die Küche۔ جب جملہ موجودہ مقام بتائے اور سوال Wo? یعنی “کہاں؟” ہو تو dative استعمال کریں: Ich bin in der Küche۔ اصل فرق صرف جسمانی حرکت نہیں، بلکہ یہ ہے کہ جملہ منزل/مقام کی تبدیلی بتا رہا ہے یا پہلے سے موجود مقام۔ Ich laufe im Park کا مطلب پارک کے اندر دوڑنا ہے، اس لیے dative؛ Ich laufe in den Park کا مطلب پارک کے اندر داخل ہونے کے لیے دوڑنا ہے، اس لیے accusative۔ article case واضح کرتا ہے: accusative میں in die Küche اور dative میں in der Küche۔ ہر preposition کو دونوں سوالوں اور جوڑی دار مثالوں کے ساتھ یاد کریں۔ معنی سیاق کے مطابق بدل سکتے ہیں۔",
    examples: [
      { de: 'Ich gehe in die Küche.', en: 'I go into the kitchen. (movement → Akk.)', ur: 'میں باورچی خانے میں جاتی ہوں۔' },
      { de: 'Ich bin in der Küche.', en: 'I am in the kitchen. (location → Dat.)', ur: 'میں باورچی خانے میں ہوں۔' },
      { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall.', ur: 'تصویر دیوار پر لگی ہے۔' },
    ],
  },
  {
    id: 'a2-4', level: 'A2', title: 'Subordinate Clauses: weil, dass, wenn', titleUr: 'ماتحت جملے',
    en: "A subordinate clause adds information to a main clause and often begins with a conjunction. With weil (because), dass (that), and wenn (if/when), the conjugated verb goes to the end of the subordinate clause: Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. The conjugated modal möchte appears at the end after arbeiten. Use weil to give a reason, dass to report a thought, statement, or knowledge, and wenn for a condition or a repeated/ future time situation. Separate clauses with a comma. If the subordinate clause comes first, the main clause follows with its conjugated verb immediately after the comma: Wenn es regnet, bleibe ich zu Hause. Notice that bleibe comes before ich because the whole subordinate clause occupies the first position in the main clause. Do not use main-clause word order after these conjunctions. Practise locating the conjugated verb and moving it to the end of the subordinate clause.",
    ur: "subordinate clause مرکزی جملے کے ساتھ اضافی معلومات دیتا ہے اور اکثر conjunction سے شروع ہوتا ہے۔ weil یعنی “کیونکہ”، dass یعنی “کہ”، اور wenn یعنی “اگر/جب” کے بعد conjugated verb ماتحت جملے کے آخر میں جاتا ہے: Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte۔ یہاں modal verb möchte، arbeiten کے بعد آخر میں ہے۔ وجہ بتانے کے لیے weil، خیال یا بات بیان کرنے کے لیے dass، اور شرط یا بار بار/آئندہ ہونے والے وقت کے لیے wenn استعمال کریں۔ دونوں clauses کے درمیان comma لگائیں۔ اگر subordinate clause پہلے آئے تو comma کے بعد main clause کا conjugated verb فوراً آتا ہے: Wenn es regnet, bleibe ich zu Hause۔ یہاں bleibe، ich سے پہلے ہے کیونکہ پورا subordinate clause main clause کا پہلا حصہ بن گیا ہے۔ ان conjunctions کے بعد عام main-clause word order استعمال نہ کریں۔ conjugated verb پہچان کر اسے subordinate clause کے آخر میں رکھنے کی مشق کریں۔",
    examples: [
      { de: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', en: 'I learn German because I want to work in Germany.', ur: 'میں جرمن سیکھتی ہوں کیونکہ میں جرمنی میں کام کرنا چاہتی ہوں۔' },
      { de: 'Ich weiß, dass du müde bist.', en: 'I know that you are tired.', ur: 'میں جانتی ہوں کہ تم تھکے ہوئے ہو۔' },
      { de: 'Wenn es regnet, bleibe ich zu Hause.', en: 'If it rains, I stay at home.', ur: 'اگر بارش ہو تو میں گھر پر رہتی ہوں۔' },
    ],
  },
  {
    id: 'a2-5', level: 'A2', title: 'Reflexive Verbs', titleUr: 'انعکاسی افعال',
    en: "A reflexive verb is used with a reflexive pronoun when the action relates back to the subject or when the verb is conventionally used in a reflexive form. The pronouns are mich, dich, sich, uns, euch, sich for the accusative pattern; dative reflexive forms also occur in sentences with another direct object, as in Er wäscht sich die Hände. Many verbs must be learned with the reflexive pronoun, such as sich freuen, sich interessieren, and sich treffen. Some reflexive verbs describe everyday routines, while others express feelings or interests. The meaning does not always translate word for word into English or Urdu, so learn the whole phrase and its preposition when one is required: sich interessieren für. In a main clause, the conjugated verb is second and the reflexive pronoun usually follows the subject or verb depending on sentence structure: Ich freue mich. In questions, the order changes naturally: Freust du dich? Practise pronoun agreement with each subject.",
    ur: "reflexive verb میں reflexive pronoun اس وقت آتا ہے جب عمل کا تعلق دوبارہ subject سے ہو یا فعل روایتی طور پر reflexive شکل میں استعمال ہوتا ہو۔ accusative pattern میں pronouns mich، dich، sich، uns، euch، sich ہیں؛ اگر جملے میں ایک اور direct object بھی ہو تو dative reflexive شکل آ سکتی ہے، جیسے Er wäscht sich die Hände۔ بہت سے افعال کو reflexive pronoun کے ساتھ یاد کرنا ضروری ہے، مثلاً sich freuen، sich interessieren اور sich treffen۔ کچھ reflexive verbs روزمرہ معمول بیان کرتے ہیں اور کچھ احساسات یا دلچسپی۔ ان کا ترجمہ ہمیشہ لفظ بہ لفظ انگریزی یا اردو جیسا نہیں ہوتا، اس لیے پورا فقرہ اور ضروری preposition بھی یاد کریں، جیسے sich interessieren für۔ عام main clause میں conjugated verb دوسرے مقام پر ہوتا ہے اور reflexive pronoun جملے کی ساخت کے مطابق آتا ہے: Ich freue mich۔ سوال میں ترتیب بدلتی ہے: Freust du dich? ہر subject کے ساتھ درست pronoun کی مشق کریں۔",
    examples: [
      { de: 'Ich freue mich auf das Wochenende.', en: 'I look forward to the weekend.', ur: 'مجھے ہفتہ وار چھٹی کا انتظار ہے۔' },
      { de: 'Er wäscht sich die Hände.', en: 'He washes his hands.', ur: 'وہ اپنے ہاتھ دھوتا ہے۔' },
      { de: 'Wir treffen uns um drei Uhr.', en: 'We meet at three.', ur: 'ہم تین بجے ملتے ہیں۔' },
    ],
  },
  {
    id: 'a2-6', level: 'A2', title: 'Präteritum of sein, haben & Modals', titleUr: 'Präteritum',
    en: "Präteritum is a simple past tense. In everyday spoken German, it is especially common with sein, haben, and modal verbs, while many other verbs are often expressed with Perfekt. Learn the frequent forms as complete words: sein → war, haben → hatte, können → konnte, müssen → musste, wollen → wollte. The form changes with the subject: ich war, du warst, wir waren; ich hatte, du hattest, wir hatten. Use Präteritum to describe a past state, possession, ability, necessity, or intention: Gestern war ich krank; Wir hatten keine Zeit; Ich konnte nicht kommen. With modal verbs, a second infinitive may appear at the end: Ich musste arbeiten. Negation with nicht normally appears before the part being negated, and word order still matters. This tense is worth learning early because these verbs are very frequent in conversation, even when the rest of a story uses Perfekt.",
    ur: "Präteritum سادہ ماضی کا tense ہے۔ روزمرہ بول چال کی جرمن میں یہ خاص طور پر sein، haben اور modal verbs کے ساتھ عام ہے، جبکہ بہت سے دوسرے افعال کے لیے Perfekt زیادہ استعمال ہوتا ہے۔ عام شکلیں مکمل الفاظ کی طرح یاد کریں: sein → war، haben → hatte، können → konnte، müssen → musste، wollen → wollte۔ subject کے مطابق شکل بدلتی ہے: ich war، du warst، wir waren؛ ich hatte، du hattest، wir hatten۔ ماضی کی حالت، ملکیت، صلاحیت، ضرورت یا ارادہ بیان کرنے کے لیے اسے استعمال کریں: Gestern war ich krank؛ Wir hatten keine Zeit؛ Ich konnte nicht kommen۔ modal verb کے ساتھ دوسرا infinitive آخر میں آ سکتا ہے: Ich musste arbeiten۔ nicht کی جگہ اس حصے کے مطابق ہوتی ہے جس کی نفی کرنی ہو، اور word order پھر بھی اہم ہے۔ یہ tense جلد سیکھنا مفید ہے کیونکہ یہ افعال گفتگو میں بہت زیادہ آتے ہیں، چاہے باقی کہانی Perfekt میں بیان کی جائے۔",
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
    en: "In German, an adjective placed directly before a noun usually takes an ending. The ending helps show gender, number, and case, and it depends partly on the article before the adjective. After a definite article in nominative singular, common forms are der große Hund, die kleine Katze, das rote Auto. After ein, the adjective carries more grammatical information: ein großer Hund, eine kleine Katze, ein rotes Auto. In the masculine accusative, the pattern is einen großen Hund. These are starting patterns; adjective endings must be learned across cases and plural forms rather than memorizing one isolated rule. An adjective after sein usually has no ending: Der Hund ist groß. This distinction is important: compare adjective-before-noun (der große Hund) with adjective-after-verb (Der Hund ist groß). Use a table to check article type, gender, number, and case in that order.",
    ur: "جرمن میں جب adjective براہِ راست اسم سے پہلے آئے تو عموماً اس کے آخر میں ending لگتی ہے۔ یہ ending gender، number اور case کی معلومات ظاہر کرنے میں مدد دیتی ہے اور اس کا انحصار adjective سے پہلے آنے والے article پر بھی ہوتا ہے۔ nominative singular میں definite article کے بعد عام شکلیں یہ ہیں: der große Hund، die kleine Katze، das rote Auto۔ ein کے بعد adjective زیادہ grammatical معلومات ظاہر کرتا ہے: ein großer Hund، eine kleine Katze، ein rotes Auto۔ masculine accusative میں einen großen Hund ہوتا ہے۔ یہ ابتدائی patterns ہیں؛ adjective endings کو تمام cases اور plural کے ساتھ سیکھیں، صرف ایک ending یاد نہ کریں۔ sein کے بعد آنے والی صفت پر عموماً ending نہیں لگتی: Der Hund ist groß۔ اس فرق کو سمجھیں: اسم سے پہلے der große Hund، لیکن فعل کے بعد Der Hund ist groß۔ درست ending چننے کے لیے پہلے article کی قسم، پھر gender، number اور case دیکھیں۔",
    examples: [
      { de: 'Der große Hund schläft.', en: 'The big dog sleeps.', ur: 'بڑا کتا سو رہا ہے۔' },
      { de: 'Ich habe einen neuen Freund.', en: 'I have a new friend.', ur: 'میرا ایک نیا دوست ہے۔' },
      { de: 'Sie trägt ein rotes Kleid.', en: 'She wears a red dress.', ur: 'وہ سرخ لباس پہنتی ہے۔' },
    ],
  },
  {
    id: 'a2-8', level: 'A2', title: 'Comparison: Comparative & Superlative', titleUr: 'موازنہ',
    en: "Comparatives compare two people or things; superlatives express the highest degree within a group or context. For many short adjectives, form the comparative by adding -er: klein → kleiner, schnell → schneller. Use als to introduce the comparison: Berlin ist größer als Bonn. Many superlative forms use am + adjective + -sten when the adjective is used predicatively: Sie läuft am schnellsten. When the superlative adjective comes before a noun, it takes an adjective ending, as in der schnellste Zug. Some adjectives add an umlaut, and several forms are irregular: gut – besser – am besten; viel – mehr – am meisten. gern is commonly compared as gern – lieber – am liebsten to express preference. Do not use als and wie interchangeably: als is used for unequal comparison, while so … wie expresses equality. Learn both the formation and the sentence pattern.",
    ur: "comparative دو افراد یا چیزوں کا موازنہ کرتا ہے، جبکہ superlative کسی گروپ میں سب سے زیادہ درجے کو ظاہر کرتا ہے۔ بہت سی چھوٹی صفات میں -er لگانے سے comparative بنتا ہے: klein → kleiner، schnell → schneller۔ موازنہ متعارف کرانے کے لیے als استعمال کریں: Berlin ist größer als Bonn۔ جب superlative صفت فعل کے بعد آئے تو اکثر am + صفت + -sten استعمال ہوتا ہے: Sie läuft am schnellsten۔ جب superlative اسم سے پہلے آئے تو adjective ending لگتی ہے، جیسے der schnellste Zug۔ بعض صفات میں umlaut آتا ہے اور کچھ irregular ہیں: gut – besser – am besten؛ viel – mehr – am meisten۔ پسند ظاہر کرنے کے لیے gern – lieber – am liebsten عام ہے۔ als اور wie کو ایک دوسرے کی جگہ استعمال نہ کریں: غیر مساوی موازنہ میں als، جبکہ برابری کے لیے so … wie استعمال ہوتا ہے۔ شکلیں اور جملے کا pattern دونوں یاد کریں۔",
    examples: [
      { de: 'Berlin ist größer als Bonn.', en: 'Berlin is bigger than Bonn.', ur: 'برلن بون سے بڑا ہے۔' },
      { de: 'Ich trinke lieber Tee als Kaffee.', en: 'I prefer tea to coffee.', ur: 'مجھے کافی کے بجائے چائے پسند ہے۔' },
      { de: 'Sie ist am schnellsten.', en: 'She is the fastest.', ur: 'وہ سب سے تیز ہے۔' },
    ],
  },
  {
    id: 'a2-9', level: 'A2', title: 'Future with werden & Imperative', titleUr: 'مستقبل اور حکمیہ',
    en: "German can express the future with the present tense when the time is clear, and with werden + infinitive when the future is being emphasized or predicted. In the future form, werden is conjugated and the main verb stays in the infinitive at the end: Ich werde morgen fahren. Learn werden forms: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. The imperative is used to give instructions, requests, or advice. The informal du form often uses the verb stem: Komm!; the ihr form uses the ihr verb form without the pronoun: Kommt!; the formal Sie form uses the infinitive plus Sie: Kommen Sie bitte! Add bitte to make a request more polite. Imperatives can sound direct, so use the formal form with unfamiliar adults in appropriate situations. Practise both future statements and polite instructions in everyday contexts.",
    ur: "جرمن میں مستقبل کے لیے present tense بھی استعمال ہو سکتا ہے جب وقت واضح ہو، جبکہ werden + infinitive مستقبل پر زور دینے یا پیش گوئی کے لیے استعمال ہوتا ہے۔ future form میں werden conjugate ہوتا ہے اور اصل فعل infinitive شکل میں آخر میں رہتا ہے: Ich werde morgen fahren۔ werden کی شکلیں یاد کریں: ich werde، du wirst، er/sie/es wird، wir werden، ihr werdet، sie/Sie werden۔ imperative ہدایت، درخواست یا مشورہ دینے کے لیے استعمال ہوتا ہے۔ غیر رسمی du form میں اکثر verb stem آتا ہے: Komm!؛ ihr form میں ihr کے مطابق فعل آتا ہے مگر pronoun حذف ہوتا ہے: Kommt!؛ رسمی Sie form میں infinitive کے ساتھ Sie آتا ہے: Kommen Sie bitte! درخواست کو مؤدبانہ بنانے کے لیے bitte شامل کریں۔ imperative کبھی سخت محسوس ہو سکتا ہے، اس لیے ناواقف بالغ افراد سے مناسب موقع پر رسمی شکل استعمال کریں۔ روزمرہ حالات میں مستقبل اور مؤدبانہ ہدایات دونوں کی مشق کریں۔",
    examples: [
      { de: 'Ich werde morgen nach Hause fahren.', en: 'I will drive home tomorrow.', ur: 'میں کل گھر جاؤں گی۔' },
      { de: 'Mach bitte die Tür zu!', en: 'Please close the door!', ur: 'براہ مہربانی دروازہ بند کرو!' },
      { de: 'Sprechen Sie bitte langsamer.', en: 'Please speak more slowly.', ur: 'براہ کرم آہستہ بولیں۔' },
    ],
  },
  {
    id: 'a2-10', level: 'A2', title: 'Everyday Situations: Doctor, Shopping, Travel', titleUr: 'روزمرہ حالات',
    en: "Everyday German requires both useful phrases and an understanding of how they are built. At a doctor's appointment, Ich habe Kopfschmerzen und Fieber describes symptoms; German commonly uses haben in expressions such as Kopfschmerzen haben. For shopping, Was kostet das? asks the price, and Ich möchte … is a polite way to request something. For travel, Wann fährt der nächste Zug nach München? asks when the next train leaves; fährt is the conjugated verb and der nächste Zug is the subject. To arrange an appointment, Ich möchte einen Termin vereinbaren is polite and useful in formal situations. Learn each phrase as a whole, then identify its grammar: haben + symptom noun, question word + verb + subject, or möchten + infinitive at the end. Practise changing the details—time, destination, item, or symptom—while keeping the sentence structure correct. These are language-learning examples, not medical advice.",
    ur: "روزمرہ جرمن میں مفید جملے یاد کرنے کے ساتھ یہ سمجھنا بھی ضروری ہے کہ وہ کیسے بنتے ہیں۔ ڈاکٹر کے پاس Ich habe Kopfschmerzen und Fieber علامات بتاتا ہے؛ جرمن میں Kopfschmerzen haben جیسے فقروں میں haben عام استعمال ہوتا ہے۔ خریداری کے وقت Was kostet das? قیمت پوچھتا ہے، اور Ich möchte … مؤدبانہ درخواست کرنے کے لیے مفید ہے۔ سفر میں Wann fährt der nächste Zug nach München? پوچھتا ہے کہ میونخ کے لیے اگلی ٹرین کب روانہ ہوتی ہے؛ یہاں fährt conjugated verb اور der nächste Zug subject ہے۔ appointment لینے کے لیے Ich möchte einen Termin vereinbaren مؤدبانہ اور رسمی حالات میں مفید ہے۔ ہر فقرہ مکمل یاد کریں، پھر اس کی grammar پہچانیں: haben + symptom noun، question word + verb + subject، یا möchten + آخر میں infinitive۔ وقت، منزل، چیز یا علامت بدل کر جملہ بنانے کی مشق کریں، مگر sentence structure درست رکھیں۔ یہ زبان سیکھنے کی مثالیں ہیں، طبی مشورہ نہیں۔",
    examples: [
      { de: 'Ich habe Kopfschmerzen und Fieber.', en: 'I have a headache and fever.', ur: 'مجھے سر درد اور بخار ہے۔' },
      { de: 'Was kostet das?', en: 'How much is that?', ur: 'یہ کتنے کا ہے؟' },
      { de: 'Wann fährt der nächste Zug nach München?', en: 'When does the next train to Munich leave?', ur: 'میونخ کی اگلی ٹرین کب جاتی ہے؟' },
      { de: 'Ich möchte einen Termin vereinbaren.', en: 'I would like to make an appointment.', ur: 'میں وقت لینا چاہتی ہوں۔' },
    ],
  },
];
