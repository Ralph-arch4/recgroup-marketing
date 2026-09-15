"use client";

import { useRef, useState } from "react";
import { showreel } from "@/content/site";
import Reveal from "./Reveal";

export default function Showreel() {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleSound = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted && el.paused) void el.play();
  };

  const togglePlay = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  };

  return (
    <section id="video" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,74,28,.13) 0%, transparent 68%)" }}
      />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        {/* video verticale */}
        <Reveal>
          <div
            className="relative mx-auto w-full max-w-[380px] overflow-hidden rounded-3xl"
            style={{ border: "1px solid var(--line)", background: "var(--ink-2)" }}
          >
            <video
              ref={video}
              className="block h-auto w-full"
              src={showreel.src}
              poster={showreel.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* clic per play/pausa */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Metti in pausa il video" : "Riproduci il video"}
              className="absolute inset-0 grid place-items-center"
            >
              <span
                className="grid h-16 w-16 place-items-center rounded-full transition-opacity duration-300"
                style={{
                  background: "rgba(10,10,11,.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(244,243,240,.25)",
                  opacity: playing ? 0 : 1,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--paper)" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>

            {/* audio */}
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? showreel.unmuteLabel : showreel.muteLabel}
              className="absolute right-3 top-3 flex items-center gap-2 rounded-full py-2 pl-3 pr-3.5 text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{
                background: muted ? "var(--flame)" : "rgba(10,10,11,.72)",
                color: muted ? "#fff" : "var(--paper-dim)",
                backdropFilter: "blur(8px)",
              }}
            >
              {muted ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="m17 9 4 6M21 9l-4 6" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M11 5 6 9H3v6h3l5 4V5Z" />
                  <path d="M16 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11" />
                </svg>
              )}
              {muted ? showreel.unmuteLabel : showreel.muteLabel}
            </button>
          </div>
        </Reveal>

        {/* testo */}
        <div>
          <Reveal>
            <p className="eyebrow">{showreel.eyebrow}</p>
            <h2 className="display mt-4" style={{ fontSize: "clamp(2.1rem, 5.2vw, 3.6rem)" }}>
              {showreel.title}
            </h2>
            <blockquote
              className="serif-it mt-7 border-l-2 pl-6 text-[clamp(1.2rem,2.6vw,1.7rem)] leading-snug"
              style={{ borderColor: "var(--flame)" }}
            >
              &ldquo;{showreel.quote}&rdquo;
            </blockquote>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {showreel.paths.map((p, i) => (
              <Reveal key={p.when} delay={i * 100} className="h-full">
                <article className="surface surface-hover h-full p-6">
                  <h3 className="display text-lg" style={{ color: "var(--flame)" }}>
                    {p.when}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--paper-dim)" }}>
                    {p.what}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
