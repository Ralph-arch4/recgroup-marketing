import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    emoji: "🏋️",
    title: "Personal Trainer",
    description:
      "Gestisci clienti, schede e pagamenti da un'unica dashboard. Smetti di perdere ore con Excel — guadagna tempo per allenarti e crescere.",
  },
  {
    emoji: "✂️",
    title: "Parrucchieri & Barbieri",
    description:
      "Prenotazioni online, sito professionale e social curati. Più clienti senza alzare il telefono — il tuo lavoro parla da solo.",
  },
  {
    emoji: "🍽️",
    title: "Ristoranti & Locali",
    description:
      "Menu digitale via QR code, gestione tavoli e social attivi. Fai tornare i clienti — non solo per il cibo, ma per l'esperienza.",
  },
  {
    emoji: "🎪",
    title: "Catering & Banqueting",
    description:
      "Preventivi veloci, gestione eventi e un sito che convince prima ancora del primo incontro. Ogni dettaglio, curato come i tuoi menù.",
  },
  {
    emoji: "🏛️",
    title: "Ville per Eventi",
    description:
      "Mostra la location al meglio online, gestisci prenotazioni e automatizza le comunicazioni con gli sposi. Zero stress logistico.",
  },
];

export default function ForWho() {
  return (
    <section
      id="per-chi"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--charcoal) 40%, var(--black))" }}
    >
      {/* Dividers */}
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
              Per Chi Siamo
            </p>
            <h2
              className="font-black tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "var(--ivory)" }}
            >
              Il digitale che{" "}
              <span className="accent-text">capisce</span> il tuo lavoro
            </h2>
            <p
              className="max-w-lg text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              Non siamo un'agenzia generica. Conosciamo le sfide di chi lavora in proprio
              e costruiamo strumenti che si adattano a te — non il contrario.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 + 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {categories.slice(0, 3).map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <CategoryCard {...c} />
            </ScrollReveal>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {categories.slice(3).map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <CategoryCard {...c} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function CategoryCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-luxury rounded-2xl p-8 flex flex-col gap-4 h-full">
      <div className="text-4xl">{emoji}</div>
      <div>
        <h3 className="text-lg font-bold mb-2" style={{ color: "var(--ivory)" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
