import { identity, programs, whatsappLink } from "@/content/site";
import Reveal from "./Reveal";

export default function Programs() {
  return (
    <section id="percorsi" className="relative py-24 md:py-32" style={{ background: "var(--ink-2)", borderBlock: "1px solid var(--line)" }}>
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{programs.eyebrow}</p>
          <h2 className="display mt-4 max-w-3xl" style={{ fontSize: "clamp(2.1rem, 5.6vw, 4rem)" }}>
            {programs.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "var(--paper-dim)" }}>
            {programs.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {programs.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <article
                className="surface surface-hover relative flex h-full flex-col p-7 md:p-8"
                style={
                  p.featured
                    ? {
                        borderColor: "rgba(255,74,28,0.5)",
                        background:
                          "radial-gradient(140% 80% at 50% 0%, rgba(255,74,28,0.13) 0%, transparent 58%), rgba(255,255,255,0.02)",
                      }
                    : undefined
                }
              >
                {p.featured && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ background: "var(--flame)", color: "#fff" }}
                  >
                    Il più scelto
                  </span>
                )}

                <h3 className="display text-2xl">{p.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                  {p.tagline}
                </p>

                <p className="mt-7 flex items-baseline gap-1.5">
                  <span className="display text-[clamp(2rem,5vw,2.8rem)]">
                    {p.price !== "su misura" && <span className="text-[0.55em] align-super">&euro;</span>}
                    {p.price}
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.14em]" style={{ color: "var(--paper-mute)" }}>
                    {p.period}
                  </span>
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] leading-snug">
                      <svg
                        className="mt-0.5 shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--flame)"
                        strokeWidth="3"
                        aria-hidden
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      <span style={{ color: "var(--paper-dim)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `Ciao ${identity.firstName}, sono interessato al percorso "${p.name}". Puoi darmi maggiori informazioni?`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn mt-8 w-full ${p.featured ? "btn-flame" : "btn-ghost"}`}
                >
                  {p.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
