import FixedTopBanner from "@/components/FixedTopBanner";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
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
    const handlePopState = () => {
      if (!exitIntentTriggered) {
        exitIntentTriggered = true;
        // Re-push state to keep the document alive, then redirect
        try {
          window.history.pushState({ page: "main" }, "", currentUrl);
        } catch {}
        window.location.replace("/oferta-especial");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <FixedTopBanner />
      <HeroSection />
      <VideoSection />
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
