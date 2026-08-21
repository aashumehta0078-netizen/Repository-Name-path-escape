import { BookingProvider } from "@/components/BookingContext";
import { QuickBookingModal } from "@/components/QuickBookingModal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
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

export default function App() {
  return (
    <BookingProvider
      renderModal={(state, close) => (
        <QuickBookingModal open={state.open} defaultService={state.service} onClose={close} />
      )}
    >
      <div className="min-h-screen bg-cream pb-16 md:pb-0">
        <Navbar />
        <main>
          <HeroSection />
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
