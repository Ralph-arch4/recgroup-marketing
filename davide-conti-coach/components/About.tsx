import { about, identity } from "@/content/site";
import PortraitSlot from "./PortraitSlot";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="chi-sono" className="relative py-24 md:py-32">
      <div className="shell grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <PortraitSlot
            src={about.portrait}
            alt={`${identity.fullName} in palestra`}
            className="aspect-[4/5] w-full"
            label="Ritratto in arrivo"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="display mt-4" style={{ fontSize: "clamp(2.1rem, 5.6vw, 4rem)" }}>
              {about.title}
            </h2>
            <p className="mt-3 text-[13px] uppercase tracking-[0.2em]" style={{ color: "var(--paper-mute)" }}>
              {identity.role}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="text-base leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <blockquote
              className="serif-it mt-10 border-l-2 pl-6 text-[clamp(1.3rem,3.2vw,1.9rem)] leading-snug"
              style={{ borderColor: "var(--flame)", color: "var(--paper)" }}
            >
              &ldquo;{about.quote}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2" style={{ background: "var(--line)" }}>
              {about.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 p-4 text-[13px]"
                  style={{ background: "var(--ink)", color: "var(--paper-dim)" }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45" style={{ background: "var(--flame)" }} />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
