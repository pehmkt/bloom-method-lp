import { Button } from "./ui/button";
import { Heart, Check } from "lucide-react";

const OfferSection = () => {
  return (
    <section id="offer-section" className="py-16 px-4 bg-pink-light">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-gradient-primary text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
            BLACK FRIDAY
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Acesso Vitalício ao Método das 4 Fases
            </h2>
            <p className="text-lg text-muted-foreground">
              + Todos os Bônus Exclusivos
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">Acesso completo às 4 fases do método</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">Guia de Alimentação Estratégica (R$ 47)</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">Protocolo de Hidratação Metabólica (R$ 37)</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">Rotina Noturna para Emagrecimento (R$ 57)</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">Suporte especializado</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground">Atualizações gratuitas para sempre</span>
            </div>
          </div>

          <div className="bg-gradient-soft p-8 rounded-2xl mb-8">
            <p className="text-center text-muted-foreground mb-2">De</p>
            <p className="text-center text-3xl line-through text-muted-foreground mb-4">
              R$ 297
            </p>
            <p className="text-center text-sm text-muted-foreground mb-2">Por apenas</p>
            <p className="text-center text-6xl font-bold text-primary mb-2">
              R$ 29,90
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Pagamento único • Sem mensalidades
            </p>
          </div>

          <Button 
            size="lg"
            className="w-full bg-gradient-primary text-white hover:opacity-90 transition-all shadow-soft text-xl py-8 rounded-2xl"
          >
            <Heart className="w-6 h-6 mr-2" />
            Garantir Meu Acesso Agora
          </Button>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">🔒 Pagamento 100% seguro</p>
            <p className="text-sm text-muted-foreground">✅ Acesso imediato após a confirmação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
