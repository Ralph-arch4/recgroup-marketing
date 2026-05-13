import { Phone, Pencil, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Chiamata Gratuita",
    description:
      "In 30 minuti capiamo le tue esigenze, i tuoi obiettivi e le sfide reali della tua attività. Nessun impegno — solo ascolto.",
    badge: "30 min · Zero costi",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Proposta su Misura",
    description:
      "Entro 48 ore ricevi una proposta chiara con soluzione, tempi e prezzi. Niente tecnicismi, niente sorprese.",
    badge: "Entro 48 ore",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lancio & Crescita",
    description:
      "Costruiamo, testiamo e lanciamo. Rimaniamo al tuo fianco anche dopo — perché il tuo successo è il nostro successo.",
    badge: "Supporto continuo",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="relative py-32 px-6 overflow-hidden">

      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-4">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-2"
              style={{ color: "rgba(245,240,232,0.28)" }}
            >
              Metodologia
            </p>
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              — Metodo REC —
            </p>
            <h2
              className="font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "var(--ivory)" }}
            >
              Semplice. <span className="accent-text">Veloce.</span> Efficace.
            </h2>
            <p
              className="max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              Un processo rodato in 3 fasi, pensato per consegnare risultati
              reali senza sprecare il tuo tempo.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-16">

          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[3.75rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.2) 80%, transparent)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 140}>
                <div className="card-luxury rounded-2xl p-8 flex flex-col items-center text-center h-full">

                  <p
                    className="text-xs font-mono font-bold mb-4"
                    style={{ color: "rgba(201,168,76,0.3)" }}
                  >
                    {step.number}
                  </p>

                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.09)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <Icon size={26} color="var(--accent)" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="text-lg font-black mb-3"
                    style={{ color: "var(--ivory)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: "rgba(245,240,232,0.52)" }}
                  >
                    {step.description}
                  </p>

                  <div
                    className="px-4 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(201,168,76,0.07)",
                      border: "1px solid rgba(201,168,76,0.18)",
                      color: "var(--accent)",
                    }}
                  >
                    {step.badge}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={350}>
          <div className="flex justify-center mt-14">
            <a
              href="#contatti"
              className="accent-btn cta-glow rounded-full font-bold tracking-wide text-base"
              style={{ padding: "16px 42px" }}
            >
              Prenota la Tua Chiamata Gratuita →
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
