import { Button } from "./ui/button";
import { Heart } from "lucide-react";

const DiscountSection = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById("offer-section");
    offerSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 text-center space-y-6 animate-fade-in">
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            Baseado em estudos de metabolismo cíclico, o Método das 4 Fases conduz
            seu corpo por um processo natural de transformação:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-block bg-pink-light px-6 py-3 rounded-full text-primary font-medium">
              1. Desintoxica
            </span>
            <span className="inline-block bg-pink-light px-6 py-3 rounded-full text-primary font-medium">
              2. Ativa
            </span>
            <span className="inline-block bg-pink-light px-6 py-3 rounded-full text-primary font-medium">
              3. Reequilibra
            </span>
            <span className="inline-block bg-pink-light px-6 py-3 rounded-full text-primary font-medium">
              4. Mantém
            </span>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            Fazendo você perder até <span className="font-bold text-primary">21kg em 40 dias</span>, de forma leve, contínua e sem efeito sanfona.
          </p>
        </div>

        <div className="mt-12 text-center space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            Durante o mês da <span className="font-bold text-primary">Black Friday</span>, o acesso completo ao{" "}
            <span className="font-bold">Método das 4 Fases</span> está com desconto especial — de <span className="line-through">R$ 297</span> por apenas{" "}
            <span className="font-bold text-primary text-3xl">R$ 29,90</span>.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Acesse agora e <span className="font-semibold text-foreground">inicie as 4 fases do emagrecimento natural</span>{" "}
            que já transformaram milhares de mulheres.
          </p>
          <Button 
            onClick={scrollToOffer}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 rounded-full shadow-soft"
          >
            <Heart className="w-5 h-5 mr-2" />
            Acessar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
