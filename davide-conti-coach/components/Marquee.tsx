import { marquee } from "@/content/site";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div
      className="relative overflow-hidden py-5"
      style={{ borderBlock: "1px solid var(--line)", background: "var(--ink-2)" }}
      aria-hidden
    >
      <div className="marquee-track items-center gap-10">
        {items.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span
              className="display text-[clamp(1.1rem,2.4vw,1.7rem)]"
              style={{ color: i % 2 ? "var(--paper)" : "transparent", WebkitTextStroke: i % 2 ? "0" : "1px rgba(244,243,240,0.4)" }}
            >
              {word}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rotate-45" style={{ background: "var(--flame)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
