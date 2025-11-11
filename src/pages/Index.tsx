import FixedTopBanner from "@/components/FixedTopBanner";
import HeroSection from "@/components/HeroSection";
import DiscountSection from "@/components/DiscountSection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileFixedCTA from "@/components/MobileFixedCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    let exitIntentTriggered = false;

    // Push a new state to enable back button detection
    const currentUrl = window.location.href;
    window.history.pushState({ page: "main" }, "", currentUrl);

    // Handle back button (works on mobile and desktop)
    const handlePopState = (e: PopStateEvent) => {
      if (!exitIntentTriggered) {
        exitIntentTriggered = true;
        window.location.href = "/oferta-especial";
      }
    };

    // Exit intent for desktop - when mouse leaves from top of page
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top and moving upward
      if (e.clientY <= 0 && !exitIntentTriggered) {
        exitIntentTriggered = true;
        window.location.href = "/oferta-especial";
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <FixedTopBanner />
      <HeroSection />
      <DiscountSection />
      <ForWhoSection />
      <TestimonialsSection />
      <BonusSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <MobileFixedCTA />
    </main>
  );
};

export default Index;
