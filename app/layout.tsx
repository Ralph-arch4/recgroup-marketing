import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rec.group"),
  title: "Siti Web e Gestionali su Misura per PMI | rec.group — Agenzia Digitale Catania",
  description: "Sito web professionale + gestionale personalizzato per freelancer e PMI. Risparmia tempo, aumenta i clienti. Catania e tutta Italia. Preventivo gratuito in 24h.",
  keywords: [
    "agenzia digitale Catania",
    "sito web professionale freelancer",
    "gestionale personalizzato PMI",
    "software gestionale su misura piccola impresa",
    "realizzazione sito web PMI Italia",
    "sito web personal trainer prezzo",
    "digitalizzazione piccola impresa",
    "automazione gestione clienti",
    "menu digitale ristorante QR code",
    "agenzia web Sicilia preventivo gratuito",
    "soluzioni digitali freelancer Italia",
    "trasformazione digitale PMI",
    "gestionale prenotazioni online",
    "sito web vetrina professionale Catania",
    "rec group Catania",
  ],
  authors: [{ name: "rec.group" }],
  creator: "rec.group",
  openGraph: {
    title: "rec.group — Sito Web + Gestionale su Misura per PMI | Catania",
    description: "Freelancer e PMI: aumenta i clienti, risparmia ore ogni settimana. Siti web professionali, gestionali custom e automazioni digitali. Preventivo gratuito in 24h.",
    type: "website",
    locale: "it_IT",
    siteName: "rec.group",
    url: "https://rec.group",
  },
  twitter: {
    card: "summary_large_image",
    title: "rec.group — Sito Web + Gestionale su Misura | Catania",
    description: "Sito web + gestionale personalizzato per la tua attività. Risparmia tempo, aumenta clienti. Preventivo gratuito in 24h.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://rec.group",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rec.group/#organization",
      name: "rec.group",
      url: "https://rec.group",
      logo: "https://rec.group/logo.png",
      email: "recgroup.business@gmail.com",
      description:
        "Agenzia digitale a Catania specializzata in siti web professionali, gestionali personalizzati, social media marketing e automazione per freelancer, PMI, ristoranti e professionisti.",
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Catania",
          addressRegion: "Sicilia",
          addressCountry: "IT",
        },
      },
      areaServed: [
        { "@type": "City", name: "Catania" },
        { "@type": "AdministrativeArea", name: "Sicilia" },
        { "@type": "Country", name: "Italia" },
      ],
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi Digitali rec.group",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Realizzazione Siti Web Professionali",
              description:
                "Siti web su misura per freelancer, PMI e professionisti. Design moderno, ottimizzazione SEO e velocità garantita.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Gestionale Personalizzato",
              description:
                "Gestionali web-based su misura per piccole e medie imprese: prenotazioni, magazzino, clienti, fatturazione.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Management",
              description:
                "Gestione social media professionale con strategia di contenuti, post creativi e crescita organica per la tua azienda.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automazione Digitale",
              description:
                "Automazioni per risparmiare tempo: CRM, email marketing, flussi di lavoro automatizzati e integrazioni tra app.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Menu Digitale per Ristoranti",
              description:
                "Menu QR code interattivo e aggiornabile in tempo reale per ristoranti, bar e locali in Sicilia e Italia.",
            },
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://rec.group/#localbusiness",
      name: "rec.group — Agenzia Digitale Catania",
      image: "https://rec.group/logo.png",
      url: "https://rec.group",
      email: "recgroup.business@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Catania",
        addressRegion: "CT",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.5079,
        longitude: 15.083,
      },
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Bonifico, Carta di Credito, PayPal",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsAbout: [
        "realizzazione siti web PMI",
        "gestionale personalizzato piccola impresa",
        "social media marketing Catania",
        "automazione digitale freelancer",
        "sito web personal trainer",
        "app ristorante menu digitale",
        "identità digitale professionista",
        "agenzia web Sicilia",
      ],
      parentOrganization: { "@id": "https://rec.group/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
