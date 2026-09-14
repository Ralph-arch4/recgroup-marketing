"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

function Half({ src, alt, label }: { src: string; alt: string; label: string }) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />;
  }
  return (
    <div
      className="grid h-full w-full place-items-center"
      style={{
        background:
          label === "Prima"
            ? "linear-gradient(180deg, #1A1A1D 0%, #0E0E10 100%)"
            : "radial-gradient(120% 90% at 50% 0%, rgba(255,74,28,0.22) 0%, transparent 60%), linear-gradient(180deg, #1A1A1D 0%, #0E0E10 100%)",
      }}
    >
      <span className="display text-[clamp(1.6rem,5vw,2.6rem)]" style={{ color: "rgba(244,243,240,0.16)" }}>
        {label}
      </span>
    </div>
  );
}

export default function BeforeAfter({
  before,
  after,
  name,
}: {
  before: string;
  after: string;
  name: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={box}
      className="relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl"
      style={{ border: "1px solid var(--line)", touchAction: "pan-y" }}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* dopo (sotto) */}
      <div className="absolute inset-0">
        <Half src={after} alt={`${name} dopo il percorso`} label="Dopo" />
      </div>

      {/* prima (clip) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Half src={before} alt={`${name} prima del percorso`} label="Prima" />
      </div>

      {/* etichette */}
      <span
        className="pointer-events-none absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ background: "rgba(10,10,11,0.72)", color: "var(--paper-dim)", backdropFilter: "blur(6px)" }}
      >
        Prima
      </span>
      <span
        className="pointer-events-none absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
        style={{ background: "rgba(255,74,28,0.9)", color: "#fff" }}
      >
        Dopo
      </span>

      {/* maniglia */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -left-px w-0.5" style={{ background: "var(--paper)" }} />
        <div
          className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
          style={{ background: "var(--paper)", color: "var(--ink)", boxShadow: "0 6px 20px rgba(0,0,0,0.45)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
            <path d="m9 6-5 6 5 6M15 6l5 6-5 6" />
          </svg>
        </div>
      </div>

      {/* controllo accessibile */}
      <label className="sr-only" htmlFor={`ba-${name}`}>
        Confronto prima e dopo di {name}
      </label>
      <input
        id={`ba-${name}`}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
