"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 50,  suffix: "+", label: "Clienti Soddisfatti",     sub: "freelancer, PMI e startup in tutta Italia" },
  { value: 3,   suffix: "×", label: "ROI Medio",               sub: "ritorno sull'investimento digitale entro 12 mesi" },
  { value: 30,  suffix: "%", label: "Risparmio Tempo",         sub: "riduzione media sui processi amministrativi" },
  { value: 48,  suffix: "h", label: "Preventivo Gratuito",     sub: "risposta garantita, zero burocrazia" },
];

const caseStudies = [
  {
    category: "Sito Web + SEO",
    title: "Studio legale, Catania",
    result: "+340% visite organiche in 6 mesi",
    detail: "Da zero presenza online a prima pagina Google per 12 keyword locali.",
  },
  {
    category: "Gestionale Su Misura",
    title: "Consulente HR freelancer",
    result: "8 ore/settimana risparmiate",
    detail: "Automazione preventivi, contratti e fatturazione: da manuale a un click.",
  },
  {
    category: "Automazione Processi",
    title: "Agenzia immobiliare, PMI",
    result: "−60% tempo gestione lead",
    detail: "CRM personalizzato con notifiche automatiche e follow-up via WhatsApp.",
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
              <span className="accent-text">Clienti reali.</span>
            </h2>
            <p
              className="mt-4 text-sm sm:text-base max-w-xl"
              style={{ color: "rgba(245,240,232,0.55)" }}
            >
              Siti web professionali, gestionali su misura e automazioni per freelancer e PMI italiane — con ROI misurabile e zero sprechi di tempo.
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
            ROI misurabile entro 12 mesi&nbsp;&middot;&nbsp;Automazione processi PMI&nbsp;&middot;&nbsp;Sito web professionale Italia&nbsp;&middot;&nbsp;Zero ritardi
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
