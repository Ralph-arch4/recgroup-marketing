"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 50,  suffix: "+", label: "Clienti Soddisfatti",     sub: "freelancer, PMI e startup — da Catania a Milano, Roma, Torino" },
  { value: 3,   suffix: "×", label: "ROI Medio",               sub: "ritorno sull'investimento in 4–7 mesi — media italiana: 12+ mesi" },
  { value: 40,  suffix: "%", label: "Risparmio Tempo",         sub: "riduzione su fatturazione elettronica, preventivi, CRM e follow-up" },
  { value: 48,  suffix: "h", label: "Risposta Garantita",      sub: "preventivo gratuito in 48 h — nessun costo nascosto, mai" },
];

const caseStudies = [
  {
    category: "Sito Web + SEO Locale",
    title: "Studio Legale — Catania",
    result: "+340% visite organiche in 6 mesi",
    detail: "Da zero presenza online a prima pagina Google per 12 keyword locali. Investimento da 2.800 € — costo recuperato in 5 mesi grazie a +340% di richieste organiche.",
  },
  {
    category: "Gestionale Su Misura",
    title: "Consulente HR — Freelancer",
    result: "10 ore/settimana risparmiate",
    detail: "Gestionale su misura con automazione preventivi, contratti e fatturazione elettronica: da 3 ore manuali a un click. Nessun canone SaaS mensile — proprietà totale del software.",
  },
  {
    category: "Automazione & CRM",
    title: "Agenzia Immobiliare — PMI",
    result: "−65% tempo gestione lead",
    detail: "CRM personalizzato con scoring automatico dei lead, follow-up WhatsApp e report settimanale. Chiusure contratti +28% in 90 giorni. Agevolabile con Bonus Transizione 5.0.",
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
              Il 58% delle PMI italiane ha già un sito web, ma solo il 21% lo usa per vendere (ISTAT 2024). Noi costruiamo la tua presenza digitale per stare nel 21% — ROI misurabile in 4–7 mesi, zero abbonamenti nascosti.
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
            ROI in 4–7 mesi&nbsp;&middot;&nbsp;Sito web PMI Italia&nbsp;&middot;&nbsp;Gestionale su misura piccola impresa&nbsp;&middot;&nbsp;Automazione fatturazione freelancer&nbsp;&middot;&nbsp;CRM personalizzato freelancer&nbsp;&middot;&nbsp;Prima pagina Google PMI&nbsp;&middot;&nbsp;Agenzia digitale Sud Italia&nbsp;&middot;&nbsp;Bonus Transizione 5.0
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
