import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krankengymnastik Escheburg | Jana Wurr",
  description:
    "Moderne Physiotherapie, persönliche Betreuung und klare Wege zu mehr Beweglichkeit in Escheburg. Termine nach Vereinbarung.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Krankengymnastik Escheburg | Jana Wurr",
    description:
      "Moderne Physiotherapie und manuelle Techniken in Escheburg. Persönliche Betreuung, klare Abläufe, Termine nach Vereinbarung.",
    url: "https://www.krankengymnastik-escheburg.de/",
    siteName: "Krankengymnastik Jana Wurr",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krankengymnastik Escheburg | Jana Wurr",
    description:
      "Physiotherapie, manuelle Techniken, Reha-Begleitung und ruhige Praxisräume in Escheburg.",
  },
  applicationName: "Krankengymnastik Jana Wurr",
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-slate-900">
          <div
            className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 transform-gpu blur-3xl"
            aria-hidden
          >
            <div className="mx-auto h-64 max-w-5xl bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-100 opacity-70" />
          </div>

          <Header />
          <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Physiotherapy",
                name: "Krankengymnastik Jana Wurr",
                url: "https://www.krankengymnastik-escheburg.de/",
                telephone: "+494152805599",
                email: "mail@praxis-escheburg.de",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rehmenkoppel 28",
                  postalCode: "21039",
                  addressLocality: "Escheburg",
                  addressCountry: "DE",
                },
              }),
            }}
          />
        </div>
      </body>
    </html>
  );
}
