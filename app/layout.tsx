import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rec.group"),
  title: "Sito Web da €700 per PMI e Freelancer | Metà Prezzo di Mercato — rec.group Catania",
  description: "Sito web professionale da €700 — metà del prezzo medio di mercato (€1.500–4.000). Gestionale su misura da €900 senza canone mensile. Automazioni AI che risparmiano 8–15h/settimana. Preventivo gratuito in 24h. Freelancer e PMI in tutta Italia.",
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
    "sito web da 700 euro PMI",
    "gestionale web senza canone mensile",
    "automazione AI freelancer Italia",
    "chatbot AI piccola impresa",
    "preventivo sito web gratuito 2026",
    "agenzia digitale Sicilia prezzi",
    "crescita online PMI 2026",
    "web agency economica Italia",
    "integrazioni app azienda automazione",
    "identità digitale professionista italiano",
    "quanto costa un sito web 2026",
    "quanto costa realizzare un sito web PMI",
    "realizzare sito web prezzi 2026 Italia",
    "sito web a basso costo qualità professionale",
    "web agency senza canone mensile",
    "costo gestionale personalizzato PMI",
    "agenzia web preventivo online gratuito",
    "sito web professionale economico Italia",
    "metà prezzo sito web professionale",
  ],
  authors: [{ name: "rec.group" }],
  creator: "rec.group",
  openGraph: {
    title: "Sito Web da €700 per PMI — Metà Prezzo di Mercato | rec.group Catania",
    description: "Il mercato italiano chiede €1.500–4.000 per un sito vetrina. Noi partiamo da €700, SEO incluso. Gestionale personalizzato da €900 una tantum — zero canoni. Automazioni AI che risparmiano 8–15h/settimana. Preventivo gratuito in 24h.",
    type: "website",
    locale: "it_IT",
    siteName: "rec.group",
    url: "https://rec.group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sito Web da €700 per PMI — Metà Prezzo di Mercato | rec.group Catania",
    description: "Sito vetrina da €700 (media mercato: €1.500–4.000). Gestionale su misura da €900 senza canone. Automazioni AI che risparmiano 8–15h/settimana. Preventivo gratuito in 24h.",
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
      "@type": "WebSite",
      "@id": "https://rec.group/#website",
      url: "https://rec.group",
      name: "rec.group — Agenzia Digitale per Freelancer e PMI",
      description:
        "Siti web professionali, gestionali su misura e automazioni digitali per freelancer e PMI italiane. Preventivo gratuito in 24h.",
      inLanguage: "it-IT",
      publisher: { "@id": "https://rec.group/#organization" },
      potentialAction: [
        {
          "@type": "ContactAction",
          target: "https://rec.group/#contatti",
          name: "Richiedi Preventivo Gratuito in 24h",
        },
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://rec.group/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://rec.group/#organization",
      name: "rec.group",
      url: "https://rec.group",
      logo: {
        "@type": "ImageObject",
        url: "https://rec.group/logo.png",
        width: 200,
        height: 60,
      },
      email: "recgroup.business@gmail.com",
      description:
        "Agenzia digitale a Catania specializzata in siti web professionali, gestionali personalizzati, social media marketing e automazione per freelancer, PMI, ristoranti e professionisti italiani.",
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
      slogan: "Soluzioni digitali su misura — zero canoni mensili",
      foundingDate: "2024",
      knowsLanguage: ["it"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "recgroup.business@gmail.com",
          availableLanguage: "Italian",
          areaServed: "IT",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "recgroup.business@gmail.com",
          availableLanguage: "Italian",
          areaServed: "IT",
        },
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
              "@id": "https://rec.group/#service-sito-web",
              name: "Realizzazione Siti Web Professionali per PMI",
              description:
                "Siti web su misura per freelancer, PMI e professionisti. Design moderno, ottimizzazione SEO e velocità garantita. Online in 1–2 settimane.",
              provider: { "@id": "https://rec.group/#organization" },
              areaServed: { "@type": "Country", name: "Italia" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "700",
              priceCurrency: "EUR",
              description: "Sito vetrina professionale con SEO incluso",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://rec.group/#service-gestionale",
              name: "Software Gestionale Personalizzato per Piccola Impresa",
              description:
                "Gestionali web-based su misura per piccole e medie imprese: prenotazioni, magazzino, clienti, fatturazione. ROI medio in 6–12 mesi.",
              provider: { "@id": "https://rec.group/#organization" },
              areaServed: { "@type": "Country", name: "Italia" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "900",
              priceCurrency: "EUR",
              description: "Gestionale personalizzato una tantum",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://rec.group/#service-social",
              name: "Social Media Management per PMI",
              description:
                "Gestione social media professionale con strategia di contenuti, post creativi e crescita organica per la tua azienda italiana.",
              provider: { "@id": "https://rec.group/#organization" },
              areaServed: { "@type": "Country", name: "Italia" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://rec.group/#service-automazione",
              name: "Automazione Digitale e CRM per Freelancer",
              description:
                "Automazioni per risparmiare 8–15 ore a settimana: CRM, email marketing, flussi di lavoro automatizzati e integrazioni tra app.",
              provider: { "@id": "https://rec.group/#organization" },
              areaServed: { "@type": "Country", name: "Italia" },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://rec.group/#service-ecommerce",
              name: "E-commerce Professionale per PMI",
              description:
                "Shop online ottimizzato SEO con catalogo prodotti, pagamenti, gestione ordini e Google Shopping. Mercato e-commerce italiano: 71 miliardi nel 2026.",
              provider: { "@id": "https://rec.group/#organization" },
              areaServed: { "@type": "Country", name: "Italia" },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "1500",
              priceCurrency: "EUR",
              description: "E-commerce completo con SEO e-commerce incluso",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": "https://rec.group/#service-menu",
              name: "Menu Digitale QR Code per Ristoranti",
              description:
                "Menu QR code interattivo e aggiornabile in tempo reale per ristoranti, bar e locali in Sicilia e Italia.",
              provider: { "@id": "https://rec.group/#organization" },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Sicilia" },
                { "@type": "Country", name: "Italia" },
              ],
            },
          },
        ],
      },
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://rec.group/#localbusiness",
      name: "rec.group — Agenzia Digitale Catania",
      image: "https://rec.group/logo.png",
      url: "https://rec.group",
      email: "recgroup.business@gmail.com",
      telephone: "",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Catania",
        addressRegion: "CT",
        postalCode: "95100",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.5079,
        longitude: 15.083,
      },
      description: "Agenzia digitale a Catania: siti web professionali da €700, gestionali su misura da €900 senza canone mensile, automazioni AI e social media per freelancer e PMI in tutta Italia. Preventivo gratuito in 24h.",
      slogan: "Soluzioni digitali su misura — zero canoni mensili",
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
        "e-commerce PMI Italia",
        "menu digitale QR code ristorante",
        "identità digitale professionista",
        "agenzia web Sicilia",
        "transizione 5.0 digitalizzazione PMI",
        "intelligenza artificiale piccola impresa",
        "voucher digitalizzazione MISE",
        "automazione workflow n8n make zapier PMI",
        "CRM personalizzato freelancer Italia",
        "fatturazione elettronica integrata gestionale",
        "lead generation automatica piccola impresa",
        "next.js TypeScript sito web veloce PMI",
        "Google Business Profile ottimizzazione locale",
        "preventivi automatici CRM no-code",
        "agenti AI autonomi automazione PMI 2026",
        "software gestionale senza canone mensile",
        "sito web one-page professionale freelancer",
        "web app personalizzata piccola impresa",
        "consulenza digitale PMI Catania Sicilia",
      ],
      makesOffer: [
        { "@id": "https://rec.group/#service-sito-web" },
        { "@id": "https://rec.group/#service-gestionale" },
        { "@id": "https://rec.group/#service-social" },
        { "@id": "https://rec.group/#service-automazione" },
        { "@id": "https://rec.group/#service-ecommerce" },
        { "@id": "https://rec.group/#service-menu" },
      ],
      parentOrganization: { "@id": "https://rec.group/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://rec.group/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto costa un sito web professionale per freelancer o PMI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un sito vetrina professionale parte da €700 — design, sviluppo e ottimizzazione SEO inclusi. Per un freelancer che vuole acquisire clienti online è l'investimento con il ROI più rapido: più visibilità, più credibilità, meno tempo perso in preventivi a freddo. Il preventivo è gratuito, dettagliato e senza sorprese.",
          },
        },
        {
          "@type": "Question",
          name: "Conviene un gestionale personalizzato rispetto ai software standard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I software generici come TeamSystem o SAP costano 50–150€/mese per utente — e paghi funzioni che non usi mai. Il nostro gestionale su misura parte da €900 una tantum, costruito esatto per il tuo flusso di lavoro. In media le PMI italiane recuperano l'investimento in 6–12 mesi grazie al tempo risparmiato.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo si risparmia davvero con l'automazione dei processi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le PMI italiane risparmiano mediamente 8–15 ore a settimana per dipendente dopo aver automatizzato fatturazione, solleciti pagamenti, gestione appuntamenti e report. Per un freelancer o un piccolo studio, significa recuperare 2–4 giorni interi al mese — tempo che puoi rivendere ai clienti.",
          },
        },
        {
          "@type": "Question",
          name: "Le PMI possono accedere agli incentivi fiscali Transizione 5.0?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì. Il piano Transizione 5.0 del MIMIT copre fino al 45% degli investimenti in beni digitali per le PMI italiane — siti web, gestionali e automazioni compresi. Un progetto da €2.000 può costarne effettivamente €1.100. Ti aiutiamo a capire cosa spetta alla tua impresa prima ancora di iniziare.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo ci vuole per avere un sito web operativo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un sito vetrina è online in 1–2 settimane. Un e-commerce o una piattaforma con area riservata richiede 3–6 settimane. Prima di iniziare ti diamo una data di consegna precisa — e la rispettiamo.",
          },
        },
        {
          "@type": "Question",
          name: "Il sito web include l'ottimizzazione SEO per Google?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì, sempre. Ogni sito parte già ottimizzato: struttura semantica, meta tag, Core Web Vitals, mobile-first e velocità di caricamento. Non è un extra a pagamento — è il minimo per comparire su Google e portare traffico organico nel tempo.",
          },
        },
        {
          "@type": "Question",
          name: "Conviene aprire un e-commerce nel 2026? Quali sono i costi reali?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Il mercato e-commerce italiano ha superato i 71 miliardi di euro nel 2026: la domanda c'è. Un e-commerce professionale con RecGroup parte da €1.500 — catalogo prodotti, pagamenti online, gestione ordini e SEO inclusi. Rientri dell'investimento tipici: 6–18 mesi per chi parte da zero.",
          },
        },
        {
          "@type": "Question",
          name: "Le PMI possono integrare l'intelligenza artificiale nella piccola impresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì, e nel 2026 è più accessibile di quanto pensi. Integriamo chatbot AI sul tuo sito (gestisce l'80% delle domande ricorrenti senza personale), automazioni basate su AI per generare preventivi e documenti in secondi, e dashboard intelligenti che analizzano i tuoi dati di vendita.",
          },
        },
        {
          "@type": "Question",
          name: "Esistono incentivi oltre a Transizione 5.0 per digitalizzare la mia impresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì. Oltre a Transizione 5.0 (fino al 45%), nel 2026 sono attivi il Voucher Digitalizzazione MISE — contributo a fondo perduto del 50% fino a €10.000 per PMI che investono in siti web, software e formazione digitale — e bandi regionali che variano da regione a regione.",
          },
        },
        {
          "@type": "Question",
          name: "È meglio affidarsi a un'agenzia web o a un freelancer per il mio sito?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un freelancer lavora da solo: una sola competenza, nessun backup se è indisponibile. Un'agenzia come RecGroup unisce sviluppo, design, SEO e copy su ogni progetto — referente unico, tempi certi. E da noi un sito vetrina parte da €700: spesso meno di quanto chiede un freelancer senior.",
          },
        },
        {
          "@type": "Question",
          name: "Come ottenere più recensioni su Google Maps per far crescere la mia attività locale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'81% dei consumatori italiani legge le recensioni Google prima di contattare un'attività locale — e Google Maps usa le recensioni come segnale di ranking diretto: più recensioni recenti e dettagliate hai, più alta è la probabilità di comparire nel 'local pack'. Cosa funziona nel 2026: chiedi la recensione subito dopo la consegna; invia un link diretto al profilo Google Business Profile via WhatsApp o email; invita il cliente a descrivere il problema risolto, non solo a dare stelle. Con le nostre automazioni WhatsApp Business, la richiesta viene inviata automaticamente 24 ore dopo ogni lavoro completato. Risultato tipico: +15–30 recensioni nei primi 90 giorni, con impatto misurabile sul posizionamento locale.",
          },
        },
        {
          "@type": "Question",
          name: "Google Ads o SEO: cosa conviene di più per una PMI italiana con budget limitato?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Ads porta lead in 24 ore ma smette non appena smetti di pagare — costo medio per click in Italia: €0,50–3,00, budget minimo efficace: €300–500/mese per una PMI locale. SEO porta traffico organico gratuito ma richiede 3–6 mesi per i primi risultati con un ROI a lungo termine superiore al 700%. Per una PMI con budget limitato: sito ottimizzato SEO come base permanente (incluso in ogni nostro progetto), Google Ads solo su campagne ad alto margine. Se hai bisogno di contatti entro 30 giorni parti con gli Ads; se vuoi costruire traffico qualificato nel tempo senza pagare per ogni click, investi nel SEO prima.",
          },
        },
        {
          "@type": "Question",
          name: "Lavorate solo a Catania o in tutta Italia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Siamo di Catania, ma lavoriamo con freelancer e PMI in tutta Italia — da Milano a Palermo. Tutto avviene online: chiamate, consegne, supporto. La distanza non cambia la qualità del risultato.",
          },
        },
        {
          "@type": "Question",
          name: "Come si inizia a lavorare con RecGroup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Con una chiamata gratuita di 30 minuti. Raccontaci il tuo progetto, le difficoltà attuali e gli obiettivi. Riceverai una proposta su misura entro 48 ore — senza impegno e senza costi anticipati.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://rec.group/#service-sito-web",
      name: "Realizzazione Siti Web Professionali per PMI e Freelancer",
      description:
        "Siti web su misura per freelancer, PMI e professionisti italiani. Design moderno mobile-first, ottimizzazione SEO, Core Web Vitals e velocità garantita. Online in 1–2 settimane da €700 tutto incluso.",
      provider: { "@id": "https://rec.group/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      serviceType: "Sviluppo Web",
      offers: {
        "@type": "Offer",
        price: "700",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "Sito vetrina professionale con SEO incluso",
      },
    },
    {
      "@type": "Service",
      "@id": "https://rec.group/#service-gestionale",
      name: "Software Gestionale Personalizzato per Piccola Impresa",
      description:
        "Gestionali web-based costruiti sul tuo flusso di lavoro: prenotazioni online, magazzino, clienti, fatturazione e report. Nessun canone mensile — pagamento una tantum da €900. ROI medio in 6–12 mesi.",
      provider: { "@id": "https://rec.group/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      serviceType: "Sviluppo Software",
      offers: {
        "@type": "Offer",
        price: "900",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "Gestionale personalizzato una tantum senza canone mensile",
      },
    },
    {
      "@type": "Service",
      "@id": "https://rec.group/#service-automazione",
      name: "Automazione Digitale e CRM per Freelancer e PMI Italiane",
      description:
        "Automazioni AI che risparmiano 8–15 ore a settimana: CRM, email marketing automatizzato, flussi di lavoro, integrazioni tra app e chatbot AI. Per freelancer e PMI italiane che vogliono crescere senza assumere.",
      provider: { "@id": "https://rec.group/#organization" },
      areaServed: { "@type": "Country", name: "Italia" },
      serviceType: "Automazione Digitale",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://rec.group/#software-gestionale",
      name: "Gestionale PMI su Misura — rec.group",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Gestionale Web PMI",
      operatingSystem: "Web, iOS, Android",
      description:
        "Software gestionale web-based personalizzato per piccola impresa: prenotazioni online, CRM clienti, magazzino, fatturazione e report automatici. Pagamento una tantum da €900 — zero canoni mensili. ROI medio in 6–12 mesi per PMI italiane.",
      featureList: [
        "Gestione prenotazioni online",
        "CRM clienti personalizzato",
        "Fatturazione e preventivi automatici",
        "Report e dashboard dati",
        "Integrazione pagamenti online",
        "Accesso multi-dispositivo",
        "Backup automatico dati",
        "Supporto incluso nel prezzo",
      ],
      softwareVersion: "1.0",
      inLanguage: "it-IT",
      provider: { "@id": "https://rec.group/#organization" },
      audience: {
        "@type": "Audience",
        audienceType: "Freelancer e PMI italiane con 1–20 dipendenti",
        geographicArea: { "@type": "Country", name: "Italia" },
      },
      offers: {
        "@type": "Offer",
        price: "900",
        priceCurrency: "EUR",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "Gestionale personalizzato una tantum — nessun canone mensile",
        seller: { "@id": "https://rec.group/#organization" },
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://rec.group/#webpage",
      url: "https://rec.group",
      name: "Sito Web da €700 per PMI e Freelancer | rec.group Catania",
      isPartOf: { "@id": "https://rec.group/#website" },
      about: { "@id": "https://rec.group/#organization" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://rec.group/og-image.png",
        width: 1200,
        height: 630,
      },
      datePublished: "2024-01-01",
      dateModified: "2026-06-06",
      description:
        "Siti web professionali da €700, gestionali su misura da €900 senza canone mensile e automazioni AI per freelancer e PMI italiane. Preventivo gratuito in 24h.",
      breadcrumb: { "@id": "https://rec.group/#breadcrumb" },
      inLanguage: "it-IT",
      potentialAction: {
        "@type": "ReadAction",
        target: ["https://rec.group"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rec.group/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rec.group",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servizi Digitali",
          item: "https://rec.group/#servizi",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Portfolio Progetti",
          item: "https://rec.group/#portfolio",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Preventivo Gratuito",
          item: "https://rec.group/#contatti",
        },
      ],
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
