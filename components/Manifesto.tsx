import ScrollReveal from "./ScrollReveal";

const nonFacciamo = [
  "Siti template uguali per tutti",
  "Promesse senza numeri",
  "Contratti a lungo termine forzati",
  "Agenzie che spariscono dopo il lancio",
  "Tecnicismi che confondono il cliente",
];

export default function Manifesto() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Subtle gradient bg shift */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div id="manifesto" className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left — manifesto statement */}
          <ScrollReveal>
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
                style={{ color: "var(--accent)" }}
              >
                Il Nostro Manifesto
              </p>

              <h2
                className="font-black tracking-tight leading-[1.12] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--ivory)" }}
              >
                Catania ha imprenditori
                straordinari.{" "}
                <span className="accent-text">Le grandi agenzie li ignorano.</span>
              </h2>

              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ color: "rgba(245,240,232,0.62)" }}
              >
                <p>
                  Ristoratori, barbieri, trainer, organizzatori di eventi — persone che costruiscono
                  qualcosa di concreto ogni giorno. Meritano gli stessi strumenti digitali delle
                  multinazionali, senza i prezzi da multinazionale.
                </p>
                <p>
                  Non siamo consulenti che parlano di strategie. Siamo costruttori.
                  Prendiamo il tuo lavoro e lo trasformiamo in un sistema digitale
                  che funziona anche quando dormi.
                </p>
                <p
                  className="font-semibold"
                  style={{ color: "rgba(245,240,232,0.85)" }}
                >
                  Massimo 3 nuovi clienti al mese — per garantire che ogni progetto
                  riceva l'attenzione che merita.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — cosa non facciamo */}
          <ScrollReveal delay={150}>
            <div>
              <p
                className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
                style={{ color: "rgba(245,240,232,0.35)" }}
              >
                Cosa Non Facciamo
              </p>

              <div className="space-y-3 mb-10">
                {nonFacciamo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-xl"
                    style={{
                      background: "rgba(42,36,24,0.5)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        color: "rgba(239,68,68,0.7)",
                        border: "1px solid rgba(239,68,68,0.2)",
                      }}
                    >
                      ✕
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "rgba(245,240,232,0.52)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Separator + cosa facciamo */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.18)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  Quello che facciamo, invece:
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.62)" }}
                >
                  Ascoltiamo, progettiamo, costruiamo e restiamo.
                  Ogni soluzione è unica. Ogni cliente è trattato come se fosse l'unico.
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
