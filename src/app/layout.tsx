import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Can Oto Mekanik & Elektrik Özel Servisi | Ankara Bilgisayarlı Arıza Tespiti",
    template: "%s | Can Oto Servis Ankara",
  },
  description:
    "Ankara'da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin (ECU) tamiri. Motor arıza lambası, marş ve elektronik sistem arızalarında hızlı ve güvenilir çözüm.",
  keywords: [
    "ankara oto elektrik",
    "bilgisayarlı arıza tespiti",
    "motor arıza lambası",
    "oto beyin tamiri",
    "araç çalışmıyor",
    "oto elektrik arıza tespiti ankara",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: "Can Oto Mekanik & Elektrik Özel Servisi | Ankara",
    description:
      "Ankara'da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin tamiri. Hızlı, net, güvenilir.",
    url: site.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Can Oto Mekanik & Elektrik Özel Servisi | Ankara",
    description:
      "Ankara'da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin tamiri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "ai-content-declaration": "human-authored",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  description:
    "Ankara'da bilgisayarlı araç arıza tespiti, oto elektrik ve oto beyin (ECU) tamiri yapan özel servis.",
  url: site.baseUrl,
  telephone: site.phoneHref,
  areaServed: { "@type": "City", name: "Ankara" },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.district}, ${site.address.city}`,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHours: site.hoursSchema,
  sameAs: [site.mapsUrl],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusiness} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--color-cta)] focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
