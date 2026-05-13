import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rec.group — Agenzia Digitale a Catania | Siti Web, Gestionali, Social Media",
  description: "rec.group è l'agenzia digitale di Catania specializzata in siti web, software gestionali, social media e automazione per freelancer, PT, ristoranti, parrucchieri e ville eventi. Preventivo gratuito.",
  keywords: [
    "agenzia digitale Catania",
    "siti web Catania",
    "gestionale software Catania",
    "social media manager Catania",
    "automazione digitale Sicilia",
    "menu digitale ristorante",
    "identità online Catania",
    "rec group Catania",
    "soluzioni digitali freelancer",
  ],
  authors: [{ name: "rec.group" }],
  creator: "rec.group",
  openGraph: {
    title: "rec.group — Agenzia Digitale a Catania",
    description: "Siti web, gestionali, social media e automazione su misura. Preventivo gratuito. Catania e oltre.",
    type: "website",
    locale: "it_IT",
    siteName: "rec.group",
  },
  twitter: {
    card: "summary_large_image",
    title: "rec.group — Agenzia Digitale Catania",
    description: "Siti web, gestionali, social media e automazione. Preventivo gratuito.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
