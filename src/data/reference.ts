/**
 * Areesha — German Verb Conjugation Library
 *
 * ENGLISH GUIDE
 * This file is the German Verb Conjugation Library for Areesha. It stores a searchable collection of German verbs and the forms learners need to use them in sentences. Each entry contains the infinitive (dictionary form), an English meaning, an Urdu meaning, a verb pattern/type, six present-tense forms, the Perfekt form and the Präteritum form.  How to use it: select or search for a verb to open its details. The six present forms always follow this subject order: ich (I), du (you, informal singular), er/sie/es (he/she/it), wir (we), ihr (you, informal plural), sie/Sie (they/you formal). For example, gehen becomes ich gehe, du gehst, er geht, wir gehen, ihr geht, sie gehen. The selected verb's Perfekt and Präteritum forms help learners recognise and build past-tense sentences.  Verb types are learning labels, not a guarantee that every verb follows one simple rule. Regular verbs generally use predictable endings; strong verbs may change their stem vowel and often have a different past form; mixed verbs combine features; modal verbs express ability, permission, obligation, or intention; separable verbs split their prefix off in a main clause. In the present list, separable verb forms display the separated prefix at the end (for example, ich rufe an). In a complete sentence, the prefix placement depends on sentence structure.  This is offline reference data for the app, not a database or server connection. The app's screen should provide a search box that filters by German infinitive, English meaning, Urdu meaning, or type, and a tappable list. Tapping a verb should open its conjugation table. The data is suitable for beginner A1–A2 practice, but learners should remember that Perfekt auxiliaries and usage can depend on meaning and context.
 *
 * اردو رہنمائی
 * یہ فائل Areesha ایپ کی German Verb Conjugation Library ہے۔ اس میں جرمن افعال کی ایک قابلِ تلاش فہرست رکھی جاتی ہے تاکہ سیکھنے والا کسی فعل کو تلاش کرکے اس کی گردان دیکھ سکے۔ ہر اندراج میں فعل کی بنیادی شکل (Infinitive)، انگریزی معنی، اردو معنی، فعل کی قسم، حال زمانہ (Präsens) کی چھ شکلیں، Perfekt اور Präteritum کی شکل شامل ہے۔  استعمال کا طریقہ: سرچ باکس میں جرمن فعل، اس کا انگریزی یا اردو مطلب، یا فعل کی قسم لکھیں۔ پھر فہرست میں مطلوبہ فعل پر کلک کریں؛ اس کی تفصیلی گردان کھل جائے گی۔ چھ شکلوں کی ترتیب ہمیشہ یہ ہے: ich (میں)، du (تم، غیر رسمی واحد)، er/sie/es (وہ)، wir (ہم)، ihr (تم سب، غیر رسمی جمع)، sie/Sie (وہ سب / آپ رسمی)۔ مثال کے طور پر gehen کی شکلیں ich gehe، du gehst، er geht، wir gehen، ihr geht، sie gehen ہیں۔  فعل کی اقسام صرف سیکھنے میں مدد دینے والے لیبل ہیں۔ Regular افعال عموماً مقررہ endings کے مطابق بدلتے ہیں۔ Strong افعال میں اکثر stem vowel بدلتا ہے اور ماضی کی شکل بھی مختلف ہوتی ہے۔ Mixed افعال میں دونوں طرح کی خصوصیات مل سکتی ہیں۔ Modal افعال صلاحیت، اجازت، ضرورت یا ارادے کو ظاہر کرتے ہیں۔ Separable افعال میں main clause کے اندر prefix اکثر فعل سے الگ ہو کر جملے کے آخر میں آتا ہے، مثلاً ich rufe an۔  یہ مقامی (offline) تعلیمی ڈیٹا ہے؛ اس کے لیے database یا backend ضروری نہیں۔ ایپ کی اسکرین پر سرچ آپشن، افعال کی قابلِ کلک فہرست، اور منتخب فعل کی گردان دکھانے والا تفصیلی حصہ ہونا چاہیے۔ یہ فہرست A1–A2 کے ابتدائی سیکھنے والوں کے لیے بنائی گئی ہے۔ Perfekt کے auxiliary verb اور بعض افعال کے استعمال میں معنی اور جملے کے سیاق کے مطابق فرق ہو سکتا ہے۔
 *
 * Offline local data. Subject order for `present`:
 * ich, du, er/sie/es, wir, ihr, sie/Sie.
 */
export interface VerbConj {
  inf: string;
  en: string;
  ur: string;
  type: string;
  present: string[];
  perfekt: string;
  praeteritum: string;
}

export const pronouns = [
  "ich",
  "du",
  "er/sie/es",
  "wir",
  "ihr",
  "sie/Sie"
] as const;

export const verbLibraryGuide = {
  en: "This file is the German Verb Conjugation Library for Areesha. It stores a searchable collection of German verbs and the forms learners need to use them in sentences. Each entry contains the infinitive (dictionary form), an English meaning, an Urdu meaning, a verb pattern/type, six present-tense forms, the Perfekt form and the Präteritum form.\n\nHow to use it: select or search for a verb to open its details. The six present forms always follow this subject order: ich (I), du (you, informal singular), er/sie/es (he/she/it), wir (we), ihr (you, informal plural), sie/Sie (they/you formal). For example, gehen becomes ich gehe, du gehst, er geht, wir gehen, ihr geht, sie gehen. The selected verb's Perfekt and Präteritum forms help learners recognise and build past-tense sentences.\n\nVerb types are learning labels, not a guarantee that every verb follows one simple rule. Regular verbs generally use predictable endings; strong verbs may change their stem vowel and often have a different past form; mixed verbs combine features; modal verbs express ability, permission, obligation, or intention; separable verbs split their prefix off in a main clause. In the present list, separable verb forms display the separated prefix at the end (for example, ich rufe an). In a complete sentence, the prefix placement depends on sentence structure.\n\nThis is offline reference data for the app, not a database or server connection. The app's screen should provide a search box that filters by German infinitive, English meaning, Urdu meaning, or type, and a tappable list. Tapping a verb should open its conjugation table. The data is suitable for beginner A1–A2 practice, but learners should remember that Perfekt auxiliaries and usage can depend on meaning and context.",
  ur: "یہ فائل Areesha ایپ کی German Verb Conjugation Library ہے۔ اس میں جرمن افعال کی ایک قابلِ تلاش فہرست رکھی جاتی ہے تاکہ سیکھنے والا کسی فعل کو تلاش کرکے اس کی گردان دیکھ سکے۔ ہر اندراج میں فعل کی بنیادی شکل (Infinitive)، انگریزی معنی، اردو معنی، فعل کی قسم، حال زمانہ (Präsens) کی چھ شکلیں، Perfekt اور Präteritum کی شکل شامل ہے۔\n\nاستعمال کا طریقہ: سرچ باکس میں جرمن فعل، اس کا انگریزی یا اردو مطلب، یا فعل کی قسم لکھیں۔ پھر فہرست میں مطلوبہ فعل پر کلک کریں؛ اس کی تفصیلی گردان کھل جائے گی۔ چھ شکلوں کی ترتیب ہمیشہ یہ ہے: ich (میں)، du (تم، غیر رسمی واحد)، er/sie/es (وہ)، wir (ہم)، ihr (تم سب، غیر رسمی جمع)، sie/Sie (وہ سب / آپ رسمی)۔ مثال کے طور پر gehen کی شکلیں ich gehe، du gehst، er geht، wir gehen، ihr geht، sie gehen ہیں۔\n\nفعل کی اقسام صرف سیکھنے میں مدد دینے والے لیبل ہیں۔ Regular افعال عموماً مقررہ endings کے مطابق بدلتے ہیں۔ Strong افعال میں اکثر stem vowel بدلتا ہے اور ماضی کی شکل بھی مختلف ہوتی ہے۔ Mixed افعال میں دونوں طرح کی خصوصیات مل سکتی ہیں۔ Modal افعال صلاحیت، اجازت، ضرورت یا ارادے کو ظاہر کرتے ہیں۔ Separable افعال میں main clause کے اندر prefix اکثر فعل سے الگ ہو کر جملے کے آخر میں آتا ہے، مثلاً ich rufe an۔\n\nیہ مقامی (offline) تعلیمی ڈیٹا ہے؛ اس کے لیے database یا backend ضروری نہیں۔ ایپ کی اسکرین پر سرچ آپشن، افعال کی قابلِ کلک فہرست، اور منتخب فعل کی گردان دکھانے والا تفصیلی حصہ ہونا چاہیے۔ یہ فہرست A1–A2 کے ابتدائی سیکھنے والوں کے لیے بنائی گئی ہے۔ Perfekt کے auxiliary verb اور بعض افعال کے استعمال میں معنی اور جملے کے سیاق کے مطابق فرق ہو سکتا ہے۔"
};

export const verbs: VerbConj[] = [
  {
    "inf": "sein",
    "en": "to be",
    "ur": "ہونا",
    "type": "irregular",
    "present": [
      "bin",
      "bist",
      "ist",
      "sind",
      "seid",
      "sind"
    ],
    "perfekt": "ist gewesen",
    "praeteritum": "war"
  },
  {
    "inf": "haben",
    "en": "to have",
    "ur": "رکھنا / پاس ہونا",
    "type": "irregular",
    "present": [
      "habe",
      "hast",
      "hat",
      "haben",
      "habt",
      "haben"
    ],
    "perfekt": "hat gehabt",
    "praeteritum": "hatte"
  },
  {
    "inf": "werden",
    "en": "to become / will",
    "ur": "بننا",
    "type": "irregular",
    "present": [
      "werde",
      "wirst",
      "wird",
      "werden",
      "werdet",
      "werden"
    ],
    "perfekt": "ist geworden",
    "praeteritum": "wurde"
  },
  {
    "inf": "gehen",
    "en": "to go",
    "ur": "جانا",
    "type": "strong",
    "present": [
      "gehe",
      "gehst",
      "geht",
      "gehen",
      "geht",
      "gehen"
    ],
    "perfekt": "ist gegangen",
    "praeteritum": "ging"
  },
  {
    "inf": "kommen",
    "en": "to come",
    "ur": "آنا",
    "type": "strong",
    "present": [
      "komme",
      "kommst",
      "kommt",
      "kommen",
      "kommt",
      "kommen"
    ],
    "perfekt": "ist gekommen",
    "praeteritum": "kam"
  },
  {
    "inf": "machen",
    "en": "to do / make",
    "ur": "کرنا / بنانا",
    "type": "regular",
    "present": [
      "mache",
      "machst",
      "macht",
      "machen",
      "macht",
      "machen"
    ],
    "perfekt": "hat gemacht",
    "praeteritum": "machte"
  },
  {
    "inf": "lernen",
    "en": "to learn",
    "ur": "سیکھنا",
    "type": "regular",
    "present": [
      "lerne",
      "lernst",
      "lernt",
      "lernen",
      "lernt",
      "lernen"
    ],
    "perfekt": "hat gelernt",
    "praeteritum": "lernte"
  },
  {
    "inf": "essen",
    "en": "to eat",
    "ur": "کھانا",
    "type": "strong",
    "present": [
      "esse",
      "isst",
      "isst",
      "essen",
      "esst",
      "essen"
    ],
    "perfekt": "hat gegessen",
    "praeteritum": "aß"
  },
  {
    "inf": "sprechen",
    "en": "to speak",
    "ur": "بولنا",
    "type": "strong",
    "present": [
      "spreche",
      "sprichst",
      "spricht",
      "sprechen",
      "sprecht",
      "sprechen"
    ],
    "perfekt": "hat gesprochen",
    "praeteritum": "sprach"
  },
  {
    "inf": "fahren",
    "en": "to drive / travel",
    "ur": "گاڑی چلانا / سفر کرنا",
    "type": "strong",
    "present": [
      "fahre",
      "fährst",
      "fährt",
      "fahren",
      "fahrt",
      "fahren"
    ],
    "perfekt": "ist gefahren",
    "praeteritum": "fuhr"
  },
  {
    "inf": "sehen",
    "en": "to see",
    "ur": "دیکھنا",
    "type": "strong",
    "present": [
      "sehe",
      "siehst",
      "sieht",
      "sehen",
      "seht",
      "sehen"
    ],
    "perfekt": "hat gesehen",
    "praeteritum": "sah"
  },
  {
    "inf": "lesen",
    "en": "to read",
    "ur": "پڑھنا",
    "type": "strong",
    "present": [
      "lese",
      "liest",
      "liest",
      "lesen",
      "lest",
      "lesen"
    ],
    "perfekt": "hat gelesen",
    "praeteritum": "las"
  },
  {
    "inf": "nehmen",
    "en": "to take",
    "ur": "لینا",
    "type": "strong",
    "present": [
      "nehme",
      "nimmst",
      "nimmt",
      "nehmen",
      "nehmt",
      "nehmen"
    ],
    "perfekt": "hat genommen",
    "praeteritum": "nahm"
  },
  {
    "inf": "wohnen",
    "en": "to live / reside",
    "ur": "رہائش پذیر ہونا",
    "type": "regular",
    "present": [
      "wohne",
      "wohnst",
      "wohnt",
      "wohnen",
      "wohnt",
      "wohnen"
    ],
    "perfekt": "hat gewohnt",
    "praeteritum": "wohnte"
  },
  {
    "inf": "arbeiten",
    "en": "to work",
    "ur": "کام کرنا",
    "type": "regular",
    "present": [
      "arbeite",
      "arbeitest",
      "arbeitet",
      "arbeiten",
      "arbeitet",
      "arbeiten"
    ],
    "perfekt": "hat gearbeitet",
    "praeteritum": "arbeitete"
  },
  {
    "inf": "trinken",
    "en": "to drink",
    "ur": "پینا",
    "type": "strong",
    "present": [
      "trinke",
      "trinkst",
      "trinkt",
      "trinken",
      "trinkt",
      "trinken"
    ],
    "perfekt": "hat getrunken",
    "praeteritum": "trank"
  },
  {
    "inf": "schlafen",
    "en": "to sleep",
    "ur": "سونا",
    "type": "strong",
    "present": [
      "schlafe",
      "schläfst",
      "schläft",
      "schlafen",
      "schlaft",
      "schlafen"
    ],
    "perfekt": "hat geschlafen",
    "praeteritum": "schlief"
  },
  {
    "inf": "geben",
    "en": "to give",
    "ur": "دینا",
    "type": "strong",
    "present": [
      "gebe",
      "gibst",
      "gibt",
      "geben",
      "gebt",
      "geben"
    ],
    "perfekt": "hat gegeben",
    "praeteritum": "gab"
  },
  {
    "inf": "helfen",
    "en": "to help",
    "ur": "مدد کرنا",
    "type": "strong",
    "present": [
      "helfe",
      "hilfst",
      "hilft",
      "helfen",
      "helft",
      "helfen"
    ],
    "perfekt": "hat geholfen",
    "praeteritum": "half"
  },
  {
    "inf": "finden",
    "en": "to find",
    "ur": "تلاش کرنا / ملنا",
    "type": "strong",
    "present": [
      "finde",
      "findest",
      "findet",
      "finden",
      "findet",
      "finden"
    ],
    "perfekt": "hat gefunden",
    "praeteritum": "fand"
  },
  {
    "inf": "bleiben",
    "en": "to stay",
    "ur": "ٹھہرنا",
    "type": "strong",
    "present": [
      "bleibe",
      "bleibst",
      "bleibt",
      "bleiben",
      "bleibt",
      "bleiben"
    ],
    "perfekt": "ist geblieben",
    "praeteritum": "blieb"
  },
  {
    "inf": "bringen",
    "en": "to bring",
    "ur": "لانا",
    "type": "mixed",
    "present": [
      "bringe",
      "bringst",
      "bringt",
      "bringen",
      "bringt",
      "bringen"
    ],
    "perfekt": "hat gebracht",
    "praeteritum": "brachte"
  },
  {
    "inf": "denken",
    "en": "to think",
    "ur": "سوچنا",
    "type": "mixed",
    "present": [
      "denke",
      "denkst",
      "denkt",
      "denken",
      "denkt",
      "denken"
    ],
    "perfekt": "hat gedacht",
    "praeteritum": "dachte"
  },
  {
    "inf": "wissen",
    "en": "to know (a fact)",
    "ur": "جاننا",
    "type": "irregular",
    "present": [
      "weiß",
      "weißt",
      "weiß",
      "wissen",
      "wisst",
      "wissen"
    ],
    "perfekt": "hat gewusst",
    "praeteritum": "wusste"
  },
  {
    "inf": "kennen",
    "en": "to know / be familiar with",
    "ur": "واقف ہونا",
    "type": "mixed",
    "present": [
      "kenne",
      "kennst",
      "kennt",
      "kennen",
      "kennt",
      "kennen"
    ],
    "perfekt": "hat gekannt",
    "praeteritum": "kannte"
  },
  {
    "inf": "verstehen",
    "en": "to understand",
    "ur": "سمجھنا",
    "type": "strong",
    "present": [
      "verstehe",
      "verstehst",
      "versteht",
      "verstehen",
      "versteht",
      "verstehen"
    ],
    "perfekt": "hat verstanden",
    "praeteritum": "verstand"
  },
  {
    "inf": "schreiben",
    "en": "to write",
    "ur": "لکھنا",
    "type": "strong",
    "present": [
      "schreibe",
      "schreibst",
      "schreibt",
      "schreiben",
      "schreibt",
      "schreiben"
    ],
    "perfekt": "hat geschrieben",
    "praeteritum": "schrieb"
  },
  {
    "inf": "kaufen",
    "en": "to buy",
    "ur": "خریدنا",
    "type": "regular",
    "present": [
      "kaufe",
      "kaufst",
      "kauft",
      "kaufen",
      "kauft",
      "kaufen"
    ],
    "perfekt": "hat gekauft",
    "praeteritum": "kaufte"
  },
  {
    "inf": "verkaufen",
    "en": "to sell",
    "ur": "بیچنا",
    "type": "regular",
    "present": [
      "verkaufe",
      "verkaufst",
      "verkauft",
      "verkaufen",
      "verkauft",
      "verkaufen"
    ],
    "perfekt": "hat verkauft",
    "praeteritum": "verkaufte"
  },
  {
    "inf": "bezahlen",
    "en": "to pay",
    "ur": "ادائیگی کرنا",
    "type": "regular",
    "present": [
      "bezahle",
      "bezahlst",
      "bezahlt",
      "bezahlen",
      "bezahlt",
      "bezahlen"
    ],
    "perfekt": "hat bezahlt",
    "praeteritum": "bezahlte"
  },
  {
    "inf": "fragen",
    "en": "to ask",
    "ur": "پوچھنا",
    "type": "regular",
    "present": [
      "frage",
      "fragst",
      "fragt",
      "fragen",
      "fragt",
      "fragen"
    ],
    "perfekt": "hat gefragt",
    "praeteritum": "fragte"
  },
  {
    "inf": "antworten",
    "en": "to answer",
    "ur": "جواب دینا",
    "type": "regular",
    "present": [
      "antworte",
      "antwortest",
      "antwortet",
      "antworten",
      "antwortet",
      "antworten"
    ],
    "perfekt": "hat geantwortet",
    "praeteritum": "antwortete"
  },
  {
    "inf": "hören",
    "en": "to hear / listen",
    "ur": "سننا",
    "type": "regular",
    "present": [
      "höre",
      "hörst",
      "hört",
      "hören",
      "hört",
      "hören"
    ],
    "perfekt": "hat gehört",
    "praeteritum": "hörte"
  },
  {
    "inf": "zuhören",
    "en": "to listen attentively",
    "ur": "غور سے سننا",
    "type": "separable",
    "present": [
      "höre zu",
      "hörst zu",
      "hört zu",
      "hören zu",
      "hört zu",
      "hören zu"
    ],
    "perfekt": "hat zugehört",
    "praeteritum": "hörte zu"
  },
  {
    "inf": "spielen",
    "en": "to play",
    "ur": "کھیلنا",
    "type": "regular",
    "present": [
      "spiele",
      "spielst",
      "spielt",
      "spielen",
      "spielt",
      "spielen"
    ],
    "perfekt": "hat gespielt",
    "praeteritum": "spielte"
  },
  {
    "inf": "laufen",
    "en": "to run / walk",
    "ur": "دوڑنا / چلنا",
    "type": "strong",
    "present": [
      "laufe",
      "läufst",
      "läuft",
      "laufen",
      "lauft",
      "laufen"
    ],
    "perfekt": "ist gelaufen",
    "praeteritum": "lief"
  },
  {
    "inf": "schwimmen",
    "en": "to swim",
    "ur": "تیرنا",
    "type": "strong",
    "present": [
      "schwimme",
      "schwimmst",
      "schwimmt",
      "schwimmen",
      "schwimmt",
      "schwimmen"
    ],
    "perfekt": "ist geschwommen",
    "praeteritum": "schwamm"
  },
  {
    "inf": "tanzen",
    "en": "to dance",
    "ur": "رقص کرنا",
    "type": "regular",
    "present": [
      "tanze",
      "tanzt",
      "tanzt",
      "tanzen",
      "tanzt",
      "tanzen"
    ],
    "perfekt": "hat getanzt",
    "praeteritum": "tanzte"
  },
  {
    "inf": "singen",
    "en": "to sing",
    "ur": "گانا",
    "type": "strong",
    "present": [
      "singe",
      "singst",
      "singt",
      "singen",
      "singt",
      "singen"
    ],
    "perfekt": "hat gesungen",
    "praeteritum": "sang"
  },
  {
    "inf": "kochen",
    "en": "to cook",
    "ur": "کھانا پکانا",
    "type": "regular",
    "present": [
      "koche",
      "kochst",
      "kocht",
      "kochen",
      "kocht",
      "kochen"
    ],
    "perfekt": "hat gekocht",
    "praeteritum": "kochte"
  },
  {
    "inf": "backen",
    "en": "to bake",
    "ur": "بیک کرنا / پکانا",
    "type": "strong",
    "present": [
      "backe",
      "bäckst",
      "bäckt",
      "backen",
      "backt",
      "backen"
    ],
    "perfekt": "hat gebacken",
    "praeteritum": "backte"
  },
  {
    "inf": "putzen",
    "en": "to clean",
    "ur": "صاف کرنا",
    "type": "regular",
    "present": [
      "putze",
      "putzt",
      "putzt",
      "putzen",
      "putzt",
      "putzen"
    ],
    "perfekt": "hat geputzt",
    "praeteritum": "putzte"
  },
  {
    "inf": "waschen",
    "en": "to wash",
    "ur": "دھونا",
    "type": "strong",
    "present": [
      "wasche",
      "wäschst",
      "wäscht",
      "waschen",
      "wascht",
      "waschen"
    ],
    "perfekt": "hat gewaschen",
    "praeteritum": "wusch"
  },
  {
    "inf": "öffnen",
    "en": "to open",
    "ur": "کھولنا",
    "type": "regular",
    "present": [
      "öffne",
      "öffnest",
      "öffnet",
      "öffnen",
      "öffnet",
      "öffnen"
    ],
    "perfekt": "hat geöffnet",
    "praeteritum": "öffnete"
  },
  {
    "inf": "schließen",
    "en": "to close",
    "ur": "بند کرنا",
    "type": "strong",
    "present": [
      "schließe",
      "schließt",
      "schließt",
      "schließen",
      "schließt",
      "schließen"
    ],
    "perfekt": "hat geschlossen",
    "praeteritum": "schloss"
  },
  {
    "inf": "beginnen",
    "en": "to begin",
    "ur": "شروع کرنا",
    "type": "strong",
    "present": [
      "beginne",
      "beginnst",
      "beginnt",
      "beginnen",
      "beginnt",
      "beginnen"
    ],
    "perfekt": "hat begonnen",
    "praeteritum": "begann"
  },
  {
    "inf": "enden",
    "en": "to end",
    "ur": "ختم ہونا",
    "type": "regular",
    "present": [
      "ende",
      "endest",
      "endet",
      "enden",
      "endet",
      "enden"
    ],
    "perfekt": "hat geendet",
    "praeteritum": "endete"
  },
  {
    "inf": "warten",
    "en": "to wait",
    "ur": "انتظار کرنا",
    "type": "regular",
    "present": [
      "warte",
      "wartest",
      "wartet",
      "warten",
      "wartet",
      "warten"
    ],
    "perfekt": "hat gewartet",
    "praeteritum": "wartete"
  },
  {
    "inf": "brauchen",
    "en": "to need",
    "ur": "ضرورت ہونا",
    "type": "regular",
    "present": [
      "brauche",
      "brauchst",
      "braucht",
      "brauchen",
      "braucht",
      "brauchen"
    ],
    "perfekt": "hat gebraucht",
    "praeteritum": "brauchte"
  },
  {
    "inf": "suchen",
    "en": "to search / look for",
    "ur": "تلاش کرنا",
    "type": "regular",
    "present": [
      "suche",
      "suchst",
      "sucht",
      "suchen",
      "sucht",
      "suchen"
    ],
    "perfekt": "hat gesucht",
    "praeteritum": "suchte"
  },
  {
    "inf": "besuchen",
    "en": "to visit",
    "ur": "ملاقات کرنا",
    "type": "regular",
    "present": [
      "besuche",
      "besuchst",
      "besucht",
      "besuchen",
      "besucht",
      "besuchen"
    ],
    "perfekt": "hat besucht",
    "praeteritum": "besuchte"
  },
  {
    "inf": "reisen",
    "en": "to travel",
    "ur": "سفر کرنا",
    "type": "regular",
    "present": [
      "reise",
      "reist",
      "reist",
      "reisen",
      "reist",
      "reisen"
    ],
    "perfekt": "ist gereist",
    "praeteritum": "reiste"
  },
  {
    "inf": "fliegen",
    "en": "to fly",
    "ur": "اڑنا / ہوائی سفر کرنا",
    "type": "strong",
    "present": [
      "fliege",
      "fliegst",
      "fliegt",
      "fliegen",
      "fliegt",
      "fliegen"
    ],
    "perfekt": "ist geflogen",
    "praeteritum": "flog"
  },
  {
    "inf": "steigen",
    "en": "to climb / get on",
    "ur": "چڑھنا",
    "type": "strong",
    "present": [
      "steige",
      "steigst",
      "steigt",
      "steigen",
      "steigt",
      "steigen"
    ],
    "perfekt": "ist gestiegen",
    "praeteritum": "stieg"
  },
  {
    "inf": "fallen",
    "en": "to fall",
    "ur": "گرنا",
    "type": "strong",
    "present": [
      "falle",
      "fällst",
      "fällt",
      "fallen",
      "fallt",
      "fallen"
    ],
    "perfekt": "ist gefallen",
    "praeteritum": "fiel"
  },
  {
    "inf": "aufstehen",
    "en": "to get up",
    "ur": "اٹھنا",
    "type": "separable",
    "present": [
      "stehe auf",
      "stehst auf",
      "steht auf",
      "stehen auf",
      "steht auf",
      "stehen auf"
    ],
    "perfekt": "ist aufgestanden",
    "praeteritum": "stand auf"
  },
  {
    "inf": "anrufen",
    "en": "to call (phone)",
    "ur": "فون کرنا",
    "type": "separable",
    "present": [
      "rufe an",
      "rufst an",
      "ruft an",
      "rufen an",
      "ruft an",
      "rufen an"
    ],
    "perfekt": "hat angerufen",
    "praeteritum": "rief an"
  },
  {
    "inf": "einkaufen",
    "en": "to shop",
    "ur": "خریداری کرنا",
    "type": "separable",
    "present": [
      "kaufe ein",
      "kaufst ein",
      "kauft ein",
      "kaufen ein",
      "kauft ein",
      "kaufen ein"
    ],
    "perfekt": "hat eingekauft",
    "praeteritum": "kaufte ein"
  },
  {
    "inf": "aufmachen",
    "en": "to open",
    "ur": "کھولنا",
    "type": "separable",
    "present": [
      "mache auf",
      "machst auf",
      "macht auf",
      "machen auf",
      "macht auf",
      "machen auf"
    ],
    "perfekt": "hat aufgemacht",
    "praeteritum": "machte auf"
  },
  {
    "inf": "zumachen",
    "en": "to shut / close",
    "ur": "بند کرنا",
    "type": "separable",
    "present": [
      "mache zu",
      "machst zu",
      "macht zu",
      "machen zu",
      "macht zu",
      "machen zu"
    ],
    "perfekt": "hat zugemacht",
    "praeteritum": "machte zu"
  },
  {
    "inf": "mitbringen",
    "en": "to bring along",
    "ur": "ساتھ لانا",
    "type": "separable",
    "present": [
      "bringe mit",
      "bringst mit",
      "bringt mit",
      "bringen mit",
      "bringt mit",
      "bringen mit"
    ],
    "perfekt": "hat mitgebracht",
    "praeteritum": "brachte mit"
  },
  {
    "inf": "einladen",
    "en": "to invite",
    "ur": "دعوت دینا",
    "type": "strong/separable",
    "present": [
      "lade ein",
      "lädst ein",
      "lädt ein",
      "laden ein",
      "ladet ein",
      "laden ein"
    ],
    "perfekt": "hat eingeladen",
    "praeteritum": "lud ein"
  },
  {
    "inf": "aussehen",
    "en": "to look / appear",
    "ur": "نظر آنا",
    "type": "strong/separable",
    "present": [
      "sehe aus",
      "siehst aus",
      "sieht aus",
      "sehen aus",
      "seht aus",
      "sehen aus"
    ],
    "perfekt": "hat ausgesehen",
    "praeteritum": "sah aus"
  },
  {
    "inf": "aufhören",
    "en": "to stop",
    "ur": "رک جانا / بند کرنا",
    "type": "separable",
    "present": [
      "höre auf",
      "hörst auf",
      "hört auf",
      "hören auf",
      "hört auf",
      "hören auf"
    ],
    "perfekt": "hat aufgehört",
    "praeteritum": "hörte auf"
  },
  {
    "inf": "erzählen",
    "en": "to tell / narrate",
    "ur": "سنانا",
    "type": "regular",
    "present": [
      "erzähle",
      "erzählst",
      "erzählt",
      "erzählen",
      "erzählt",
      "erzählen"
    ],
    "perfekt": "hat erzählt",
    "praeteritum": "erzählte"
  },
  {
    "inf": "erklären",
    "en": "to explain",
    "ur": "وضاحت کرنا",
    "type": "regular",
    "present": [
      "erkläre",
      "erklärst",
      "erklärt",
      "erklären",
      "erklärt",
      "erklären"
    ],
    "perfekt": "hat erklärt",
    "praeteritum": "erklärte"
  },
  {
    "inf": "zeigen",
    "en": "to show",
    "ur": "دکھانا",
    "type": "regular",
    "present": [
      "zeige",
      "zeigst",
      "zeigt",
      "zeigen",
      "zeigt",
      "zeigen"
    ],
    "perfekt": "hat gezeigt",
    "praeteritum": "zeigte"
  },
  {
    "inf": "schicken",
    "en": "to send",
    "ur": "بھیجنا",
    "type": "regular",
    "present": [
      "schicke",
      "schickst",
      "schickt",
      "schicken",
      "schickt",
      "schicken"
    ],
    "perfekt": "hat geschickt",
    "praeteritum": "schickte"
  },
  {
    "inf": "bekommen",
    "en": "to receive / get",
    "ur": "حاصل کرنا / ملنا",
    "type": "strong",
    "present": [
      "bekomme",
      "bekommst",
      "bekommt",
      "bekommen",
      "bekommt",
      "bekommen"
    ],
    "perfekt": "hat bekommen",
    "praeteritum": "bekam"
  },
  {
    "inf": "verlieren",
    "en": "to lose",
    "ur": "کھونا",
    "type": "strong",
    "present": [
      "verliere",
      "verlierst",
      "verliert",
      "verlieren",
      "verliert",
      "verlieren"
    ],
    "perfekt": "hat verloren",
    "praeteritum": "verlor"
  },
  {
    "inf": "gewinnen",
    "en": "to win",
    "ur": "جیتنا",
    "type": "strong",
    "present": [
      "gewinne",
      "gewinnst",
      "gewinnt",
      "gewinnen",
      "gewinnt",
      "gewinnen"
    ],
    "perfekt": "hat gewonnen",
    "praeteritum": "gewann"
  },
  {
    "inf": "vergessen",
    "en": "to forget",
    "ur": "بھولنا",
    "type": "strong",
    "present": [
      "vergesse",
      "vergisst",
      "vergisst",
      "vergessen",
      "vergesst",
      "vergessen"
    ],
    "perfekt": "hat vergessen",
    "praeteritum": "vergaß"
  },
  {
    "inf": "treffen",
    "en": "to meet",
    "ur": "ملنا",
    "type": "strong",
    "present": [
      "treffe",
      "triffst",
      "trifft",
      "treffen",
      "trefft",
      "treffen"
    ],
    "perfekt": "hat getroffen",
    "praeteritum": "traf"
  },
  {
    "inf": "tragen",
    "en": "to carry / wear",
    "ur": "اٹھانا / پہننا",
    "type": "strong",
    "present": [
      "trage",
      "trägst",
      "trägt",
      "tragen",
      "tragt",
      "tragen"
    ],
    "perfekt": "hat getragen",
    "praeteritum": "trug"
  },
  {
    "inf": "ziehen",
    "en": "to pull / move house",
    "ur": "کھینچنا / گھر بدلنا",
    "type": "strong",
    "present": [
      "ziehe",
      "ziehst",
      "zieht",
      "ziehen",
      "zieht",
      "ziehen"
    ],
    "perfekt": "hat gezogen",
    "praeteritum": "zog"
  },
  {
    "inf": "liegen",
    "en": "to lie / be located",
    "ur": "لیٹا ہونا / واقع ہونا",
    "type": "strong",
    "present": [
      "liege",
      "liegst",
      "liegt",
      "liegen",
      "liegt",
      "liegen"
    ],
    "perfekt": "hat gelegen",
    "praeteritum": "lag"
  },
  {
    "inf": "stehen",
    "en": "to stand",
    "ur": "کھڑا ہونا",
    "type": "strong",
    "present": [
      "stehe",
      "stehst",
      "steht",
      "stehen",
      "steht",
      "stehen"
    ],
    "perfekt": "hat gestanden",
    "praeteritum": "stand"
  },
  {
    "inf": "sitzen",
    "en": "to sit",
    "ur": "بیٹھنا",
    "type": "strong",
    "present": [
      "sitze",
      "sitzt",
      "sitzt",
      "sitzen",
      "sitzt",
      "sitzen"
    ],
    "perfekt": "hat gesessen",
    "praeteritum": "saß"
  },
  {
    "inf": "legen",
    "en": "to lay / put down",
    "ur": "رکھنا / لٹانا",
    "type": "regular",
    "present": [
      "lege",
      "legst",
      "legt",
      "legen",
      "legt",
      "legen"
    ],
    "perfekt": "hat gelegt",
    "praeteritum": "legte"
  },
  {
    "inf": "stellen",
    "en": "to place upright",
    "ur": "کھڑا رکھنا",
    "type": "regular",
    "present": [
      "stelle",
      "stellst",
      "stellt",
      "stellen",
      "stellt",
      "stellen"
    ],
    "perfekt": "hat gestellt",
    "praeteritum": "stellte"
  },
  {
    "inf": "leben",
    "en": "to live",
    "ur": "زندگی گزارنا",
    "type": "regular",
    "present": [
      "lebe",
      "lebst",
      "lebt",
      "leben",
      "lebt",
      "leben"
    ],
    "perfekt": "hat gelebt",
    "praeteritum": "lebte"
  },
  {
    "inf": "lieben",
    "en": "to love",
    "ur": "محبت کرنا",
    "type": "regular",
    "present": [
      "liebe",
      "liebst",
      "liebt",
      "lieben",
      "liebt",
      "lieben"
    ],
    "perfekt": "hat geliebt",
    "praeteritum": "liebte"
  },
  {
    "inf": "mögen",
    "en": "to like",
    "ur": "پسند کرنا",
    "type": "irregular",
    "present": [
      "mag",
      "magst",
      "mag",
      "mögen",
      "mögt",
      "mögen"
    ],
    "perfekt": "hat gemocht",
    "praeteritum": "mochte"
  },
  {
    "inf": "möchten",
    "en": "would like",
    "ur": "چاہنا (ادب سے)",
    "type": "modal",
    "present": [
      "möchte",
      "möchtest",
      "möchte",
      "möchten",
      "möchtet",
      "möchten"
    ],
    "perfekt": "—",
    "praeteritum": "—"
  },
  {
    "inf": "können",
    "en": "can / to be able to",
    "ur": "سکنا",
    "type": "modal",
    "present": [
      "kann",
      "kannst",
      "kann",
      "können",
      "könnt",
      "können"
    ],
    "perfekt": "hat gekonnt",
    "praeteritum": "konnte"
  },
  {
    "inf": "müssen",
    "en": "must / have to",
    "ur": "لازم ہونا",
    "type": "modal",
    "present": [
      "muss",
      "musst",
      "muss",
      "müssen",
      "müsst",
      "müssen"
    ],
    "perfekt": "hat gemusst",
    "praeteritum": "musste"
  },
  {
    "inf": "dürfen",
    "en": "may / be allowed to",
    "ur": "اجازت ہونا",
    "type": "modal",
    "present": [
      "darf",
      "darfst",
      "darf",
      "dürfen",
      "dürft",
      "dürfen"
    ],
    "perfekt": "hat gedurft",
    "praeteritum": "durfte"
  },
  {
    "inf": "sollen",
    "en": "should / ought to",
    "ur": "چاہیے ہونا",
    "type": "modal",
    "present": [
      "soll",
      "sollst",
      "soll",
      "sollen",
      "sollt",
      "sollen"
    ],
    "perfekt": "hat gesollt",
    "praeteritum": "sollte"
  },
  {
    "inf": "wollen",
    "en": "to want",
    "ur": "چاہنا",
    "type": "modal",
    "present": [
      "will",
      "willst",
      "will",
      "wollen",
      "wollt",
      "wollen"
    ],
    "perfekt": "hat gewollt",
    "praeteritum": "wollte"
  },
  {
    "inf": "lassen",
    "en": "to let / leave",
    "ur": "چھوڑ دینا / اجازت دینا",
    "type": "strong",
    "present": [
      "lasse",
      "lässt",
      "lässt",
      "lassen",
      "lasst",
      "lassen"
    ],
    "perfekt": "hat gelassen",
    "praeteritum": "ließ"
  },
  {
    "inf": "tun",
    "en": "to do",
    "ur": "کرنا",
    "type": "irregular",
    "present": [
      "tue",
      "tust",
      "tut",
      "tun",
      "tut",
      "tun"
    ],
    "perfekt": "hat getan",
    "praeteritum": "tat"
  },
  {
    "inf": "heißen",
    "en": "to be called",
    "ur": "کہلانا",
    "type": "strong",
    "present": [
      "heiße",
      "heißt",
      "heißt",
      "heißen",
      "heißt",
      "heißen"
    ],
    "perfekt": "hat geheißen",
    "praeteritum": "hieß"
  },
  {
    "inf": "sagen",
    "en": "to say",
    "ur": "کہنا",
    "type": "regular",
    "present": [
      "sage",
      "sagst",
      "sagt",
      "sagen",
      "sagt",
      "sagen"
    ],
    "perfekt": "hat gesagt",
    "praeteritum": "sagte"
  },
  {
    "inf": "halten",
    "en": "to hold / stop",
    "ur": "پکڑنا / رکنا",
    "type": "strong",
    "present": [
      "halte",
      "hältst",
      "hält",
      "halten",
      "haltet",
      "halten"
    ],
    "perfekt": "hat gehalten",
    "praeteritum": "hielt"
  },
  {
    "inf": "rufen",
    "en": "to call / shout",
    "ur": "پکارنا",
    "type": "strong",
    "present": [
      "rufe",
      "rufst",
      "ruft",
      "rufen",
      "ruft",
      "rufen"
    ],
    "perfekt": "hat gerufen",
    "praeteritum": "rief"
  },
  {
    "inf": "schneiden",
    "en": "to cut",
    "ur": "کاٹنا",
    "type": "strong",
    "present": [
      "schneide",
      "schneidest",
      "schneidet",
      "schneiden",
      "schneidet",
      "schneiden"
    ],
    "perfekt": "hat geschnitten",
    "praeteritum": "schnitt"
  },
  {
    "inf": "wählen",
    "en": "to choose / vote",
    "ur": "منتخب کرنا / ووٹ دینا",
    "type": "regular",
    "present": [
      "wähle",
      "wählst",
      "wählt",
      "wählen",
      "wählt",
      "wählen"
    ],
    "perfekt": "hat gewählt",
    "praeteritum": "wählte"
  },
  {
    "inf": "zahlen",
    "en": "to pay",
    "ur": "پیسے دینا",
    "type": "regular",
    "present": [
      "zahle",
      "zahlst",
      "zahlt",
      "zahlen",
      "zahlt",
      "zahlen"
    ],
    "perfekt": "hat gezahlt",
    "praeteritum": "zahlte"
  },
  {
    "inf": "feiern",
    "en": "to celebrate",
    "ur": "جشن منانا",
    "type": "regular",
    "present": [
      "feiere",
      "feierst",
      "feiert",
      "feiern",
      "feiert",
      "feiern"
    ],
    "perfekt": "hat gefeiert",
    "praeteritum": "feierte"
  },
  {
    "inf": "hoffen",
    "en": "to hope",
    "ur": "امید کرنا",
    "type": "regular",
    "present": [
      "hoffe",
      "hoffst",
      "hofft",
      "hoffen",
      "hofft",
      "hoffen"
    ],
    "perfekt": "hat gehofft",
    "praeteritum": "hoffte"
  },
  {
    "inf": "glauben",
    "en": "to believe",
    "ur": "یقین کرنا",
    "type": "regular",
    "present": [
      "glaube",
      "glaubst",
      "glaubt",
      "glauben",
      "glaubt",
      "glauben"
    ],
    "perfekt": "hat geglaubt",
    "praeteritum": "glaubte"
  },
  {
    "inf": "studieren",
    "en": "to study at university",
    "ur": "یونیورسٹی میں تعلیم حاصل کرنا",
    "type": "regular",
    "present": [
      "studiere",
      "studierst",
      "studiert",
      "studieren",
      "studiert",
      "studieren"
    ],
    "perfekt": "hat studiert",
    "praeteritum": "studierte"
  },
  {
    "inf": "üben",
    "en": "to practise",
    "ur": "مشق کرنا",
    "type": "regular",
    "present": [
      "übe",
      "übst",
      "übt",
      "üben",
      "übt",
      "üben"
    ],
    "perfekt": "hat geübt",
    "praeteritum": "übte"
  },
  {
    "inf": "erreichen",
    "en": "to reach",
    "ur": "پہنچنا / حاصل کرنا",
    "type": "regular",
    "present": [
      "erreiche",
      "erreichst",
      "erreicht",
      "erreichen",
      "erreicht",
      "erreichen"
    ],
    "perfekt": "hat erreicht",
    "praeteritum": "erreichte"
  },
  {
    "inf": "entscheiden",
    "en": "to decide",
    "ur": "فیصلہ کرنا",
    "type": "strong",
    "present": [
      "entscheide",
      "entscheidest",
      "entscheidet",
      "entscheiden",
      "entscheidet",
      "entscheiden"
    ],
    "perfekt": "hat entschieden",
    "praeteritum": "entschied"
  },
  {
    "inf": "empfehlen",
    "en": "to recommend",
    "ur": "مشورہ دینا",
    "type": "strong",
    "present": [
      "empfehle",
      "empfiehlst",
      "empfiehlt",
      "empfehlen",
      "empfehlt",
      "empfehlen"
    ],
    "perfekt": "hat empfohlen",
    "praeteritum": "empfahl"
  },
  {
    "inf": "anbieten",
    "en": "to offer",
    "ur": "پیش کرنا",
    "type": "strong/separable",
    "present": [
      "biete an",
      "bietest an",
      "bietet an",
      "bieten an",
      "bietet an",
      "bieten an"
    ],
    "perfekt": "hat angeboten",
    "praeteritum": "bot an"
  },
  {
    "inf": "aussteigen",
    "en": "to get off / exit",
    "ur": "اترنا",
    "type": "strong/separable",
    "present": [
      "steige aus",
      "steigst aus",
      "steigt aus",
      "steigen aus",
      "steigt aus",
      "steigen aus"
    ],
    "perfekt": "ist ausgestiegen",
    "praeteritum": "stieg aus"
  },
  {
    "inf": "einsteigen",
    "en": "to get on / enter",
    "ur": "سوار ہونا",
    "type": "strong/separable",
    "present": [
      "steige ein",
      "steigst ein",
      "steigt ein",
      "steigen ein",
      "steigt ein",
      "steigen ein"
    ],
    "perfekt": "ist eingestiegen",
    "praeteritum": "stieg ein"
  },
  {
    "inf": "anmachen",
    "en": "to switch on",
    "ur": "چالو کرنا",
    "type": "separable",
    "present": [
      "mache an",
      "machst an",
      "macht an",
      "machen an",
      "macht an",
      "machen an"
    ],
    "perfekt": "hat angemacht",
    "praeteritum": "machte an"
  },
  {
    "inf": "ausmachen",
    "en": "to switch off",
    "ur": "بند کرنا",
    "type": "separable",
    "present": [
      "mache aus",
      "machst aus",
      "macht aus",
      "machen aus",
      "macht aus",
      "machen aus"
    ],
    "perfekt": "hat ausgemacht",
    "praeteritum": "machte aus"
  },
  {
    "inf": "aufwachen",
    "en": "to wake up",
    "ur": "جاگنا",
    "type": "separable",
    "present": [
      "wache auf",
      "wachst auf",
      "wacht auf",
      "wachen auf",
      "wacht auf",
      "wachen auf"
    ],
    "perfekt": "ist aufgewacht",
    "praeteritum": "wachte auf"
  },
  {
    "inf": "einschlafen",
    "en": "to fall asleep",
    "ur": "سو جانا",
    "type": "strong/separable",
    "present": [
      "schlafe ein",
      "schläfst ein",
      "schläft ein",
      "schlafen ein",
      "schlaft ein",
      "schlafen ein"
    ],
    "perfekt": "ist eingeschlafen",
    "praeteritum": "schlief ein"
  },
  {
    "inf": "annehmen",
    "en": "to accept / assume",
    "ur": "قبول کرنا",
    "type": "strong/separable",
    "present": [
      "nehme an",
      "nimmst an",
      "nimmt an",
      "nehmen an",
      "nehmt an",
      "nehmen an"
    ],
    "perfekt": "hat angenommen",
    "praeteritum": "nahm an"
  },
  {
    "inf": "teilnehmen",
    "en": "to participate",
    "ur": "حصہ لینا",
    "type": "strong/separable",
    "present": [
      "nehme teil",
      "nimmst teil",
      "nimmt teil",
      "nehmen teil",
      "nehmt teil",
      "nehmen teil"
    ],
    "perfekt": "hat teilgenommen",
    "praeteritum": "nahm teil"
  },
  {
    "inf": "passieren",
    "en": "to happen",
    "ur": "واقع ہونا",
    "type": "regular",
    "present": [
      "passiere",
      "passierst",
      "passiert",
      "passieren",
      "passiert",
      "passieren"
    ],
    "perfekt": "ist passiert",
    "praeteritum": "passierte"
  },
  {
    "inf": "fehlen",
    "en": "to be missing / absent",
    "ur": "غائب ہونا / کمی ہونا",
    "type": "regular",
    "present": [
      "fehle",
      "fehlst",
      "fehlt",
      "fehlen",
      "fehlt",
      "fehlen"
    ],
    "perfekt": "hat gefehlt",
    "praeteritum": "fehlte"
  },
  {
    "inf": "gefallen",
    "en": "to please / be liked",
    "ur": "پسند آنا",
    "type": "strong",
    "present": [
      "gefalle",
      "gefällst",
      "gefällt",
      "gefallen",
      "gefallt",
      "gefallen"
    ],
    "perfekt": "hat gefallen",
    "praeteritum": "gefiel"
  },
  {
    "inf": "schmecken",
    "en": "to taste",
    "ur": "ذائقہ لگنا",
    "type": "regular",
    "present": [
      "schmecke",
      "schmeckst",
      "schmeckt",
      "schmecken",
      "schmeckt",
      "schmecken"
    ],
    "perfekt": "hat geschmeckt",
    "praeteritum": "schmeckte"
  },
  {
    "inf": "riechen",
    "en": "to smell",
    "ur": "سونگھنا / خوشبو آنا",
    "type": "strong",
    "present": [
      "rieche",
      "riechst",
      "riecht",
      "riechen",
      "riecht",
      "riechen"
    ],
    "perfekt": "hat gerochen",
    "praeteritum": "roch"
  },
  {
    "inf": "fühlen",
    "en": "to feel",
    "ur": "محسوس کرنا",
    "type": "regular",
    "present": [
      "fühle",
      "fühlst",
      "fühlt",
      "fühlen",
      "fühlt",
      "fühlen"
    ],
    "perfekt": "hat gefühlt",
    "praeteritum": "fühlte"
  },
  {
    "inf": "regnen",
    "en": "to rain",
    "ur": "بارش ہونا",
    "type": "regular",
    "present": [
      "regne",
      "regnest",
      "regnet",
      "regnen",
      "regnet",
      "regnen"
    ],
    "perfekt": "hat geregnet",
    "praeteritum": "regnete"
  },
  {
    "inf": "scheinen",
    "en": "to shine / seem",
    "ur": "چمکنا / معلوم ہونا",
    "type": "strong",
    "present": [
      "scheine",
      "scheinst",
      "scheint",
      "scheinen",
      "scheint",
      "scheinen"
    ],
    "perfekt": "hat geschienen",
    "praeteritum": "schien"
  },
  {
    "inf": "dauern",
    "en": "to last / take time",
    "ur": "مدت ہونا",
    "type": "regular",
    "present": [
      "dauere",
      "dauerst",
      "dauert",
      "dauern",
      "dauert",
      "dauern"
    ],
    "perfekt": "hat gedauert",
    "praeteritum": "dauerte"
  },
  {
    "inf": "kosten",
    "en": "to cost",
    "ur": "قیمت ہونا",
    "type": "regular",
    "present": [
      "koste",
      "kostest",
      "kostet",
      "kosten",
      "kostet",
      "kosten"
    ],
    "perfekt": "hat gekostet",
    "praeteritum": "kostete"
  },
  {
    "inf": "mieten",
    "en": "to rent",
    "ur": "کرائے پر لینا",
    "type": "regular",
    "present": [
      "miete",
      "mietest",
      "mietet",
      "mieten",
      "mietet",
      "mieten"
    ],
    "perfekt": "hat gemietet",
    "praeteritum": "mietete"
  },
  {
    "inf": "vermieten",
    "en": "to rent out",
    "ur": "کرائے پر دینا",
    "type": "regular",
    "present": [
      "vermiete",
      "vermietest",
      "vermietet",
      "vermieten",
      "vermietet",
      "vermieten"
    ],
    "perfekt": "hat vermietet",
    "praeteritum": "vermietete"
  },
  {
    "inf": "bestellen",
    "en": "to order",
    "ur": "آرڈر کرنا",
    "type": "regular",
    "present": [
      "bestelle",
      "bestellst",
      "bestellt",
      "bestellen",
      "bestellt",
      "bestellen"
    ],
    "perfekt": "hat bestellt",
    "praeteritum": "bestellte"
  },
  {
    "inf": "reservieren",
    "en": "to reserve",
    "ur": "ریزرو کرنا",
    "type": "regular",
    "present": [
      "reserviere",
      "reservierst",
      "reserviert",
      "reservieren",
      "reserviert",
      "reservieren"
    ],
    "perfekt": "hat reserviert",
    "praeteritum": "reservierte"
  },
  {
    "inf": "probieren",
    "en": "to try / taste",
    "ur": "آزمانا / چکھنا",
    "type": "regular",
    "present": [
      "probiere",
      "probierst",
      "probiert",
      "probieren",
      "probiert",
      "probieren"
    ],
    "perfekt": "hat probiert",
    "praeteritum": "probierte"
  },
  {
    "inf": "empfangen",
    "en": "to receive / welcome",
    "ur": "وصول کرنا / استقبال کرنا",
    "type": "strong",
    "present": [
      "empfange",
      "empfängst",
      "empfängt",
      "empfangen",
      "empfangt",
      "empfangen"
    ],
    "perfekt": "hat empfangen",
    "praeteritum": "empfing"
  },
  {
    "inf": "bitten",
    "en": "to request / ask",
    "ur": "درخواست کرنا",
    "type": "strong",
    "present": [
      "bitte",
      "bittest",
      "bittet",
      "bitten",
      "bittet",
      "bitten"
    ],
    "perfekt": "hat gebeten",
    "praeteritum": "bat"
  },
  {
    "inf": "versuchen",
    "en": "to try / attempt",
    "ur": "کوشش کرنا",
    "type": "regular",
    "present": [
      "versuche",
      "versuchst",
      "versucht",
      "versuchen",
      "versucht",
      "versuchen"
    ],
    "perfekt": "hat versucht",
    "praeteritum": "versuchte"
  },
  {
    "inf": "erlauben",
    "en": "to allow",
    "ur": "اجازت دینا",
    "type": "regular",
    "present": [
      "erlaube",
      "erlaubst",
      "erlaubt",
      "erlauben",
      "erlaubt",
      "erlauben"
    ],
    "perfekt": "hat erlaubt",
    "praeteritum": "erlaubte"
  },
  {
    "inf": "verbieten",
    "en": "to forbid",
    "ur": "منع کرنا",
    "type": "strong",
    "present": [
      "verbiete",
      "verbietest",
      "verbietet",
      "verbieten",
      "verbietet",
      "verbieten"
    ],
    "perfekt": "hat verboten",
    "praeteritum": "verbot"
  },
  {
    "inf": "erinnern",
    "en": "to remind / remember",
    "ur": "یاد دلانا / یاد کرنا",
    "type": "regular",
    "present": [
      "erinnere",
      "erinnerst",
      "erinnert",
      "erinnern",
      "erinnert",
      "erinnern"
    ],
    "perfekt": "hat erinnert",
    "praeteritum": "erinnerte"
  },
  {
    "inf": "anmelden",
    "en": "to register",
    "ur": "رجسٹر کرنا",
    "type": "separable",
    "present": [
      "melde an",
      "meldest an",
      "meldet an",
      "melden an",
      "meldet an",
      "melden an"
    ],
    "perfekt": "hat angemeldet",
    "praeteritum": "meldete an"
  },
  {
    "inf": "vorbereiten",
    "en": "to prepare",
    "ur": "تیاری کرنا",
    "type": "separable",
    "present": [
      "bereite vor",
      "bereitest vor",
      "bereitet vor",
      "bereiten vor",
      "bereitet vor",
      "bereiten vor"
    ],
    "perfekt": "hat vorbereitet",
    "praeteritum": "bereitete vor"
  },
  {
    "inf": "aufpassen",
    "en": "to pay attention / look after",
    "ur": "دھیان دینا / خیال رکھنا",
    "type": "separable",
    "present": [
      "passe auf",
      "passt auf",
      "passt auf",
      "passen auf",
      "passt auf",
      "passen auf"
    ],
    "perfekt": "hat aufgepasst",
    "praeteritum": "passte auf"
  },
  {
    "inf": "umziehen",
    "en": "to move house / change clothes",
    "ur": "گھر بدلنا / کپڑے بدلنا",
    "type": "strong/separable",
    "present": [
      "ziehe um",
      "ziehst um",
      "zieht um",
      "ziehen um",
      "zieht um",
      "ziehen um"
    ],
    "perfekt": "ist umgezogen",
    "praeteritum": "zog um"
  },
  {
    "inf": "anziehen",
    "en": "to put on (clothes)",
    "ur": "کپڑے پہننا",
    "type": "strong/separable",
    "present": [
      "ziehe an",
      "ziehst an",
      "zieht an",
      "ziehen an",
      "zieht an",
      "ziehen an"
    ],
    "perfekt": "hat angezogen",
    "praeteritum": "zog an"
  },
  {
    "inf": "ausziehen",
    "en": "to take off clothes / move out",
    "ur": "کپڑے اتارنا / گھر چھوڑنا",
    "type": "strong/separable",
    "present": [
      "ziehe aus",
      "ziehst aus",
      "zieht aus",
      "ziehen aus",
      "zieht aus",
      "ziehen aus"
    ],
    "perfekt": "hat ausgezogen",
    "praeteritum": "zog aus"
  },
  {
    "inf": "duschen",
    "en": "to shower",
    "ur": "شاور لینا",
    "type": "regular",
    "present": [
      "dusche",
      "duschst",
      "duscht",
      "duschen",
      "duscht",
      "duschen"
    ],
    "perfekt": "hat geduscht",
    "praeteritum": "duschte"
  },
  {
    "inf": "baden",
    "en": "to bathe",
    "ur": "نہانا",
    "type": "regular",
    "present": [
      "bade",
      "badest",
      "badet",
      "baden",
      "badet",
      "baden"
    ],
    "perfekt": "hat gebadet",
    "praeteritum": "badete"
  },
  {
    "inf": "rasieren",
    "en": "to shave",
    "ur": "شیو کرنا",
    "type": "regular",
    "present": [
      "rasiere",
      "rasierst",
      "rasiert",
      "rasieren",
      "rasiert",
      "rasieren"
    ],
    "perfekt": "hat rasiert",
    "praeteritum": "rasierte"
  },
  {
    "inf": "erkennen",
    "en": "to recognize",
    "ur": "پہچاننا",
    "type": "strong",
    "present": [
      "erkenne",
      "erkennst",
      "erkennt",
      "erkennen",
      "erkennt",
      "erkennen"
    ],
    "perfekt": "hat erkannt",
    "praeteritum": "erkannte"
  },
  {
    "inf": "sterben",
    "en": "to die",
    "ur": "مرنا",
    "type": "strong",
    "present": [
      "sterbe",
      "stirbst",
      "stirbt",
      "sterben",
      "sterbt",
      "sterben"
    ],
    "perfekt": "ist gestorben",
    "praeteritum": "starb"
  },
  {
    "inf": "werfen",
    "en": "to throw",
    "ur": "پھینکنا",
    "type": "strong",
    "present": [
      "werfe",
      "wirfst",
      "wirft",
      "werfen",
      "werft",
      "werfen"
    ],
    "perfekt": "hat geworfen",
    "praeteritum": "warf"
  },
  {
    "inf": "schlagen",
    "en": "to hit / beat",
    "ur": "مارنا",
    "type": "strong",
    "present": [
      "schlage",
      "schlägst",
      "schlägt",
      "schlagen",
      "schlagt",
      "schlagen"
    ],
    "perfekt": "hat geschlagen",
    "praeteritum": "schlug"
  },
  {
    "inf": "beißen",
    "en": "to bite",
    "ur": "کاٹنا",
    "type": "strong",
    "present": [
      "beiße",
      "beißt",
      "beißt",
      "beißen",
      "beißt",
      "beißen"
    ],
    "perfekt": "hat gebissen",
    "praeteritum": "biss"
  },
  {
    "inf": "brennen",
    "en": "to burn",
    "ur": "جلنا",
    "type": "mixed",
    "present": [
      "brenne",
      "brennst",
      "brennt",
      "brennen",
      "brennt",
      "brennen"
    ],
    "perfekt": "hat gebrannt",
    "praeteritum": "brannte"
  },
  {
    "inf": "kennenlernen",
    "en": "to get to know / meet",
    "ur": "جان پہچان ہونا",
    "type": "separable",
    "present": [
      "lerne kennen",
      "lernst kennen",
      "lernt kennen",
      "lernen kennen",
      "lernt kennen",
      "lernen kennen"
    ],
    "perfekt": "hat kennengelernt",
    "praeteritum": "lernte kennen"
  },
  {
    "inf": "aufgeben",
    "en": "to give up / hand in",
    "ur": "ہار ماننا / جمع کرانا",
    "type": "strong/separable",
    "present": [
      "gebe auf",
      "gibst auf",
      "gibt auf",
      "geben auf",
      "gebt auf",
      "geben auf"
    ],
    "perfekt": "hat aufgegeben",
    "praeteritum": "gab auf"
  },
  {
    "inf": "zurückkommen",
    "en": "to come back",
    "ur": "واپس آنا",
    "type": "strong/separable",
    "present": [
      "komme zurück",
      "kommst zurück",
      "kommt zurück",
      "kommen zurück",
      "kommt zurück",
      "kommen zurück"
    ],
    "perfekt": "ist zurückgekommen",
    "praeteritum": "kam zurück"
  },
  {
    "inf": "mitkommen",
    "en": "to come along",
    "ur": "ساتھ آنا",
    "type": "strong/separable",
    "present": [
      "komme mit",
      "kommst mit",
      "kommt mit",
      "kommen mit",
      "kommt mit",
      "kommen mit"
    ],
    "perfekt": "ist mitgekommen",
    "praeteritum": "kam mit"
  },
  {
    "inf": "weggehen",
    "en": "to go away",
    "ur": "چلے جانا",
    "type": "strong/separable",
    "present": [
      "gehe weg",
      "gehst weg",
      "geht weg",
      "gehen weg",
      "geht weg",
      "gehen weg"
    ],
    "perfekt": "ist weggegangen",
    "praeteritum": "ging weg"
  },
  {
    "inf": "zurückgeben",
    "en": "to give back",
    "ur": "واپس دینا",
    "type": "strong/separable",
    "present": [
      "gebe zurück",
      "gibst zurück",
      "gibt zurück",
      "geben zurück",
      "gebt zurück",
      "geben zurück"
    ],
    "perfekt": "hat zurückgegeben",
    "praeteritum": "gab zurück"
  },
  {
    "inf": "ausfüllen",
    "en": "to fill in / complete",
    "ur": "فارم بھرنا",
    "type": "separable",
    "present": [
      "fülle aus",
      "füllst aus",
      "füllt aus",
      "füllen aus",
      "füllt aus",
      "füllen aus"
    ],
    "perfekt": "hat ausgefüllt",
    "praeteritum": "füllte aus"
  },
  {
    "inf": "unterschreiben",
    "en": "to sign",
    "ur": "دستخط کرنا",
    "type": "strong",
    "present": [
      "unterschreibe",
      "unterschreibst",
      "unterschreibt",
      "unterschreiben",
      "unterschreibt",
      "unterschreiben"
    ],
    "perfekt": "hat unterschrieben",
    "praeteritum": "unterschrieb"
  },
  {
    "inf": "sparen",
    "en": "to save money",
    "ur": "پیسے بچانا",
    "type": "regular",
    "present": [
      "spare",
      "sparst",
      "spart",
      "sparen",
      "spart",
      "sparen"
    ],
    "perfekt": "hat gespart",
    "praeteritum": "sparte"
  },
  {
    "inf": "verdienen",
    "en": "to earn",
    "ur": "کمانا",
    "type": "regular",
    "present": [
      "verdiene",
      "verdienst",
      "verdient",
      "verdienen",
      "verdient",
      "verdienen"
    ],
    "perfekt": "hat verdient",
    "praeteritum": "verdiente"
  },
  {
    "inf": "übernachten",
    "en": "to stay overnight",
    "ur": "رات گزارنا",
    "type": "regular",
    "present": [
      "übernachte",
      "übernachtest",
      "übernachtet",
      "übernachten",
      "übernachtet",
      "übernachten"
    ],
    "perfekt": "hat übernachtet",
    "praeteritum": "übernachtete"
  },
  {
    "inf": "abholen",
    "en": "to pick up",
    "ur": "لےنے جانا",
    "type": "separable",
    "present": [
      "hole ab",
      "holst ab",
      "holt ab",
      "holen ab",
      "holt ab",
      "holen ab"
    ],
    "perfekt": "hat abgeholt",
    "praeteritum": "holte ab"
  },
  {
    "inf": "folgen",
    "en": "to follow",
    "ur": "پیروی کرنا",
    "type": "regular",
    "present": [
      "folge",
      "folgst",
      "folgt",
      "folgen",
      "folgt",
      "folgen"
    ],
    "perfekt": "ist gefolgt",
    "praeteritum": "folgte"
  },
  {
    "inf": "gehören",
    "en": "to belong to",
    "ur": "تعلق ہونا",
    "type": "regular",
    "present": [
      "gehöre",
      "gehörst",
      "gehört",
      "gehören",
      "gehört",
      "gehören"
    ],
    "perfekt": "hat gehört",
    "praeteritum": "gehörte"
  },
  {
    "inf": "empfinden",
    "en": "to feel / perceive",
    "ur": "محسوس کرنا",
    "type": "strong",
    "present": [
      "empfinde",
      "empfindest",
      "empfindet",
      "empfinden",
      "empfindet",
      "empfinden"
    ],
    "perfekt": "hat empfunden",
    "praeteritum": "empfand"
  }
];

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
