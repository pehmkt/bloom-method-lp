import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const MobileFixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border shadow-soft p-4">
      <Button
        onClick={scrollToOffer}
        size="lg"
        className="w-full bg-gradient-primary text-white hover:opacity-90 transition-all shadow-soft rounded-full text-base py-5"
      >
        <Heart className="w-4 h-4 mr-2 flex-shrink-0" />
        <span className="whitespace-normal leading-tight">Acessar Agora</span>
      </Button>
    </div>
  );
};

export default MobileFixedCTA;
