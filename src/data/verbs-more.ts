import { V, type VerbConj } from './verbs-engine';

// Regular verbs: forms are generated automatically (pp = '' / pret = '' means auto)
const R = (inf: string, en: string, ur: string, pp = '', pret = '', aux: 'h' | 's' = 'h') =>
  V(inf, en, ur, 'regular', aux, pp, pret);

export const regularVerbs: VerbConj[] = [
  R('machen', 'to make / do', 'بنانا / کرنا'), R('lernen', 'to learn', 'سیکھنا'), R('wohnen', 'to live (reside)', 'رہنا'),
  R('arbeiten', 'to work', 'کام کرنا'), R('spielen', 'to play', 'کھیلنا / بجانا'), R('kaufen', 'to buy', 'خریدنا'),
  R('fragen', 'to ask', 'پوچھنا'), R('antworten', 'to answer', 'جواب دینا'), R('hören', 'to hear / listen', 'سننا'),
  R('brauchen', 'to need', 'ضرورت ہونا'), R('glauben', 'to believe / think', 'یقین کرنا / ماننا'),
  R('lieben', 'to love', 'محبت کرنا'), R('leben', 'to live (be alive)', 'زندہ رہنا / جینا'), R('suchen', 'to look for', 'تلاش کرنا'),
  R('zeigen', 'to show', 'دکھانا'), R('kochen', 'to cook', 'پکانا'), R('tanzen', 'to dance', 'ناچنا'),
  R('reisen', 'to travel', 'سفر کرنا', 'gereist', 'reiste', 's'), R('besuchen', 'to visit', 'ملنے جانا / دورہ کرنا', 'besucht', 'besuchte'),
  R('bezahlen', 'to pay', 'ادائیگی کرنا', 'bezahlt', 'bezahlte'), R('erklären', 'to explain', 'سمجھانا / وضاحت کرنا', 'erklärt', 'erklärte'),
  R('studieren', 'to study (at university)', 'یونیورسٹی میں پڑھنا', 'studiert', 'studierte'),
  R('telefonieren', 'to phone', 'فون پر بات کرنا', 'telefoniert', 'telefonierte'),
  R('reparieren', 'to repair', 'مرمت کرنا', 'repariert', 'reparierte'), R('probieren', 'to try / taste', 'آزمانا / چکھنا', 'probiert', 'probierte'),
  R('passieren', 'to happen', 'پیش آنا / ہونا', 'passiert', 'passierte', 's'),
  R('funktionieren', 'to work (function)', 'کام کرنا (مشین)', 'funktioniert', 'funktionierte'),
  R('kosten', 'to cost', 'قیمت ہونا'), R('warten', 'to wait', 'انتظار کرنا'), R('holen', 'to fetch / get', 'لانا / لے آنا'),
  R('legen', 'to lay / put (flat)', 'لٹانا / رکھنا (لیٹا کر)'), R('stellen', 'to put (upright)', 'کھڑا رکھنا'),
  R('setzen', 'to set / seat', 'بٹھانا / رکھنا'), R('öffnen', 'to open', 'کھولنا'), R('duschen', 'to shower', 'نہانا (شاور)'),
  R('baden', 'to bathe', 'نہانا'), R('lachen', 'to laugh', 'ہنسنا'), R('weinen', 'to cry', 'رونا'), R('träumen', 'to dream', 'خواب دیکھنا'),
  R('fehlen', 'to be missing', 'کمی ہونا / غیر حاضر ہونا'), R('feiern', 'to celebrate', 'جشن منانا'), R('danken', 'to thank', 'شکریہ ادا کرنا'),
  R('dauern', 'to last', 'جاری رہنا / لگنا (وقت)'), R('gehören', 'to belong to', 'تعلق ہونا / ملکیت ہونا', 'gehört', 'gehörte'),
  R('hoffen', 'to hope', 'امید کرنا'), R('mieten', 'to rent', 'کرائے پر لینا'), R('packen', 'to pack', 'سامان باندھنا'),
  R('planen', 'to plan', 'منصوبہ بنانا'), R('putzen', 'to clean', 'صاف کرنا'), R('rauchen', 'to smoke', 'سگریٹ پینا'),
  R('regnen', 'to rain', 'بارش ہونا'), R('schenken', 'to give (a gift)', 'تحفہ دینا'), R('schicken', 'to send', 'بھیجنا'),
  R('schmecken', 'to taste', 'ذائقہ ہونا'), R('stören', 'to disturb', 'تنگ کرنا'), R('übernachten', 'to stay overnight', 'رات گزارنا'),
  R('verkaufen', 'to sell', 'بیچنا', 'verkauft', 'verkaufte'), R('wählen', 'to choose / vote', 'منتخب کرنا'),
  R('wandern', 'to hike', 'پیدل سفر کرنا', 'gewandert', 'wanderte', 's'), R('zahlen', 'to pay', 'ادا کرنا'),
  R('zählen', 'to count', 'گننا'), R('erzählen', 'to tell (a story)', 'بتانا / قصہ سنانا', 'erzählt', 'erzählte'),
  R('erleben', 'to experience', 'تجربہ کرنا', 'erlebt', 'erlebte'), R('erlauben', 'to allow', 'اجازت دینا', 'erlaubt', 'erlaubte'),
  R('bestellen', 'to order', 'آرڈر دینا', 'bestellt', 'bestellte'), R('benutzen', 'to use', 'استعمال کرنا', 'benutzt', 'benutzte'),
  R('bedeuten', 'to mean', 'مطلب ہونا', 'bedeutet', 'bedeutete'), R('lösen', 'to solve', 'حل کرنا'),
  R('wünschen', 'to wish', 'خواہش کرنا'),
];

// Separable verbs: prefix goes to the end ("Ich stehe um 6 Uhr auf")
const S = (inf: string, pre: string, en: string, ur: string, aux: 'h' | 's', pp: string, pret: string, du?: string, er?: string) =>
  V(inf, en, ur, 'separable', aux, pp, pret, { pre, du, er });

export const separableVerbs: VerbConj[] = [
  S('aufstehen', 'auf', 'to get up', 'اٹھنا (بستر سے)', 's', 'aufgestanden', 'stand'),
  S('einkaufen', 'ein', 'to shop', 'خریداری کرنا', 'h', 'eingekauft', 'kaufte'),
  S('anrufen', 'an', 'to call (phone)', 'فون کرنا', 'h', 'angerufen', 'rief'),
  S('mitkommen', 'mit', 'to come along', 'ساتھ آنا', 's', 'mitgekommen', 'kam'),
  S('fernsehen', 'fern', 'to watch TV', 'ٹی وی دیکھنا', 'h', 'ferngesehen', 'sah', 'siehst', 'sieht'),
  S('aussteigen', 'aus', 'to get off', 'اترنا (گاڑی سے)', 's', 'ausgestiegen', 'stieg'),
  S('einsteigen', 'ein', 'to get on', 'سوار ہونا', 's', 'eingestiegen', 'stieg'),
  S('umsteigen', 'um', 'to change (trains)', 'گاڑی بدلنا', 's', 'umgestiegen', 'stieg'),
  S('abfahren', 'ab', 'to depart', 'روانہ ہونا', 's', 'abgefahren', 'fuhr', 'fährst', 'fährt'),
  S('ankommen', 'an', 'to arrive', 'پہنچنا', 's', 'angekommen', 'kam'),
  S('anfangen', 'an', 'to start', 'شروع کرنا', 'h', 'angefangen', 'fing', 'fängst', 'fängt'),
  S('aufmachen', 'auf', 'to open', 'کھولنا', 'h', 'aufgemacht', 'machte'),
  S('zumachen', 'zu', 'to close', 'بند کرنا', 'h', 'zugemacht', 'machte'),
  S('mitbringen', 'mit', 'to bring along', 'ساتھ لانا', 'h', 'mitgebracht', 'brachte'),
  S('aufräumen', 'auf', 'to tidy up', 'صفائی/ترتیب کرنا', 'h', 'aufgeräumt', 'räumte'),
  S('abholen', 'ab', 'to pick up', 'لینے جانا', 'h', 'abgeholt', 'holte'),
  S('anmelden', 'an', 'to register', 'رجسٹر کرنا', 'h', 'angemeldet', 'meldete'),
  S('ausfüllen', 'aus', 'to fill out', 'فارم بھرنا', 'h', 'ausgefüllt', 'füllte'),
  S('zurückkommen', 'zurück', 'to come back', 'واپس آنا', 's', 'zurückgekommen', 'kam'),
  S('ausgehen', 'aus', 'to go out', 'باہر جانا', 's', 'ausgegangen', 'ging'),
  S('aufhören', 'auf', 'to stop', 'رک جانا / ختم کرنا', 'h', 'aufgehört', 'hörte'),
  S('anziehen', 'an', 'to put on (clothes)', 'کپڑے پہننا', 'h', 'angezogen', 'zog'),
  S('ausziehen', 'aus', 'to take off / move out', 'اتارنا / مکان چھوڑنا', 'h', 'ausgezogen', 'zog'),
  S('einziehen', 'ein', 'to move in', 'نئے مکان میں آنا', 's', 'eingezogen', 'zog'),
  S('vorbereiten', 'vor', 'to prepare', 'تیاری کرنا', 'h', 'vorbereitet', 'bereitete'),
  S('weiterlernen', 'weiter', 'to keep learning', 'سیکھتے رہنا', 'h', 'weitergelernt', 'lernte'),
  S('nachfragen', 'nach', 'to ask again', 'دوبارہ پوچھنا', 'h', 'nachgefragt', 'fragte'),
  S('zuhören', 'zu', 'to listen to', 'غور سے سننا', 'h', 'zugehört', 'hörte'),
  S('stattfinden', 'statt', 'to take place', 'منعقد ہونا', 'h', 'stattgefunden', 'fand'),
  S('teilnehmen', 'teil', 'to take part', 'حصہ لینا', 'h', 'teilgenommen', 'nahm', 'nimmst', 'nimmt'),
  S('aufwachen', 'auf', 'to wake up', 'جاگنا', 's', 'aufgewacht', 'wachte'),
  S('einschlafen', 'ein', 'to fall asleep', 'نیند آ جانا', 's', 'eingeschlafen', 'schlief', 'schläfst', 'schläft'),
  S('abgeben', 'ab', 'to hand in', 'جمع کرانا', 'h', 'abgegeben', 'gab', 'gibst', 'gibt'),
  S('aussehen', 'aus', 'to look (appear)', 'دکھائی دینا', 'h', 'ausgesehen', 'sah', 'siehst', 'sieht'),
];

// Reflexive verbs: "Ich freue mich"
const F = (inf: string, en: string, ur: string, kind: 'reflexive', aux: 'h' | 's', pp: string, pret: string, du?: string, er?: string, pre?: string) =>
  V(inf, en, ur, kind, aux, pp, pret, { refl: true, du, er, pre });

export const reflexiveVerbs: VerbConj[] = [
  F('sich freuen', 'to be glad', 'خوش ہونا', 'reflexive', 'h', 'gefreut', 'freute'),
  F('sich waschen', 'to wash (oneself)', 'ہاتھ منہ دھونا', 'reflexive', 'h', 'gewaschen', 'wusch', 'wäschst', 'wäscht'),
  F('sich treffen', 'to meet (each other)', 'آپس میں ملنا', 'reflexive', 'h', 'getroffen', 'traf', 'triffst', 'trifft'),
  F('sich interessieren', 'to be interested', 'دلچسپی رکھنا', 'reflexive', 'h', 'interessiert', 'interessierte'),
  F('sich setzen', 'to sit down', 'بیٹھ جانا', 'reflexive', 'h', 'gesetzt', 'setzte'),
  F('sich fühlen', 'to feel', 'محسوس کرنا', 'reflexive', 'h', 'gefühlt', 'fühlte'),
  F('sich beeilen', 'to hurry', 'جلدی کرنا', 'reflexive', 'h', 'beeilt', 'beeilte'),
  F('sich erinnern', 'to remember', 'یاد کرنا / یاد آنا', 'reflexive', 'h', 'erinnert', 'erinnerte'),
  F('sich vorstellen', 'to introduce oneself', 'اپنا تعارف کرانا', 'reflexive', 'h', 'vorgestellt', 'stellte', undefined, undefined, 'vor'),
  F('sich ausruhen', 'to rest', 'آرام کرنا', 'reflexive', 'h', 'ausgeruht', 'ruhte', undefined, undefined, 'aus'),
  F('sich ärgern', 'to be annoyed', 'ناراض ہونا', 'reflexive', 'h', 'geärgert', 'ärgerte'),
  F('sich entschuldigen', 'to apologise', 'معذرت کرنا', 'reflexive', 'h', 'entschuldigt', 'entschuldigte'),
  F('sich verabschieden', 'to say goodbye', 'الوداع کہنا', 'reflexive', 'h', 'verabschiedet', 'verabschiedete'),
  F('sich kümmern', 'to take care of', 'خیال رکھنا', 'reflexive', 'h', 'gekümmert', 'kümmerte'),
];
