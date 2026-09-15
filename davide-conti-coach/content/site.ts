/**
 * ============================================================================
 *  DAVIDE CONTI — COACH  ·  FILE UNICO DEI CONTENUTI
 * ============================================================================
 *  Tutto il testo del sito vive qui. Per aggiornare il sito NON serve toccare
 *  i componenti: si modifica solo questo file.
 *
 *  ATTENZIONE — CONTENUTI IN BOZZA
 *  Posizionamento, claim e copy sono ricavati dal video di presentazione di
 *  Davide (public/davide-showreel.mp4): biomeccanica applicata all'allenamento.
 *  Restano PLACEHOLDER, marcati // TODO: numeri, listino e testimonianze.
 *  Finché DRAFT resta `true`, il sito mostra un avviso "contenuti dimostrativi"
 *  sopra numeri, risultati e testimonianze.
 *
 *  --> Quando i dati reali sono inseriti: DRAFT = false.
 * ============================================================================
 */

export const DRAFT = true;

/* -------------------------------------------------------------------------- */
/*  IDENTITÀ                                                                  */
/* -------------------------------------------------------------------------- */

export const identity = {
  firstName: "Davide",
  lastName: "Conti",
  fullName: "Davide Conti",
  initials: "DC",
  role: "Personal Trainer · Biomeccanica applicata all’allenamento",
  claim: "Il problema non è quanto ti alleni. È come ti muovi.",
  city: "Italia", // TODO: città / zona di lavoro reale
  instagram: "davideconti.coach",
  instagramUrl: "https://www.instagram.com/davideconti.coach/",
  email: "davideemanueleconti@gmail.com",
  phoneDisplay: "333 358 1519",
  whatsapp: "393333581519",
  vatId: "", // non disponibile: finché è vuoto la riga non compare nel footer
  siteUrl: "https://davideconti-coach.vercel.app", // TODO: dominio definitivo
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${identity.whatsapp}?text=${encodeURIComponent(text)}`;

/* -------------------------------------------------------------------------- */
/*  NAVIGAZIONE                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: "Video", href: "#video" },
  { label: "Metodo", href: "#metodo" },
  { label: "Risultati", href: "#risultati" },
  { label: "Percorsi", href: "#percorsi" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "FAQ", href: "#faq" },
];

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  badge: "Consulenza conoscitiva gratuita",
  headline: ["Il problema", "non è quanto ti alleni.", "È come ti muovi."],
  lead:
    "Sono Davide Conti, personal trainer specializzato in biomeccanica applicata all’allenamento. Analizzo come ti muovi davvero, correggo quello che ti frena e costruisco un programma che progredisce. Non una scheda copia e incolla.",
  primaryCta: "Richiedi la consulenza",
  secondaryCta: "Guarda il video",
  secondaryHref: "#video",
  // Statistiche in evidenza sotto l’headline
  stats: [
    { value: 40, suffix: "+", label: "Percorsi seguiti" },
    { value: 7, suffix: "", label: "Anni sul campo" }, // TODO
    { value: 94, suffix: "%", label: "Rinnovi a fine ciclo" }, // TODO
  ],
};

export const marquee = [
  "Biomeccanica applicata",
  "Analisi del movimento",
  "Correzione tecnica",
  "Progressioni misurate",
  "Ipertrofia",
  "Forza",
  "Ricomposizione corporea",
  "Sblocco dello stallo",
];

/* -------------------------------------------------------------------------- */
/*  VIDEO DI PRESENTAZIONE                                                     */
/*  Contenuti ricavati dal video stesso: sono parole sue, non inventate.       */
/* -------------------------------------------------------------------------- */

export const showreel = {
  eyebrow: "Dalla sua voce",
  title: "Te lo spiego in 40 secondi.",
  src: "/davide-showreel.mp4",
  poster: "/davide-showreel-poster.jpg",
  unmuteLabel: "Attiva audio",
  muteLabel: "Disattiva audio",
  quote:
    "La maggior parte delle persone compie sempre gli stessi errori per settimane senza accorgersene: tecnica sbagliata, movimenti imprecisi, progressioni fatte a caso.",
  paths: [
    {
      when: "Se sei all’inizio",
      what: "Ti seguo passo passo. Prima si impara a muoversi bene, poi si carica: nessun esercizio che non sai perché stai facendo.",
    },
    {
      when: "Se sei in stallo",
      what: "Troviamo insieme cosa ti blocca. Quasi mai è la voglia: di solito è un movimento eseguito male da mesi, o una progressione che non c’è mai stata.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  METODO                                                                     */
/* -------------------------------------------------------------------------- */

export const method = {
  eyebrow: "Il metodo",
  title: "Prima come ti muovi. Poi quanto carichi.",
  intro:
    "Quattro fasi in ordine, perché l’ordine è il metodo. Caricare su un movimento sbagliato non ti fa progredire: ti fa accumulare l’errore più in fretta.",
  steps: [
    {
      n: "01",
      title: "Analisi del movimento",
      body:
        "Guardo come ti muovi davvero, non come pensi di muoverti. Video dei fondamentali, mobilità articolare, compensi, storico infortuni. Qui esce il vero motivo per cui sei fermo.",
      points: ["Video-analisi dei fondamentali", "Test di mobilità e stabilità", "Anamnesi e storico infortuni"],
    },
    {
      n: "02",
      title: "Correzione tecnica",
      body:
        "Si sistema l’esecuzione prima di aggiungere peso: angoli, traiettorie, ritmo, respirazione. Ogni correzione ha un perché che ti spiego, così la porti avanti da solo.",
      points: ["Un correttivo alla volta, mirato", "Regressioni dove serve", "Perché di ogni scelta, spiegato"],
    },
    {
      n: "03",
      title: "Programma su di te",
      body:
        "Costruito sui tuoi giorni disponibili, sulla tua attrezzatura e su come sei fatto. Niente template: la stessa scheda su due persone diverse dà due risultati diversi.",
      points: ["Sui tuoi giorni reali", "Video di ogni esercizio", "Alternative per ogni attrezzo"],
    },
    {
      n: "04",
      title: "Progressione misurata",
      body:
        "Carichi, serie e sensazioni tracciati ogni settimana. Ogni quattro settimane i numeri decidono cosa cambia: più carico, più volume, o più recupero.",
      points: ["Check settimanale 1:1", "Revisione del piano ogni 4 settimane", "Deload quando serve, non a caso"],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  TRASFORMAZIONI                                                             */
/* -------------------------------------------------------------------------- */
/*  Le immagini vanno in /public/trasformazioni/ e i percorsi vanno qui sotto. */
/*  Finché `before`/`after` restano vuoti, il componente mostra un segnaposto. */

export const transformations = {
  eyebrow: "Risultati",
  title: "Le persone, non i numeri.",
  intro:
    "Ogni percorso qui sotto è partito da una situazione diversa. Quello che hanno in comune non è il talento: è l’aver fatto la stessa cosa, bene, per molte settimane di fila.",
  disclaimer:
    "I risultati sono individuali e dipendono da aderenza, punto di partenza e stile di vita.",
  // Tre casi reali: Raffaele, Ciro, Edo. Foto fornite dai diretti interessati.
  // I campi vuoti sono in attesa dei dati veri: non vanno inventati.
  // before/after restano "" finché i file non sono in public/trasformazioni/:
  // un percorso verso un file inesistente fa rispondere 400 all'ottimizzatore
  // immagini di Next e rompe la sezione.
  cases: [
    {
      name: "Raffaele",
      age: 22,
      weeks: null as number | null, // TODO
      goal: "", // TODO
      result: "", // TODO
      // Ritagliate 3:4 e normalizzate in scala allineando spalle, capezzoli e
      // ombelico: nello scatto "dopo" la distanza dallo specchio era maggiore e
      // senza correzione il confronto avrebbe mostrato la distanza, non il fisico.
      before: "/trasformazioni/raffaele-prima.jpg",
      after: "/trasformazioni/raffaele-dopo.jpg"
    },
    {
      name: "Ciro",
      age: 27,
      weeks: null as number | null, // TODO
      goal: "", // TODO
      result: "", // TODO
      before: "", // TODO: "/trasformazioni/ciro-prima.jpg"
      after: "", // TODO: "/trasformazioni/ciro-dopo.jpg"
    },
    {
      name: "Edo",
      age: 25,
      weeks: null as number | null, // TODO
      goal: "", // TODO
      result: "", // TODO
      before: "", // TODO: "/trasformazioni/edo-prima.jpg"
      after: "", // TODO: "/trasformazioni/edo-dopo.jpg"
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  PERCORSI                                                                   */
/* -------------------------------------------------------------------------- */

export const programs = {
  eyebrow: "Percorsi",
  title: "Scegli quanto vuoi essere seguito.",
  intro:
    "Tre livelli di accompagnamento, lo stesso metodo. Si parte sempre da una call conoscitiva gratuita: se non sei il profilo giusto, te lo dico prima.",
  items: [
    {
      name: "Starter",
      tagline: "Per chi vuole partire con la strada già tracciata",
      price: "da 89",
      period: "una tantum",
      featured: false,
      features: [
        "Analisi iniziale completa",
        "Scheda di allenamento 8 settimane",
        "Linee guida nutrizionali",
        "Video tutorial degli esercizi",
        "1 revisione inclusa",
      ],
      cta: "Voglio partire",
    },
    {
      name: "Online Coaching",
      tagline: "Il percorso completo, seguito da me ogni settimana",
      price: "da 149",
      period: "al mese",
      featured: true,
      features: [
        "Tutto quello che c’è nello Starter",
        "Check settimanale 1:1 in videocall",
        "Piano nutrizionale su misura",
        "Analisi video della tecnica",
        "Chat diretta, risposta entro 24h",
        "Revisione del piano ogni 4 settimane",
      ],
      cta: "Candidati ora",
    },
    {
      name: "1:1 In presenza",
      tagline: "Io e te, in sala, sotto il bilanciere",
      price: "su misura",
      period: "a preventivo",
      featured: false,
      features: [
        "Sessioni individuali in palestra",
        "Correzione tecnica in tempo reale",
        "Programmazione forza avanzata",
        "Percorso nutrizionale incluso",
        "Priorità assoluta nel calendario",
      ],
      cta: "Verifica disponibilità",
    },
  ],
  note: "Prezzi indicativi. // TODO: confermare listino reale con Davide.",
};

/* -------------------------------------------------------------------------- */
/*  CHI SONO                                                                   */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "Chi sono",
  title: "Davide Conti",
  // TODO: riscrivere con la biografia reale
  // Ricavato dalle sue parole nel video. // TODO: ampliare con il suo percorso reale.
  paragraphs: [
    "Sono un personal trainer specializzato in biomeccanica applicata all’allenamento. In pratica: prima di dirti quanto caricare, guardo come ti muovi.",
    "È lì che si nasconde quasi sempre il motivo per cui non ottieni risultati. Non è che ti alleni poco: è che da settimane ripeti gli stessi errori senza accorgertene, su progressioni fatte a caso.",
    "Se sei all’inizio ti seguo passo passo. Se sei in stallo troviamo insieme cosa ti blocca, e da lì costruiamo la soluzione adatta a te.",
  ],
  quote: "Non è quanto ti alleni. È come ti muovi mentre lo fai.",
  credentials: [
    "Personal Trainer certificato", // TODO: ente e anno
    "Specializzazione in biomeccanica applicata all’allenamento", // TODO: ente e anno
    "Video-analisi tecnica dei fondamentali",
    "Programmazione individuale per principianti e atleti in stallo",
  ],
  portrait: "/davide-ritratto.jpg",
};

/* -------------------------------------------------------------------------- */
/*  NUMERI                                                                     */
/* -------------------------------------------------------------------------- */

export const numbers = {
  eyebrow: "In numeri",
  title: "Quello che succede quando il metodo tiene.",
  items: [
    { value: 40, suffix: "+", label: "Persone seguite" },
    { value: 100, suffix: "+", label: "Schede scritte" },
    { value: 24, suffix: "h", label: "Tempo di risposta" },
    { value: 94, suffix: "%", label: "Tasso di rinnovo" }, // TODO
  ],
};

/* -------------------------------------------------------------------------- */
/*  TESTIMONIANZE  —  TODO: sostituire con recensioni reali e autorizzate      */
/* -------------------------------------------------------------------------- */

export const testimonials = {
  eyebrow: "Dicono di me",
  title: "Le parole di chi ha finito il percorso.",
  items: [
    {
      quote:
        "Avevo provato tre app diverse e mollato ogni volta dopo un mese. La differenza qui è che qualcuno guarda davvero cosa fai e ti corregge. In venti settimane ho cambiato corpo e abitudini.",
      author: "Marco",
      detail: "34 anni · Ricomposizione",
    },
    {
      quote:
        "Pensavo che allenarmi con due figli piccoli fosse impossibile. Davide ha costruito tutto su tre sedute da 45 minuti. Non ho mai saltato una settimana.",
      author: "Giulia",
      detail: "29 anni · Tonificazione",
    },
    {
      quote:
        "La cosa che mi ha convinto è che non mi ha promesso niente alla prima call. Mi ha spiegato quanto tempo serviva. Aveva ragione al mese.",
      author: "Andrea",
      detail: "41 anni · Forza e massa",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faq = {
  eyebrow: "Domande",
  title: "Prima che tu me lo chieda.",
  items: [
    {
      q: "Devo per forza andare in palestra?",
      a: "No. Il protocollo si costruisce sull’attrezzatura che hai davvero a disposizione: palestra completa, home gym essenziale o solo corpo libero e qualche elastico. Cambia la strada, non la destinazione.",
    },
    {
      q: "Quanto tempo serve per vedere risultati?",
      a: "Le prime differenze concrete su forza ed energia arrivano nelle prime 3-4 settimane. Un cambiamento visibile e stabile richiede in genere dalle 12 alle 20 settimane, in base al punto di partenza e all’aderenza al piano.",
    },
    {
      q: "Sono un principiante assoluto, è un problema?",
      a: "È il momento migliore per partire, perché non devi disimparare niente. Ogni esercizio arriva con un video dimostrativo e nelle prime settimane la priorità è solo una: eseguire bene.",
    },
    {
      q: "Devo pesare tutto quello che mangio?",
      a: "All’inizio ti chiedo di pesare per imparare le porzioni, poi si passa progressivamente a un approccio più libero. L’obiettivo è l’autonomia, non la dipendenza dalla bilancia.",
    },
    {
      q: "Come funziona il supporto durante il percorso?",
      a: "Hai una chat diretta con me: rispondo entro 24 ore nei giorni feriali. Ogni settimana c’è un check strutturato in cui rivediamo dati, foto e sensazioni, e ogni quattro settimane il piano viene riscritto.",
    },
    {
      q: "Posso interrompere quando voglio?",
      a: "Sì. Il percorso online si rinnova mensilmente e non c’è vincolo di permanenza. Se scegli di fermarti, ti lascio comunque il piano aggiornato e le linee guida per proseguire da solo.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  CONTATTO                                                                   */
/* -------------------------------------------------------------------------- */

export const contact = {
  eyebrow: "Candidatura",
  title: "Il primo passo dura dieci minuti.",
  intro:
    "Compila i campi qui sotto: apro WhatsApp con il messaggio già pronto. Ti rispondo io, di persona, e fissiamo la consulenza conoscitiva — gratuita e senza impegno.",
  goals: ["Dimagrire", "Mettere massa", "Ricomposizione", "Forza", "Rimettermi in moto"],
  levels: ["Principiante", "Intermedio", "Avanzato"],
  submit: "Richiedi la consulenza su WhatsApp",
  altLabel: "Preferisci scrivere una mail?",
  privacy:
    "Non salvo nulla su questo sito: il modulo compone solo un messaggio WhatsApp che parte dal tuo telefono.",
};

/* -------------------------------------------------------------------------- */
/*  FOOTER                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  claim: "Il problema non è quanto ti alleni. È come ti muovi.",
  credits: "Sito realizzato da rec.group",
  creditsUrl: "https://rec.group",
};
