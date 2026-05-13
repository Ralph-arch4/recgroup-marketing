import ScrollReveal from "./ScrollReveal";

const members = [
  {
    initials: "ES",
    name: "Edoardo S.",
    role: "Business Developer",
    bio: "Trasforma ogni conversazione in opportunità. Porta le aziende locali nel digitale con visione strategica e approccio umano.",
    accent: "#C9A84C",
  },
  {
    initials: "CS",
    name: "Ciro S.",
    role: "Social Media Manager",
    bio: "Crea contenuti che fermano lo scroll e fanno crescere i brand. Strategia, creatività e dati — tutto in uno.",
    accent: "#C9A84C",
  },
  {
    initials: "RD",
    name: "Raffaele D.",
    role: "CTO",
    bio: "Architetta soluzioni digitali su misura. Dalla prima riga di codice al lancio in produzione, con precisione e velocità.",
    accent: "#C9A84C",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">

      {/* Subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <div
          className="w-[500px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Il Team
            </p>
            <h2
              className="font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "var(--ivory)" }}
            >
              Persone <span className="accent-text">reali</span>, non un'azienda
            </h2>
            <p
              className="max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              I clienti locali comprano dalle persone. Siamo tre ragazzi di Catania
              che hanno deciso di portare il digitale dove serve davvero.
            </p>
          </div>
        </ScrollReveal>

        {/* Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <ScrollReveal key={m.name + i} delay={i * 120}>
              <div className="card-luxury rounded-2xl p-8 flex flex-col items-center text-center gap-5 h-full">

                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black flex-shrink-0"
                  style={{
                    background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    border: "2px solid color-mix(in srgb, var(--accent) 28%, transparent)",
                    color: "var(--accent)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {m.initials}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "var(--ivory)" }}>
                    {m.name}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    {m.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
                    {m.bio}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
