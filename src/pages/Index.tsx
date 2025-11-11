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

    // Handle back button
    const handlePopState = (e: PopStateEvent) => {
      if (!exitIntentTriggered) {
        exitIntentTriggered = true;
        e.preventDefault();
        window.location.href = "/oferta-especial";
      }
    };

    // Handle beforeunload (when user tries to close tab or navigate away)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!exitIntentTriggered) {
        exitIntentTriggered = true;
        e.preventDefault();
        // Redirect to special offer
        setTimeout(() => {
          window.location.href = "/oferta-especial";
        }, 0);
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
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
