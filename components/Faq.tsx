"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Quanto costa un sito web o un gestionale?",
    a: "Ogni progetto è unico, quindi il prezzo dipende dalle funzionalità richieste. Indicativamente, un sito web parte da €500 e un gestionale personalizzato da €800. Il preventivo è sempre gratuito, dettagliato e senza sorprese.",
  },
  {
    q: "Quanto tempo ci vuole per consegnare?",
    a: "Un sito base è pronto in 1–2 settimane. Un gestionale completo richiede 3–6 settimane. Prima di iniziare ti diamo sempre una tempistica precisa — e la rispettiamo.",
  },
  {
    q: "Devo avere competenze tecniche per lavorare con voi?",
    a: "Assolutamente no. Ci occupiamo di tutto noi. Ti formiamo su come usare gli strumenti e restiamo disponibili per ogni domanda, anche dopo il lancio.",
  },
  {
    q: "Posso modificare il sito da solo, dopo?",
    a: "Sì. Costruiamo con pannelli di controllo intuitivi. Puoi aggiornare testi, immagini e contenuti in autonomia — senza toccare una riga di codice.",
  },
  {
    q: "Lavorate solo a Catania?",
    a: "Siamo di Catania, ma lavoriamo in tutta Italia. Chiamate, consegne e supporto avvengono online, quindi la distanza non è mai un problema.",
  },
  {
    q: "Come funziona il supporto dopo il lancio?",
    a: "Non sparisce nessuno. Restiamo disponibili via WhatsApp e email. Per chi ha bisogno di aggiornamenti frequenti, offriamo pacchetti di manutenzione mensile su misura.",
  },
  {
    q: "Gestite anche i social media?",
    a: "Sì. Dall'analisi del pubblico alla creazione dei contenuti, allo scheduling e ai report mensili. Puoi affidarci tutta la tua presenza digitale, se vuoi.",
  },
  {
    q: "Come si inizia?",
    a: "Basta una chiamata gratuita di 30 minuti. Raccontaci il tuo progetto e riceverai una proposta dettagliata entro 48 ore. Zero impegno, zero costi.",
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
                    maxHeight: open === i ? "240px" : "0",
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
