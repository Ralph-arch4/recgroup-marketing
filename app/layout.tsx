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
