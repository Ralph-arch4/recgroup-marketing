import { ImageResponse } from "next/og";
import { identity } from "@/content/site";

export const alt = `${identity.fullName} — ${identity.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0A0A0B",
          color: "#F4F3F0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#FF4A1C",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            {identity.initials}
          </div>
          <span style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#FF4A1C" }}>
            {identity.role}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 104, fontWeight: 900, letterSpacing: -4, lineHeight: 1, textTransform: "uppercase" }}>
            {identity.firstName}
          </span>
          <span
            style={{
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 1,
              textTransform: "uppercase",
              color: "#FF4A1C",
            }}
          >
            {identity.lastName}
          </span>
        </div>

        <span style={{ fontSize: 30, color: "rgba(244,243,240,0.6)" }}>{identity.claim}</span>
      </div>
    ),
    size,
  );
}
