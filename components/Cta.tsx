import { MessageCircle, Mail, Clock, Shield, Gift } from "lucide-react";

const email = "recgroup.business@gmail.com";
const whatsappNumber = "393518555676";
const whatsappMsg = encodeURIComponent(
  "Ciao! Vorrei prenotare una chiamata gratuita con rec.group per parlare del mio progetto."
);

export default function Cta() {
  return (
    <section
      id="contatti"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--charcoal) 40%, var(--black))" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(154,123,46,0.5) 50%, transparent 95%)",
        }}
      />

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Label */}
        <p
          className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
          style={{ color: "var(--accent)" }}
        >
          Iniziamo Insieme
        </p>

        {/* Headline */}
        <h2
          className="font-black tracking-tight leading-[1.1] mb-6"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 5rem)", color: "var(--ivory)" }}
        >
          30 minuti possono
          <br />
          <span className="accent-text">cambiare tutto.</span>
        </h2>

        {/* Subtext */}
        <p
          className="text-base leading-relaxed mb-4 max-w-lg"
          style={{ color: "rgba(245,240,232,0.62)" }}
        >
          Una chiamata gratuita. Nessun impegno. Solo idee concrete.
        </p>

        {/* ROI comparison */}
        <div
          className="mb-8 px-5 py-4 rounded-2xl max-w-md w-full"
          style={{
            background: "rgba(42,36,24,0.6)",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <p className="text-xs mb-3 font-semibold tracking-wide uppercase text-center" style={{ color: "rgba(245,240,232,0.3)" }}>
            L'alternativa
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm">
            <div className="text-center sm:text-left">
              <p className="text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>Marketing manager in-house</p>
              <p className="font-bold text-base mt-1" style={{ color: "rgba(239,68,68,0.8)" }}>€40–60k/anno + strumenti</p>
            </div>
            <div className="hidden sm:block w-px h-10 flex-shrink-0" style={{ background: "rgba(201,168,76,0.15)" }} />
            <div className="text-center sm:text-right">
              <p className="text-sm" style={{ color: "rgba(245,240,232,0.5)" }}>rec.group</p>
              <p className="font-bold text-base mt-1" style={{ color: "var(--accent)" }}>Una frazione — risultati interi</p>
            </div>
          </div>
        </div>

        {/* Scarcity signal */}
        <p className="text-sm mb-6" style={{ color: "rgba(245,240,232,0.32)" }}>
          Lavoriamo con massimo{" "}
          <span style={{ color: "var(--accent-light)" }}>3 nuovi clienti al mese</span>
          {" "}— per garantire qualità totale.
        </p>

        {/* Available indicator */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full text-xs font-semibold"
          style={{
            background: "rgba(34,197,94,0.07)",
            border: "1px solid rgba(34,197,94,0.2)",
            color: "rgba(74,222,128,0.85)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0"
            style={{ background: "#4ade80" }}
          />
          Disponibili questa settimana
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-btn cta-glow rounded-full flex items-center justify-center gap-3 font-bold tracking-wide w-full sm:w-auto"
            style={{ fontSize: "1rem", padding: "20px 48px" }}
          >
            <MessageCircle size={20} />
            Scrivici su WhatsApp
          </a>
          <a
            href={`mailto:${email}?subject=Preventivo Gratuito — rec.group`}
            className="outline-btn rounded-full flex items-center justify-center gap-3 font-semibold tracking-wide w-full sm:w-auto"
            style={{ fontSize: "1rem", padding: "20px 48px" }}
          >
            <Mail size={20} />
            Invia Email
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
          {[
            { icon: Clock,  text: "Risposta entro 24 ore" },
            { icon: Gift,   text: "Preventivo sempre gratuito" },
            { icon: Shield, text: "Nessun impegno" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs"
              style={{
                background: "rgba(201,168,76,0.06)",
                border: "1px solid rgba(201,168,76,0.14)",
                color: "rgba(245,240,232,0.52)",
              }}
            >
              <Icon size={12} style={{ color: "var(--accent)" }} />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
