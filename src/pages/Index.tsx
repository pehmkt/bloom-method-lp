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
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add a fake history entry for back button detection
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      // Redirect to back redirect page
      navigate("/oferta-especial");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

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
