import { LayoutDashboard, Globe, Tablet, Zap, Share2, Fingerprint } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: LayoutDashboard,
    title: "Gestionali",
    description:
      "Software gestionale personalizzato per freelancer e PMI. Clienti, fatture, appuntamenti e flussi di lavoro in un'unica dashboard su misura — non l'ennesimo foglio Excel. Recupera 3-5 ore a settimana dal primo giorno.",
  },
  {
    icon: Globe,
    title: "Siti Web",
    description:
      "Sito web professionale per PMI, freelancer e professionisti: veloce, ottimizzato per Google e pronto a convertire visitatori in clienti. Dal portfolio personale all'e-commerce — online in 2 settimane, visibile su Google in 30 giorni.",
  },
  {
    icon: Tablet,
    title: "Menu Digitali",
    description:
      "Menu digitale con QR code per ristoranti, bar e locali: aggiornabile in tempo reale, zero costi di stampa. Design coordinato al tuo brand. I clienti scansionano — tu incassi. Nessuna app da installare.",
  },
  {
    icon: Zap,
    title: "Automazione",
    description:
      "Automazione di email, WhatsApp e flussi di lavoro ripetitivi. Notifiche automatiche, follow-up clienti, sincronizzazione tra tool. Il sistema gira da solo — tu elimini gli errori e recuperi ore ogni settimana.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Gestione social media per freelancer e PMI: strategia mensile, contenuti professionali e report con KPI reali. Post che generano richieste di preventivo — non solo like. Presenza costante senza occupare il tuo tempo.",
  },
  {
    icon: Fingerprint,
    title: "Identità Online",
    description:
      "Brand identity digitale completa: logo, palette colori, tono di voce e presenza coordinata su ogni canale. Un'identità che i clienti riconoscono e ricordano — e che ti differenzia dalla concorrenza locale.",
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
              Sei soluzioni digitali integrate per freelancer e PMI italiane.
              Ogni progetto con obiettivo misurabile: più clienti, meno sprechi di tempo, crescita reale.
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
