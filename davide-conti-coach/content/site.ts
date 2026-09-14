/**
 * ============================================================================
 *  DAVIDE CONTI — COACH  ·  FILE UNICO DEI CONTENUTI
 * ============================================================================
 *  Tutto il testo del sito vive qui. Per aggiornare il sito NON serve toccare
 *  i componenti: si modifica solo questo file.
 *
 *  ATTENZIONE — CONTENUTI IN BOZZA
 *  Il profilo Instagram @davideconti.coach non era raggiungibile in fase di
 *  build, quindi numeri, testimonianze e biografia qui sotto sono PLACEHOLDER
 *  realistici, non dati verificati. Ogni campo da confermare è marcato con
 *  // TODO. Finché DRAFT resta `true`, il sito mostra un piccolo avviso
 *  "contenuti dimostrativi" sopra numeri e testimonianze.
 *
 *  --> Quando i dati reali sono inseriti: DRAFT = false.
 * ============================================================================
 */

export const DRAFT = true;

/* -------------------------------------------------------------------------- */
/*  IDENTITA’                                                                  */
/* -------------------------------------------------------------------------- */

export const identity = {
  firstName: "Davide",
  lastName: "Conti",
  fullName: "Davide Conti",
  initials: "DC",
  role: "Personal Trainer & Online Coach",
  claim: "Costruiamo il corpo. Poi il corpo costruisce te.",
  city: "Italia", // TODO: citta’ reale (es. "Milano")
  instagram: "davideconti.coach",
  instagramUrl: "https://www.instagram.com/davideconti.coach/",
  email: "info@davideconti.coach", // TODO: email reale
  whatsapp: "393000000000", // TODO: numero reale, formato internazionale senza "+"
  vatId: "", // TODO: P.IVA (obbligatoria in fattura/footer se attivita’ individuale)
  siteUrl: "https://davideconti-coach.vercel.app", // TODO: dominio definitivo
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${identity.whatsapp}?text=${encodeURIComponent(text)}`;

/* -------------------------------------------------------------------------- */
/*  NAVIGAZIONE                                                                */
/* -------------------------------------------------------------------------- */

export const navLinks = [
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
  badge: "Posti limitati · Nuovo blocco coaching",
  headline: ["Il tuo fisico", "non è un caso.", "È un progetto."],
  lead:
    "Allenamento, nutrizione e testa. Un unico percorso costruito su di te, seguito settimana per settimana finché il risultato non diventa la tua normalità.",
  primaryCta: "Candidati al percorso",
  secondaryCta: "Guarda il metodo",
  scrollHint: "Scorri",
  // Statistiche in evidenza sotto l’headline
  stats: [
    { value: 200, suffix: "+", label: "Percorsi seguiti" }, // TODO
    { value: 7, suffix: "", label: "Anni sul campo" }, // TODO
    { value: 94, suffix: "%", label: "Rinnovi a fine ciclo" }, // TODO
  ],
};

export const marquee = [
  "Ricomposizione corporea",
  "Ipertrofia",
  "Forza",
  "Dimagrimento",
  "Postura",
  "Nutrizione flessibile",
  "Mindset",
  "Preparazione atletica",
];

/* -------------------------------------------------------------------------- */
/*  METODO                                                                     */
/* -------------------------------------------------------------------------- */

export const method = {
  eyebrow: "Il metodo",
  title: "Quattro fasi. Zero improvvisazione.",
  intro:
    "Non vendo schede. Costruisco un sistema che regge quando la motivazione finisce: dati alla mano, correzioni continue, nessuna fase lasciata al caso.",
  steps: [
    {
      n: "01",
      title: "Analisi",
      body:
        "Anamnesi completa, storico infortuni, abitudini alimentari, sonno e livello di stress. Misuriamo il punto di partenza reale, non quello che pensi di avere.",
      points: ["Check posturale e mobilità", "Plicometria e circonferenze", "Analisi abitudini 7 giorni"],
    },
    {
      n: "02",
      title: "Protocollo",
      body:
        "Programma di allenamento e piano nutrizionale costruiti sul tuo tempo disponibile, sulla tua attrezzatura e sui tuoi gusti. Sostenibile prima che perfetto.",
      points: ["Scheda con video di ogni esercizio", "Macro e menu flessibili", "Integrazione solo se serve"],
    },
    {
      n: "03",
      title: "Esecuzione",
      body:
        "Ogni allenamento è tracciato. Carichi, serie, sensazioni. Correggo la tecnica sui video che mi mandi e rispondo entro 24 ore, sempre io.",
      points: ["Check settimanale 1:1", "Analisi video tecnica", "Supporto diretto in chat"],
    },
    {
      n: "04",
      title: "Progressione",
      body:
        "I dati decidono. Ogni quattro settimane rileggiamo i numeri e il protocollo cambia: più carico, più calorie, più recupero. Mai fermi allo stesso punto.",
      points: ["Revisione mensile del piano", "Deload programmati", "Obiettivi a 12 settimane"],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  TRASFORMAZIONI                                                             */
/* -------------------------------------------------------------------------- */
/*  Le immagini vanno in /public/trasformazioni/ e i percorsi vanno qui sotto. */
/*  Finche’ `before`/`after` restano vuoti, il componente mostra un segnaposto. */

export const transformations = {
  eyebrow: "Risultati",
  title: "Le persone, non i numeri.",
  intro:
    "Ogni percorso qui sotto e’ partito da una situazione diversa. Quello che hanno in comune non è il talento: è l’aver fatto la stessa cosa, bene, per molte settimane di fila.",
  disclaimer:
    "I risultati sono individuali e dipendono da aderenza, punto di partenza e stile di vita.",
  cases: [
    {
      name: "Marco", // TODO
      age: 34,
      weeks: 20,
      goal: "Ricomposizione",
      result: "-11 kg di grasso, +3 kg di massa magra", // TODO
      before: "", // es. "/trasformazioni/marco-before.jpg"
      after: "", // es. "/trasformazioni/marco-after.jpg"
    },
    {
      name: "Giulia", // TODO
      age: 29,
      weeks: 16,
      goal: "Tonificazione",
      result: "-8 kg, forza raddoppiata sui fondamentali", // TODO
      before: "",
      after: "",
    },
    {
      name: "Andrea", // TODO
      age: 41,
      weeks: 24,
      goal: "Massa",
      result: "+7 kg di peso, mal di schiena sparito", // TODO
      before: "",
      after: "",
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
      tagline: "Per chi vuole partire con la strada gia’ tracciata",
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
  paragraphs: [
    "Ho iniziato ad allenarmi per gli stessi motivi per cui inizia quasi tutti: non mi piacevo. Ci ho messo anni a capire che il punto non era l’estetica, era il metodo. Da quel momento ho smesso di cercare scorciatoie e ho cominciato a studiare.",
    "Oggi accompagno persone normali — con un lavoro, una famiglia, poco tempo e tanta voglia di cambiare — dentro percorsi che funzionano perché sono costruiti sulla loro vita, non su quella di un atleta professionista.",
    "Non prometto trasformazioni in 30 giorni. Prometto che se fai il lavoro, i risultati arrivano e restano.",
  ],
  quote: "Non esistono corpi difficili. Esistono protocolli sbagliati e settimane saltate.",
  credentials: [
    "Personal Trainer certificato", // TODO: ente e anno
    "Specializzazione in ricomposizione corporea", // TODO
    "Formazione continua in nutrizione sportiva", // TODO
    "Preparazione atletica funzionale", // TODO
  ],
  portrait: "", // es. "/davide.jpg" — TODO: foto reale
};

/* -------------------------------------------------------------------------- */
/*  NUMERI                                                                     */
/* -------------------------------------------------------------------------- */

export const numbers = {
  eyebrow: "In numeri",
  title: "Quello che succede quando il metodo tiene.",
  items: [
    { value: 200, suffix: "+", label: "Persone seguite" }, // TODO
    { value: 1800, suffix: "+", label: "Schede scritte" }, // TODO
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
        "Avevo provato tre app diverse e mollato ogni volta dopo un mese. La differenza qui e’ che qualcuno guarda davvero cosa fai e ti corregge. In venti settimane ho cambiato corpo e abitudini.",
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
        "La cosa che mi ha convinto e’ che non mi ha promesso niente alla prima call. Mi ha spiegato quanto tempo serviva. Aveva ragione al mese.",
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
      a: "È il momento migliore per partire, perche’ non devi disimparare niente. Ogni esercizio arriva con un video dimostrativo e nelle prime settimane la priorita’ e’ solo una: eseguire bene.",
    },
    {
      q: "Devo pesare tutto quello che mangio?",
      a: "All’inizio ti chiedo di pesare per imparare le porzioni, poi si passa progressivamente a un approccio più libero. L’obiettivo è l’autonomia, non la dipendenza dalla bilancia.",
    },
    {
      q: "Come funziona il supporto durante il percorso?",
      a: "Hai una chat diretta con me: rispondo entro 24 ore nei giorni feriali. Ogni settimana c’e’ un check strutturato in cui rivediamo dati, foto e sensazioni, e ogni quattro settimane il piano viene riscritto.",
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
    "Compila i campi qui sotto: apro WhatsApp con il messaggio gia’ pronto. Ti rispondo io, di persona, e fissiamo una call conoscitiva gratuita e senza impegno.",
  goals: ["Dimagrire", "Mettere massa", "Ricomposizione", "Forza", "Rimettermi in moto"],
  levels: ["Principiante", "Intermedio", "Avanzato"],
  submit: "Apri WhatsApp con il messaggio pronto",
  altLabel: "Preferisci scrivere una mail?",
  privacy:
    "Non salvo nulla su questo sito: il modulo compone solo un messaggio WhatsApp che parte dal tuo telefono.",
};

/* -------------------------------------------------------------------------- */
/*  FOOTER                                                                     */
/* -------------------------------------------------------------------------- */

export const footer = {
  claim: "Costruiamo il corpo. Poi il corpo costruisce te.",
  credits: "Sito realizzato da rec.group",
  creditsUrl: "https://rec.group",
};
