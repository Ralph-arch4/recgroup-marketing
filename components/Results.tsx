"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

// ⚠️ Aggiorna questi numeri con dati reali quando disponibili
const stats = [
  { value: 50,  suffix: "+", label: "Imprenditori Supportati",  sub: "consulenze e progetti" },
  { value: 4,   suffix: "",  label: "Prodotti Digitali Live",   sub: "SaaS e piattaforme" },
  { value: 48,  suffix: "h", label: "Proposta Consegnata",      sub: "dal primo contatto" },
  { value: 100, suffix: "%", label: "Progetti in Tempo",        sub: "zero ritardi" },
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
              Risultati, non{" "}
              <span className="accent-text">promesse.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}
