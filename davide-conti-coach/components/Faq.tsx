"use client";

import { useState } from "react";
import { faq } from "@/content/site";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32" style={{ background: "var(--ink-2)", borderBlock: "1px solid var(--line)" }}>
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="display mt-4" style={{ fontSize: "clamp(2.1rem, 5.2vw, 3.4rem)" }}>
            {faq.title}
          </h2>
        </Reveal>

        <ul className="flex flex-col">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} as="li" delay={i * 60}>
                <div className="hairline">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-[15px] font-semibold md:text-base" style={{ color: "var(--paper)" }}>
                        {item.q}
                      </span>
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-300"
                        style={{
                          border: "1px solid var(--line)",
                          transform: isOpen ? "rotate(45deg)" : "none",
                          color: isOpen ? "var(--flame)" : "var(--paper-dim)",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                      transition: "grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-[15px] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
