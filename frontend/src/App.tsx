import { useEffect } from "react";
import Lenis from "lenis";
import { BookingProvider } from "@/components/BookingContext";
import { QuickBookingModal } from "@/components/QuickBookingModal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { BridalFeatureSection } from "@/components/BridalFeatureSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationSection } from "@/components/LocationSection";
import { AppointmentCTASection } from "@/components/AppointmentCTASection";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09 });
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -88 });
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <BookingProvider
      renderModal={(state, close) => (
        <QuickBookingModal open={state.open} defaultService={state.service} onClose={close} />
      )}
    >
      <div className="min-h-screen bg-cream pb-16 md:pb-0">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[80] opacity-[0.05]"
          style={{ backgroundImage: GRAIN }}
        />
        <Navbar />
        <main>
          <HeroSection />
          <Marquee />
          <AboutSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <BridalFeatureSection />
          <GallerySection />
          <ReviewsSection />
          <LocationSection />
          <AppointmentCTASection />
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </BookingProvider>
  );
}
