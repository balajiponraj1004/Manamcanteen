
import "./../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manamcanteen.com"),
  title: {
    default: "Manam Canteen - Authentic South Indian Restaurant in Mississauga",
    template: "%s | Manam Canteen",
  },
  description: "Experience authentic South Indian cuisine at Manam Canteen in Mississauga. Fresh dosas, aromatic biryanis, traditional curries. Order online for pickup, delivery, or catering. +1 905-238-0707",
  keywords: [
    "South Indian restaurant Mississauga",
    "dosa Mississauga",
    "biryani Mississauga",
    "Tamil food Mississauga",
    "Indian catering Mississauga",
    "authentic South Indian food Ontario",
    "Manam Canteen",
    "South Indian takeaway Mississauga",
    "Indian restaurant Dixie Road",
  ],
  authors: [{ name: "Manam Canteen" }],
  creator: "Manam Canteen",
  publisher: "Manam Canteen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://manamcanteen.com",
    title: "Manam Canteen - Authentic South Indian Restaurant in Mississauga",
    description: "Craving authentic South Indian food? Order fresh dosas, biryanis, and curries from Manam Canteen in Mississauga.",
    siteName: "Manam Canteen",
    images: [
      {
        url: "/images/og-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Manam Canteen South Indian Restaurant Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manam Canteen - Authentic South Indian Food in Mississauga",
    description: "Fresh dosas, biryanis, and traditional South Indian cuisine. Order now!",
    images: ["/images/twitter-hero.jpg"],
    creator: "@manamcanteen",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://manamcanteen.com",
  },
  category: "restaurant",
  classification: "South Indian Restaurant",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Manam Canteen",
    description: "Authentic South Indian restaurant serving traditional dosas, biryanis, curries, and more in Mississauga, Ontario.",
    url: "https://manamcanteen.com",
    telephone: "+1-905-238-0707",
    email: "manamcanteen@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3415 Dixie Rd Unit 3B",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L4Y 2B1",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6369,
      longitude: -79.6158,
    },
    openingHours: [
      "Mo-Su 11:00-22:00",
    ],
    servesCuisine: ["South Indian", "Tamil", "Indian"],
    priceRange: "$$",
    image: "https://manamcanteen.com/images/restaurant-interior.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    menu: "https://manamcanteen.com/menu",
    acceptsReservations: true,
    hasDeliveryService: true,
    hasTakeout: true,
    paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
    currenciesAccepted: "CAD",
  };

  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://manamcanteen.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-[60vh] relative">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
