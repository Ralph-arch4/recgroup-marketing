const services = ["Sito Web SEO da €700 (mercato: €3.000–€8.000)", "Gestionale PMI da €900 (mercato: €5.000+)", "SEO & Google Ads da €500/mese", "Fatturazione Automatica -40% tempo", "E-commerce Professionale", "Brand Identity per Freelancer"];

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
          ⚡ Sito Web SEO da €700 invece di €3.000–€8.000 · Gestionale PMI da €900 invece di €5.000+ · Solo 3 posti disponibili a Luglio
        </div>

        {/* Headline — tighter clamp for mobile */}
        <h1 className="font-black leading-[1.06] tracking-tight" style={{
          fontSize: "clamp(2.6rem, 8vw, 6.5rem)",
          color: "#F5F0E8",
        }}>
          Ogni Giorno Senza Sito SEO Ti Costa Clienti —
          <br />
          <span className="accent-text">Online in 30 Giorni da €700. ROI Misurabile dal Primo Mese.</span>
        </h1>

        {/* Subtext — shorter, punchy */}
        <p className="max-w-md leading-relaxed" style={{
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          color: "rgba(245,240,232,0.60)",
        }}>
          Un sito web professionale ottimizzato SEO in Italia costa in media <strong style={{ color: "#C9A84C" }}>€3.000–€8.000</strong> da un'agenzia, <strong style={{ color: "#C9A84C" }}>€1.500–€5.000</strong> da un freelancer senior.
          {" "}Noi lo realizziamo a <strong style={{ color: "rgba(245,240,232,0.85)", fontWeight: 600 }}>€700 con SEO on-page incluso</strong> — indicizzato su Google, pronto a generare contatti entro 30 giorni. Risultato medio dei nostri clienti: <strong style={{ color: "#C9A84C" }}>+40% di richieste in 90 giorni</strong>.
          <br className="hidden sm:block" />
          Un software gestionale su misura per PMI parte da <strong style={{ color: "#C9A84C" }}>€5.000–€15.000</strong> sul mercato.
          {" "}Il nostro? <strong style={{ color: "rgba(245,240,232,0.85)", fontWeight: 600 }}>€900 con CRM, fatturazione automatica e agenda integrati</strong> — secondo Forrester, l'81% delle PMI che digitalizzano i processi aumenta subito l'efficienza; i nostri clienti risparmiano in media <strong style={{ color: "#C9A84C" }}>10+ ore/settimana</strong> e riducono il tempo amministrativo del 30–40%. Con Transizione 5.0 recuperi fino al 45%: paghi effettivamente <strong style={{ color: "#C9A84C" }}>da €495</strong>.
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
            Ottieni il Tuo Preventivo Gratuito →
          </a>
          <a href="#portfolio" className="outline-btn rounded-full text-base font-semibold tracking-wide text-center" style={{ padding: "16px 36px" }}>
            Vedi i Risultati dei Clienti →
          </a>
        </div>

        {/* Stats — editorial inline style, no heavy box */}
        <div className="flex items-center justify-center gap-0 flex-wrap mt-2">
          {[
            { value: "50+",  label: "PMI e Freelancer" },
            { value: "+40%", label: "Nuovi Lead in 90gg" },
            { value: "-85%", label: "vs Prezzo di Mercato" },
            { value: "€495",  label: "Sito con Bonus 5.0" },
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
              {i < 3 && (
                <div key={`sep-${i}`} className="w-px h-8 self-center flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)" }} />
              )}
            </>
          ))}
        </div>

        {/* Social proof nudge */}
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
          Già scelti da 50+ freelancer e PMI italiane · realizzazione sito web professionale SEO da €700 (mercato €3.000–€8.000) · software gestionale personalizzato PMI da €900 (mercato €5.000–€15.000) · fatturazione automatica e CRM integrato · digitalizzazione piccola impresa · automazione processi aziendali · fino all'85% di risparmio vs mercato · Transizione 5.0 · zero costi nascosti · online in 30 giorni
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
