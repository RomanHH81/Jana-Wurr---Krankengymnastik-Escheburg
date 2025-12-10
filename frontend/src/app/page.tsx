import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PraxisSection from "@/components/PraxisSection";
import AblaufSection from "@/components/AblaufSection";
import FaqSection from "@/components/FaqSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 text-slate-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 transform-gpu blur-3xl"
        aria-hidden
      >
        <div className="mx-auto h-64 max-w-5xl bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-100 opacity-70" />
      </div>

      <Header />

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 md:pt-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PraxisSection />
        <AblaufSection />
        <FaqSection />
        <KontaktSection />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
