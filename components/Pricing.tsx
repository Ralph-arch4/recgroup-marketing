import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Starter",
    tagline: "Presenza Online",
    description: "Per chi parte da zero e vuole un'identità digitale professionale in tempi rapidi.",
    features: [
      "Sito web professionale (5 pagine)",
      "Identità visiva (logo + palette + font)",
      "Setup Google Business Profile",
      "QR code + menu digitale (se ristorante)",
      "1 mese social media management",
      "Consegna in 2 settimane",
    ],
    cta: "Inizia da qui →",
    highlighted: false,
    accentColor: "rgba(201,168,76,0.18)",
    borderColor: "rgba(201,168,76,0.15)",
  },
  {
    name: "Growth",
    tagline: "Crescita Attiva",
    description: "Per chi ha già una base e vuole accelerare con strumenti digitali completi.",
    features: [
      "Tutto di Starter, più:",
      "Gestionale personalizzato o SaaS",
      "Social media management 3 mesi",
      "SEO + Google Ads setup",
      "Automazioni WhatsApp/Email",
      "Report mensile con KPI",
      "Supporto prioritario",
    ],
    cta: "Il più scelto →",
    highlighted: true,
    accentColor: "rgba(201,168,76,0.1)",
    borderColor: "rgba(201,168,76,0.45)",
  },
  {
    name: "Pro",
    tagline: "Ecosistema Digitale",
    description: "Per chi vuole un ecosistema digitale completo che scala insieme all'attività.",
    features: [
      "Tutto di Growth, più:",
      "SaaS su misura full-stack",
      "Social media management 6 mesi",
      "Automazioni avanzate + CRM",
      "Canale Slack dedicato",
      "Call settimanale di allineamento",
      "Aggiornamenti e iterazioni illimitate",
    ],
    cta: "Parliamo →",
    highlighted: false,
    accentColor: "rgba(201,168,76,0.18)",
    borderColor: "rgba(201,168,76,0.15)",
  },
];

export default function Pricing() {
  return (
    <section id="pacchetti" className="relative py-32 px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Pacchetti
            </p>
            <h2
              className="font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "var(--ivory)" }}
            >
              Scegli il tuo{" "}
              <span className="accent-text">punto di partenza.</span>
            </h2>
            <p
              className="max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              Ogni pacchetto è un punto di partenza — non un limite.
              Costruiamo sempre su misura, con trasparenza totale sui costi.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 110}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  background: plan.highlighted
                    ? "rgba(42,36,24,0.85)"
                    : "rgba(34,28,18,0.6)",
                  border: `1px solid ${plan.borderColor}`,
                  backdropFilter: "blur(12px)",
                  position: "relative",
                  boxShadow: plan.highlighted
                    ? "0 0 60px rgba(201,168,76,0.1), 0 20px 60px rgba(0,0,0,0.5)"
                    : "none",
                }}
              >
                {/* "Più scelto" badge */}
                {plan.highlighted && (
                  <div
                    className="text-center py-2 text-xs font-bold tracking-[0.2em] uppercase"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), var(--accent-dark))",
                      color: "#1A1610",
                    }}
                  >
                    Più Scelto
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1 gap-6">
                  {/* Plan name */}
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      {plan.tagline}
                    </p>
                    <h3
                      className="text-2xl font-black mb-3"
                      style={{ color: "var(--ivory)" }}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.5)" }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: "rgba(201,168,76,0.12)",
                            border: "1px solid rgba(201,168,76,0.25)",
                          }}
                        >
                          <Check
                            size={9}
                            strokeWidth={3}
                            color="var(--accent)"
                          />
                        </div>
                        <span
                          className="text-sm leading-snug"
                          style={{
                            color:
                              f.startsWith("Tutto")
                                ? "rgba(201,168,76,0.7)"
                                : "rgba(245,240,232,0.65)",
                            fontStyle: f.startsWith("Tutto") ? "italic" : "normal",
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contatti"
                    className={plan.highlighted ? "accent-btn cta-glow rounded-full text-sm font-bold text-center py-4" : "outline-btn rounded-full text-sm font-semibold text-center py-4"}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Footer note */}
        <ScrollReveal delay={250}>
          <p
            className="text-center mt-10 text-sm"
            style={{ color: "rgba(245,240,232,0.28)" }}
          >
            Tutti i prezzi sono su preventivo gratuito —{" "}
            <span style={{ color: "rgba(245,240,232,0.45)" }}>
              nessun costo nascosto, nessun contratto forzato.
            </span>
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
