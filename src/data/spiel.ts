// Texte der Bildstrecke "So wird Yubuus Gefühlsrad gespielt".
// Deutsch, Englisch und Türkisch sind gepflegt. Für alle anderen Sprachen (FR, ...) gilt vorerst
// der deutsche Text.
// TODO Prüfung: Türkisch von einer Muttersprachlerin oder einem Muttersprachler gegenlesen lassen.
// TODO Übersetzung: FR bei Bedarf ergänzen.

export interface Station {
  image: string; // Dateiname in public/img/spielablauf/
  marke: string;
  heading: string;
  yubuu: string;
  text: string;
  alt: string;
}

export interface RingText {
  title: string; sub: string; hint: string; pause: string; play: string; prev: string; next: string;
  label: string; role: string; front: string;
}

export interface SpielContent {
  eyebrow: string;
  title: string;
  progressLabel: string;
  placeholder: string;
  stations: Station[];
  vorleseTitle: string;
  vorleseText: string;
  erlebTitle: string;
  erlebIntro: string;
  erlebItems: { marke: string; title: string; text: string }[];
  cta: string;
  ring: RingText;
}

import { IMAGES } from './spielImages';
import * as fr from './i18n/fr';
import * as es from './i18n/es';
import * as da from './i18n/da';
import * as sv from './i18n/sv';
import * as no from './i18n/no';
import * as fi from './i18n/fi';
const OTHER: Record<string, { spiel: SpielContent }> = { fr, es, da, sv, no, fi };

const DE: SpielContent = {
  eyebrow: 'Spielablauf',
  title: 'So wird Yubuus Gefühlsrad gespielt',
  progressLabel: 'Stationen der Bildstrecke',
  placeholder: 'Platzhalter',
  stations: [
    {
      image: IMAGES[0],
      marke: 'Wer ist Yubuu?',
      heading: 'Yubuu kommt von Lumoria',
      yubuu: '„Hallo! Ich bin Yubuu. Ich komme von Lumoria, einem Planeten ganz weit weg.“',
      text: 'Yubuu ist neugierig und möchte wissen, wie andere Lebewesen fühlen und wie sie einander verstehen. Deshalb hat sich Yubuu auf den Weg gemacht, um andere Planeten zu entdecken.',
      alt: 'Yubuu steht auf dem Planeten Lumoria und schaut in den Sternenhimmel.',
    },
    {
      image: IMAGES[1],
      marke: 'Auf der Erde',
      heading: 'Yubuu möchte Gefühle verstehen',
      yubuu: '„Ihr Menschen habt so viele Gefühle! Wie heißen sie, und wie zeigt ihr sie?“',
      text: 'Auf der Erde sieht Yubuu Menschen lachen, weinen, staunen und wütend werden. Vieles daran ist für Yubuu neu: wie die Gefühle heißen, wie man sie im Gesicht erkennt und was man braucht, wenn man sie spürt. Das möchte Yubuu lernen, und zwar von den Kindern.',
      alt: 'Yubuu sitzt auf einem kleinen Asteroiden über der Erde, umgeben von Sprechblasen mit Gefühlsgesichtern.',
    },
    {
      image: IMAGES[2],
      marke: 'Der Einstieg',
      heading: 'Die Kinder helfen Yubuu',
      yubuu: '„Könnt ihr mir helfen? Ich habe ein Spiel mitgebracht.“',
      text: 'Die pädagogische Fachkraft spielt Yubuu mit der Handpuppe. Yubuu stellt sich vor und bittet die Kinder um Hilfe. Damit sind die Rollen klar: Die Kinder wissen etwas, Yubuu lernt. Gerade zurückhaltenden Kindern fällt es so leichter mitzumachen.',
      alt: 'Eine Fachkraft hält die Yubuu-Handpuppe, Kinder sitzen neugierig um einen Tisch.',
    },
    {
      image: IMAGES[3],
      marke: 'Schritt 1',
      heading: 'Das Gefühlsrad drehen',
      yubuu: '„Magst du drehen? Ich bin gespannt, welches Gefühl wir heute kennenlernen.“',
      text: 'Das Kind dreht das Gefühlsrad und nimmt den Magnetkopf ab, bei dem es stehen bleibt. Dieses Gefühl begleitet das Kind durch die ganze Runde. Wer mit dem Gefühl nicht spielen möchte, darf einmal neu drehen.',
      alt: 'Eine Kinderhand dreht das Gefühlsrad mit zwölf Magnetköpfen.',
    },
    {
      image: IMAGES[4],
      marke: 'Schritt 2',
      heading: 'Yubuu lernt das Gefühl kennen',
      yubuu: '„Oh, so sehe ich aus? Wie heißt dieses Gefühl?“',
      text: 'Jeder Magnetkopf zeigt Yubuus Gesicht mit einem Gefühl. Das Kind sagt Yubuu, wie das Gefühl heißt, macht das Gesicht vor und zeigt, wo man es im Körper spürt. Hier bringt das Kind Yubuu zum ersten Mal etwas bei.',
      alt: 'Ein Kind hält einen Magnetkopf hoch und macht das Gesicht nach, die Handpuppe schaut staunend zu.',
    },
    {
      image: IMAGES[5],
      marke: 'Schritt 3',
      heading: 'Die Fragekarten',
      yubuu: '„Wann hast du dich zuletzt so gefühlt?“',
      text: 'Das Kind zieht eine Fragekarte, in der Grundschule zwei bis drei. Die Fragen sind offen und passen zu jedem Gefühl. Yubuu hört zu, fragt nach und bewertet nichts. Jedes Kind darf jederzeit sagen: „Dazu möchte ich nichts sagen.“',
      alt: "Sechs Fragekarten, auf jeder Yubuu mit einer Frage zum Gefühl.",
    },
    {
      image: IMAGES[6],
      marke: 'Schritt 4',
      heading: 'Die Blitzkarten',
      yubuu: '„Passt mein Gefühl zu dieser Karte?“',
      text: 'Jetzt geht es schnell. Jede Blitzkarte beginnt mit „Wenn …“, zum Beispiel „Wenn es draußen donnert und blitzt …“. Das Kind legt den Magnetkopf auf Yubuus leeres Gesicht und entscheidet aus dem Bauch: passt oder passt nicht. Passende Karten behält es bis zum Schluss. Erzählen darf es, muss es aber nicht.',
      alt: 'Ein Kind legt einen Magnetkopf auf eine Blitzkarte, auf der Yubuu noch kein Gesicht hat.',
    },
    {
      image: IMAGES[7],
      marke: 'Schritt 5',
      heading: 'Die Situationskarten',
      yubuu: '„Bei welcher Karte könnte ich mich so fühlen?“',
      text: 'Vier Situationskarten liegen offen auf dem Tisch, zum Beispiel: Yubuus Eis fällt herunter. Das Kind sucht die Karte, die am besten zu seinem Gefühl passt. Passt keine, kommen vier neue dazu. Dann bekommt Yubuu auf der Karte das passende Gesicht, und alle überlegen gemeinsam, was Yubuu da erlebt.',
      alt: 'Vier Situationskarten liegen nebeneinander, ein Kind legt einen traurigen Magnetkopf auf die Karte mit dem heruntergefallenen Eis.',
    },
    {
      image: IMAGES[8],
      marke: 'Schritt 6',
      heading: 'Die Bedürfniskreise',
      yubuu: '„Was könnte ich jetzt brauchen?“',
      text: 'Das Kind wählt einen Bedürfniskreis, zum Beispiel Trost, Ruhe oder Freundschaft. Eine richtige Antwort gibt es nicht. Dann überlegen alle, was Yubuu konkret helfen könnte, etwa eine Umarmung oder jemand, der zuhört. Wer möchte, erzählt, was ihm selbst in so einem Moment hilft.',
      alt: "Vierzehn Bedürfniskreise mit kleinen Bildern, zum Beispiel Bewegen, Malen, Umarmung und Ruhe.",
    },
    {
      image: IMAGES[9],
      marke: 'Zum Schluss',
      heading: 'Was Yubuu heute gelernt hat',
      yubuu: '„Danke! Jetzt weiß ich viel mehr über dieses Gefühl.“',
      text: 'Das Kind legt alles zusammen: die Situationskarte mit dem Magnetkopf, den Bedürfniskreis und die behaltenen Blitzkarten. Yubuu fasst zusammen, was es gelernt hat, und bedankt sich. Die Kinder haben Yubuu geholfen und dabei ganz nebenbei über ihre eigenen Gefühle gesprochen.',
      alt: "Die magnetische Bedürfnistafel mit Platz für sechs Kinder.",
    },
  ],
  vorleseTitle: 'Bevor das Spiel beginnt',
  vorleseText: 'Vor dem Spielen liest die pädagogische Fachkraft den Kindern aus dem kleinen Vorlesebuch „Yubuus Reise zur Erde“ vor, das zum Spielset gehören wird. Die Geschichte ist speziell dafür gestaltet, die Neugier der Kinder zu wecken, eine Verbindung zu Yubuu aufzubauen und ihre Freude darauf zu steigern, Yubuu beim Entdecken der menschlichen Gefühlswelt zu helfen. Das Vorlesen kann im Morgenkreis, in einer Kleingruppe oder einzeln stattfinden.',
  erlebTitle: 'Was Kinder beim Spielen erleben',
  erlebIntro: 'Hinter jedem Schritt steckt ein kleiner Moment, den Kinder selbst erleben.',
  erlebItems: [
    { marke: 'Schritt 1', title: 'Gespannt sein', text: 'Das Rad dreht sich, und alle fragen sich: Welches Gefühl bleibt wohl stehen? Schon das Drehen weckt Neugier und Vorfreude.' },
    { marke: 'Schritt 2', title: 'Sich auskennen', text: 'Das Kind erklärt Yubuu sein Gefühl. Dabei merkt es: Ich weiß etwas, das Yubuu noch nicht weiß.' },
    { marke: 'Schritt 3', title: 'Gehört werden', text: 'Das Kind erzählt von eigenen Erlebnissen und erlebt, dass jemand ehrlich zuhört und nichts bewertet.' },
    { marke: 'Schritt 4', title: 'Aus dem Bauch entscheiden', text: 'Passt das Gefühl zur Karte oder nicht? Kinder lernen, auf ihr Gefühl zu hören und schnell zu entscheiden.' },
    { marke: 'Schritt 5', title: 'Sich hineinversetzen', text: 'Das Kind sucht eine Situation, in der Yubuu sich so fühlen könnte, und entdeckt, dass ein Gefühl viele Gründe haben kann.' },
    { marke: 'Schritt 6', title: 'Etwas finden, das hilft', text: 'Das Kind überlegt, was Yubuu jetzt guttun würde, und erfährt: Zu jedem Gefühl gibt es etwas, das helfen kann.' },
  ],
  cta: 'Kontakt aufnehmen',
  ring: { title: "Was brauchst du gerade?", sub: "Jedes Bedürfnis darf da sein.", hint: "Zum Drehen ziehen · Kreis antippen, um ihn nach vorne zu holen", pause: "Pause", play: "Drehen", prev: "Zurückdrehen", next: "Weiterdrehen", label: "Bedürfniskreise", role: "Karussell", front: "Vorne: " },
};

const EN: SpielContent = {
  eyebrow: 'How to play',
  title: "How Yubuu's Feeling Wheel is played",
  progressLabel: 'Stations of the picture story',
  placeholder: 'Placeholder',
  stations: [
    {
      image: IMAGES[0],
      marke: 'Who is Yubuu?',
      heading: 'Yubuu comes from Lumoria',
      yubuu: '“Hello! I\'m Yubuu. I come from a planet far, far away.”',
      text: 'Yubuu is curious and wants to know how other living beings feel and how they understand each other. That\'s why Yubuu set off to discover other planets.',
      alt: 'Yubuu stands on the planet Lumoria and looks up at the starry sky.',
    },
    {
      image: IMAGES[1],
      marke: 'On Earth',
      heading: 'Yubuu wants to understand feelings',
      yubuu: '“You humans have so many feelings! What are they called, and how do you show them?”',
      text: 'On Earth, Yubuu sees people laugh, cry, marvel and get angry. A lot of it is new to Yubuu: what the feelings are called, how you can recognise them in a face and what you need when you feel them. Yubuu wants to learn this, and from the children.',
      alt: 'Yubuu sits on a small asteroid above the Earth, surrounded by speech bubbles with feeling faces.',
    },
    {
      image: IMAGES[2],
      marke: 'Getting started',
      heading: 'The children help Yubuu',
      yubuu: '“Can you help me? I\'ve brought a game.”',
      text: 'The educator plays Yubuu with the hand puppet. Yubuu introduces themselves and asks the children for help. That makes the roles clear: the children know something, Yubuu is learning. This makes it easier to join in, especially for shy children.',
      alt: 'An educator holds the Yubuu hand puppet, children sit curiously around a table.',
    },
    {
      image: IMAGES[3],
      marke: 'Step 1',
      heading: 'Spinning the Feeling Wheel',
      yubuu: '“Would you like to spin? I\'m curious which feeling we\'ll get to know today.”',
      text: 'The child spins the Feeling Wheel and takes off the magnetic head where it stops. This feeling stays with the child for the whole round. Anyone who doesn\'t want to play with that feeling may spin once more.',
      alt: 'A child\'s hand spins the Feeling Wheel with twelve magnetic heads.',
    },
    {
      image: IMAGES[4],
      marke: 'Step 2',
      heading: 'Yubuu gets to know the feeling',
      yubuu: '“Oh, is that what I look like? What is this feeling called?”',
      text: 'Every magnetic head shows Yubuu\'s face with a feeling. The child tells Yubuu what the feeling is called, pulls the face and shows where you feel it in the body. This is the first time the child teaches Yubuu something.',
      alt: 'A child holds up a magnetic head and copies the face while the hand puppet watches in amazement.',
    },
    {
      image: IMAGES[5],
      marke: 'Step 3',
      heading: 'The question cards',
      yubuu: '“When did you last feel like this?”',
      text: 'The child draws a question card, two to three in primary school. The questions are open and fit every feeling. Yubuu listens, asks follow-up questions and judges nothing. Any child may say at any time: “I\'d rather not say anything about that.”',
      alt: "Six question cards, each showing Yubuu with a question about the feeling.",
    },
    {
      image: IMAGES[6],
      marke: 'Step 4',
      heading: 'The flash cards',
      yubuu: '“Does my feeling fit this card?”',
      text: 'Now it gets quick. Every flash card begins with “When …”, for example “When it thunders and lightning flashes outside …”. The child places the magnetic head on Yubuu\'s blank face and decides by gut feeling: fits or doesn\'t fit. Matching cards are kept until the end. The child may talk about it, but doesn\'t have to.',
      alt: 'A child places a magnetic head on a flash card on which Yubuu has no face yet.',
    },
    {
      image: IMAGES[7],
      marke: 'Step 5',
      heading: 'The situation cards',
      yubuu: '“Which card could make me feel like this?”',
      text: 'Four situation cards lie open on the table, for example: Yubuu\'s ice cream falls down. The child looks for the card that best fits their feeling. If none fits, four new ones are added. Then Yubuu gets the matching face on the card, and everyone thinks together about what Yubuu is going through.',
      alt: 'Four situation cards lie side by side, a child places a sad magnetic head on the card with the fallen ice cream.',
    },
    {
      image: IMAGES[8],
      marke: 'Step 6',
      heading: 'The needs circles',
      yubuu: '“What might I need right now?”',
      text: 'The child chooses a needs circle, for example comfort, calm or friendship. There is no right answer. Then everyone thinks about what could really help Yubuu, such as a hug or someone who listens. Whoever wants to can share what helps them in such a moment.',
      alt: "Fourteen needs circles with small pictures, for example moving, painting, a hug and quiet time.",
    },
    {
      image: IMAGES[9],
      marke: 'To finish',
      heading: 'What Yubuu learned today',
      yubuu: '“Thank you! Now I know much more about this feeling.”',
      text: 'The child puts everything together: the situation card with the magnetic head, the needs circle and the kept flash cards. Yubuu sums up what they have learned and says thank you. The children have helped Yubuu and, without noticing, talked about their own feelings.',
      alt: "The magnetic needs board with space for six children.",
    },
  ],
  vorleseTitle: 'Before the game begins',
  vorleseText: 'Before playing, the educator reads the children a story from the small read-aloud book “Yubuu\'s Journey to Earth”, which will be part of the game set. The story is designed to awaken the children\'s curiosity, build a connection to Yubuu and increase their joy in helping Yubuu discover the world of human feelings. The reading can take place in morning circle, in a small group or one to one.',
  erlebTitle: 'What children experience while playing',
  erlebIntro: 'Behind every step is a small moment that children experience for themselves.',
  erlebItems: [
    { marke: 'Step 1', title: 'Getting excited', text: 'The wheel spins and everyone wonders: Which feeling will it stop on? Even the spinning wakes curiosity and anticipation.' },
    { marke: 'Step 2', title: 'Knowing your way around', text: 'The child explains their feeling to Yubuu and notices: I know something Yubuu doesn\'t know yet.' },
    { marke: 'Step 3', title: 'Being heard', text: 'The child talks about their own experiences and finds that someone listens honestly and judges nothing.' },
    { marke: 'Step 4', title: 'Deciding from the gut', text: 'Does the feeling fit the card or not? Children learn to listen to their feelings and decide quickly.' },
    { marke: 'Step 5', title: 'Putting yourself in someone\'s shoes', text: 'The child looks for a situation in which Yubuu might feel this way and discovers that one feeling can have many reasons.' },
    { marke: 'Step 6', title: 'Finding something that helps', text: 'The child thinks about what would do Yubuu good right now and learns: for every feeling there is something that can help.' },
  ],
  cta: 'Get in touch',
  ring: { title: "What do you need right now?", sub: "Every need is allowed to be here.", hint: "Drag to spin · tap a circle to bring it to the front", pause: "Pause", play: "Spin", prev: "Spin back", next: "Spin forward", label: "Needs circles", role: "Carousel", front: "In front: " },
};

const TR: SpielContent = {
  eyebrow: 'Oyun akışı',
  title: "Yubuu'nun Duygu Çarkı nasıl oynanır",
  progressLabel: 'Görsel hikâyenin adımları',
  placeholder: 'Yer tutucu',
  stations: [
    {
      image: IMAGES[0],
      marke: 'Yubuu kim?',
      heading: "Yubuu Lumoria'dan geliyor",
      yubuu: "“Merhaba! Ben Yubuu. Lumoria'dan geliyorum, çok ama çok uzakta bir gezegenden.”",
      text: 'Yubuu meraklıdır ve diğer canlıların nasıl hissettiğini, birbirlerini nasıl anladıklarını bilmek ister. Bu yüzden Yubuu, başka gezegenleri keşfetmek için yola çıktı.',
      alt: "Yubuu Lumoria gezegeninde duruyor ve yıldızlı gökyüzüne bakıyor.",
    },
    {
      image: IMAGES[1],
      marke: "Dünya'da",
      heading: 'Yubuu duyguları anlamak istiyor',
      yubuu: '“Siz insanların ne çok duygusu var! Adları ne ve onları nasıl gösteriyorsunuz?”',
      text: "Dünya'da Yubuu insanların güldüğünü, ağladığını, şaşırdığını ve kızdığını görür. Bunların çoğu Yubuu için yenidir: duyguların adları, yüzde nasıl fark edildikleri ve onları hissederken neye ihtiyaç duyulduğu. Yubuu bunu öğrenmek ister, hem de çocuklardan.",
      alt: "Yubuu, Dünya'nın üzerinde küçük bir asteroidde oturuyor; etrafında duygu yüzleri olan konuşma balonları var.",
    },
    {
      image: IMAGES[2],
      marke: 'Başlangıç',
      heading: "Çocuklar Yubuu'ya yardım ediyor",
      yubuu: '“Bana yardım edebilir misiniz? Yanımda bir oyun getirdim.”',
      text: "Eğitimci, Yubuu'yu el kuklasıyla canlandırır. Yubuu kendini tanıtır ve çocuklardan yardım ister. Böylece roller netleşir: Çocuklar bir şey bilir, Yubuu öğrenir. Çekingen çocukların katılması da bu sayede kolaylaşır.",
      alt: 'Bir eğitimci Yubuu el kuklasını tutuyor, çocuklar merakla bir masanın etrafında oturuyor.',
    },
    {
      image: IMAGES[3],
      marke: '1. adım',
      heading: 'Duygu Çarkını çevirmek',
      yubuu: '“Çevirmek ister misin? Bugün hangi duyguyu tanıyacağımızı merak ediyorum.”',
      text: 'Çocuk Duygu Çarkını çevirir ve çarkın durduğu yerdeki mıknatıs kafayı alır. Bu duygu çocuğa tüm tur boyunca eşlik eder. O duyguyla oynamak istemeyen çocuk bir kez yeniden çevirebilir.',
      alt: 'Bir çocuk eli, on iki mıknatıs kafalı Duygu Çarkını çeviriyor.',
    },
    {
      image: IMAGES[4],
      marke: '2. adım',
      heading: 'Yubuu duyguyu tanıyor',
      yubuu: '“Oh, ben böyle mi görünüyorum? Bu duygunun adı ne?”',
      text: "Her mıknatıs kafa, Yubuu'nun bir duyguyla yüzünü gösterir. Çocuk Yubuu'ya duygunun adını söyler, yüzü taklit eder ve bedende nerede hissedildiğini gösterir. Burada çocuk Yubuu'ya ilk kez bir şey öğretir.",
      alt: 'Bir çocuk mıknatıs kafayı yukarı tutuyor ve yüzü taklit ediyor, el kuklası şaşkınlıkla izliyor.',
    },
    {
      image: IMAGES[5],
      marke: '3. adım',
      heading: 'Soru kartları',
      yubuu: '“En son ne zaman böyle hissettin?”',
      text: 'Çocuk bir soru kartı çeker; ilkokulda iki ya da üç tane. Sorular açıktır ve her duyguya uyar. Yubuu dinler, sorular sorar ve hiçbir şeyi değerlendirmez. Her çocuk her an şöyle diyebilir: “Bu konuda bir şey söylemek istemiyorum.”',
      alt: "Her birinde Yubuu ve duyguyla ilgili bir soru olan altı soru kartı.",
    },
    {
      image: IMAGES[6],
      marke: '4. adım',
      heading: 'Blitz kartları',
      yubuu: '“Duygum bu karta uyuyor mu?”',
      text: "Şimdi işler hızlanıyor. Her blitz kartı “Eğer …” ile başlar, örneğin “Dışarıda gök gürleyip şimşek çakarsa …”. Çocuk mıknatıs kafayı Yubuu'nun boş yüzüne koyar ve içinden gelerek karar verir: uyuyor ya da uymuyor. Uyan kartları sona kadar saklar. Anlatabilir, ama anlatmak zorunda değildir.",
      alt: "Bir çocuk mıknatıs kafayı, üzerinde Yubuu'nun henüz yüzü olmayan bir blitz kartına koyuyor.",
    },
    {
      image: IMAGES[7],
      marke: '5. adım',
      heading: 'Durum kartları',
      yubuu: '“Hangi kartta ben böyle hissedebilirim?”',
      text: "Masanın üzerinde dört durum kartı açık durur, örneğin: Yubuu'nun dondurması düşer. Çocuk, duygusuna en uygun kartı arar. Hiçbiri uymazsa dört yenisi eklenir. Sonra Yubuu karta uygun yüzünü alır ve herkes birlikte Yubuu'nun ne yaşadığını düşünür.",
      alt: 'Dört durum kartı yan yana duruyor, bir çocuk üzgün bir mıknatıs kafayı dondurması düşen kartın üzerine koyuyor.',
    },
    {
      image: IMAGES[8],
      marke: '6. adım',
      heading: 'İhtiyaç çemberleri',
      yubuu: '“Şimdi neye ihtiyacım olabilir?”',
      text: "Çocuk bir ihtiyaç çemberi seçer, örneğin teselli, huzur ya da arkadaşlık. Doğru bir cevap yoktur. Sonra herkes Yubuu'ya somut olarak neyin yardımcı olabileceğini düşünür, örneğin bir sarılma ya da dinleyen biri. İsteyen, böyle bir anda kendisine neyin iyi geldiğini anlatır.",
      alt: "Üzerinde küçük resimler olan on dört ihtiyaç çemberi, örneğin hareket etmek, resim yapmak, sarılmak ve dinlenmek.",
    },
    {
      image: IMAGES[9],
      marke: 'Sonunda',
      heading: 'Yubuu bugün ne öğrendi',
      yubuu: '“Teşekkürler! Bu duygu hakkında artık çok daha fazla şey biliyorum.”',
      text: "Çocuk her şeyi bir araya getirir: mıknatıs kafalı durum kartını, ihtiyaç çemberini ve sakladığı blitz kartlarını. Yubuu öğrendiklerini özetler ve teşekkür eder. Çocuklar Yubuu'ya yardım etti ve bunu yaparken kendi duyguları hakkında da konuştu.",
      alt: "Altı çocuk için yer olan mıknatıslı ihtiyaç tahtası.",
    },
  ],
  vorleseTitle: 'Oyun başlamadan önce',
  vorleseText: "Oynamadan önce eğitimci, çocuklara oyun setinin bir parçası olacak küçük okuma kitabı “Yubuu'nun Dünya'ya Yolculuğu”ndan bir bölüm okur. Hikâye özellikle çocukların merakını uyandırmak, Yubuu ile bağ kurmalarını sağlamak ve Yubuu'ya insanların duygu dünyasını keşfetmede yardım etme sevinçlerini artırmak için tasarlanmıştır. Okuma, sabah çemberinde, küçük bir grupta ya da tek tek yapılabilir.",
  erlebTitle: 'Çocuklar oynarken neler yaşar',
  erlebIntro: 'Her adımın ardında, çocukların kendilerinin yaşadığı küçük bir an vardır.',
  erlebItems: [
    { marke: '1. adım', title: 'Heyecanlanmak', text: 'Çark döner ve herkes merak eder: Hangi duygu çıkacak? Çevirmek bile merak ve heyecan uyandırır.' },
    { marke: '2. adım', title: 'Kendini bilen biri olmak', text: "Çocuk duygusunu Yubuu'ya anlatır ve fark eder: Yubuu'nun henüz bilmediği bir şeyi biliyorum." },
    { marke: '3. adım', title: 'Dinlenmek', text: 'Çocuk kendi yaşadıklarını anlatır ve birinin samimiyetle dinlediğini, hiçbir şeyi değerlendirmediğini görür.' },
    { marke: '4. adım', title: 'İçinden gelerek karar vermek', text: 'Duygu karta uyuyor mu, uymuyor mu? Çocuklar duygularına kulak vermeyi ve hızlı karar vermeyi öğrenir.' },
    { marke: '5. adım', title: 'Kendini başkasının yerine koymak', text: "Çocuk, Yubuu'nun böyle hissedebileceği bir durum arar ve bir duygunun birçok nedeni olabileceğini keşfeder." },
    { marke: '6. adım', title: 'Yardımcı olan bir şey bulmak', text: "Çocuk, Yubuu'ya şimdi neyin iyi geleceğini düşünür ve öğrenir: Her duygu için yardımcı olabilecek bir şey vardır." },
  ],
  cta: 'İletişime geçin',
  ring: { title: "Şu an neye ihtiyacın var?", sub: "Her ihtiyacın var olmaya hakkı var.", hint: "Döndürmek için sürükle · öne almak için bir çembere dokun", pause: "Duraklat", play: "Döndür", prev: "Geri çevir", next: "İleri çevir", label: "İhtiyaç çemberleri", role: "Karusel", front: "Önde: " },
};

export function getSpiel(lang: string): SpielContent {
  if (lang === 'en') return EN;
  if (lang === 'tr') return TR;
  if (OTHER[lang]) return OTHER[lang].spiel;
  // TODO Übersetzung: FR und weitere Sprachen zeigen vorerst den deutschen Text.
  return DE;
}
