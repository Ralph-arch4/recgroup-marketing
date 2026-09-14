import Image from "next/image";

/**
 * Mostra la foto se `src` è valorizzato in content/site.ts,
 * altrimenti un segnaposto grafico coerente con il design.
 */
export default function PortraitSlot({
  src,
  alt,
  className = "",
  label = "Foto in arrivo",
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`} style={{ border: "1px solid var(--line)" }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" priority={priority} />
      </div>
    );
  }

  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-2xl ${className}`}
      style={{
        border: "1px dashed rgba(244,243,240,0.16)",
        background:
          "radial-gradient(120% 90% at 30% 0%, rgba(255,74,28,0.16) 0%, transparent 55%), linear-gradient(180deg, #17171A 0%, #0D0D0F 100%)",
      }}
      role="img"
      aria-label={alt}
    >
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgba(244,243,240,0.4)" strokeWidth="1.4" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="m4 18 5-5 4 4 3-3 4 4" />
        </svg>
        <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--paper-mute)" }}>
          {label}
        </span>
      </div>
    </div>
  );
}
