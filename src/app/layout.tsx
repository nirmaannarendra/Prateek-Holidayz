import type { Metadata } from "next";
import "./globals.css";
import { fraunces, manrope } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileActionBar } from "@/components/MobileActionBar";
import { companyInfo } from "@/lib/data";

const baseUrl = "https://prateekholidayz.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  title: {
    default: `${companyInfo.name} | Pan-India & International Travel Agency`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "Prateek Holidayz designs handcrafted pan-India, international and pilgrimage travel experiences from Ahmedabad — plus dedicated corporate and MICE travel management.",
  keywords: [
    "travel agency India",
    "pan India tour packages",
    "international holiday packages India",
    "pilgrimage yatra packages",
    "corporate travel management India",
  ],
  openGraph: {
    title: `${companyInfo.name} | Crafted Journeys Across India and Beyond`,
    description:
      "Handcrafted pan-India, international and pilgrimage packages, plus corporate travel management — based in Ahmedabad.",
    url: baseUrl,
    locale: "en_IN",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: companyInfo.name,
  description:
    "Handcrafted pan-India, international and pilgrimage travel packages, plus corporate and MICE travel management.",
  url: baseUrl,
  telephone: companyInfo.phone,
  email: companyInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Sthapatya Prabhat, C. G. Road, Navrangpura",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380009",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-19:30",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background pb-14 text-foreground antialiased md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent-dark px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 focus-visible:translate-y-0"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
