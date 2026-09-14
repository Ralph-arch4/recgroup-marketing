import { DRAFT } from "@/content/site";

/**
 * Avviso visibile finché i contenuti non sono quelli definitivi.
 * Sparisce impostando DRAFT = false in content/site.ts.
 */
export default function DraftNotice({ text }: { text: string }) {
  if (!DRAFT) return null;
  return (
    <p
      className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
      style={{
        border: "1px dashed rgba(244,243,240,0.24)",
        color: "var(--paper-mute)",
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--ember)" }} />
      {text}
    </p>
  );
}
