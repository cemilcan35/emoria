// Texte der Bildstrecke "So wird Yubuus Gefühlsrad gespielt".
// Deutsch und Englisch sind gepflegt. Für alle anderen Sprachen (FR, TR, ...) gilt vorerst
// der deutsche Text.
// TODO Übersetzung: FR und TR bitte übersetzen lassen, dann hier eigene Blöcke ergänzen.

export interface Station {
  image: string; // Dateiname in public/img/spielablauf/
  marke: string;
  heading: string;
  yubuu: string;
  text: string;
  alt: string;
}

export interface SpielContent {
  eyebrow: string;
  title: string;
  progressLabel: string;
  placeholder: string;
  stations: Station[];
  fachTitle: string;
  fachPoints: string[];
  cta: string;
}

export const FACH_MATERIAL = {
  image: '00-material.webp',
  alt: 'Die Bedürfnistafel aus dem Material von Yubuus Gefühlsrad.',
};

const IMAGES = [
  '01-yubuu-lumora.webp',
  '02-yubuu-erde.webp',
  '03-einstieg-handpuppe.webp',
  '04-gefuehlsrad.webp',
  '05-gefuehl-zeigen.webp',
  '06-fragekarten.webp',
  '07-blitzkarten.webp',
  '08-situationskarten.webp',
  '09-beduerfniskreise.webp',
  '10-abschluss.webp',
];

const DE: SpielContent = {
  eyebrow: 'Spielablauf',
  title: 'So wird Yubuus Gefühlsrad gespielt',
  progressLabel: 'Stationen der Bildstrecke',
  placeholder: 'Platzhalter',
  stations: [
    {
      image: IMAGES[0],
      marke: 'Wer ist Yubuu?',
      heading: 'Yubuu kommt von Lumora',
      yubuu: '„Hallo! Ich bin Yubuu. Ich komme von Lumora, einem Planeten ganz weit weg.“',
      text: 'Yubuu ist neugierig und möchte wissen, wie andere Lebewesen fühlen und wie sie einander verstehen. Deshalb hat sich Yubuu auf den Weg gemacht, um andere Planeten zu entdecken.',
      alt: 'Yubuu steht auf dem Planeten Lumora und schaut in den Sternenhimmel.',
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
      alt: 'Ein Kind hält eine Fragekarte und erzählt, die Handpuppe hört aufmerksam zu.',
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
      alt: 'Ein Kind legt einen Bedürfniskreis neben eine Situationskarte mit Yubuu.',
    },
    {
      image: IMAGES[9],
      marke: 'Zum Schluss',
      heading: 'Was Yubuu heute gelernt hat',
      yubuu: '„Danke! Jetzt weiß ich viel mehr über dieses Gefühl.“',
      text: 'Das Kind legt alles zusammen: die Situationskarte mit dem Magnetkopf, den Bedürfniskreis und die behaltenen Blitzkarten. Yubuu fasst zusammen, was es gelernt hat, und bedankt sich. Die Kinder haben Yubuu geholfen und dabei ganz nebenbei über ihre eigenen Gefühle gesprochen.',
      alt: 'Die Handpuppe freut sich mit zwei Kindern über das fertige Gefühlsbild auf dem Tisch.',
    },
  ],
  fachTitle: 'Für pädagogische Fachkräfte',
  fachPoints: [
    'Für Kita (4 bis 6 Jahre) und Grundschule (6 bis 10 Jahre)',
    'Kleingruppen von 2 bis 4 Kindern in der Kita, 2 bis 6 in der Grundschule, auch einzeln möglich',
    'In der Kita macht jeder Schritt die Runde durch alle Kinder. In der Grundschule spielt ein Kind alle Schritte nacheinander.',
    'In der Box: Gefühlsrad mit 12 Magnetköpfen, Fragekarten, Blitzkarten, Situationskarten, Bedürfniskreise und die Yubuu-Handpuppe',
    'Es gibt keine richtigen oder falschen Gefühle. Yubuu fragt, staunt und lernt, bewertet aber nie.',
  ],
  cta: 'Kontakt aufnehmen',
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
      heading: 'Yubuu comes from Lumora',
      yubuu: '“Hello! I\'m Yubuu. I come from a planet far, far away.”',
      text: 'Yubuu is curious and wants to know how other living beings feel and how they understand each other. That\'s why Yubuu set off to discover other planets.',
      alt: 'Yubuu stands on the planet Lumora and looks up at the starry sky.',
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
      alt: 'A child holds a question card and tells a story while the hand puppet listens attentively.',
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
      alt: 'A child places a needs circle next to a situation card with Yubuu.',
    },
    {
      image: IMAGES[9],
      marke: 'To finish',
      heading: 'What Yubuu learned today',
      yubuu: '“Thank you! Now I know much more about this feeling.”',
      text: 'The child puts everything together: the situation card with the magnetic head, the needs circle and the kept flash cards. Yubuu sums up what they have learned and says thank you. The children have helped Yubuu and, without noticing, talked about their own feelings.',
      alt: 'The hand puppet celebrates with two children over the finished feelings picture on the table.',
    },
  ],
  fachTitle: 'For educators',
  fachPoints: [
    'For kindergarten (ages 4 to 6) and primary school (ages 6 to 10)',
    'Small groups of 2 to 4 children in kindergarten, 2 to 6 in primary school, also possible one to one',
    'In kindergarten, each step goes around all the children. In primary school, one child plays all the steps in a row.',
    'In the box: Feeling Wheel with 12 magnetic heads, question cards, flash cards, situation cards, needs circles and the Yubuu hand puppet',
    'There are no right or wrong feelings. Yubuu asks, wonders and learns, but never judges.',
  ],
  cta: 'Get in touch',
};

export function getSpiel(lang: string): SpielContent {
  if (lang === 'en') return EN;
  // TODO Übersetzung: FR, TR und weitere Sprachen zeigen vorerst den deutschen Text.
  return DE;
}
