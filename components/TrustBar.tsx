const items = [
  { icon: "🌐", label: "Sito Web PMI Italia" },
  { icon: "⚡", label: "Automazione Fatturazione Elettronica" },
  { icon: "📊", label: "ROI Misurabile in 4–7 Mesi" },
  { icon: "💼", label: "Software Gestionale Personalizzato" },
  { icon: "🤖", label: "AI per Piccole Imprese" },
  { icon: "🎯", label: "Prima Pagina Google Locale" },
  { icon: "🍽️", label: "Menu Digitali QR Ristoranti" },
  { icon: "💰", label: "Incentivi PMI 2026 — Fino al 70% del Costo" },
  { icon: "🏛️", label: "Bonus Transizione 5.0 — Credito d'Imposta 45%" },
  { icon: "📍", label: "Catania · Milano · Roma · Napoli · Torino" },
  { icon: "🔗", label: "CRM Personalizzato PMI" },
  { icon: "🚀", label: "Lancio Sito in 7 Giorni" },
  { icon: "📈", label: "ROI 250–400% in 3 Anni — Politecnico di Milano 2026" },
  { icon: "🛒", label: "E-commerce PMI da €2.500 — Senza Marketplace" },
  { icon: "✅", label: "90+ Clienti Soddisfatti" },
  { icon: "🔒", label: "Zero Abbonamenti SaaS" },
  { icon: "✨", label: "5,1 Milioni di Freelancer in Italia — ISTAT 2025" },
  { icon: "🏆", label: "2° Paese UE per Lavoro Autonomo — 23,1% degli Occupati" },
  { icon: "💡", label: "55% Risparmio vs Agenzia Tradizionale" },
  { icon: "🔄", label: "Alternativa Fatture in Cloud — Gestionale Su Misura" },
  { icon: "📉", label: "Solo il 21% delle PMI Vende Online — Noi Ti Portiamo Lì" },
  { icon: "🖥️", label: "Sito Web Vetrina 5 Pagine — da €1.500" },
  { icon: "🧲", label: "Landing Page Alta Conversione — da €700" },
  { icon: "📑", label: "Preventivi e Contratti Automatici — Zero Ore Manuali" },
  { icon: "🏅", label: "ROI 1.350% nel 1° Anno — Chi Parte da Zero" },
  { icon: "⏱️", label: "Recupero Investimento in 30 Giorni" },
  { icon: "📊", label: "70% PMI Investe in Digitale per Risparmiare Tempo" },
  { icon: "💶", label: "64% delle PMI — Primo Sito da Meno di €1.000" },
  { icon: "👥", label: "300.000+ Freelancer Digitali in Italia 2026 — +25% in 3 Anni" },
  { icon: "💻", label: "Gestionale PMI: Mercato €3.500–8.000 — Noi da €1.800 Una Tantum" },
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
