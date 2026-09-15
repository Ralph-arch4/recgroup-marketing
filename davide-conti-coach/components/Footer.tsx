import { footer, identity, navLinks } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative pb-10 pt-16" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="display text-3xl">{identity.fullName}</span>
            <p className="serif-it mt-3 text-lg" style={{ color: "var(--paper-dim)" }}>
              {footer.claim}
            </p>
          </div>

          <nav aria-label="Sezioni del sito">
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13px] transition-colors hover:text-[var(--paper)]"
                    style={{ color: "var(--paper-dim)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2.5">
            <a
              href={identity.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] transition-colors hover:text-[var(--paper)]"
              style={{ color: "var(--paper-dim)" }}
            >
              Instagram
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="text-[13px] transition-colors hover:text-[var(--paper)]"
              style={{ color: "var(--paper-dim)" }}
            >
              Email
            </a>
            <a
              href={`tel:+${identity.whatsapp}`}
              className="text-[13px] transition-colors hover:text-[var(--paper)]"
              style={{ color: "var(--paper-dim)" }}
            >
              {identity.phoneDisplay}
            </a>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-2 pt-6 text-[11px] md:flex-row md:items-center md:justify-between"
          style={{ borderTop: "1px solid var(--line)", color: "var(--paper-mute)" }}
        >
          <span>
            &copy; {new Date().getFullYear()} {identity.fullName}
            {identity.vatId ? ` · P.IVA ${identity.vatId}` : ""} · Tutti i diritti riservati
          </span>
          <a href={footer.creditsUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[var(--paper)]">
            {footer.credits}
          </a>
        </div>
      </div>
    </footer>
  );
}
