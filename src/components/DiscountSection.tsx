import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const DiscountSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-md md:max-w-3xl">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-card p-6 md:p-12 text-center space-y-4 md:space-y-6 animate-fade-in">
          <p className="text-sm md:text-lg leading-relaxed text-foreground px-2">
            Baseado em estudos de metabolismo cíclico, o Método das 4 Fases conduz
            seu corpo por um processo natural de <span className="font-semibold text-foreground">transformação:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="inline-block bg-pink-light px-4 py-2 md:px-6 md:py-3 rounded-full text-primary font-medium text-sm md:text-base">
              1. Desintoxica
            </span>
            <span className="inline-block bg-pink-light px-4 py-2 md:px-6 md:py-3 rounded-full text-primary font-medium text-sm md:text-base">
              2. Ativa
            </span>
            <span className="inline-block bg-pink-light px-4 py-2 md:px-6 md:py-3 rounded-full text-primary font-medium text-sm md:text-base">
              3. Reequilibra
            </span>
            <span className="inline-block bg-pink-light px-4 py-2 md:px-6 md:py-3 rounded-full text-primary font-medium text-sm md:text-base">
              4. Mantém
            </span>
          </div>
          <p className="text-sm md:text-lg leading-relaxed text-foreground px-2">
            Fazendo você perder até <span className="font-bold text-primary">21kg em 40 dias</span>, de forma leve, contínua e sem efeito sanfona.
          </p>
        </div>

        <div className="mt-8 md:mt-12 text-center space-y-4 md:space-y-6 px-2">
          <p className="text-base md:text-xl leading-relaxed text-foreground">
            Durante o mês da <span className="font-bold text-primary">Black Friday</span>, o acesso completo ao{" "}
            <span className="font-bold">Método das 4 Fases</span> está com desconto especial — de <span className="line-through text-muted-foreground">R$ 297</span> por apenas{" "}
            <span className="font-bold text-primary text-2xl md:text-3xl">R$ 29,90</span>.
          </p>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Acesse agora e <span className="font-semibold text-foreground">inicie as 4 fases do emagrecimento natural</span>{" "}
            que já transformaram milhares de mulheres.
          </p>
          <Button 
            onClick={scrollToOffer}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg py-5 md:py-6 px-8 rounded-full shadow-soft w-full md:w-auto"
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
            Acessar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
