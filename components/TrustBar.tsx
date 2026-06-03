const items = [
  { icon: "🌐", label: "Sito Web PMI Italia" },
  { icon: "⚡", label: "Automazione Fatturazione" },
  { icon: "📊", label: "ROI in 4–7 Mesi" },
  { icon: "💼", label: "Gestionale Su Misura" },
  { icon: "🤖", label: "AI per Freelancer" },
  { icon: "🎯", label: "Prima Pagina Google" },
  { icon: "🍽️", label: "Menu Digitali QR" },
  { icon: "💰", label: "Bonus Transizione 5.0" },
  { icon: "📍", label: "Catania · Milano · Roma" },
  { icon: "🔗", label: "CRM Personalizzato" },
  { icon: "🚀", label: "Lancio Sito in 7 Giorni" },
  { icon: "✨", label: "300K+ Freelancer Digitali" },
];

// Doubled for seamless loop
const doubled = [...items, ...items];

export default function TrustBar() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(201,168,76,0.1)",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        background: "rgba(42,36,24,0.35)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, var(--black), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, var(--black), transparent)" }}
      />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 flex-shrink-0"
            style={{ padding: "0 28px" }}
          >
            <span className="text-sm leading-none">{item.icon}</span>
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase whitespace-nowrap"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              {item.label}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.25)", marginLeft: "20px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
