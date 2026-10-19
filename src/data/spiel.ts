// Texte der Bildstrecke "So wird Yubuus Gefühlsrad gespielt".
// TODO Übersetzung: Die Texte sind vorerst deutsch. Für EN, FR und TR bitte übersetzen lassen.

export interface Station {
  image: string; // Dateiname in public/img/spielablauf/
  marke: string;
  heading: string;
  yubuu: string;
  text: string;
  alt: string;
}

export const STATIONS: Station[] = [
  {
    image: '01-yubuu-lumora.webp',
    marke: 'Wer ist Yubuu?',
    heading: 'Yubuu kommt von Lumora',
    yubuu: '„Hallo! Ich bin Yubuu. Bei mir zu Hause leuchten die Antennen in der Farbe des Gefühls, das man gerade hat.“',
    text: 'Auf Lumora haben alle Wesen Antennen, die je nach Gefühl in einer anderen Farbe leuchten. So sieht jeder sofort, wie es den anderen geht, und niemand muss viel darüber reden. Yubuu möchte wissen, wie das auf anderen Planeten ist, und macht sich auf den Weg.',
    alt: 'Yubuu steht auf dem Planeten Lumora, die Antennen leuchten sanft.',
  },
  {
    image: '02-yubuu-erde.webp',
    marke: 'Warum Gefühle?',
    heading: 'Auf der Erde leuchtet niemand',
    yubuu: '„Ihr habt ja gar keine Antennen! Wie zeigt ihr denn eure Gefühle?“',
    text: 'Auf der Erde staunt Yubuu: Menschen leuchten nicht, haben aber ganz viele Gefühle. Man sieht sie im Gesicht, hört sie an der Stimme, und manchmal sieht man sie gar nicht. Wie heißen diese Gefühle, und wie spricht man darüber? Das möchte Yubuu lernen, und zwar von den Kindern.',
    alt: 'Yubuu sitzt auf einem kleinen Asteroiden über der Erde, umgeben von Sprechblasen mit Gefühlsgesichtern.',
  },
  {
    image: '03-einstieg-handpuppe.webp',
    marke: 'Der Einstieg',
    heading: 'Yubuu bittet die Kinder um Hilfe',
    yubuu: '„Könnt ihr mir helfen? Ich habe ein Spiel mitgebracht.“',
    text: 'Die pädagogische Fachkraft spielt Yubuu mit der Handpuppe. Yubuu stellt sich vor und lädt die Kinder ein, gemeinsam zu spielen. Von Anfang an ist klar: Die Kinder sind die Kundigen, Yubuu ist der Gast, der lernt.',
    alt: 'Eine Fachkraft hält die Yubuu-Handpuppe, Kinder sitzen neugierig um einen Tisch.',
  },
  {
    image: '04-gefuehlsrad.webp',
    marke: 'Schritt 1',
    heading: 'Das Gefühlsrad drehen',
    yubuu: '„Magst du drehen? Ich bin gespannt, welches Gefühl wir heute kennenlernen.“',
    text: 'Das Kind dreht das Gefühlsrad. Wo es stehen bleibt, nimmt das Kind den Magnetkopf ab. Dieses Gefühl begleitet das Kind durch die ganze Runde. Wer mit dem Gefühl nicht spielen möchte, darf einmal neu drehen.',
    alt: 'Eine Kinderhand dreht das Gefühlsrad mit zwölf Magnetköpfen.',
  },
  {
    image: '05-gefuehl-zeigen.webp',
    marke: 'Schritt 2',
    heading: 'Yubuu lernt das Gefühl kennen',
    yubuu: '„Oh, so sehe ich aus? Wie heißt dieses Gefühl? Zeigst du es mir?“',
    text: 'Jeder Magnetkopf ist ein Gesicht von Yubuu. Das Kind erklärt Yubuu, wie das Gefühl heißt, macht das Gesicht vor und erzählt, wo man es im Körper spürt. Hier hilft das Kind Yubuu zum ersten Mal.',
    alt: 'Ein Kind hält einen Magnetkopf hoch und macht das Gesicht nach, die Handpuppe schaut staunend zu.',
  },
  {
    image: '06-fragekarten.webp',
    marke: 'Schritt 3',
    heading: 'Die Fragekarten',
    yubuu: '„Wann hast du dich zuletzt so gefühlt?“',
    text: 'Das Kind zieht eine Fragekarte, in der Grundschule zwei bis drei. Die Fragen sind offen und passen zu jedem Gefühl. Yubuu hört zu und bewertet nicht. Jedes Kind darf sagen, dass es eine Frage nicht beantworten möchte.',
    alt: 'Ein Kind hält eine Fragekarte und erzählt, die Handpuppe hört aufmerksam zu.',
  },
  {
    image: '07-blitzkarten.webp',
    marke: 'Schritt 4',
    heading: 'Die Blitzkarten',
    yubuu: '„Passt mein Gefühl hierzu? Was meinst du?“',
    text: 'Auf jeder Blitzkarte steht ein Satz, der mit „Wenn …“ beginnt, zum Beispiel „Wenn es draußen donnert und blitzt …“. Yubuu ist darauf ohne Gesicht zu sehen. Das Kind legt seinen Magnetkopf auf und entscheidet schnell: passt oder passt nicht. Passende Karten behält es bis zum Schluss. Ob es über eine Karte sprechen möchte, entscheidet das Kind selbst.',
    alt: 'Ein Kind legt einen Magnetkopf auf eine Blitzkarte, auf der Yubuu noch kein Gesicht hat.',
  },
  {
    image: '08-situationskarten.webp',
    marke: 'Schritt 5',
    heading: 'Die Situationskarten',
    yubuu: '„Bei welcher Karte könnte ich mich so fühlen?“',
    text: 'Vier Situationskarten liegen offen auf dem Tisch. Sie zeigen Yubuu im Alltag, zum Beispiel wenn das Eis herunterfällt. Passt keine, kommen vier neue dazu, bis das Kind eine passende findet. Dann legt es den Magnetkopf auf Yubuus Gesicht, und alle sprechen darüber, was Yubuu erlebt.',
    alt: 'Vier Situationskarten liegen nebeneinander, ein Kind legt einen traurigen Magnetkopf auf die Karte mit dem heruntergefallenen Eis.',
  },
  {
    image: '09-beduerfniskreise.webp',
    marke: 'Schritt 6',
    heading: 'Die Bedürfniskreise',
    yubuu: '„Was könnte ich gerade brauchen, wenn ich mich so fühle?“',
    text: 'Das Kind wählt aus den Bedürfniskreisen, was Yubuu jetzt helfen könnte, zum Beispiel Trost, Ruhe oder Freundschaft. Es gibt keine feste Antwort. Danach überlegen die Kinder, was konkret helfen könnte. Und vielleicht erzählen sie auch, was ihnen selbst in so einem Moment hilft.',
    alt: 'Ein Kind legt einen Bedürfniskreis neben eine Situationskarte mit Yubuu.',
  },
  {
    image: '10-abschluss.webp',
    marke: 'Zum Schluss',
    heading: 'Was Yubuu heute gelernt hat',
    yubuu: '„Danke! Jetzt weiß ich viel mehr über dieses Gefühl.“',
    text: 'Das Kind legt alles zusammen: den Magnetkopf, die Situationskarte, die Bedürfniskreise und die behaltenen Blitzkarten. Yubuu fasst zusammen, was es gelernt hat, und bedankt sich. So helfen die Kinder Yubuu und sprechen dabei ganz nebenbei über ihre eigenen Gefühle.',
    alt: 'Die Handpuppe freut sich mit zwei Kindern über das fertige Gefühlsbild auf dem Tisch.',
  },
];

export const FACH_TITLE = 'Für pädagogische Fachkräfte';

export const FACH_POINTS: string[] = [
  'Für Kita (4 bis 6 Jahre) und Grundschule (6 bis 10 Jahre)',
  'Kleingruppen von 2 bis 4 Kindern in der Kita, 2 bis 6 in der Grundschule, auch einzeln möglich',
  'In der Kita macht jeder Schritt die Runde durch alle Kinder, in der Grundschule spielt ein Kind alle Schritte nacheinander',
  'In der Box: Gefühlsrad mit 12 Magnetköpfen, Fragekarten, Blitzkarten, Situationskarten, Bedürfniskreise und die Yubuu-Handpuppe',
  'Es gibt keine richtigen oder falschen Gefühle. Yubuu fragt, staunt und lernt, bewertet aber nie.',
];

export const FACH_MATERIAL = {
  image: '00-material.webp',
  alt: 'Die Bedürfnistafel aus dem Material von Yubuus Gefühlsrad.',
};
