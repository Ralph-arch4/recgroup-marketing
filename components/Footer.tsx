export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "color-mix(in srgb, var(--accent) 10%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-1 text-base font-bold tracking-tight">
          <span style={{ color: "var(--ivory)" }}>rec</span>
          <span style={{ color: "var(--accent)" }}>.</span>
          <span style={{ color: "var(--ivory)" }}>group</span>
        </div>

        {/* Tagline */}
        <p
          className="text-xs tracking-widest uppercase text-center"
          style={{ color: "color-mix(in srgb, var(--ivory) 30%, transparent)" }}
        >
          Soluzioni Digitali Su Misura
        </p>

        {/* Copyright */}
        <p
          className="text-xs"
          style={{ color: "color-mix(in srgb, var(--ivory) 30%, transparent)" }}
        >
          © {year} rec.group — Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
}
