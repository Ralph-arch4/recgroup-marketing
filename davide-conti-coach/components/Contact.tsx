"use client";

import { useMemo, useState } from "react";
import { contact, identity, whatsappLink } from "@/content/site";
import Reveal from "./Reveal";

const field =
  "w-full rounded-xl bg-transparent px-4 py-3.5 text-[15px] outline-none transition-colors placeholder:text-[rgba(244,243,240,0.3)]";
const fieldStyle = { border: "1px solid var(--line)", color: "var(--paper)" } as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(contact.goals[0]);
  const [level, setLevel] = useState(contact.levels[0]);
  const [note, setNote] = useState("");

  const message = useMemo(
    () =>
      [
        `Ciao ${identity.firstName}!`,
        name ? `Sono ${name}.` : "",
        `Obiettivo: ${goal}. Livello: ${level}.`,
        note ? `Qualcosa su di me: ${note}` : "",
        "Vorrei prenotare la call conoscitiva gratuita.",
      ]
        .filter(Boolean)
        .join(" "),
    [name, goal, level, note],
  );

  return (
    <section id="contatti" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,74,28,0.16) 0%, transparent 66%)" }}
      />

      <div className="shell relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="display mt-4" style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)" }}>
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "var(--paper-dim)" }}>
            {contact.intro}
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={`mailto:${identity.email}`}
              className="flex items-center gap-3 text-[15px] transition-colors hover:text-[var(--flame)]"
              style={{ color: "var(--paper-dim)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--flame)" strokeWidth="1.7" aria-hidden>
                <rect x="2.5" y="5" width="19" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {identity.email}
            </a>
            <a
              href={identity.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[15px] transition-colors hover:text-[var(--flame)]"
              style={{ color: "var(--paper-dim)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--flame)" strokeWidth="1.7" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="var(--flame)" stroke="none" />
              </svg>
              @{identity.instagram}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="surface flex flex-col gap-4 p-6 md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink(message), "_blank", "noopener");
            }}
          >
            <div>
              <label htmlFor="nome" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
                Come ti chiami
              </label>
              <input
                id="nome"
                className={field}
                style={fieldStyle}
                placeholder="Nome e cognome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>

            <div>
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
                Obiettivo principale
              </span>
              <div className="flex flex-wrap gap-2">
                {contact.goals.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    className="rounded-full px-3.5 py-2 text-[13px] font-medium transition-all"
                    style={
                      goal === g
                        ? { background: "var(--flame)", color: "#fff", border: "1px solid var(--flame)" }
                        : { border: "1px solid var(--line)", color: "var(--paper-dim)" }
                    }
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
                Livello attuale
              </span>
              <div className="flex flex-wrap gap-2">
                {contact.levels.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLevel(l)}
                    className="rounded-full px-3.5 py-2 text-[13px] font-medium transition-all"
                    style={
                      level === l
                        ? { background: "var(--flame)", color: "#fff", border: "1px solid var(--flame)" }
                        : { border: "1px solid var(--line)", color: "var(--paper-dim)" }
                    }
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="note" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--paper-mute)" }}>
                Raccontami in una riga
              </label>
              <textarea
                id="note"
                rows={3}
                className={`${field} resize-none`}
                style={fieldStyle}
                placeholder="Quanti giorni a settimana puoi allenarti, infortuni, tempistiche..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-flame mt-2 w-full">
              {contact.submit}
            </button>

            <p className="text-center text-[11px] leading-relaxed" style={{ color: "var(--paper-mute)" }}>
              {contact.privacy}
            </p>

            <p className="text-center text-[12px]" style={{ color: "var(--paper-mute)" }}>
              {contact.altLabel}{" "}
              <a href={`mailto:${identity.email}`} className="underline underline-offset-4" style={{ color: "var(--paper-dim)" }}>
                {identity.email}
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
