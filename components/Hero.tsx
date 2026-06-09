const services = ["Sito Web da €700", "Gestionale da €900", "SEO & Google Ads", "Automazione AI", "E-commerce Professionale", "Brand Identity"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden">

      {/* Fine grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Large decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-black uppercase tracking-tighter leading-none" style={{
          fontSize: "clamp(12rem, 40vw, 32rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(201,168,76,0.045)",
          userSelect: "none",
        }}>
          REC
        </span>
      </div>

      {/* Central radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 60%)",
        }} />
      </div>

      {/* Top-right accent */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 70%)",
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto gap-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase" style={{
          border: "1px solid rgba(201,168,76,0.32)",
          color: "#E8CC7A",
          background: "rgba(201,168,76,0.07)",
          backdropFilter: "blur(8px)",
        }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "#4ade80" }} />
          Sito Web da €700 · Gestionale da €900 · AI Automation · Transizione 5.0 fino al 45%
        </div>

        {/* Headline — tighter clamp for mobile */}
        <h1 className="font-black leading-[1.06] tracking-tight" style={{
          fontSize: "clamp(2.6rem, 8vw, 6.5rem)",
          color: "#F5F0E8",
        }}>
          Ogni Giorno Senza Sito Web Ti Costa Clienti —
          <br />
          <span className="accent-text">Noi lo Lanciamo in 30 Giorni, ROI Garantito.</span>
        </h1>

        {/* Subtext — shorter, punchy */}
        <p className="max-w-md leading-relaxed" style={{
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          color: "rgba(245,240,232,0.60)",
        }}>
          <strong style={{ color: "rgba(245,240,232,0.85)", fontWeight: 600 }}>Sito web professionale con SEO da €700</strong> — visibile su Google in 30 giorni, costruito per convertire visitatori in clienti paganti. I nostri clienti guadagnano in media <strong style={{ color: "#C9A84C" }}>+40% di nuovi lead</strong> nei primi 90 giorni.
          <br className="hidden sm:block" />
          <strong style={{ color: "rgba(245,240,232,0.85)", fontWeight: 600 }}>Gestionale su misura da €900</strong> — fatturazione automatica, CRM e agenda integrati: <strong style={{ color: "#C9A84C" }}>10+ ore risparmiate ogni settimana</strong>. Potenzialmente finanziabile con Transizione 5.0 (fino al 45% rimborsato).
        </p>

        {/* Service chips — horizontally scrollable on mobile */}
        <div className="flex items-center gap-2 max-w-full overflow-x-auto pb-1 no-scrollbar" style={{
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
          {services.map((s) => (
            <span key={s} className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap" style={{
              background: "rgba(201,168,76,0.07)",
              border: "1px solid rgba(201,168,76,0.14)",
              color: "rgba(245,240,232,0.5)",
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
          <a href="#contatti" className="accent-btn cta-glow rounded-full text-base font-bold tracking-wide text-center" style={{ padding: "16px 36px" }}>
            Prenota Consulenza Gratuita →
          </a>
          <a href="#portfolio" className="outline-btn rounded-full text-base font-semibold tracking-wide text-center" style={{ padding: "16px 36px" }}>
            Guarda i Lavori →
          </a>
        </div>

        {/* Stats — editorial inline style, no heavy box */}
        <div className="flex items-center justify-center gap-0 flex-wrap mt-2">
          {[
            { value: "50+",  label: "PMI e Freelancer" },
            { value: "+40%", label: "Lead in 90 Giorni" },
            { value: "45%",  label: "Rimborso T5.0" },
          ].map((s, i) => (
            <>
              <div key={s.label} className="flex flex-col items-center px-6 py-4">
                <span className="text-3xl sm:text-4xl font-black leading-none" style={{ color: "#C9A84C" }}>
                  {s.value}
                </span>
                <span className="text-[10px] mt-1 tracking-widest uppercase" style={{ color: "rgba(245,240,232,0.32)" }}>
                  {s.label}
                </span>
              </div>
              {i < 2 && (
                <div key={`sep-${i}`} className="w-px h-8 self-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)" }} />
              )}
            </>
          ))}
        </div>

        {/* Social proof nudge */}
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
          Già scelti da 50+ freelancer e PMI italiane · sito web professionale SEO da €700 · software gestionale personalizzato da €900 · automazioni AI · Transizione 5.0 · nessun costo nascosto
        </p>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.45 }}>
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden" style={{ background: "rgba(201,168,76,0.1)" }}>
          <div className="absolute left-0 right-0 h-6 rounded-full" style={{
            background: "linear-gradient(to bottom, transparent, #C9A84C 60%, transparent)",
            animation: "scrollDrop 1.9s ease-in-out infinite",
          }} />
        </div>
      </div>

    </section>
  );
}
