import { testimonials } from "@/content/site";
import DraftNotice from "./DraftNotice";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <DraftNotice text="Testimonianze dimostrative — da sostituire con recensioni reali" />
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="display mt-4 max-w-3xl" style={{ fontSize: "clamp(2.1rem, 5.6vw, 4rem)" }}>
            {testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.author} delay={i * 90} className="h-full">
              <figure className="surface surface-hover flex h-full flex-col p-7">
                <span className="display text-5xl leading-none" style={{ color: "rgba(255,74,28,0.5)" }}>
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                  {t.quote}
                </blockquote>
                <figcaption className="hairline mt-6 pt-4">
                  <span className="display block text-sm">{t.author}</span>
                  <span className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
                    {t.detail}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
