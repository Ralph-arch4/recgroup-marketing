import { transformations } from "@/content/site";
import BeforeAfter from "./BeforeAfter";
import DraftNotice from "./DraftNotice";
import Reveal from "./Reveal";

export default function Transformations() {
  return (
    <section id="risultati" className="relative py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <DraftNotice text="Sezione in completamento — foto e dati di Ciro ed Edo in arrivo" />
          <p className="eyebrow">{transformations.eyebrow}</p>
          <h2 className="display mt-4 max-w-3xl" style={{ fontSize: "clamp(2.1rem, 5.6vw, 4rem)" }}>
            {transformations.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "var(--paper-dim)" }}>
            {transformations.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {transformations.cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="surface h-full overflow-hidden p-3">
                <BeforeAfter before={c.before} after={c.after} name={c.name} />

                <div className="px-3 pb-3 pt-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="display text-xl">
                      {c.name}, {c.age}
                    </h3>
                    {c.goal && (
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                        style={{ background: "rgba(255,74,28,0.14)", color: "#FF8B63" }}
                      >
                        {c.goal}
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-3 text-[15px] leading-relaxed"
                    style={{ color: c.result ? "var(--paper)" : "var(--paper-mute)" }}
                  >
                    {c.result || "Risultato da confermare"}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
                    {c.weeks ? `${c.weeks} settimane di percorso` : "Durata da confermare"}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-xs" style={{ color: "var(--paper-mute)" }}>
            {transformations.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
