import { LayoutDashboard, Globe, Tablet, Zap, Share2, Fingerprint } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: LayoutDashboard,
    title: "Gestionali",
    description:
      "Dimentica Excel e i fogli volanti. Clienti, fatture, appuntamenti e flussi di lavoro in un'unica dashboard costruita attorno al tuo modo di lavorare.",
  },
  {
    icon: Globe,
    title: "Siti Web",
    description:
      "Da zero a online in tempi record. Veloce, moderno e trovabile su Google. Dal portfolio personale all'e-commerce, costruiamo la tua presenza online.",
  },
  {
    icon: Tablet,
    title: "Menu Digitali",
    description:
      "QR code + menu sempre aggiornato in tempo reale. Design che rispecchia il tuo brand. I clienti ordinano — tu incassi. Senza app da scaricare.",
  },
  {
    icon: Zap,
    title: "Automazione",
    description:
      "Elimina le attività ripetitive: email, notifiche, sincronizzazioni tra tool. Il sistema lavora da solo — tu ti concentri su ciò che conta davvero.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Strategia, contenuti professionali, scheduling e analisi. La tua voce nel digitale, amplificata. Post che fermano lo scroll e portano clienti.",
  },
  {
    icon: Fingerprint,
    title: "Identità Online",
    description:
      "Logo, palette, tono di voce e presenza coerente su tutti i canali. Un'identità digitale che si ricorda al primo colpo — e si distingue dalla massa.",
  },
];

export default function Services() {
  return (
    <section
      id="servizi"
      className="relative py-32 px-6"
      style={{ background: "color-mix(in srgb, var(--charcoal) 40%, var(--black))" }}
    >
      {/* Top / bottom gold dividers */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.5) 50%, transparent 95%)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.5) 50%, transparent 95%)",
        }}
      />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Cosa Facciamo
            </p>
            <h2
              className="font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "var(--ivory)" }}
            >
              I nostri <span className="accent-text">Servizi</span>
            </h2>
            <p
              className="max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              Sei soluzioni integrate. Ogni risultato misurabile.
              Nessun tecnicismo — solo crescita reale per la tua attività.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="card-luxury rounded-2xl p-8 h-full flex flex-col">

                  {/* Number */}
                  <div
                    className="text-xs font-mono mb-4"
                    style={{ color: "rgba(201,168,76,0.3)" }}
                  >
                    0{i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(201,168,76,0.09)",
                      border: "1px solid rgba(201,168,76,0.18)",
                    }}
                  >
                    <Icon size={22} color="var(--accent)" strokeWidth={1.5} />
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--ivory)" }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(245,240,232,0.5)" }}
                  >
                    {s.description}
                  </p>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom link */}
        <ScrollReveal delay={200}>
          <p
            className="text-center mt-14 text-sm"
            style={{ color: "rgba(245,240,232,0.3)" }}
          >
            Hai bisogno di qualcosa di diverso?{" "}
            <a
              href="#contatti"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
              style={{ color: "var(--accent-light)" }}
            >
              Parliamone →
            </a>
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
