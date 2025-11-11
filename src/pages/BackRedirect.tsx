import { Button } from "@/components/ui/button";
import { Gift, Check, AlertCircle } from "lucide-react";
import { useEffect } from "react";

const BackRedirect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Headline */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Espere um instante... 👀
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Antes de sair, a <span className="font-bold">Drª Renata Ferri</span> pediu pra liberar uma condição especial pra você.
          </p>
        </div>

        {/* Subheadline */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-card p-6 md:p-8 mb-6 animate-fade-in">
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
            Ela acredita que toda mulher merece ter acesso ao <span className="font-bold">Método 4 Fases</span>, mesmo que o investimento inicial seja um obstáculo.
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Então, <span className="font-bold text-primary">somente nesta página</span>, você pode garantir o acesso completo ao programa por um valor simbólico:
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-card p-6 md:p-10 mb-6 relative overflow-hidden border-2 border-primary animate-scale-in">
          <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg rotate-12">
            50% OFF Extra
          </div>

          <div className="text-center mb-6">
            <p className="text-muted-foreground mb-2">
              De <span className="line-through">R$ 297</span> → por <span className="line-through">R$ 29,90</span>
            </p>
            <div className="mb-4">
              <p className="text-lg md:text-xl font-semibold text-primary mb-2">
                ✨ Agora com 50% de desconto adicional:
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary whitespace-nowrap">
                R$ 14,90
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Pagamento único • Acesso imediato
            </p>
          </div>

          {/* Bônus */}
          <div className="bg-pink-light rounded-2xl p-4 md:p-6 mb-6">
            <p className="text-center font-bold text-foreground mb-4">
              📦 Acesso vitalício + todos os bônus inclusos
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground">🥗 Alimentação Equilibrada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground">💧 Hidratação Inteligente</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground">🕯️ Rotina Noturna de Recuperação</span>
              </div>
            </div>
          </div>

          <Button 
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white text-base md:text-lg py-6 md:py-8 rounded-full shadow-soft mb-4"
          >
            <Gift className="w-5 h-5 md:w-6 md:h-6 mr-2 flex-shrink-0" />
            Quero meu acesso por R$ 14,90 agora
          </Button>

          {/* Guarantee */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            <span>7 dias de garantia total - 100% do seu dinheiro de volta</span>
          </div>
        </div>

        {/* Persuasive Text */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-card p-6 md:p-8 mb-6 text-center animate-fade-in">
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
            Essa é uma <span className="font-bold text-primary">condição única</span> e não ficará disponível novamente — é a <span className="font-bold">última chance</span> de entrar com 50% de desconto extra.
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
            O Método 4 Fases já transformou a rotina de <span className="font-bold">milhares de mulheres</span>, e talvez hoje seja o seu dia de começar a sua própria mudança.
          </p>
          <p className="text-base md:text-lg text-primary font-bold">
            💖 Você tem 7 dias de garantia total.
          </p>
          <p className="text-base md:text-lg text-foreground">
            Se não gostar, devolvemos cada centavo.
          </p>
        </div>

        {/* Urgency Footer */}
        <div className="bg-primary/10 border-2 border-primary rounded-2xl p-4 md:p-6 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-base md:text-lg font-bold text-foreground">
              ⚠️ Oferta válida somente enquanto esta página estiver aberta.
            </p>
          </div>
          <p className="text-base md:text-lg font-bold text-primary">
            Fechou, acabou.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BackRedirect;
