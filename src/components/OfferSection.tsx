import { Button } from "./ui/button";
import { Gift, Check } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="offer-section" className="py-8 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 relative overflow-hidden border-2 border-border">
          <div className="absolute top-6 right-6 bg-primary text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
            Black Friday
          </div>
          
          <div className="text-center mb-8">
            <div className="bg-pink-light p-6 rounded-3xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                Acesso Vitalício ao Método 4 Fases
              </h2>
              <p className="text-base text-muted-foreground">
                + Todos os Bônus Exclusivos
              </p>
            </div>

            <div className="mb-8">
              <p className="text-muted-foreground mb-2">
                De <span className="line-through">R$ 297</span>{" "}
                <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full ml-2">90% OFF</span>
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-2 whitespace-nowrap">
                R$ 29,90
              </p>
              <p className="text-sm text-muted-foreground">
                Pagamento único • Acesso imediato
              </p>
            </div>

            <Button 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white text-base md:text-lg py-6 md:py-8 rounded-full shadow-soft mb-8"
            >
              <Gift className="w-5 h-5 md:w-6 md:h-6 mr-2 flex-shrink-0" />
              Garantir Agora
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">Acesso vitalício a todo o conteúdo</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">4 fases detalhadas do método</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">3 bônus exclusivos (R$ 141)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">Suporte completo</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
