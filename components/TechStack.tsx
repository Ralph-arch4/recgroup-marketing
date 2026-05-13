"use client";
import ScrollReveal from "./ScrollReveal";

const tools = [
  { name: "Next.js",    color: "#ffffff", bg: "rgba(255,255,255,0.06)",  border: "rgba(255,255,255,0.12)", dot: "#ffffff" },
  { name: "Vercel",     color: "#ffffff", bg: "rgba(255,255,255,0.06)",  border: "rgba(255,255,255,0.12)", dot: "#ffffff" },
  { name: "Supabase",   color: "#3ECF8E", bg: "rgba(62,207,142,0.07)",   border: "rgba(62,207,142,0.2)",  dot: "#3ECF8E" },
  { name: "Stripe",     color: "#7C72FF", bg: "rgba(124,114,255,0.07)",  border: "rgba(124,114,255,0.2)", dot: "#7C72FF" },
  { name: "Tailwind",   color: "#38BDF8", bg: "rgba(56,189,248,0.07)",   border: "rgba(56,189,248,0.2)",  dot: "#38BDF8" },
  { name: "TypeScript", color: "#3178C6", bg: "rgba(49,120,198,0.07)",   border: "rgba(49,120,198,0.2)",  dot: "#3178C6" },
  { name: "Meta Ads",   color: "#0866FF", bg: "rgba(8,102,255,0.07)",    border: "rgba(8,102,255,0.2)",   dot: "#0866FF" },
  { name: "Google",     color: "#EA4335", bg: "rgba(234,67,53,0.07)",    border: "rgba(234,67,53,0.2)",   dot: "#EA4335" },
  { name: "Zapier",     color: "#FF4A00", bg: "rgba(255,74,0,0.07)",     border: "rgba(255,74,0,0.2)",    dot: "#FF4A00" },
  { name: "Figma",      color: "#F24E1E", bg: "rgba(242,78,30,0.07)",    border: "rgba(242,78,30,0.2)",   dot: "#F24E1E" },
];

export default function TechStack() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.3) 50%, transparent 95%)",
        }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.3) 50%, transparent 95%)",
        }}
      />

      <div className="max-w-5xl mx-auto">

        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              Il Nostro Stack
            </p>
            <p
              className="text-base font-semibold"
              style={{ color: "rgba(245,240,232,0.52)" }}
            >
              Gli stessi strumenti usati da{" "}
              <span style={{ color: "var(--accent-light)" }}>Vercel, Linear e Stripe</span>
              {" "}— per i tuoi clienti locali.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  background: t.bg,
                  border: `1px solid ${t.border}`,
                  color: t.color,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${t.bg}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: t.dot }}
                />
                {t.name}
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
