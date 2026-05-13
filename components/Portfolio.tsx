"use client";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* ── EventMaître mock UI ─────────────────────────────────────── */
function EventMaitreUI() {
  return (
    <div className="w-full h-full flex" style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif" }}>

      {/* Sidebar */}
      <div className="w-36 h-full flex-shrink-0 flex flex-col px-3 py-4 gap-1" style={{
        background: "#120E08",
        borderRight: "1px solid rgba(201,168,76,0.12)",
      }}>
        <div className="font-bold mb-3 px-2" style={{ color: "#C9A84C", fontSize: "13px", letterSpacing: "0.05em" }}>
          EventMaître
        </div>
        {["Dashboard", "Ospiti", "Tavoli", "Staff", "Preventivo"].map((item, i) => (
          <div key={item} className="px-2 py-2 rounded-lg" style={{
            background: i === 1 ? "rgba(201,168,76,0.15)" : "transparent",
            color: i === 1 ? "#C9A84C" : "rgba(245,240,232,0.45)",
          }}>{item}</div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col p-4 gap-3 overflow-hidden">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[["142", "Ospiti"], ["18", "Tavoli"], ["6", "Staff"]].map(([v, l]) => (
            <div key={l} className="rounded-xl p-3 text-center" style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.12)",
            }}>
              <div style={{ color: "#C9A84C", fontWeight: 800, fontSize: "18px" }}>{v}</div>
              <div style={{ color: "rgba(245,240,232,0.4)", fontSize: "10px", marginTop: "2px" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden flex-1" style={{ border: "1px solid rgba(201,168,76,0.1)" }}>
          <div className="flex px-3 py-2" style={{ background: "rgba(201,168,76,0.06)", borderBottom: "1px solid rgba(201,168,76,0.1)", color: "rgba(245,240,232,0.35)", fontSize: "10px" }}>
            <span className="flex-1">Nome Ospite</span>
            <span className="w-16 text-center">Tavolo</span>
            <span className="w-16 text-center">Stato</span>
          </div>
          {[
            ["Rossi Marco",    "T3", "Confermato"],
            ["Bianchi Laura",  "T1", "Confermato"],
            ["Ferrara Giulia", "T5", "In attesa"],
            ["Marino Luca",    "T2", "Confermato"],
          ].map(([nome, tav, stato]) => (
            <div key={nome} className="flex items-center px-3 py-2" style={{
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              color: "rgba(245,240,232,0.7)",
            }}>
              <span className="flex-1">{nome}</span>
              <span className="w-16 text-center" style={{ color: "#C9A84C" }}>{tav}</span>
              <span className="w-16 text-center">
                <span className="px-2 py-0.5 rounded-full text-[9px]" style={{
                  background: stato === "Confermato" ? "rgba(34,197,94,0.15)" : "rgba(234,179,8,0.15)",
                  color: stato === "Confermato" ? "#4ade80" : "#facc15",
                }}>{stato}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── TrainerPro mock UI ──────────────────────────────────────── */
function TrainerProUI() {
  const clients = [
    ["Luca M.", 82],
    ["Anna V.", 65],
    ["Marco R.", 91],
    ["Sara B.", 48],
  ] as [string, number][];

  return (
    <div className="w-full h-full flex" style={{ fontSize: "11px", fontFamily: "system-ui, sans-serif" }}>

      {/* Sidebar */}
      <div className="w-36 h-full flex-shrink-0 flex flex-col px-3 py-4 gap-1" style={{
        background: "#060D18",
        borderRight: "1px solid rgba(76,142,201,0.12)",
      }}>
        <div className="font-bold mb-3 px-2" style={{ color: "#4C8EC9", fontSize: "13px", letterSpacing: "0.05em" }}>
          TrainerPro
        </div>
        {["Dashboard", "Clienti", "Schede", "Nutrizione", "Pagamenti"].map((item, i) => (
          <div key={item} className="px-2 py-2 rounded-lg" style={{
            background: i === 1 ? "rgba(76,142,201,0.15)" : "transparent",
            color: i === 1 ? "#4C8EC9" : "rgba(245,240,232,0.45)",
          }}>{item}</div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col p-4 gap-3 overflow-hidden">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[["24", "Clienti"], ["8", "Oggi"], ["96%", "Retention"]].map(([v, l]) => (
            <div key={l} className="rounded-xl p-3 text-center" style={{
              background: "rgba(76,142,201,0.07)",
              border: "1px solid rgba(76,142,201,0.12)",
            }}>
              <div style={{ color: "#4C8EC9", fontWeight: 800, fontSize: "18px" }}>{v}</div>
              <div style={{ color: "rgba(245,240,232,0.4)", fontSize: "10px", marginTop: "2px" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Progress list */}
        <div className="rounded-xl overflow-hidden flex-1" style={{ border: "1px solid rgba(76,142,201,0.1)" }}>
          <div className="px-3 py-2" style={{ background: "rgba(76,142,201,0.06)", borderBottom: "1px solid rgba(76,142,201,0.1)", color: "rgba(245,240,232,0.35)", fontSize: "10px" }}>
            Progressi settimanali
          </div>
          {clients.map(([name, pct]) => (
            <div key={name} className="px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex justify-between mb-1.5">
                <span style={{ color: "rgba(245,240,232,0.72)" }}>{name}</span>
                <span style={{ color: "#4C8EC9", fontWeight: 700 }}>{pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(76,142,201,0.15)" }}>
                <div className="h-1.5 rounded-full" style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, #4C8EC9, #7BB3E0)",
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main ───────────────────────────────────────────────────── */
const projects = [
  {
    name: "EventMaître",
    tagline: "Gestionale SaaS per wedding planner",
    description: "Da foglio Excel a piattaforma completa: gestione tavoli, ospiti, staff e preventivi in un'unica dashboard. Adottato da wedding planner nella prima settimana di beta.",
    metric: { value: "12", label: "organizzatori in beta al lancio" },
    tags: ["SaaS", "Gestionale", "Next.js", "Supabase"],
    accent: "#C9A84C",
    UI: EventMaitreUI,
    href: "https://event-maitre-pro.vercel.app/",
  },
  {
    name: "TrainerPro",
    tagline: "Dashboard per personal trainer",
    description: "24 personal trainer gestiscono clienti, schede allenamento, nutrizione e pagamenti in un'unica piattaforma. Zero Excel, zero WhatsApp infiniti.",
    metric: { value: "24", label: "PT attivi sulla piattaforma" },
    tags: ["SaaS", "Fitness", "React", "Mobile-first"],
    accent: "#4C8EC9",
    UI: TrainerProUI,
    href: "https://trainer-pro-phi.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen flex flex-col justify-center py-28 px-6 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <div className="w-[600px] h-[300px] rounded-full" style={{ background: "radial-gradient(ellipse, #C9A84C 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl w-full mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4" style={{ color: "#C9A84C" }}>
              Lavori Recenti
            </p>
            <h2 className="font-black tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#F5F0E8" }}>
              Il nostro <span className="accent-text">Portfolio</span>
            </h2>
            <p className="max-w-lg text-base leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
              Prodotti reali, costruiti per clienti reali. Ogni progetto è unico, come il business che lo richiede.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => {
            const UI = p.UI;
            return (
              <ScrollReveal key={p.name} delay={idx * 150}>
              <article className="group flex flex-col rounded-2xl overflow-hidden h-full"
                style={{
                  background: "rgba(38,32,20,0.7)",
                  border: `1px solid color-mix(in srgb, ${p.accent} 18%, transparent)`,
                  backdropFilter: "blur(12px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 32px 80px rgba(0,0,0,0.55)";
                  el.style.borderColor = `color-mix(in srgb, ${p.accent} 45%, transparent)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.boxShadow = "";
                  el.style.borderColor = `color-mix(in srgb, ${p.accent} 18%, transparent)`;
                }}
              >
                {/* Top accent line */}
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent 70%)` }} />

                {/* Browser chrome */}
                <div className="flex items-center gap-3 px-4 py-3" style={{
                  background: "rgba(6,5,3,0.7)",
                  borderBottom: `1px solid color-mix(in srgb, ${p.accent} 10%, transparent)`,
                }}>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {["rgba(255,95,87,0.7)", "rgba(255,189,46,0.7)", "rgba(40,201,64,0.7)"].map((c, i) => (
                      <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="flex-1 rounded-md px-3 py-1 text-center" style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(245,240,232,0.25)",
                    fontSize: "10px",
                    letterSpacing: "0.02em",
                  }}>
                    app.{p.name.replace(/[^a-zA-Z]/g, "").toLowerCase()}.io
                  </div>
                </div>

                {/* UI preview */}
                <div className="overflow-hidden" style={{ height: "220px", background: p.accent === "#C9A84C" ? "#0D0A06" : "#060D18" }}>
                  <div style={{ transform: "scale(0.85)", transformOrigin: "top left", width: "117.6%", height: "117.6%" }}>
                    <UI />
                  </div>
                </div>

                {/* Info */}
                <div className="p-7 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-black mb-1" style={{ color: "#F5F0E8" }}>{p.name}</h3>
                      <p className="text-xs tracking-wide" style={{ color: p.accent }}>{p.tagline}</p>
                    </div>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Vedi ${p.name}`}
                      className="opacity-35 group-hover:opacity-100 transition-opacity mt-1"
                      style={{ color: p.accent }}>
                      <ExternalLink size={17} />
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.52)" }}>
                    {p.description}
                  </p>

                  {/* Case study metric */}
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{
                    background: `color-mix(in srgb, ${p.accent} 6%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${p.accent} 18%, transparent)`,
                  }}>
                    <span className="text-2xl font-black" style={{ color: p.accent }}>{p.metric.value}</span>
                    <span className="text-xs leading-tight" style={{ color: "rgba(245,240,232,0.52)" }}>{p.metric.label}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold" style={{
                        background: `color-mix(in srgb, ${p.accent} 10%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${p.accent} 22%, transparent)`,
                        color: `color-mix(in srgb, ${p.accent} 90%, #F5F0E8)`,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="text-center mt-10 text-sm" style={{ color: "rgba(245,240,232,0.3)" }}>
          Altri progetti su richiesta —{" "}
          <a href="#contatti" className="underline underline-offset-4 hover:opacity-70 transition-opacity" style={{ color: "#E8CC7A" }}>
            contattaci per una demo
          </a>.
        </p>
      </div>
    </section>
  );
}
