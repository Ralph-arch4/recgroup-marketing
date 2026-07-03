"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Quanto costa un sito web professionale per freelancer o PMI?",
    a: "Un sito vetrina professionale parte da €700 — design, sviluppo e ottimizzazione SEO inclusi. Per un freelancer che vuole acquisire clienti online è l'investimento con il ROI più rapido: più visibilità, più credibilità, meno tempo perso in preventivi a freddo. Il preventivo è gratuito, dettagliato e senza sorprese.",
  },
  {
    q: "Conviene un gestionale personalizzato rispetto ai software standard?",
    a: "I software generici come TeamSystem o SAP costano 50–150€/mese per utente — e paghi funzioni che non usi mai. Il nostro gestionale su misura parte da €900 una tantum, costruito esatto per il tuo flusso di lavoro. In media le PMI italiane recuperano l'investimento in 6–12 mesi grazie al tempo risparmiato.",
  },
  {
    q: "Uso ancora Excel e WhatsApp per gestire clienti e ordini: vale la pena passare a un gestionale?",
    a: "Oltre il 60% delle PMI italiane gestisce ancora processi critici con fogli Excel, email e carta — dati MISE 2026. Il problema non è Excel in sé: è il tempo che ci butti ogni giorno. Copiare dati tra fogli, cercare la versione giusta del file, perdere un ordine in mezzo a cento messaggi WhatsApp. Un gestionale su misura centralizza tutto in un unico pannello: clienti, ordini, fatturazione, appuntamenti, report. Il passaggio richiede 2–3 settimane di setup e una sessione di formazione. Dopo, il flusso che gestivi in 3 ore lo sbrighi in 20 minuti — e zero errori da copia-incolla.",
  },
  {
    q: "Il gestionale include anche la fatturazione elettronica SDI obbligatoria?",
    a: "Sì, se richiesta. Integriamo il modulo di fatturazione elettronica SDI direttamente nel gestionale: emetti, invii e archivi fatture B2B e PA senza uscire dal pannello. Niente abbonamento a software terzi come Fatture in Cloud o Aruba — tutto nel tuo gestionale personalizzato. Per le PMI con volume elevato di fatture attive e passive, l'integrazione SDI nativa fa risparmiare 2–5 ore a settimana di lavoro amministrativo.",
  },
  {
    q: "Quanto tempo si risparmia davvero con l'automazione dei processi?",
    a: "Le PMI italiane risparmiano mediamente 8–15 ore a settimana per dipendente dopo aver automatizzato fatturazione, solleciti pagamenti, gestione appuntamenti e report. Per un freelancer o un piccolo studio, significa recuperare 2–4 giorni interi al mese — tempo che puoi rivendere ai clienti.",
  },
  {
    q: "Le PMI possono accedere agli incentivi fiscali Transizione 5.0?",
    a: "Sì. Il piano Transizione 5.0 del MIMIT copre fino al 45% degli investimenti in beni digitali per le PMI italiane — siti web, gestionali e automazioni compresi. Nel 2026 sono stanziati oltre 300 milioni di euro tra strumenti nazionali e programmi regionali, con intensità di aiuto dal 30% al 50%. Eppure il 64% delle PMI italiane non ha mai usufruito di alcun incentivo di digitalizzazione — un'opportunità enorme che la maggior parte delle imprese non coglie. Un progetto da €2.000 può costarne effettivamente €1.100. Ti aiutiamo a capire cosa spetta alla tua impresa prima ancora di iniziare — nella stessa chiamata gratuita di 30 minuti.",
  },
  {
    q: "Come proteggo il sito e i dati della mia impresa dagli attacchi informatici?",
    a: "Nel 2026 gli attacchi informatici alle PMI italiane sono aumentati del 65% rispetto al 2023 — e ripristinare un sito hackerato costa in media 5–10 volte di più rispetto a proteggerlo in anticipo. Ogni sito che realizziamo parte già sicuro: HTTPS obbligatorio, certificato SSL, backup giornaliero automatico, monitoraggio uptime e aggiornamenti di sicurezza inclusi. Per le PMI che vogliono proteggersi ulteriormente, il Voucher Cybersecurity PMI 2026 del MIMIT copre il 50% dei costi fino a €10.000 — firewall avanzati, protezione da malware, formazione del personale. Ti aiutiamo a fare richiesta.",
  },
  {
    q: "Quanto tempo ci vuole per avere un sito web operativo?",
    a: "Un sito vetrina è online in 1–2 settimane. Un e-commerce o una piattaforma con area riservata richiede 3–6 settimane. Prima di iniziare ti diamo una data di consegna precisa — e la rispettiamo. Nessun cliente è mai rimasto senza aggiornamenti.",
  },
  {
    q: "Il sito web include l'ottimizzazione SEO per Google?",
    a: "Sì, sempre. Ogni sito parte già ottimizzato per il posizionamento su Google: struttura semantica HTML, meta tag descrittivi, Core Web Vitals nella fascia verde, design mobile-first e velocità di caricamento sotto i 2 secondi. Integriamo anche la sitemap XML, i dati strutturati Schema.org e l'ottimizzazione delle immagini per la ricerca visiva. Non è un extra a pagamento — è il minimo indispensabile per comparire nei risultati di ricerca e portare traffico organico qualificato senza pagare pubblicità ogni mese.",
  },
  {
    q: "Posso gestire il sito da solo dopo la consegna?",
    a: "Assolutamente. Costruiamo con pannelli intuitivi: aggiorni testi, immagini e prezzi in autonomia, senza toccare una riga di codice. Ti formiamo in una sessione di 30 minuti. E restiamo disponibili via WhatsApp per ogni dubbio futuro.",
  },
  {
    q: "Devo avere competenze tecniche per lavorare con voi?",
    a: "No. Gestiamo tutto noi — dall'acquisto del dominio all'hosting, dallo sviluppo al lancio. Ti spieghiamo ogni passaggio in italiano semplice e restiamo al tuo fianco anche dopo la consegna.",
  },
  {
    q: "Lavorate solo a Catania o in tutta Italia?",
    a: "Siamo di Catania, ma lavoriamo con freelancer e PMI in tutta Italia — da Milano a Palermo. Tutto avviene online: chiamate, consegne, supporto. La distanza non cambia la qualità del risultato.",
  },
  {
    q: "È meglio affidarsi a un'agenzia web o a un freelancer per il mio sito?",
    a: "Un freelancer lavora da solo: una sola competenza, nessun backup se è indisponibile. Un'agenzia come RecGroup unisce sviluppo, design, SEO e copy su ogni progetto — referente unico, tempi certi. E da noi un sito vetrina parte da €700: spesso meno di quanto chiede un freelancer senior.",
  },
  {
    q: "Come posso acquisire clienti online con un budget limitato?",
    a: "Il percorso più efficiente per un freelancer o una piccola impresa: (1) sito web ottimizzato SEO — porta lead organici 24 ore su 24 senza costo per click; (2) scheda Google Business Profile aggiornata con foto, orari e recensioni — fondamentale per la lead generation locale; (3) automazione email per convertire i contatti in clienti senza lavoro manuale; (4) landing page dedicata se vuoi testare campagne a pagamento su un'offerta specifica. Da €700 hai sito, SEO di base e modulo di contatto ottimizzato — tutto il necessario per smettere di dipendere dal passaparola e iniziare ad acquisire clienti qualificati online.",
  },
  {
    q: "Come ottenere più recensioni su Google Maps per far crescere la mia attività locale?",
    a: "L'81% dei consumatori italiani legge le recensioni Google prima di contattare un'attività locale — e Google Maps usa le recensioni come segnale di ranking diretto: più recensioni recenti e dettagliate hai, più alta è la probabilità di comparire nel 'local pack' (i 3 risultati in cima alla ricerca). Cosa funziona nel 2026: (1) chiedi la recensione subito dopo la consegna, nel momento di massima soddisfazione; (2) invia un link diretto al profilo Google Business Profile via WhatsApp o email — riduce il tasso di abbandono dell'80%; (3) invita il cliente a descrivere il problema risolto, non solo a dare stelle: le recensioni generiche pesano meno nell'algoritmo rispetto a quelle contestuali. Con le nostre automazioni WhatsApp Business, la richiesta viene inviata automaticamente 24 ore dopo ogni lavoro completato. Risultato tipico: +15–30 recensioni nei primi 90 giorni, con impatto misurabile sul posizionamento locale.",
  },
  {
    q: "Cosa si intende per soluzione digitale su misura per una PMI?",
    a: "Una soluzione su misura è costruita sul tuo flusso di lavoro reale — non su quello generico di qualsiasi PMI. Significa: sito con i tuoi servizi e il tuo target, gestionale con i tuoi processi (prenotazioni, magazzino, fatturazione, report), automazioni tarate sulle tue priorità. Zero funzioni inutili, zero abbonamenti per strumenti che non usi.",
  },
  {
    q: "Posso integrare l'intelligenza artificiale nella mia piccola impresa?",
    a: "Sì, e nel 2026 è più accessibile di quanto pensi. Integriamo chatbot AI sul tuo sito (gestisce l'80% delle domande ricorrenti senza personale), automazioni basate su AI per generare preventivi e documenti in secondi, e dashboard intelligenti che analizzano i tuoi dati di vendita. Il punto di partenza ideale per una PMI è un chatbot per il sito + automazione email: costa meno di un abbonamento a un CRM generico e lavora per te 24 ore su 24.",
  },
  {
    q: "Conviene aprire un e-commerce nel 2026? Quali sono i costi reali?",
    a: "Il mercato e-commerce italiano ha superato i 71 miliardi di euro nel 2026: la domanda c'è. Un e-commerce professionale con RecGroup parte da €1.500 — catalogo prodotti, pagamenti online, gestione ordini e SEO inclusi. Il vero ostacolo non è aprirlo, ma farlo trovare su Google: per questo ogni nostro shop include già ottimizzazione SEO e-commerce, schede prodotto ottimizzate e integrazione Google Shopping. Rientri dell'investimento tipici: 6–18 mesi per chi parte da zero.",
  },
  {
    q: "Esistono altri incentivi oltre a Transizione 5.0 per digitalizzare la mia impresa?",
    a: "Sì, e sono più di quanti pensi. Nel 2026 le risorse destinate alla digitalizzazione delle PMI superano i 10 miliardi di euro tra fondi nazionali, bandi regionali e programmi europei. Oltre a Transizione 5.0 (fino al 45%), sono attivi: la Nuova Sabatini — finanziamento agevolato per beni digitali con contributo in conto interessi, nessuna perizia sotto i 40.000€; il Voucher Digitalizzazione MISE — contributo a fondo perduto del 50% fino a €10.000 per siti web, software e formazione digitale; il programma Digital Transformation del MIMIT; il Voucher Cybersecurity PMI; e bandi camerali e regionali che variano da territorio a territorio. Ti aiutiamo a identificare la combinazione di incentivi più conveniente per il tuo progetto specifico: stessa chiamata gratuita di 30 minuti, zero burocrazia da parte tua.",
  },
  {
    q: "Basta Instagram e Facebook per trovare clienti, o serve anche un sito web?",
    a: "I social danno visibilità — ma non ti appartengono. L'algoritmo cambia senza preavviso, l'account può essere sospeso, la portata organica cala ogni anno. Il sito web è tuo: indicizzato su Google, attivo 24 ore su 24, raccoglie contatti qualificati anche mentre dormi. La strategia che funziona nel 2026: sito come hub centrale (SEO, credibilità, conversioni) + social come amplificatore di traffico verso il sito. Senza sito, stai costruendo su terreno affittato.",
  },
  {
    q: "Google Ads o SEO: cosa conviene di più per una PMI italiana con budget limitato?",
    a: "Timing diverso, ROI diverso. Google Ads porta lead in 24 ore ma smette non appena smetti di pagare — costo medio per click in Italia: €0,50–3,00 per keyword commerciali, budget minimo efficace: €300–500/mese per una PMI locale. SEO porta traffico organico gratuito ma richiede 3–6 mesi per i primi risultati: il ROI a lungo termine supera il 700% contro il 200% degli Ads. Chi ha investito €2.000–3.000/mese in Ads per 12 mesi parallelamente al SEO ha poi ridotto il budget pubblicitario del 60–70% mantenendo lo stesso volume di lead. Per una PMI o un freelancer che parte da zero: (1) sito già ottimizzato SEO come base permanente — incluso in ogni nostro progetto; (2) Google Ads solo su campagne ad alto margine o per testare nuovi servizi. La regola pratica: se hai bisogno di contatti entro 30 giorni parti con gli Ads; se vuoi costruire traffico qualificato nel tempo senza pagare per ogni click, investi nel SEO prima.",
  },
  {
    q: "Quanto costano hosting e manutenzione del sito ogni anno?",
    a: "Hosting professionale: 80–200€/anno. Dominio: 15–30€/anno. Manutenzione (aggiornamenti, backup, sicurezza): 150–400€/anno se affidata esternamente. Con RecGroup, hosting e dominio per il primo anno sono inclusi nel prezzo del sito — zero sorprese dopo la consegna. Dal secondo anno offriamo pacchetti di hosting ottimizzato da 99€/anno con backup automatico, certificato SSL e aggiornamenti di sicurezza inclusi.",
  },
  {
    q: "Come faccio a sapere se il sito web sta portando clienti reali?",
    a: "Installiamo Google Analytics 4 e Google Search Console su ogni sito che realizziamo: vedi quante persone visitano il sito, da quali parole chiave arrivano su Google, quante compilano il modulo di contatto e quale pagina converte di più. I primi 3 mesi ti inviamo un report mensile con i dati chiave — così puoi misurare il ROI esatto del tuo investimento e capire cosa ottimizzare per crescere ulteriormente.",
  },
  {
    q: "È meglio una landing page o un sito web completo per acquisire clienti?",
    a: "Dipende dall'obiettivo. Una landing page è una singola pagina ottimizzata per una conversione specifica — preventivo, iscrizione, acquisto — ed è la scelta giusta per campagne Google Ads o Meta Ads dove ogni click ha un costo. Un sito web completo costruisce credibilità nel tempo, si posiziona su Google con più keyword e funziona 24 ore su 24 senza pubblicità a pagamento. Per un freelancer o una PMI che parte da zero: il sito web porta traffico organico a lungo termine, la landing page massimizza una campagna specifica. Con RecGroup puoi averli entrambi: landing page da €400, sito vetrina da €700 — usati insieme moltiplicano i risultati.",
  },
  {
    q: "Si può automatizzare WhatsApp Business per rispondere ai clienti e inviare preventivi?",
    a: "Sì. Nel 2026, WhatsApp Business API permette di automatizzare il 70–80% delle risposte ricorrenti — orari, prezzi, preventivi, conferme appuntamento — senza un operatore presente. Per una PMI significa rispondere ai clienti alle 2 di notte, recuperare lead che non aspettano e ridurre il carico sul personale. Integriamo le automazioni WhatsApp direttamente nel tuo gestionale o sito: quando arriva una richiesta, il sistema risponde, raccoglie i dati e li carica nel pannello clienti. Il costo di setup parte da €500 — meno di un mese di risposte manuali perse.",
  },
  {
    q: "Ho già un sito vecchio e lento: conviene rifarlo o aggiornarlo?",
    a: "Se il tuo sito ha più di 3 anni, probabilmente costa più tenerlo in vita che rifarlo. I segnali che è ora di agire: Core Web Vitals insufficienti (Google ti penalizza nel posizionamento), struttura non mobile-first, zero conversioni da visitatori a contatti. Aggiornare un sito vecchio con patch e restyling costa il 60–80% di un sito nuovo — con risultati incerti e vita residua breve. Un sito nuovo con RecGroup parte da €700, include SEO tecnico, Core Web Vitals ottimizzati e design responsive da zero. La prima sessione è gratuita: valutiamo insieme cosa conviene fare.",
  },
  {
    q: "Ho bisogno di un CRM separato, o il gestionale copre già la gestione dei clienti?",
    a: "Per la maggior parte delle PMI italiane — studi professionali, agenzie, artigiani, consulenti — un gestionale su misura con modulo clienti integrato è più che sufficiente: storico acquisti, note, comunicazioni, scadenze e fatturazione in un unico pannello. Un CRM dedicato come HubSpot o Salesforce ha senso da 10+ commerciali in poi, e costa 50–150€/mese per utente — spesso per funzionalità che una piccola impresa non userà mai. Il nostro gestionale personalizzato copre l'80% delle funzioni CRM a un costo una tantum: zero abbonamenti mensili, zero vendor lock-in.",
  },
  {
    q: "Il gestionale su misura è accessibile da remoto, da smartphone o tablet?",
    a: "Sì. Ogni gestionale che realizziamo è un'applicazione web: nessuna installazione, nessun server da gestire in ufficio. Accedi da computer, tablet o smartphone con una semplice connessione internet — da ufficio, da casa o in trasferta — con dati sempre sincronizzati e protetti da backup automatico. È la stessa flessibilità di un gestionale cloud in abbonamento come TeamSystem o Zucchetti, ma con un costo una tantum e zero canone mensile per utente.",
  },
  {
    q: "Cos'è la GEO e come preparo il mio sito per i motori di ricerca AI nel 2026?",
    a: "La GEO — Generative Engine Optimization — è l'evoluzione della SEO tradizionale: nel 2026, oltre il 40% delle ricerche online in Italia passa attraverso motori di ricerca basati su intelligenza artificiale come Google AI Overviews, Perplexity e ChatGPT Search. Se il tuo sito non è strutturato per essere citato da queste piattaforme, perdi visibilità anche con un buon posizionamento SEO classico. Cosa facciamo: strutturiamo i contenuti del sito con risposte chiare e dirette alle domande del tuo target, implementiamo dati strutturati Schema.org avanzati, ottimizziamo per i featured snippet e creiamo contenuti E-E-A-T (esperienza, competenza, autorevolezza, affidabilità) che le AI riconoscono come fonti attendibili. Il risultato: il tuo sito non solo si posiziona su Google, ma viene citato direttamente nelle risposte AI — traffico qualificato senza pagare un centesimo per click.",
  },
  {
    q: "Il mio sito web deve essere a norma GDPR? Cosa rischio se non è conforme?",
    a: "Sì, è obbligatorio. Dal 2018 il GDPR impone a ogni sito web che raccoglie dati personali — moduli di contatto, cookie, analytics — di rispettare regole precise su consenso, informativa privacy e trattamento dati. Le sanzioni per le PMI italiane non conformi partono da €10.000 e possono arrivare fino al 4% del fatturato annuo. Nel 2026 il Garante Privacy ha intensificato i controlli sulle piccole imprese: solo nei primi 6 mesi sono state emesse oltre 200 sanzioni a PMI e professionisti. Ogni sito che realizziamo include: cookie banner a norma con gestione granulare del consenso, informativa privacy personalizzata, moduli di contatto conformi, integrazione Google Analytics 4 con anonimizzazione IP e configurazione corretta dei cookie di terze parti. Non è un optional — è la base per operare online senza rischi legali.",
  },
  {
    q: "Come faccio a scegliere un'agenzia web affidabile senza buttare soldi?",
    a: "Il mercato italiano è pieno di agenzie web che promettono tutto e spariscono dopo la consegna. Ecco i 5 segnali di un'agenzia seria: (1) portfolio verificabile con siti reali online, non mockup; (2) preventivo dettagliato voce per voce — chi ti dà solo un totale sta nascondendo qualcosa; (3) tempi di consegna scritti nero su bianco con penali o garanzie; (4) assistenza post-lancio inclusa, non venduta come extra; (5) nessun vincolo contrattuale pluriennale su hosting o manutenzione. Con RecGroup: il preventivo è gratuito, dettagliato e arriva entro 48 ore. I nostri siti sono online e verificabili. L'assistenza post-lancio è inclusa per 12 mesi. Zero vincoli: il sito è tuo, il codice è tuo, l'hosting lo puoi spostare quando vuoi.",
  },
  {
    q: "Posso finanziare sito web e gestionale con la Nuova Sabatini 2026?",
    a: "Sì. La Nuova Sabatini è uno degli incentivi più accessibili per le PMI italiane nel 2026: copre investimenti in beni digitali — siti web professionali, gestionali personalizzati, software e infrastrutture cloud — con un contributo in conto interessi che abbatte il costo del finanziamento fino al 3,575% annuo. Per le micro e piccole imprese del Mezzogiorno l'agevolazione è ancora più vantaggiosa. A differenza di Transizione 5.0, la Nuova Sabatini non richiede perizia tecnica per importi sotto i 40.000€ e i tempi di istruttoria sono più rapidi: in media 60–90 giorni. Si combina con il Voucher Digitalizzazione MISE e con i bandi regionali. Ti aiutiamo a identificare la combinazione di incentivi più conveniente per il tuo progetto nella chiamata gratuita di 30 minuti — zero burocrazia da parte tua.",
  },
  {
    q: "Serve un sito web a uno studio professionale — avvocato, commercialista, architetto?",
    a: "Nel 2026 è quasi obbligatorio. L'87% dei potenziali clienti cerca un professionista su Google prima di contattarlo — e se non hai un sito, sceglierà chi ce l'ha. Per avvocati, commercialisti, consulenti del lavoro, architetti e ingegneri, un sito web professionale non è una vetrina: è il primo filtro di credibilità. Cosa deve avere: pagina servizi chiara con le aree di competenza, sezione 'chi siamo' con curriculum e iscrizione all'albo, modulo di contatto per richiesta appuntamento, ottimizzazione SEO locale per comparire nelle ricerche tipo 'commercialista a [città]' o 'avvocato divorzista [provincia]'. Con RecGroup un sito per studio professionale parte da €700, include SEO locale, design conforme alle linee guida dell'ordine professionale e scheda Google Business Profile ottimizzata. Tempi di consegna: 1–2 settimane.",
  },
  {
    q: "Come funziona un gestionale con prenotazione appuntamenti online per artigiani e professionisti?",
    a: "Un gestionale con sistema di prenotazione integrato permette ai tuoi clienti di fissare appuntamenti direttamente dal sito — 24 ore su 24, senza telefonate. L'agenda si aggiorna in tempo reale: niente sovrapposizioni, niente appuntamenti persi su foglietti o WhatsApp. Il sistema invia promemoria automatici via SMS o email, riducendo i 'no-show' del 40–60%. Per artigiani (idraulici, elettricisti, parrucchieri), professionisti sanitari, consulenti e studi tecnici è la funzione che fa risparmiare più tempo in assoluto: gestire manualmente un'agenda di 15–30 appuntamenti a settimana costa 3–5 ore. Con il gestionale su misura di RecGroup: il cliente prenota online, riceve conferma automatica, tu vedi tutto nel pannello insieme a storico cliente, fatturazione e note — un unico strumento al posto di agenda Google + Excel + WhatsApp. Costo del modulo prenotazioni integrato nel gestionale: a partire da €300 sul gestionale base.",
  },
  {
    q: "Quanto costa un social media manager per una PMI o un freelancer in Italia?",
    a: "Nel 2026 un social media manager freelance in Italia costa da 300 a 2.000€/mese, a seconda dell'esperienza e del numero di piattaforme gestite. Fascia junior (1–2 anni): 300–600€/mese per 1–2 profili con 8–12 post mensili. Mid-level (3–5 anni): 600–1.200€/mese con content plan e report mensile. Senior (5+ anni): 1.200–2.500€/mese per strategia completa multi-piattaforma. Un'agenzia costa il 30–40% in più a parità di servizio. Il punto critico: i social da soli non bastano — senza un sito web ottimizzato SEO come hub centrale, stai costruendo su terreno affittato. La strategia che funziona: sito web che cattura lead organici 24/7 + social come amplificatore di traffico verso il sito. Con RecGroup integriamo sito, SEO e strategia social in un unico progetto — così ogni euro investito nel social media manager rende di più.",
  },
  {
    q: "Come digitalizzare la mia piccola impresa partendo da zero nel 2026?",
    a: "La digitalizzazione di una piccola impresa non deve essere un salto nel vuoto: serve un percorso a step, con priorità chiare e costi controllati. Ecco la roadmap che consigliamo nel 2026: (1) sito web professionale con SEO — da €700, è la base che porta clienti organici 24/7 senza costo per click; (2) scheda Google Business Profile ottimizzata — gratuita, fondamentale per la visibilità locale; (3) gestionale su misura per centralizzare clienti, ordini e fatturazione — da €900 una tantum, sostituisce Excel, WhatsApp e carta; (4) automazioni dei processi ripetitivi — solleciti pagamento, conferme appuntamento, preventivi automatici — per recuperare 8–15 ore a settimana; (5) chatbot AI sul sito per gestire l'80% delle domande ricorrenti senza personale. Costo totale di digitalizzazione per una micro-impresa: da €2.000 a €5.000 per l'intero percorso, con rientro dell'investimento in 6–12 mesi. E con gli incentivi Transizione 5.0 e Voucher Digitalizzazione MISE, il costo effettivo si riduce fino al 50%. Con RecGroup parti dalla chiamata gratuita di 30 minuti: mappiamo insieme le priorità e costruiamo il percorso un passo alla volta.",
  },
  {
    q: "Quali automazioni fanno risparmiare più tempo a un artigiano o un professionista?",
    a: "Le 5 automazioni con il maggior impatto per artigiani, professionisti e piccole imprese nel 2026: (1) prenotazione appuntamenti online — il 72% dei clienti preferisce prenotare online rispetto al telefono, e i promemoria automatici via WhatsApp (tasso di lettura superiore al 90%) riducono i no-show del 40–60%; (2) preventivi e documenti automatici — generati in secondi con dati precompilati dal gestionale, invece di 20–30 minuti copia-incolla da Word o Excel; (3) fatturazione elettronica SDI integrata — emetti, invii e archivi fatture B2B e PA senza uscire dal pannello, risparmiando 2–5 ore a settimana di lavoro amministrativo; (4) solleciti pagamento automatici — il sistema invia promemoria a scadenza senza che tu debba ricordartene; (5) richiesta recensioni Google automatica via WhatsApp — inviata 24 ore dopo ogni lavoro completato, con link diretto al profilo Google Business. Risultato tipico: +15–30 recensioni nei primi 90 giorni e impatto diretto sul posizionamento locale. Risparmio complessivo medio: 10–20 ore a settimana. Con RecGroup, il setup completo delle automazioni parte da €500 e si integra nel gestionale su misura.",
  },
  {
    q: "Quanto costa un sito web per un ristorante, una pizzeria o un bar nel 2026?",
    a: "Un sito web professionale per un ristorante o una pizzeria in Italia parte da €700 con RecGroup — menu digitale, prenotazione tavoli online, gallery fotografica, integrazione Google Maps e ottimizzazione SEO locale inclusi. Nel 2026, il 78% dei clienti cerca un ristorante su Google prima di decidere dove mangiare: senza un sito web veloce, mobile-first e con prenotazione integrata, stai perdendo coperti ogni giorno. Un sito template da piattaforme come Wix o Squarespace costa meno (100–200€/anno), ma non si posiziona su Google per keyword locali come 'ristorante pesce [città]' o 'pizzeria artigianale [quartiere]' — e non comunica la qualità del locale. Cosa include il nostro sito per ristorazione: menu digitale aggiornabile in autonomia, booking engine per prenotazione tavoli con conferma automatica via WhatsApp, integrazione con Google Business Profile, schema markup Restaurant per i rich snippet su Google, gallery ottimizzata per la ricerca visiva e velocità di caricamento sotto i 2 secondi. Per dark kitchen e take-away integriamo anche l'ordinazione online con pagamento diretto.",
  },
  {
    q: "Come ottimizzare Google Business Profile per comparire nel Local Pack di Google Maps?",
    a: "Il Local Pack — i 3 risultati in cima a Google Maps — cattura il 44% dei click su ricerche locali come 'idraulico vicino a me' o 'commercialista a Milano'. Nel 2026, con le ricerche 'vicino a me' cresciute del 400% dal 2020 e il 76% che porta a una visita in negozio entro 24 ore, essere nel Local Pack è il canale di acquisizione clienti più potente per qualsiasi attività locale. Gli errori che le PMI italiane commettono più spesso: profilo Google Business Profile incompleto (un profilo completo ha il 70% di probabilità in più di attrarre visite), categorie errate, orari non aggiornati, foto assenti o di bassa qualità, e incoerenza tra indirizzo sul sito e su Google Maps. Con RecGroup ottimizziamo il tuo profilo da zero: categoria primaria e secondarie corrette, descrizione con keyword locali, foto professionali geotaggate, post settimanali su Google Business Profile, gestione e risposta alle recensioni, e allineamento NAP (nome, indirizzo, telefono) tra sito, Google Maps e directory locali. Risultato tipico: ingresso nel Local Pack in 60–90 giorni per le keyword principali del tuo settore nella tua città.",
  },
  {
    q: "Il gestionale su misura include anche la gestione del magazzino e dell'inventario?",
    a: "Sì. Il modulo magazzino è una delle funzionalità più richieste dagli artigiani e dalle piccole imprese italiane — e una delle più sottovalutate. Gestire l'inventario con Excel o a memoria significa ordini doppi, merce scaduta, rotture di stock e ore perse a contare a mano. Il nostro gestionale personalizzato include: carico e scarico automatico collegato a ordini e fatture, alert soglia minima per riordino automatico, storico movimenti per ogni prodotto, gestione multi-magazzino (se hai più sedi o un furgone attrezzato), inventario con lettore barcode da smartphone e report statistici su giacenze, rotazione e valore del magazzino. A differenza dei gestionali in abbonamento come Danea Easyfatt (da 15€/mese per utente) o TeamSystem (da 30€/mese), il nostro modulo magazzino è integrato nel gestionale su misura a costo una tantum — zero canoni mensili per utente, zero limiti sul numero di articoli. Per un artigiano o un piccolo commerciante che gestisce 50–500 referenze, il risparmio medio è di 4–8 ore a settimana di lavoro manuale eliminato.",
  },
  {
    q: "Come usare l'email marketing per trovare clienti e fidelizzarli senza comprare liste?",
    a: "L'email marketing ha il ROI più alto tra tutti i canali digitali: in media 36€ guadagnati per ogni euro investito. Il punto chiave è costruire una lista propria di contatti qualificati — non comprarla: le liste comprate portano a tassi di apertura sotto il 5%, danni alla reputazione email e rischi GDPR seri. Come si costruisce una lista sana: modulo di iscrizione sul sito con un incentivo reale (checklist, sconto, guida scaricabile), popup di uscita con offerta specifica, integrazione con il gestionale per raccogliere email al momento dell'acquisto o della prenotazione. La sequenza che funziona per una PMI italiana: (1) email di benvenuto con valore immediato — tasso di apertura medio superiore all'80%; (2) 3–5 email di contenuto utile nel primo mese — costruisce fiducia prima di vendere; (3) email promozionale con offerta specifica; (4) richiesta di recensione Google 24–48 ore dopo ogni lavoro completato. Con RecGroup integriamo il modulo di iscrizione nel sito e le automazioni email nel gestionale: la lista cresce da sola, le email partono automaticamente. Setup completo da €400 — zero abbonamenti mensili a piattaforme esterne come Mailchimp o ActiveCampaign.",
  },
  {
    q: "App mobile o sito web: cosa conviene sviluppare per una PMI nel 2026?",
    a: "La risposta cambia a seconda dell'obiettivo. Un sito web responsive (ottimizzato per mobile) è il punto di partenza corretto per qualsiasi PMI: costa 10–20 volte meno di un'app nativa, si posiziona su Google, e il 92% delle ricerche locali avviene da smartphone su browser, non da app installate. Un'app mobile iOS/Android ha senso solo quando i tuoi clienti aprono lo strumento più volte al giorno — prenotazioni con notifiche push, app fidelity, portale clienti con login dedicato. I costi reali nel 2026: sito web responsive da €700 con RecGroup; app nativa iOS + Android da €8.000–25.000 di sviluppo + €1.500–3.000/anno di manutenzione. Per la maggior parte delle PMI italiane, un sito web mobile-first con Progressive Web App (PWA) risolve il 90% dei casi d'uso di un'app — notifiche push, accesso offline, icona sulla schermata home — a una frazione del costo. Consiglio pratico: parti sempre dal sito web. Se dopo 6 mesi hai prove concrete che i tuoi clienti userebbero un'app quotidianamente, valuta l'investimento. Con RecGroup ti aiutiamo a scegliere il percorso giusto nella chiamata gratuita di 30 minuti.",
  },
  {
    q: "Ha senso un sito web per un negozio fisico, un commerciante locale o un agriturismo?",
    a: "Assolutamente sì — nel 2026 è quasi imprescindibile. Il 76% dei consumatori italiani cerca online un negozio fisico prima di visitarlo: orari, indirizzo, prezzi, recensioni. Se non hai un sito, stai perdendo clienti in favore di chi ce l'ha. Per un negozio fisico il sito non serve a vendere online (quello è l'e-commerce), ma a: (1) comparire su Google quando qualcuno cerca 'negozio abbigliamento a [città]' o 'ferramenta aperta domenica [quartiere]'; (2) mostrare prodotti in vetrina con galleria fotografica aggiornabile in autonomia; (3) raccogliere contatti e prenotazioni senza telefonate; (4) gestire promozioni con post Google Business Profile integrati. Per gli agriturismi il sito è ancora più critico: il 68% delle prenotazioni parte da una ricerca Google — e piattaforme come Airbnb o Booking prendono commissioni dal 15 al 30%. Con un sito proprio e sistema di prenotazione integrato recuperi quelle commissioni già dalle prime settimane. Con RecGroup un sito per negozio fisico parte da €700 — gallery, mappa, orari e modulo di contatto inclusi. Un sito per agriturismo con booking integrato parte da €1.200, ampiamente sotto la prima commissione risparmiata.",
  },
  {
    q: "Come si inizia a lavorare con RecGroup?",
    a: "Con una chiamata gratuita di 30 minuti. Raccontaci il tuo progetto, le difficoltà attuali e gli obiettivi. Riceverai una proposta su misura entro 48 ore — senza impegno e senza costi anticipati.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-28 md:py-32 px-6 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--charcoal) 30%, var(--black))" }}
    >
      {/* Dividers */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.4) 50%, transparent 95%)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.4) 50%, transparent 95%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Domande Frequenti
            </p>
            <h2
              className="font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--ivory)" }}
            >
              Hai dubbi? <span className="accent-text">Risposto.</span>
            </h2>
            <p
              className="max-w-md text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              Le domande più comuni prima di iniziare. Se la tua non c'è,{" "}
              <a
                href="#contatti"
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: "var(--accent-light)" }}
              >
                scrivici →
              </a>
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 35}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: open === i ? "rgba(50,42,28,0.8)" : "rgba(42,36,24,0.55)",
                  border:
                    open === i
                      ? "1px solid rgba(201,168,76,0.32)"
                      : "1px solid rgba(201,168,76,0.09)",
                  backdropFilter: "blur(12px)",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}
              >
                <button
                  className="w-full flex items-start justify-between gap-4 text-left px-6 py-5"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span
                    className="text-sm md:text-base font-semibold leading-snug"
                    style={{
                      color:
                        open === i ? "var(--ivory)" : "rgba(245,240,232,0.78)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      background:
                        open === i
                          ? "rgba(201,168,76,0.18)"
                          : "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {open === i ? (
                      <Minus size={13} color="var(--accent)" />
                    ) : (
                      <Plus size={13} color="var(--accent)" />
                    )}
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <p
                    className="px-6 pb-6 text-sm leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center mt-12">
            <a
              href="#contatti"
              className="outline-btn rounded-full font-semibold tracking-wide text-sm"
              style={{ padding: "14px 36px" }}
            >
              Altra domanda? Scrivici →
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
