"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servizi",   href: "#servizi" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team",      href: "#team" },
  { label: "FAQ",       href: "#faq" },
  { label: "Contatti",  href: "#contatti" },
];

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0.25, rootMargin: "-64px 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="glass-dark fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.45)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <span style={{ color: "var(--ivory)" }}>rec</span>
          <span style={{ color: "var(--accent)" }}>.</span>
          <span style={{ color: "var(--ivory)" }}>group</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase transition-all duration-200 relative"
              style={{
                color: active === l.href ? "var(--accent)" : "rgba(245,240,232,0.58)",
              }}
            >
              {l.label}
              {active === l.href && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </a>
          ))}
          <a href="#contatti" className="accent-btn px-5 py-2 rounded-full text-sm">
            Preventivo Gratuito
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden opacity-80 hover:opacity-100 transition-opacity"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: open ? "420px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="glass px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase transition-all duration-200"
              style={{
                color: active === l.href ? "var(--accent)" : "rgba(245,240,232,0.65)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={() => setOpen(false)}
            className="accent-btn px-5 py-3 rounded-full text-sm text-center font-bold"
          >
            Preventivo Gratuito
          </a>
        </div>
      </div>
    </header>
  );
}
