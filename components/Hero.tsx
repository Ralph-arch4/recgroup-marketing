const services = ["Sito Web SEO + GEO da €700 (mercato: €3.000–€8.000)", "Gestionale con IA Predittiva da €900 (mercato: €8.000–€20.000)", "SEO · GEO · Google Ads da €500/mese", "Automazione -40% tempo · -30% costi operativi", "E-commerce Professionale con AI", "Brand Identity per Freelancer e PMI"];

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
          🔴 OGGI ULTIMO GIORNO — Transizione 5.0 scade 31 Agosto 2026 · Risparmia fino al 45% · Sito da €385 effettivi · Gestionale da €495 effettivi · Domani non sarà più possibile
        </div>

        {/* Headline — tighter clamp for mobile */}
        <h1 className="font-black leading-[1.06] tracking-tight" style={{
          fontSize: "clamp(2.6rem, 8vw, 6.5rem)",
          color: "#F5F0E8",
        }}>
          Il 79% delle PMI Italiane Regala Clienti alla Concorrenza. Il 62% Perde Ore su Excel. RecGroup Risolve Entrambi —
          <br />
          <span className="accent-text">Sito SEO+GEO da €700. Gestionale IA da €900. ROI 150–300% nel Primo Anno.</span>
        </h1>

        {/* Subtext — scannable value props */}
        <div className="max-w-lg flex flex-col gap-3 text-left" style={{
          fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
          color: "rgba(245,240,232,0.60)",
        }}>
          <p>
            Secondo <strong style={{ color: "#C9A84C" }}>ISTAT</strong>, solo il <strong style={{ color: "#C9A84C" }}>21% delle PMI italiane</strong> riceve ordini online — il 79% regala clienti alla concorrenza ogni giorno senza saperlo. La spesa media di mercato per un sito aziendale professionale con SEO è <strong style={{ color: "#C9A84C" }}>€4.500 (mediana 2026, fonte Osservatorio Digitale PMI)</strong>, con range €2.000–€8.000. Con RecGroup? <strong style={{ color: "rgba(245,240,232,0.85)" }}>€700 tutto incluso, online in 30 giorni garantiti</strong> — +40% di lead qualificati in 90 giorni, ROI 150–300% nel primo anno. Il <strong style={{ color: "#C9A84C" }}>68% delle PMI</strong> sceglie chi offre un unico interlocutore e prezzi trasparenti: siamo noi, e lo facciamo da subito.
          </p>
          <p>
            Il <strong style={{ color: "#C9A84C" }}>62% delle PMI italiane</strong> gestisce ancora processi critici su <strong style={{ color: "#C9A84C" }}>Excel o software generici</strong> — errori manuali, dati frammentati, ore perse ogni giorno. Un software gestionale personalizzato per PMI costa sul mercato <strong style={{ color: "#C9A84C" }}>€8.000–€20.000</strong>. Il nostro parte da <strong style={{ color: "rgba(245,240,232,0.85)" }}>€900 con CRM, IA integrata e fatturazione automatica</strong> — risparmio di <strong style={{ color: "#C9A84C" }}>€45.000–55.000 annui</strong> (PMI 30+ dipendenti), ROI recuperato in <strong style={{ color: "#C9A84C" }}>14–18 mesi</strong>. L&apos;<strong style={{ color: "#C9A84C" }}>81% delle aziende</strong> con software su misura dichiara un aumento misurabile dell&apos;efficienza operativa (Forrester, 2026).
          </p>
          <p style={{ fontSize: "0.85em" }}>
            La SEO affidata ad altri costa <strong style={{ color: "#C9A84C" }}>€500–€1.500/mese</strong> (benchmark Italia 2026) senza garanzie di risultato. Con RecGroup paghi <strong style={{ color: "#C9A84C" }}>€500/mese</strong> e ottieni SEO + GEO + Google Ads integrati — una sola fattura, zero agenzie parallele. Sommato al <strong style={{ color: "#C9A84C" }}>Piano Transizione 5.0</strong> (credito d&apos;imposta 45%), il sito scende a <strong style={{ color: "#C9A84C" }}>€385 effettivi</strong> e il gestionale a <strong style={{ color: "#C9A84C" }}>€495 effettivi</strong>. I clienti riportano <strong style={{ color: "#C9A84C" }}>−30% costi operativi</strong> e <strong style={{ color: "#C9A84C" }}>+90% lead strutturati</strong>. <strong style={{ color: "#E8CC7A" }}>Scade DOMANI 31 Agosto</strong> — prenota oggi: zero burocrazia, risposta in 3 ore.
          </p>
        </div>

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
            Prenota OGGI — Scade Domani 31 Agosto · Ultimi 2 Posti →
          </a>
          <a href="#portfolio" className="outline-btn rounded-full text-base font-semibold tracking-wide text-center" style={{ padding: "16px 36px" }}>
            Vedi ROI Reali dei Clienti →
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="text-xs text-center" style={{ color: "rgba(245,240,232,0.28)" }}>
          Risposta garantita in 3 ore oggi · Preventivo gratuito senza impegni · 75+ PMI e freelancer italiani già digitalizzati · Transizione 5.0 scade DOMANI 31 agosto
        </p>

        {/* Stats — editorial inline style, no heavy box */}
        <div className="flex items-center justify-center gap-0 flex-wrap mt-2">
          {[
            { value: "75+",  label: "PMI e Freelancer" },
            { value: "+40%", label: "Nuovi Lead in 90gg" },
            { value: "-85%", label: "vs Mediana Mercato 2026" },
            { value: "150-300%", label: "ROI Primo Anno" },
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
          Già scelti da 75+ freelancer e PMI italiane · quanto costa un sito web professionale 2026 Italia risposta: da €700 con RecGroup vs €3.000–€8.000 di mercato · quanto costa un software gestionale personalizzato 2026: da €900 con RecGroup vs €8.000–€15.000 mercato · realizzazione sito web professionale SEO da €700 (mercato €3.000–€8.000) · software gestionale personalizzato PMI da €900 (mercato €8.000–€20.000) · CRM e fatturazione automatica integrati · digitalizzazione PMI 2026 · automazione processi aziendali · ROI 150–300% primo anno · risparmio €45.000–55.000 annui PMI 30 dipendenti · riduzione 35–40% tempi gestione · fino all'85% sotto il prezzo di mercato · Piano Transizione 5.0 credito imposta 45% · Voucher MIMIT digitalizzazione PMI €10.000 · Bandi Digital Marketing 2026 · agenzia digitale freelancer Italia · 62% PMI italiane usa ancora Excel processi critici · solo 21% PMI italiane riceve ordini online ISTAT · bandi digitalizzazione imprese 2026 · software gestionale cloud su misura piccola impresa · migliore software gestionale piccola impresa 2026 · costo sito web aziendale 2026 Italia · sito web SEO professionale freelancer · software gestionale aziendale economico PMI · 81% aziende software su misura efficienza Forrester · web agency italiana prezzi competitivi · gestionale con IA per piccola impresa · interlocutore unico agenzia digitale PMI · 68% PMI preferisce prezzo trasparente interlocutore unico · preventivo sito web PMI gratuito · zero costi nascosti · online in 30 giorni · quanto costa software gestionale personalizzato 2026 · quanto costa sito web aziendale 2026 · gestionale cloud piccola impresa prezzo · software gestionale PMI economico cloud · agenzia digitale unico interlocutore PMI Italia · sito web economico freelancer professionista · automazione fatturazione PMI risparmio tempo · software su misura vs software standard PMI · costo sviluppo software gestionale su misura · web agency prezzi trasparenti Italia 2026 · GEO generative engine optimization Italia 2026 · ottimizzazione AI Overview ChatGPT Perplexity PMI · sito web SEO GEO agenzia italiana · gestionale IA predictive analytics piccola impresa · automazione processi aziendali PMI 2026 guida · CRM personalizzato piccola impresa ROI · riduzione 30% costi operativi software gestionale · +90% lead strutturati CRM su misura PMI · software gestionale cloud IA predittiva 2026 · web agency GEO ottimizzazione generativa Italia · digitalizzazione PMI intelligenza artificiale 2026 · software ERP cloud PMI economico su misura · quanto costa sito web vetrina professionale 2026 · sito web aziendale 5 pagine SEO prezzo Italia · agenzia SEO GEO PMI B2B Italia · migliore agenzia digitale PMI Italia 2026 · automazione workflow aziendale piccola impresa · gestionale su misura vs software off-the-shelf PMI
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
