import { method } from "@/content/site";
import Reveal from "./Reveal";

export default function Method() {
  return (
    <section id="metodo" className="relative py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{method.eyebrow}</p>
          <h2 className="display mt-4 max-w-3xl" style={{ fontSize: "clamp(2.1rem, 5.6vw, 4rem)" }}>
            {method.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed" style={{ color: "var(--paper-dim)" }}>
            {method.intro}
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {method.steps.map((step, i) => (
            <Reveal key={step.n} as="li" delay={i * 90}>
              <article className="surface surface-hover h-full p-7 md:p-8">
                <header className="flex items-baseline justify-between gap-4">
                  <span
                    className="display text-[clamp(2.4rem,6vw,3.4rem)]"
                    style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,74,28,0.55)" }}
                  >
                    {step.n}
                  </span>
                  <h3 className="display text-xl md:text-2xl">{step.title}</h3>
                </header>

                <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                  {step.body}
                </p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[13px]" style={{ color: "var(--paper)" }}>
                      <span
                        className="mt-[7px] block h-1.5 w-1.5 shrink-0 rotate-45"
                        style={{ background: "var(--flame)" }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
