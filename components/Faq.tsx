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
    q: "Quanto tempo si risparmia davvero con l'automazione dei processi?",
    a: "Le PMI italiane risparmiano mediamente 8–15 ore a settimana per dipendente dopo aver automatizzato fatturazione, solleciti pagamenti, gestione appuntamenti e report. Per un freelancer o un piccolo studio, significa recuperare 2–4 giorni interi al mese — tempo che puoi rivendere ai clienti.",
  },
  {
    q: "Le PMI possono accedere agli incentivi fiscali Transizione 5.0?",
    a: "Sì. Il piano Transizione 5.0 del MIMIT copre fino al 45% degli investimenti in beni digitali per le PMI italiane — siti web, gestionali e automazioni compresi. Un progetto da €2.000 può costarne effettivamente €1.100. Ti aiutiamo a capire cosa spetta alla tua impresa prima ancora di iniziare.",
  },
  {
    q: "Quanto tempo ci vuole per avere un sito web operativo?",
    a: "Un sito vetrina è online in 1–2 settimane. Un e-commerce o una piattaforma con area riservata richiede 3–6 settimane. Prima di iniziare ti diamo una data di consegna precisa — e la rispettiamo. Nessun cliente è mai rimasto senza aggiornamenti.",
  },
  {
    q: "Il sito web include l'ottimizzazione SEO per Google?",
    a: "Sì, sempre. Ogni sito parte già ottimizzato: struttura semantica, meta tag, Core Web Vitals, mobile-first e velocità di caricamento. Non è un extra a pagamento — è il minimo per comparire su Google e portare traffico organico nel tempo.",
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
    a: "Il percorso più efficiente per un freelancer o una piccola impresa: (1) sito ottimizzato SEO — porta contatti organici 24 ore su 24 senza pubblicità; (2) scheda Google Business aggiornata per il mercato locale; (3) automazione email per convertire i lead. Da €700 hai già tutto il necessario per smettere di dipendere dal passaparola.",
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
    a: "Sì. Oltre a Transizione 5.0 (fino al 45%), nel 2026 sono attivi il Voucher Digitalizzazione MISE — contributo a fondo perduto del 50% fino a €10.000 per PMI che investono in siti web, software e formazione digitale — e bandi regionali che variano da regione a regione. Ti aiutiamo a identificare quale incentivo si applica al tuo progetto specifico prima ancora di iniziare: stessa chiamata gratuita di 30 minuti, zero burocrazia da parte tua.",
  },
  {
    q: "Basta Instagram e Facebook per trovare clienti, o serve anche un sito web?",
    a: "I social danno visibilità — ma non ti appartengono. L'algoritmo cambia senza preavviso, l'account può essere sospeso, la portata organica cala ogni anno. Il sito web è tuo: indicizzato su Google, attivo 24 ore su 24, raccoglie contatti qualificati anche mentre dormi. La strategia che funziona nel 2026: sito come hub centrale (SEO, credibilità, conversioni) + social come amplificatore di traffico verso il sito. Senza sito, stai costruendo su terreno affittato.",
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
                    maxHeight: open === i ? "320px" : "0",
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
