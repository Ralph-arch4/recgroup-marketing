import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, Inter } from "next/font/google";
import { identity } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${identity.fullName} — ${identity.role}`;
const description =
  "Percorsi di allenamento e nutrizione costruiti su misura. Online coaching e sessioni 1:1 per ricomposizione corporea, ipertrofia e forza. Prima call conoscitiva gratuita.";

export const metadata: Metadata = {
  metadataBase: new URL(identity.siteUrl),
  title: {
    default: title,
    template: `%s | ${identity.fullName}`,
  },
  description,
  keywords: [
    "personal trainer",
    "online coaching",
    "ricomposizione corporea",
    "scheda allenamento personalizzata",
    "piano alimentare personalizzato",
    "ipertrofia",
    "dimagrimento",
    "preparatore atletico",
    identity.fullName,
  ],
  authors: [{ name: identity.fullName }],
  creator: identity.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: identity.siteUrl,
    siteName: identity.fullName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: identity.fullName,
  description,
  url: identity.siteUrl,
  image: `${identity.siteUrl}/og.png`,
  areaServed: identity.city,
  sameAs: [identity.instagramUrl],
  founder: {
    "@type": "Person",
    name: identity.fullName,
    jobTitle: identity.role,
  },
  serviceType: ["Personal Training", "Online Coaching", "Consulenza nutrizionale sportiva"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${archivo.variable} ${instrument.variable} ${inter.variable}`}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
