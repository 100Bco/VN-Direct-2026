import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://vietnamdirect2026.com";
const TITLE = "Vietnam Direct 2026 — Build Better Series";
const DESCRIPTION =
  "By-invitation factory sourcing trip, May 30 – June 6, 2026. 12 hand-picked Vietnamese factories across Ho Chi Minh City and Hanoi. $3,250 per person (flights not included). Optional add-on Jun 6–7 sightseeing in Hanoi and Ha Long Bay with the Greater Austin Asian Chamber of Commerce. Cut 20–25% off your materials cost sheet by going direct — no middlemen. Hosted by 100B × LT Commercial Group.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Vietnam Direct 2026",
  },
  description: DESCRIPTION,
  applicationName: "Vietnam Direct 2026",
  authors: [
    { name: "Minh Mac", url: "https://www.linkedin.com/in/minhlaunch/" },
    {
      name: "Lezlie Tram",
      url: "https://www.linkedin.com/in/lezlie-tram-ceo-233b85b7/",
    },
  ],
  creator: "100B × LT Commercial Group",
  publisher: "100B",
  keywords: [
    "Vietnam factory tour",
    "direct sourcing Vietnam",
    "construction materials Vietnam",
    "D2C factory sourcing",
    "Vietnam manufacturers",
    "flooring cabinets windows Vietnam",
    "An Cuong Wood",
    "BM Windows",
    "Eurowindow",
    "Hoa Phat",
    "Tonmat",
    "Dai Dung steel",
    "Phu Tai",
    "AA Corporation",
    "Amy Grupo",
    "An Phat Holdings",
    "Tien Phong",
    "Tan Thanh Container",
    "build better series",
    "100B",
    "LT Commercial Group",
    "Ho Chi Minh City",
    "Hanoi",
    "Binh Duong",
    "Bac Ninh",
    "Hai Phong",
  ],
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Vietnam Direct 2026",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A08",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      name: "Vietnam Direct 2026 — Build Better Series",
      description: DESCRIPTION,
      startDate: "2026-05-30",
      endDate: "2026-06-06",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      url: SITE_URL,
      location: [
        {
          "@type": "Place",
          name: "Ho Chi Minh City",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ho Chi Minh City",
            addressCountry: "VN",
          },
        },
        {
          "@type": "Place",
          name: "Hanoi",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hanoi",
            addressCountry: "VN",
          },
        },
      ],
      organizer: [
        {
          "@type": "Organization",
          name: "100B",
          url: "https://100b.co",
          email: "global@100b.co",
        },
        {
          "@type": "Organization",
          name: "LT Commercial Group",
          email: "lezlie@ltcommercialgroup.com",
        },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/LimitedAvailability",
        url: `${SITE_URL}#apply`,
        category: "InvitationOnly",
        price: "3250",
        priceCurrency: "USD",
        description:
          "Includes ground transportation, meals, hotels (7 nights) and miscellaneous expenses. Flights not included.",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "General contractors, real estate developers, architects, procurement decision-makers",
      },
    },
    {
      "@type": "Organization",
      name: "100B",
      url: "https://100b.co",
      email: "global@100b.co",
      sameAs: ["https://www.linkedin.com/in/minhlaunch/"],
      founder: { "@type": "Person", name: "Minh Mac" },
    },
    {
      "@type": "Organization",
      name: "LT Commercial Group",
      email: "lezlie@ltcommercialgroup.com",
      sameAs: ["https://www.linkedin.com/in/lezlie-tram-ceo-233b85b7/"],
      founder: { "@type": "Person", name: "Lezlie Tram" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is Vietnam Direct 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "May 30 to June 6, 2026, across Ho Chi Minh City and Hanoi. An optional 1–2 day extension on June 6–7 offers sightseeing and a meetup with the Greater Austin Asian Chamber of Commerce in Hanoi and Ha Long Bay.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "$3,250 per person. Includes ground transportation, meals, hotels (7 nights) and miscellaneous expenses. Flights are not included.",
          },
        },
        {
          "@type": "Question",
          name: "Who is the trip for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Decision-makers only — general contractor principals, development partners, and architects who specify materials. By invitation only, with vetted attendees.",
          },
        },
        {
          "@type": "Question",
          name: "How much can participants save by going direct?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typically 20–25% off cost sheets on materials like flooring, tile, cabinets, windows, doors, panels, roofing, and steel — by eliminating domestic distributor markups.",
          },
        },
        {
          "@type": "Question",
          name: "How many factories will be visited?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "12 hand-picked and pre-vetted Vietnamese manufacturers across flooring, windows, cabinets, steel, panels, roofing, plumbing, and luxury FF&E.",
          },
        },
        {
          "@type": "Question",
          name: "How do I request an invitation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email global@100b.co with the subject 'Vietnam Direct 2026 — Invitation Request'. Applications are reviewed personally and acceptance is selective.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Instrument+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
