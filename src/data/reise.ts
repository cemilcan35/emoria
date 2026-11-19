// Texte der Seite "Yubuus Reise zur Erde". Deutsch, Englisch und Türkisch.
// TODO Prüfung: Die türkischen Texte von einer Muttersprachlerin oder einem Muttersprachler gegenlesen lassen.

export interface ReiseStrings {
  lang: string;
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  labels: [string, string, string, string];
  alts: [string, string, string, string];
  p1: string;
  p2: string;
  p3: string;
  frage: string;
  p4: string;
  p5: string;
  p6: string;
  p7: string;
  p8: string;
  finale: string;
  cta: string;
}

const DE: ReiseStrings = {
  lang: 'de',
  metaTitle: 'Yubuus Reise zur Erde — EMORIA',
  metaDesc: 'Wie Yubuu von Lumoria zur Erde kam und warum die Kinder Yubuu etwas über Gefühle beibringen können.',
  eyebrow: 'Yubuus Geschichte',
  h1: 'Yubuus Reise zur Erde 🚀',
  labels: ['Auf Lumoria', 'Die Frage', 'Die Reise', 'Auf der Erde'],
  alts: [
    'Yubuu steht auf dem Planeten Lumoria und schaut in den Sternenhimmel.',
    'Yubuu schaut mit einem Fernrohr über Sternenkarten.',
    'Yubuu fliegt in einer Rakete durchs Universum.',
    'Yubuu fliegt in der Rakete durch das Universum, vor Yubuu leuchtet die Erde zwischen vielen Planeten.',
  ],
  p1: '<strong>EMORIA</strong> ist ein geheimnisvolles Universum voller unterschiedlicher Planeten. Einer davon ist die Erde. Weit entfernt von ihr liegt ein anderer Planet: <strong>Lumoria</strong>. Dort lebt Yubuu, ein kleines, neugieriges Wesen mit vier besonderen Antennen.',
  p2: 'Auf Lumoria zeigen die Antennen, wie sich die Bewohner fühlen. Wenn sie glücklich, traurig, wütend oder ängstlich sind, beginnen ihre Antennen in unterschiedlichen Farben zu leuchten.',
  p3: 'Doch eines Tages stellt sich Yubuu eine spannende Frage:',
  frage: '„Wie zeigen eigentlich andere Wesen ihre Gefühle?“',
  p4: 'Neugierig steigt Yubuu allein in die Rakete und macht sich auf eine Reise durch das Universum. Aus weiter Ferne entdeckt Yubuu plötzlich einen Planeten namens Erde. Neugierig wird Yubuu immer schneller und fliegt direkt auf diesen Planeten zu. Schließlich landet Yubuu auf der Erde …',
  p5: 'Dort entdeckt Yubuu etwas Erstaunliches: <strong>Die Menschen haben gar keine Antennen! Häää???</strong>',
  p6: 'Wie kann man dann erkennen, ob jemand glücklich, traurig, wütend oder ängstlich ist?',
  p7: 'Yubuu beobachtet, dass Menschen lachen, weinen, sprechen oder manchmal ganz still oder ganz laut werden. Überall gibt es Unterschiede. Doch schnell merkt Yubuu: Nicht jeder Mensch zeigt seine Gefühle auf die gleiche Weise. Und manchmal kann man von außen gar nicht erkennen, wie sich jemand wirklich fühlt.',
  p8: 'Deshalb möchte Yubuu von den Kindern auf der Erde lernen, wie sie und andere Menschen ihre Gefühle ausdrücken. Gemeinsam mit ihnen will Yubuu Gefühle entdecken, darüber sprechen und herausfinden, was Menschen in unterschiedlichen Situationen brauchen.',
  finale: '<strong>Und genau hier beginnt das Abenteuer von EMORIA, denn jedes Kind hat etwas, das es Yubuu über Gefühle beibringen kann.</strong>',
  cta: 'So wird Yubuus Gefühlsrad gespielt',
};

const EN: ReiseStrings = {
  lang: 'en',
  metaTitle: "Yubuu's Journey to Earth — EMORIA",
  metaDesc: 'How Yubuu travelled from Lumoria to Earth and why children can teach Yubuu about feelings.',
  eyebrow: "Yubuu's story",
  h1: "Yubuu's Journey to Earth 🚀",
  labels: ['On Lumoria', 'The question', 'The journey', 'On Earth'],
  alts: [
    'Yubuu stands on the planet Lumoria and looks up at the starry sky.',
    'Yubuu looks through a telescope over star charts.',
    'Yubuu flies through the universe in a rocket.',
    'Yubuu flies through the universe in a rocket, with Earth shining ahead among many planets.',
  ],
  p1: '<strong>EMORIA</strong> is a mysterious universe full of different planets. One of them is Earth. Far away from it lies another planet: <strong>Lumoria</strong>. That is where Yubuu lives, a small, curious being with four special antennas.',
  p2: 'On Lumoria, the antennas show how the inhabitants feel. When they are happy, sad, angry or afraid, their antennas begin to glow in different colours.',
  p3: 'But one day, Yubuu asks an exciting question:',
  frage: '“How do other beings actually show their feelings?”',
  p4: 'Curious, Yubuu climbs into the rocket alone and sets off on a journey through the universe. From far away, Yubuu suddenly spots a planet called Earth. Curious, Yubuu flies faster and faster, straight towards it. Finally, Yubuu lands on Earth …',
  p5: 'There, Yubuu discovers something astonishing: <strong>People have no antennas at all! Huh???</strong>',
  p6: 'How can you tell, then, whether someone is happy, sad, angry or afraid?',
  p7: 'Yubuu observes that people laugh, cry, talk, or sometimes go very quiet or very loud. There are differences everywhere. But Yubuu quickly realises: not every person shows their feelings in the same way. And sometimes you cannot tell from the outside how someone really feels.',
  p8: 'That is why Yubuu wants to learn from the children on Earth how they and other people express their feelings. Together with them, Yubuu wants to discover feelings, talk about them and find out what people need in different situations.',
  finale: '<strong>And this is exactly where the adventure of EMORIA begins, because every child has something to teach Yubuu about feelings.</strong>',
  cta: "How Yubuu's Feeling Wheel is played",
};

const TR: ReiseStrings = {
  lang: 'tr',
  metaTitle: "Yubuu'nun Dünya'ya Yolculuğu — EMORIA",
  metaDesc: "Yubuu Lumoria'dan Dünya'ya nasıl geldi ve çocuklar Yubuu'ya duygular hakkında neden bir şeyler öğretebilir.",
  eyebrow: "Yubuu'nun hikâyesi",
  h1: "Yubuu'nun Dünya'ya Yolculuğu 🚀",
  labels: ["Lumoria'da", 'Soru', 'Yolculuk', "Dünya'da"],
  alts: [
    "Yubuu Lumoria gezegeninde duruyor ve yıldızlı gökyüzüne bakıyor.",
    'Yubuu bir teleskopla yıldız haritalarının üzerinden bakıyor.',
    'Yubuu bir roketle evrende uçuyor.',
    'Yubuu roketiyle evrende uçuyor; önünde Dünya, birçok gezegenin arasında parlıyor.',
  ],
  p1: "<strong>EMORIA</strong>, birbirinden farklı gezegenlerle dolu gizemli bir evrendir. Bu gezegenlerden biri Dünya'dır. Ondan çok uzakta başka bir gezegen yer alır: <strong>Lumoria</strong>. Yubuu orada yaşar; dört özel antenli, küçük ve meraklı bir varlıktır.",
  p2: "Lumoria'da antenler, sakinlerin nasıl hissettiğini gösterir. Mutlu, üzgün, kızgın ya da korkmuş olduklarında antenleri farklı renklerde parlamaya başlar.",
  p3: 'Ama bir gün Yubuu kendine heyecan verici bir soru sorar:',
  frage: '“Diğer varlıklar duygularını aslında nasıl gösteriyor?”',
  p4: "Meraklı Yubuu tek başına roketine biner ve evrende bir yolculuğa çıkar. Çok uzaklardan birdenbire Dünya adında bir gezegen görür. Yubuu merakla gitgide hızlanır ve doğruca bu gezegene doğru uçar. Sonunda Dünya'ya iner …",
  p5: 'Orada Yubuu şaşırtıcı bir şey keşfeder: <strong>İnsanların hiç anteni yok! Haaa???</strong>',
  p6: 'Peki o zaman birinin mutlu, üzgün, kızgın ya da korkmuş olduğunu nasıl anlayabilirsin?',
  p7: 'Yubuu, insanların güldüğünü, ağladığını, konuştuğunu ya da bazen çok sessiz ya da çok gürültülü olduğunu gözlemler. Her yerde farklılıklar var. Ama Yubuu çabucak fark eder: Her insan duygularını aynı şekilde göstermez. Ve bazen dışarıdan bakınca birinin gerçekte nasıl hissettiğini anlamak mümkün olmaz.',
  p8: "Bu yüzden Yubuu, Dünya'daki çocuklardan onların ve diğer insanların duygularını nasıl ifade ettiğini öğrenmek ister. Yubuu onlarla birlikte duyguları keşfetmek, bunlar hakkında konuşmak ve insanların farklı durumlarda neye ihtiyaç duyduğunu bulmak ister.",
  finale: "<strong>Ve EMORIA'nın macerası tam da burada başlıyor, çünkü her çocuğun Yubuu'ya duygular hakkında öğretebileceği bir şey var.</strong>",
  cta: "Yubuu'nun Duygu Çarkı nasıl oynanır",
};

export function getReise(lang: string): ReiseStrings {
  if (lang === 'en') return EN;
  if (lang === 'tr') return TR;
  return DE;
}
