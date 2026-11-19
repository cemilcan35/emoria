// Texte der Startseite. Deutsch, Englisch und Türkisch sind gepflegt.
// TODO Prüfung: Die türkischen Texte wurden nicht von einer Muttersprachlerin oder einem Muttersprachler geprüft.

export type AudienceKey = 'kita' | 'schule' | 'logo' | 'psych' | 'eltern';

export interface HomeStrings {
  lang: string;
  code: string;
  htmlTitle: string;
  metaDesc: string;
  ogDesc: string;
  introAria: string;
  skip: string;
  brandAria: string;
  navAria: string;
  audience: string;
  audLabels: Record<AudienceKey, string>;
  audSubs: Record<AudienceKey, string>;
  about: string;
  emoria: string;
  contact: string;
  langAria: string;
  prep: string;
  heroTitle: string;
  heroSub: string;
  heroTag: string;
  rocketAria: string;
  meetEyebrow: string;
  meetTitle: string;
  meetVideoAria: string;
  meetStillAlt: string;
  speechAria: string;
  b1a: string;
  b1b: string;
  b2: string;
  b3: string;
  b4: string;
  meetCta: string;
  wheelEyebrow: string;
  wheelTitle: string;
  wheelBody: string;
  wheelCta: string;
  whyEyebrow: string;
  whyTitle: string;
  whyBody: string;
  whyAbout: string;
  whyContact: string;
  groupsEyebrow: string;
  groupsTitle: string;
  endTitle: string;
  endCta: string;
}

const DE: HomeStrings = {
  lang: 'de',
  code: 'DE',
  htmlTitle: 'EMORIA — Emotionales Lernen',
  metaDesc: 'EMORIA ist ein spielbasiertes System, das Kindern hilft, ihre Gefühle zu erkennen, zu benennen und darüber zu sprechen. Yubuus Gefühlsrad ist der Anfang.',
  ogDesc: 'Ein spielbasierter Weg für Kinder, ihre Gefühle zu erkennen, zu benennen und darüber zu sprechen.',
  introAria: 'Yubuu fliegt zur Erde',
  skip: 'Überspringen',
  brandAria: 'Zurück zum Anfang',
  navAria: 'Weitere Seiten',
  audience: 'Zielgruppe',
  audLabels: { kita: 'Kindergarten', schule: 'Schule', logo: 'Logopädie', psych: 'Kinderpsychologie', eltern: 'Eltern' },
  audSubs: { kita: 'Für Kitas und Vorschule', schule: 'Für die Grundschule', logo: 'Sprache und Gefühl', psych: 'Ein Zugang ohne Druck', eltern: 'Gespräche zu Hause' },
  about: 'Über uns',
  emoria: 'Über EMORIA',
  contact: 'Kontakt',
  langAria: 'Sprache wählen',
  prep: 'In Vorbereitung',
  heroTitle: 'Willkommen bei EMORIA',
  heroSub: 'Spielerisch soziale und emotionale Bildung.',
  heroTag: '✦ Gefühle verstehen. Gespräche beginnen. Kinder stärken.',
  rocketAria: 'Yubuu fliegt mit einer Rakete',
  meetEyebrow: 'Yubuu kennenlernen',
  meetTitle: 'Hallo! Ich bin Yubuu.',
  meetVideoAria: 'Yubuu läuft winkend ins Bild',
  meetStillAlt: 'Yubuu winkt freundlich',
  speechAria: 'Yubuu spricht',
  b1a: 'Ich komme von ',
  b1b: ', einem Planeten ganz weit weg. Bei uns haben alle Antennen, und die leuchten in einer anderen Farbe, je nachdem, wie man sich fühlt.',
  b2: 'So sieht jeder sofort, wie es den anderen geht. Ich wollte wissen, ob das auf anderen Planeten auch so ist, und bin losgereist.',
  b3: 'Jetzt bin ich auf der Erde und staune: Ihr habt gar keine Antennen!',
  b4: 'Wie zeigt ihr denn eure Gefühle? Und wie heißen sie? Das möchte ich von euch lernen.',
  meetCta: 'Kommst du mit auf meine Reise?',
  wheelEyebrow: 'Yubuus Gefühlsrad',
  wheelTitle: 'Was ist eigentlich Yubuus Gefühlsrad?',
  wheelBody: 'Ein Rad, zwölf Gefühle und ein neugieriger Gast von Lumoria. Schau dir an, wie es gespielt wird.',
  wheelCta: 'Spiel entdecken',
  whyEyebrow: 'Der Gedanke dahinter',
  whyTitle: 'Warum EMORIA?',
  whyBody: 'Über Gefühle zu sprechen ist eine erlernbare Fähigkeit. EMORIA macht emotionales Lernen zum Spiel: ohne richtige oder falsche Antworten, gestützt auf zehn Jahre Praxis und aktuelle Forschung.',
  whyAbout: 'Über uns →',
  whyContact: 'Kontakt aufnehmen →',
  groupsEyebrow: 'Zielgruppe',
  groupsTitle: 'Für wen ist EMORIA?',
  endTitle: 'Bring EMORIA in deine Kita oder Praxis.',
  endCta: 'Kontakt aufnehmen',
};

const EN: HomeStrings = {
  lang: 'en',
  code: 'EN',
  htmlTitle: 'EMORIA — Emotional Learning',
  metaDesc: "EMORIA is a play-based system that helps children recognise, name and talk about their feelings. Yubuu's Feeling Wheel is where it begins.",
  ogDesc: 'A play-based way for children to recognise, name and talk about their feelings.',
  introAria: 'Yubuu flying to Earth',
  skip: 'Skip',
  brandAria: 'Back to the start',
  navAria: 'More pages',
  audience: 'Who it is for',
  audLabels: { kita: 'Kindergarten', schule: 'School', logo: 'Speech therapy', psych: 'Child psychology', eltern: 'Parents' },
  audSubs: { kita: 'For kindergartens and preschool', schule: 'For primary school', logo: 'Language and feeling', psych: 'An approach without pressure', eltern: 'Conversations at home' },
  about: 'About us',
  emoria: 'About EMORIA',
  contact: 'Contact',
  langAria: 'Choose language',
  prep: 'Coming soon',
  heroTitle: 'Welcome to EMORIA',
  heroSub: 'Playful social and emotional learning.',
  heroTag: '✦ Understand feelings. Start conversations. Strengthen children.',
  rocketAria: 'Yubuu flying in a rocket',
  meetEyebrow: 'Meet Yubuu',
  meetTitle: "Hi! I'm Yubuu.",
  meetVideoAria: 'Yubuu walks into the picture, waving',
  meetStillAlt: 'Yubuu waving in a friendly way',
  speechAria: 'Yubuu is speaking',
  b1a: 'I come from ',
  b1b: ', a planet far, far away. Everyone there has antennas, and they glow in a different colour depending on how you feel.',
  b2: "So everyone can see right away how the others are feeling. I wanted to know whether it's the same on other planets, so I set off.",
  b3: "Now I'm on Earth and I'm amazed: you don't have any antennas!",
  b4: "So how do you show your feelings? And what are they called? I'd like to learn that from you.",
  meetCta: 'Will you come along on my journey?',
  wheelEyebrow: "Yubuu's Feeling Wheel",
  wheelTitle: "What exactly is Yubuu's Feeling Wheel?",
  wheelBody: 'A wheel, twelve feelings and a curious guest from Lumoria. Take a look at how it is played.',
  wheelCta: 'Discover the game',
  whyEyebrow: 'The idea behind it',
  whyTitle: 'Why EMORIA?',
  whyBody: 'Talking about feelings is a skill that can be learned. EMORIA turns emotional learning into a game: no right or wrong answers, based on ten years of practice and current research.',
  whyAbout: 'About us →',
  whyContact: 'Get in touch →',
  groupsEyebrow: 'Who it is for',
  groupsTitle: 'Who is EMORIA for?',
  endTitle: 'Bring EMORIA to your kindergarten or practice.',
  endCta: 'Get in touch',
};

const TR: HomeStrings = {
  lang: 'tr',
  code: 'TR',
  htmlTitle: 'EMORIA — Duygusal Öğrenme',
  metaDesc: "EMORIA, çocukların duygularını tanımasına, adlandırmasına ve bunlar hakkında konuşmasına yardımcı olan oyun tabanlı bir sistemdir. Yubuu'nun Duygu Çarkı başlangıcı.",
  ogDesc: 'Çocukların duygularını tanımasının, adlandırmasının ve bunlar hakkında konuşmasının oyunla öğrenilen bir yolu.',
  introAria: "Yubuu Dünya'ya uçuyor",
  skip: 'Geç',
  brandAria: 'Başa dön',
  navAria: 'Diğer sayfalar',
  audience: 'Hedef kitle',
  audLabels: { kita: 'Anaokulu', schule: 'Okul', logo: 'Dil ve konuşma terapisi', psych: 'Çocuk psikolojisi', eltern: 'Aileler' },
  audSubs: { kita: 'Anaokulları ve okul öncesi için', schule: 'İlkokul için', logo: 'Dil ve duygu', psych: 'Baskısız bir yaklaşım', eltern: 'Evde sohbetler' },
  about: 'Hakkımızda',
  emoria: 'EMORIA hakkında',
  contact: 'İletişim',
  langAria: 'Dil seçin',
  prep: 'Yakında',
  heroTitle: "EMORIA'ya Hoş Geldiniz",
  heroSub: 'Oyunla sosyal ve duygusal öğrenme.',
  heroTag: '✦ Duyguları anlamak. Sohbetleri başlatmak. Çocukları güçlendirmek.',
  rocketAria: 'Yubuu roketle uçuyor',
  meetEyebrow: "Yubuu'yu Tanı",
  meetTitle: 'Merhaba! Ben Yubuu.',
  meetVideoAria: 'Yubuu el sallayarak içeri yürüyor',
  meetStillAlt: 'Yubuu dostça el sallıyor',
  speechAria: 'Yubuu konuşuyor',
  b1a: 'Ben ',
  b1b: "'dan geliyorum, çok ama çok uzakta bir gezegenden. Bizde herkesin anteni var ve antenler, insanın nasıl hissettiğine göre farklı renklerde parlıyor.",
  b2: 'Böylece herkes diğerlerinin nasıl hissettiğini hemen görüyor. Başka gezegenlerde de böyle olup olmadığını merak ettim ve yola çıktım.',
  b3: 'Şimdi Dünya’dayım ve şaşırıyorum: Sizin hiç anteniniz yok!',
  b4: 'Peki duygularınızı nasıl gösteriyorsunuz? Ve adları ne? Bunu sizden öğrenmek istiyorum.',
  meetCta: 'Benimle yolculuğa çıkar mısın?',
  wheelEyebrow: "Yubuu'nun Duygu Çarkı",
  wheelTitle: "Yubuu'nun Duygu Çarkı aslında nedir?",
  wheelBody: "Bir çark, on iki duygu ve Lumoria'dan gelen meraklı bir misafir. Nasıl oynandığına bir göz at.",
  wheelCta: 'Oyunu keşfet',
  whyEyebrow: 'Arkasındaki düşünce',
  whyTitle: 'Neden EMORIA?',
  whyBody: 'Duygular hakkında konuşmak öğrenilebilir bir beceridir. EMORIA duygusal öğrenmeyi bir oyuna dönüştürür: doğru ya da yanlış cevap yok; on yıllık pratiğe ve güncel araştırmalara dayanır.',
  whyAbout: 'Hakkımızda →',
  whyContact: 'İletişime geçin →',
  groupsEyebrow: 'Hedef kitle',
  groupsTitle: 'EMORIA kimler için?',
  endTitle: "EMORIA'yı anaokulunuza veya kurumunuza taşıyın.",
  endCta: 'İletişime geçin',
};

export function getHome(lang: string): HomeStrings {
  if (lang === 'en') return EN;
  if (lang === 'tr') return TR;
  return DE;
}
