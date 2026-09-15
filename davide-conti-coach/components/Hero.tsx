import { hero, identity } from "@/content/site";
import CountUp from "./CountUp";
import PortraitSlot from "./PortraitSlot";
import { about } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-24 md:pb-20">
      {/* fondali */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,74,28,0.16) 0%, transparent 68%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,176,32,0.10) 0%, transparent 70%)" }}
      />
      {/* cognome filigrana */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-2vw] select-none overflow-hidden">
        <span
          className="display block whitespace-nowrap text-center"
          style={{
            fontSize: "clamp(6rem, 22vw, 20rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(244,243,240,0.055)",
          }}
        >
          {identity.lastName}
        </span>
      </div>

      <div className="shell relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* colonna testo */}
        <div>
          <div
            className="mb-7 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{
              border: "1px solid rgba(255,74,28,0.34)",
              background: "rgba(255,74,28,0.08)",
              color: "#FFB99F",
            }}
          >
            <span className="dot-live h-1.5 w-1.5 rounded-full" style={{ background: "var(--flame)" }} />
            {hero.badge}
          </div>

          <h1 className="display rise" style={{ fontSize: "clamp(2.9rem, 7.8vw, 5.4rem)" }}>
            {hero.headline.map((line, i) => (
              <span key={line} style={{ animationDelay: `${i * 110}ms` }} className="block">
                {i === hero.headline.length - 1 ? (
                  <em
                    className="serif-it not-italic"
                    style={{
                      fontStyle: "italic",
                      background: "linear-gradient(100deg, var(--flame), var(--ember))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {line}
                  </em>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--paper-dim)" }}
          >
            {hero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contatti" className="btn btn-flame">
              {hero.primaryCta}
              <span aria-hidden>&rarr;</span>
            </a>
            <a href={hero.secondaryHref} className="btn btn-ghost">
              {hero.secondaryCta}
            </a>
          </div>

          {/* statistiche */}
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 sm:gap-7">
            {hero.stats.map((s) => (
              <div key={s.label} className="border-l pl-4" style={{ borderColor: "rgba(255,74,28,0.4)" }}>
                <dt className="display whitespace-nowrap text-[clamp(1.5rem,4.2vw,2.1rem)]">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dt>
                <dd
                  className="mt-1 text-[11px] font-medium uppercase leading-tight tracking-[0.12em]"
                  style={{ color: "var(--paper-mute)" }}
                >
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* colonna ritratto */}
        <div className="relative hidden lg:block">
          <PortraitSlot
            src={about.portrait}
            alt={`${identity.fullName}, ${identity.role}`}
            className="aspect-[4/5] w-full"
            priority
          />
          <div
            className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl p-4"
            style={{ background: "var(--ink-3)", border: "1px solid var(--line)" }}
          >
            <p className="serif-it text-lg leading-snug">&ldquo;{identity.claim}&rdquo;</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
              {identity.fullName}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
