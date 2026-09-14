"use client";

import { useEffect, useState } from "react";
import { identity, navLinks, whatsappLink } from "@/content/site";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: solid ? "rgba(10,10,11,0.82)" : "transparent",
        backdropFilter: solid ? "blur(18px)" : "none",
        borderBottom: solid ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="shell flex h-[72px] items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={identity.fullName}>
          <span
            className="display grid h-9 w-9 place-items-center rounded-lg text-[13px]"
            style={{ background: "linear-gradient(135deg, var(--flame), var(--flame-lo))", color: "#fff" }}
          >
            {identity.initials}
          </span>
          <span className="hidden text-[13px] font-semibold uppercase tracking-[0.18em] sm:block">
            {identity.lastName}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-medium tracking-wide transition-colors"
                style={{ color: "var(--paper-dim)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--paper)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--paper-dim)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contatti" className="btn btn-flame hidden !min-h-[42px] !px-5 !text-[11px] sm:inline-flex">
            Candidati
          </a>
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg md:hidden"
            style={{ border: "1px solid var(--line)" }}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className="absolute left-0 block h-[2px] w-full rounded transition-all duration-300"
                style={{ background: "var(--paper)", top: open ? "6px" : 0, transform: open ? "rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 top-[6px] block h-[2px] w-full rounded transition-all duration-300"
                style={{ background: "var(--paper)", opacity: open ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-[2px] w-full rounded transition-all duration-300"
                style={{ background: "var(--paper)", top: open ? "6px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className="overflow-hidden md:hidden"
        style={{
          maxHeight: open ? "80vh" : 0,
          transition: "max-height 0.45s cubic-bezier(0.22,1,0.36,1)",
          background: "rgba(10,10,11,0.97)",
          backdropFilter: "blur(18px)",
        }}
      >
        <ul className="shell flex flex-col gap-1 py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block py-3 text-2xl"
                style={{ color: "var(--paper)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-3 flex flex-col gap-2 pb-4">
            <a href="#contatti" onClick={() => setOpen(false)} className="btn btn-flame w-full">
              Candidati al percorso
            </a>
            <a
              href={whatsappLink(`Ciao ${identity.firstName}, vorrei informazioni sui tuoi percorsi.`)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost w-full"
            >
              Scrivimi su WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
