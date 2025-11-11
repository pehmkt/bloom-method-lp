import { Heart, Sparkles, Crown } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: Heart,
      title: "Guia Completo de Alimentação das 4 Fases",
      value: "R$ 47",
      description: "Cardápios e receitas para cada fase",
    },
    {
      icon: Sparkles,
      title: "Protocolo de Hidratação Inteligente",
      value: "R$ 37",
      description: "Maximize a queima de gordura",
    },
    {
      icon: Crown,
      title: "Rotina Noturna para Acelerar o Metabolismo",
      value: "R$ 57",
      description: "Queime calorias enquanto dorme",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-light px-6 py-3 rounded-full mb-6">
            <p className="text-primary font-semibold uppercase text-sm">Bônus Exclusivos</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Você também recebe de presente:
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-card p-8 text-center border border-border"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-pink-light rounded-3xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {bonus.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {bonus.description}
                </p>
                <p className="text-primary font-bold text-2xl">{bonus.value}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center bg-pink-light border-2 border-primary p-8 rounded-3xl max-w-2xl mx-auto">
          <p className="text-lg font-bold text-foreground mb-2">
            TOTAL DE BÔNUS: <span className="text-primary text-3xl">R$ 141,00</span>
          </p>
          <p className="text-xl font-bold text-primary uppercase">
            VOCÊ RECEBE TUDO DE GRAÇA!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
