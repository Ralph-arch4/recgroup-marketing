"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "393518555676";
const whatsappMsg = encodeURIComponent(
  "Ciao! Vorrei sapere di più sui servizi di rec.group e prenotare una chiamata gratuita."
);

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed bottom-6 right-5 z-50 md:hidden flex items-center gap-2 accent-btn rounded-full font-bold text-sm"
      style={{
        padding: "13px 20px",
        transform: visible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.9)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease",
        boxShadow: "0 8px 36px rgba(201,168,76,0.45), 0 2px 10px rgba(0,0,0,0.6)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <MessageCircle size={17} />
      WhatsApp
    </a>
  );
}
