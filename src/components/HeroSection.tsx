import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Perca até <span className="text-primary">21kg em 40 dias</span> com
              o Método das 4 Fases
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Um protocolo inovador criado por uma médica americana que descobriu
              o segredo da <span className="font-semibold text-foreground">reprogramação metabólica progressiva.</span>
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-card space-y-4">
              <p className="text-base leading-relaxed text-foreground">
                Baseado em estudos de metabolismo cíclico, o Método das 4 Fases
                conduz seu corpo por um processo natural de transformação:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-light flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <span className="font-medium">Desintoxica</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-light flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <span className="font-medium">Ativa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-light flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <span className="font-medium">Reequilibra</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-light flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <span className="font-medium">Mantém</span>
                </div>
              </div>
              <p className="text-base text-muted-foreground pt-2">
                Fazendo você perder até <span className="font-semibold text-primary">21kg em 40 dias</span>,
                de forma leve, contínua e sem efeito sanfona.
              </p>
            </div>
            <Button 
              onClick={scrollToOffer}
              size="lg"
              className="w-full md:w-auto bg-gradient-primary text-white hover:opacity-90 transition-all shadow-soft text-lg py-6 px-8 rounded-full"
            >
              <Heart className="w-5 h-5 mr-2" />
              Acessar Agora
            </Button>
          </div>
          <div className="relative animate-slide-up">
            <img
              src={heroImage}
              alt="Mulher saudável e confiante"
              className="rounded-3xl shadow-soft w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
