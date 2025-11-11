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
        className="w-full bg-gradient-primary text-white hover:opacity-90 transition-all shadow-soft rounded-full"
      >
        <Heart className="w-5 h-5 mr-2" />
        Acessar Agora - R$ 29,90
      </Button>
    </div>
  );
};

export default MobileFixedCTA;
