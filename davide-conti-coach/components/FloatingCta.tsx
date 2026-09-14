"use client";

import { useEffect, useState } from "react";
import { identity, whatsappLink } from "@/content/site";

export default function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(`Ciao ${identity.firstName}, vorrei informazioni sui tuoi percorsi.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Scrivimi su WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full py-3.5 pl-4 pr-5 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, var(--flame), var(--flame-lo))",
        color: "#fff",
        boxShadow: "0 12px 34px -10px rgba(255,74,28,0.75)",
        opacity: show ? 1 : 0,
        transform: show ? "none" : "translateY(20px) scale(0.94)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.09c-.25.69-1.44 1.32-1.98 1.37-.53.05-1.02.24-3.44-.72-2.9-1.14-4.74-4.1-4.88-4.29-.14-.19-1.16-1.55-1.16-2.95s.73-2.09 1-2.38c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.16.29.73 1.2 1.56 1.94 1.07.95 1.98 1.25 2.26 1.39.28.14.45.12.62-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.64-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.69-.18 1.38Z" />
      </svg>
      WhatsApp
    </a>
  );
}
