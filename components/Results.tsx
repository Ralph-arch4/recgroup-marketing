"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 70,  suffix: "+", label: "Clienti Soddisfatti",     sub: "freelancer, PMI e startup — su 5,1 milioni di lavoratori autonomi in Italia (ISTAT 2025, +2,8% annuo), solo il 16,4% sfrutta il digitale avanzato. I nostri clienti fanno parte di quel gruppo." },
  { value: 3,   suffix: "×", label: "ROI Medio",               sub: "ritorno sull'investimento in 4–7 mesi — media mercato: 12+ mesi. Confermato dai dati di settore 2026" },
  { value: 40,  suffix: "%", label: "Risparmio Tempo",         sub: "meno ore su fatturazione elettronica, preventivi, CRM e gestione clienti — il 52,6% delle imprese ha già investito in digitale" },
  { value: 48,  suffix: "h", label: "Risposta Garantita",      sub: "preventivo gratuito in 48 h — zero costi nascosti, zero abbonamenti SaaS obbligatori" },
];

const caseStudies = [
  {
    category: "Sito Web + SEO Locale",
    title: "Studio Legale — Catania",
    result: "+340% visite organiche in 6 mesi",
    detail: "Da zero presenza online a prima pagina Google per 12 keyword locali. Investimento da 2.800 € — contro i 5.000–7.000 €/mese di un'agenzia tradizionale. Solo il 26% delle PMI italiane ha digitalizzazione avanzata (ISTAT 2025) — i nostri clienti ci arrivano.",
  },
  {
    category: "Gestionale Su Misura",
    title: "Consulente HR — Freelancer",
    result: "10 ore/settimana risparmiate",
    detail: "Software gestionale personalizzato con automazione preventivi, contratti e fatturazione elettronica: da 3 ore manuali a un click. Costo una tantum da 1.800 € — nessun canone SaaS mensile, proprietà totale. Su 5,1 milioni di freelancer italiani (ISTAT 2025), solo il 14,2% usa l'AI: noi ti portiamo avanti agli altri.",
  },
  {
    category: "Automazione & CRM",
    title: "Agenzia Immobiliare — PMI",
    result: "−65% tempo gestione lead",
    detail: "CRM personalizzato con scoring automatico, follow-up WhatsApp e report settimanale. Chiusure contratti +28% in 90 giorni. Agevolabile con Bonus Transizione 5.0 — credito d'imposta fino al 45% per innovazione digitale.",
  },
  {
    category: "E-commerce + Vendita Online",
    title: "Artigiano — Ceramiche Siciliane",
    result: "+180% fatturato online in 4 mesi",
    detail: "Solo il 20% delle imprese italiane vende online (ISTAT 2025). E-commerce su misura con pagamenti integrati, spedizioni automatizzate e SEO per 8 keyword di nicchia. Da 0 a 47 ordini/mese senza marketplace.",
  },
  {
    category: "Menu Digitale QR + Sito Web",
    title: "Ristorante — Sicilia",
    result: "72% dei clienti consulta il menu prima di prenotare",
    detail: "Solo il 14,6% dei ristoranti italiani ha un menu digitale: menu QR multilingua con foto piatti e allergeni sempre aggiornati da pannello, zero ristampe. ROI medio di settore 250–400% nel primo anno.",
  },
];

function CountUp({
  to,
  suffix = "",
  duration = 1600,
  started,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function StatCard({
  value,
  suffix,
  label,
  sub,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="card-luxury rounded-2xl px-4 py-8 sm:px-8 sm:py-10 flex flex-col items-center text-center"
    >
      <div
        className="text-4xl sm:text-5xl font-black mb-2 tabular-nums"
        style={{ color: "var(--accent)", letterSpacing: "-0.02em" }}
      >
        <CountUp to={value} suffix={suffix} started={started} />
      </div>
      <p
        className="text-xs sm:text-sm font-bold mb-1 leading-snug"
        style={{ color: "var(--ivory)" }}
      >
        {label}
      </p>
      <p
        className="text-xs"
        style={{ color: "rgba(245,240,232,0.35)" }}
      >
        {sub}
      </p>
    </div>
  );
}

export default function Results() {
  return (
    <section id="risultati" className="relative py-24 px-6 overflow-hidden">

      <div className="max-w-5xl mx-auto">

        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-14">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              I Numeri
            </p>
            <h2
              className="font-black tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--ivory)" }}
            >
              Numeri reali.{" "}
              <span className="accent-text">Risultati reali.</span>
            </h2>
            <p
              className="mt-4 text-sm sm:text-base max-w-xl"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Sono <strong style={{color:"var(--accent)"}}>5,1 milioni</strong> i freelancer in Italia (ISTAT 2025) — 2° paese UE per lavoro autonomo, crescita +2,8% annuo. Solo il 16,4% usa strumenti digitali avanzati per crescere davvero. Noi ti portiamo in quel gruppo: ROI misurabile in 4–7 mesi, gestionale su misura da 1.800 €, preventivo gratuito in 48 h.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 100} />
          ))}
        </div>

        <ScrollReveal>
          <p
            className="mt-10 text-center text-xs tracking-[0.12em] uppercase"
            style={{ color: "rgba(201,168,76,0.5)" }}
          >
            ROI in 4–7 mesi&nbsp;&middot;&nbsp;Sito web PMI Italia&nbsp;&middot;&nbsp;Software gestionale personalizzato piccola impresa&nbsp;&middot;&nbsp;Automazione fatturazione elettronica freelancer&nbsp;&middot;&nbsp;CRM personalizzato PMI&nbsp;&middot;&nbsp;Prima pagina Google azienda locale&nbsp;&middot;&nbsp;Agenzia digitale Sud Italia&nbsp;&middot;&nbsp;Bonus Transizione 5.0 credito imposta&nbsp;&middot;&nbsp;E-commerce artigianale&nbsp;&middot;&nbsp;5,1 milioni freelancer Italia ISTAT 2025&nbsp;&middot;&nbsp;AI per piccole imprese&nbsp;&middot;&nbsp;Menu digitale QR ristorante&nbsp;&middot;&nbsp;digitalizzazione lavoratori autonomi Italia&nbsp;&middot;&nbsp;gestionale freelancer senza abbonamento
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16">
            <p
              className="text-center text-xs font-semibold tracking-[0.25em] uppercase mb-8"
              style={{ color: "var(--accent)" }}
            >
              Case Study
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudies.map((cs) => (
                <div
                  key={cs.title}
                  className="glass rounded-2xl p-6"
                  style={{ borderTop: "1px solid rgba(201,168,76,0.18)" }}
                >
                  <p
                    className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    {cs.category}
                  </p>
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ color: "var(--ivory)" }}
                  >
                    {cs.title}
                  </p>
                  <p
                    className="text-base font-black mb-2"
                    style={{ color: "var(--accent-light, #E8CC7A)" }}
                  >
                    {cs.result}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(245,240,232,0.45)" }}
                  >
                    {cs.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
